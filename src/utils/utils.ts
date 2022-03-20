export function isHoverable() {
  return window.matchMedia("(hover: hover)").matches;
}

export function yieldTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
