import { init } from '~/components/store/reducer'

const key = 'music-player-setting'

export function get(): init | undefined {
  const str = localStorage.getItem(key)

  if (str !== null) {
    return JSON.parse(str)
  } else {
    return
  }
}

export function save(setting: init) {
  localStorage.setItem(key, JSON.stringify(setting))
}
