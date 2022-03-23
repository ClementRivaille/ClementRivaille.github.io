export function isHoverable() {
  return window.matchMedia("(hover: hover)").matches;
}

export function yieldTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function isMedium() {
  return window.matchMedia("(min-width: 768px)").matches;
}
