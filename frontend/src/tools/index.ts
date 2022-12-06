export * as toast from './toast'

export function getK(num: number) {
  return num < 1000 ? num.toString() : Math.floor(num / 1000) + 'K'
}

export function getRankColor(rank: number) {
  if (rank === 0) return '#4a90e2'
  if (rank === 1) return '#50e3c2'
  if (rank === 2) return '#e35050'
  return '#000'
}
