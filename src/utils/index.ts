/**
 * a sleep function to use in async functions, uses setTimeout
 *
 * @param {number} duration - duration to sleep for
 */
export function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
