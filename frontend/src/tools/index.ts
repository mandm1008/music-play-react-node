import axios from 'axios'

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

export function download(url: string, name: string) {
  axios({
    url: url,
    method: 'GET',
    responseType: 'blob'
  }).then((response) => {
    const href = URL.createObjectURL(response.data)

    const link = document.createElement('a')
    link.href = href
    link.setAttribute('download', `${name}`)
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  })
}
