export * as toast from './toast'

export function getK(num: number) {
  return num < 1000 ? num.toString() : Math.floor(num / 1000) + 'K'
}
