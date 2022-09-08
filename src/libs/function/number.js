export function financial(x) {
  if (x - Math.floor(x) === 0) {
    return x
  }
  return Number.parseFloat(x).toFixed(2)
}
