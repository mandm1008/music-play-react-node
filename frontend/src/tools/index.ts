export * as toast from './toast'
export * as saveSetting from './saveSetting'

export function getK(num: number) {
  return num < 1000 ? num.toString() : Math.floor(num / 1000) + 'K'
}

export function getRankColor(rank: number) {
  if (rank === 0) return '#4a90e2'
  if (rank === 1) return '#50e3c2'
  if (rank === 2) return '#e35050'
  return '#000'
}

export function randomMusic(length: number, remember: number[]) {
  if (remember.length >= length) return -1

  const random = Math.floor(Math.random() * length)

  if (remember.findIndex((number) => number === random) !== -1) {
    return randomMusic(length, remember)
  } else {
    return random
  }
}
