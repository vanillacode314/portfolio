import { createWS } from '@solid-primitives/websocket'
import { For, Show, batch, createMemo, createSignal, type Component } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { isServer } from 'solid-js/web'
import Spinner from './Spinner'
import { toast } from './toast'

const CROSS = '✕'
const CIRCLE = '○'

const TicTacToe: Component = () => {
	const [gameId, setGameId] = createSignal<string>('')
	const [gameState, setGameState] = createStore<number[][]>([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	])
	const [sign, setSign] = createSignal<typeof CROSS | typeof CIRCLE>(CROSS)
	const [turn, setTurn] = createSignal<boolean>(false)
	const [whoWon, setWhoWon] = createSignal<0 | 1 | -1 | null>(null)

	const opponentSign = createMemo(() => (sign() === '✕' ? '○' : '✕'))
	const started = createMemo(() => gameId() !== '')

	const ws = createWS(import.meta.env.PUBLIC_SERVER_URL)
	ws.onmessage = (message) => {
		const data = JSON.parse(message.data)
		switch (data.type) {
			case 'NEW_GAME':
				setGameId(data.gameId)
				try {
					navigator.clipboard.writeText(data.gameId)
					toast('Copy Success', 'GameID copied to clipboard', { type: 'success' })
				} catch {
					toast('Copy Failed', 'Failed to copy to clipboard', { type: 'error' })
				}
				break
			case 'JOINED':
				setSign(data.sign)
				break
			case 'MOVE':
				const [x, y] = data.position[0]
				batch(() => {
					setGameState(x, y, -1)
					setTurn(true)
				})
				break
			case 'GAME_OVER':
				batch(() => {
					setWhoWon(data.who)
					setTurn(false)
				})
				break
			case 'RESTART':
				batch(() => {
					setGameState(produce((rows) => rows.forEach((row) => row.fill(0))))
					setTurn(sign() === CROSS)
					setWhoWon(null)
				})
				break
		}
	}

	function restart() {
		ws.send(JSON.stringify({ type: 'RESTART' }))
	}

	function host() {
		ws.send(JSON.stringify({ type: 'HOST' }))
		setTurn(true)
	}

	function move(x: number, y: number) {
		if (!started() || !turn()) return
		setTurn(false)
		setGameState(x, y, 1)
		ws.send(
			JSON.stringify({
				type: 'MOVE',
				position: [
					[x, y],
					[-1, -1]
				]
			})
		)
	}

	function join() {
		ws.send(JSON.stringify({ type: 'JOIN', gameId: gameId() }))
		setTurn(false)
	}

	return (
		<main class="grid grid-rows-[auto_1fr] h-screen">
			<div class="flex gap-3 px-10 py-5 flex-wrap">
				<input
					placeholder="game id"
					value={gameId()}
					onChange={(e) => setGameId(e.target.value)}
					class="px-5 py-3 rounded grow border-2 border-gray-300 rounded-lg"
				/>
				<div class="flex gap-3 flex-wrap grow max-w-xs mx-auto">
					<button
						class="uppercase tracking-wide font-sm font-bold bg-blue-700 px-5 py-3 rounded-lg text-white grow"
						onClick={join}
					>
						JOIN
					</button>
					<button
						class="uppercase tracking-wide font-sm font-bold px-5 py-3 rounded-lg grow"
						onClick={host}
					>
						HOST
					</button>
				</div>
			</div>
			<div class="grid place-content-center w-full gap-5">
				{started() ? (
					<>
						<div class="grid grid-cols-3 grid-rows-3 gap-2 bg-black justify-self-center border-[0.5rem] border-black">
							<For each={gameState}>
								{(row, x) => (
									<For each={row}>
										{(state, y) => (
											<button
												class="aspect-square grid place-content-center bg-white w-24 max-w-48 text-6xl font-black font-mono"
												classList={{
													'cursor-not-allowed': !turn() || !started()
												}}
												onClick={() => move(x(), y())}
											>
												{state === 0 ? ' ' : state === 1 ? sign() : opponentSign()}
											</button>
										)}
									</For>
								)}
							</For>
						</div>
						<p class="font-bold text-center text-xl animate-pulse">
							{!turn() ? 'Waiting for opponent' : <>&nbsp</>}
						</p>
					</>
				) : (
					<p class="font-bold text-center text-4xl animate-pulse">Join a game or host one</p>
				)}
			</div>
			<Show when={whoWon() !== null}>
				<div class="fixed p-10 grid place-content-center inset-0 bg-black/10 backdrop-blur-sm">
					<div class="p-5 rounded-xl bg-white shadow flex flex-col gap-5">
						<div>
							{whoWon() === 0 ? 'Draw' : whoWon() === 1 ? sign() + ' Won' : opponentSign() + ' Won'}
						</div>
						<button
							class="uppercase tracking-wide font-sm font-bold bg-blue-700 px-5 py-3 rounded-lg text-white grow"
							onClick={restart}
						>
							RESTART
						</button>
					</div>
				</div>
			</Show>
		</main>
	)
}

export default function Home() {
	return (
		<Show
			when={!isServer}
			fallback={
				<div class="w-full h-screen grid place-content-center text-4xl font-bold">
					<Spinner />
				</div>
			}
		>
			<TicTacToe />
		</Show>
	)
}
