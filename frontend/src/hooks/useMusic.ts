import { useContext } from 'react'
import { MusicContext } from '~/components/store'

const useMusic = () => useContext(MusicContext)

export default useMusic
