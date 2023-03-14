import { createSignal, Component } from "solid-js";
import { WindowEventListener } from "@solid-primitives/event-listener";

export const Background: Component = () => {
  const [progress, setProgress] = createSignal<number>(0);

  return (
    <>
      <WindowEventListener
        onScroll={() => {
          const el = document.scrollingElement!;
          setProgress(el.scrollTop / (el.scrollHeight - el.clientHeight));
        }}
      />
      <div class="fixed -z-20 bg-gray-100 inset-0"></div>
      <div
        class="pointer-events-none fixed inset-0 -z-10 max-w-6xl mx-auto"
        style={{ "--progress": progress() * 100 + "%" }}
      >
        <div
          class="absolute rounded-lg w-60 h-60 hidden md:block rotate-[60deg] opacity-10 blur translate-y-[var(--progress)] bg-orange-600"
          style={{
            top: "20%",
            left: "0",
          }}
        />
        <div
          class="absolute rounded-lg w-60 h-60 rotate-[60deg] opacity-10 blur translate-y-[var(--progress)] bg-green-600"
          style={{
            top: "-200px",
            right: "0",
          }}
        />
        <div
          class="absolute rounded-lg w-60 h-60 rotate-[60deg] opacity-10 blur translate-y-[var(--progress)] bg-blue-600"
          style={{
            top: "50%",
            right: "0",
          }}
        />
      </div>
    </>
  );
};
