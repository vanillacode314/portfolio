export function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export function getKeys<
  T extends Record<any, any> = any,
  Key extends keyof T = any
>(obj: T, keys: readonly Key[]): Pick<T, typeof keys[number]> {
  return Object.fromEntries(
    keys.map((key) => [key, obj[key]]).filter(([, val]) => Boolean(val))
  )
}

export function pullKeys<
  T extends Record<any, any> = any,
  Key extends keyof T = any
>(obj: T, keys: readonly Key[]): Pick<T, typeof keys[number]> {
  const o = Object.fromEntries(
    keys.map((key) => [key, obj[key]]).filter(([, val]) => Boolean(val))
  )
  keys.forEach((key) => {
    delete obj[key]
  })
  return o
}
