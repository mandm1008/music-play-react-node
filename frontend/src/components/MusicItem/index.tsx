import { useState, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './MusicItem.module.scss'
import ArtistItem from '../ArtistItem'
import { MoreIcon, PlayNoIcon, LikeIcon, ListenIcon, DownloadIcon, LyricIcon, DenialIcon } from '../Icons'
import { TooltipTippy, MenuTippy, InfoMusicTippy } from '../CustomTippy'
import Modal from '../Modal'
import { DATA_MENU_MUSIC_ITEM } from './constants'
import { getInfoSong, getLyric } from '~/servers'

const cx = classNames.bind(styles)

function MusicItem({ data }: { data: any }) {
  const [dataMusic, setDataMusic] = useState<any>()
  const [isOpenLyric, setIsOpenLyric] = useState<boolean>(false)
  const menuRef = useRef<any>()
  console.log(dataMusic)

  function getTime(time: number) {
    const date = new Date(+new Date(time) - +new Date(0))
    const d = date.getDate()

    if (d === 0) return date.getHours() + ' giờ trước'
    if (d === 1) return 'Hôm qua'
    return d + ' ngày trước'
  }

  useLayoutEffect(() => {
    getInfoSong(data.encodeId)
      .then((res) => res.data)
      .then((res) => {
        if (res.data.hasLyric) return res.data
        setDataMusic(res.data)
        return
      })
      .then((music) => {
        if (music) {
          getLyric(data.encodeId)
            .then((res) => res.data.data)
            .then((lyric) => {
              setDataMusic({ ...music, lyric })
            })
        }
      })
  }, [data])

  const MusicInfoMini = (key: number) => (
    <InfoMusicTippy data={dataMusic}>
      <div key={key} className={cx('ctn-mini')}>
        <img src={data.thumbnail} alt={data.title} />
        <div className={cx('content-mini')}>
          <h3>{data.title}</h3>
          <p>
            <span>
              <LikeIcon size={12} /> {dataMusic && getK(dataMusic.like)}
            </span>
            <span>
              <ListenIcon size={12} /> {dataMusic && getK(dataMusic.listen)}
            </span>
          </p>
        </div>
      </div>
    </InfoMusicTippy>
  )

  const MusicToolMini = (key: number) => (
    <div key={key} className={cx('tool-mini')}>
      <div className={cx('tool-mini-item')}>
        <DownloadIcon size={16} />
        Tải xuống
      </div>
      <div
        className={cx('tool-mini-item')}
        onClick={() => {
          setIsOpenLyric(true)
          menuRef.current &&
            menuRef.current._tippy &&
            typeof menuRef.current._tippy.hide === 'function' &&
            menuRef.current._tippy.hide()
        }}
      >
        <LyricIcon size={16} />
        Lời bài hát
      </div>
      <div className={cx('tool-mini-item')}>
        <DenialIcon size={16} />
        Chặn
      </div>
    </div>
  )

  function getK(num: number) {
    return num < 1000 ? num.toString() : Math.floor(num / 1000) + 'K'
  }

  function parseLyric() {
    if (dataMusic)
      return dataMusic.lyric && dataMusic.lyric.sentences ? (
        <>
          {dataMusic.lyric.sentences.map((line: any, i: number) => (
            <p key={i}>{line.words.reduce((prev: any, crr: any) => prev + crr.data + ' ', '')}</p>
          ))}
        </>
      ) : (
        'Lời bài hát chưa được cập nhật'
      )
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('image')}>
        <img src={data.thumbnail} alt={data.title} width={60} height={60} />
        <PlayNoIcon size={20} className={cx('play-icon')} />
      </div>

      <div className={cx('content')}>
        <h3>{data.title}</h3>
        <p>
          {data.artists.reduce(
            (prev: any, crr: any, i: number) =>
              i > 0 ? [...prev, ', ', <ArtistItem key={i} data={crr} />] : [...prev, <ArtistItem key={i} data={crr} />],
            []
          )}
        </p>
        <span>{getTime(data.releaseDate)}</span>
      </div>

      <MenuTippy ref={menuRef} placement="right" data={DATA_MENU_MUSIC_ITEM(data, MusicInfoMini, MusicToolMini) as any}>
        <TooltipTippy noDiv content={'Khác'} placement="top">
          <div className={cx('more')}>
            <MoreIcon size={16} />
          </div>
        </TooltipTippy>
      </MenuTippy>

      <Modal isOpen={isOpenLyric} onClickOutside={() => setIsOpenLyric(false)}>
        {parseLyric()}
      </Modal>
    </div>
  )
}

export default MusicItem
