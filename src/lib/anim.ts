// Global animation helpers
export const DURATION_SCALE = 1.75 // 75% slower (multiply original durations by this)

export function dur(seconds: number) {
  return seconds * DURATION_SCALE
}

// Trigger earlier in viewport so elements start appearing before they fully enter
export const VIEWPORT = { once: true, amount: 0.15 }
