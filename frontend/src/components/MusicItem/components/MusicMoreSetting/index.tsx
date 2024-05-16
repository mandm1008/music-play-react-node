import { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../../MusicItem.module.scss'
import { MenuTippy, TooltipTippy } from '~/components/CustomTippy'
import Modal from '~/components/Modal'
import LyricModel from '../LyricModel'
import { DATA_MENU_MUSIC_ITEM } from '../constants'
import { MoreIcon, DownloadIcon, LyricIcon, DenialIcon } from '~/components/Icons'
import InfoMusic from '../InfoMusic'
import { getSong } from '~/servers'
import { download } from '~/tools'

const cx = classNames.bind(styles)

function MusicMoreSetting({ data, children, note }: { data: any; note?: string; children?: JSX.Element }) {
  const menuRef = useRef<any>(null)
  const [isOpenLyric, setIsOpenLyric] = useState<boolean>(false)

  const MusicInfoMini = (key: number) => <InfoMusic key={key} encodeId={data.encodeId} />

  const MusicToolMini = (key: number) => (
    <div key={key} className={cx('tool-mini')}>
      <div className={cx('tool-mini-item')} onClick={downloadMusic}>
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

  function closeModelLyric() {
    setIsOpenLyric(false)
  }

  function downloadMusic() {
    getSong(data.encodeId)
      .then((data) => data.data.data)
      .then((link) => {
        if (link) {
          download(link['128'], `${data.alias}.mp3`)
        }
      })
  }

  return (
    <>
      <MenuTippy ref={menuRef} placement="right" data={DATA_MENU_MUSIC_ITEM(data, MusicInfoMini, MusicToolMini) as any}>
        <TooltipTippy noDiv content={note || 'Khác'} placement="top">
          {children || (
            <div className={cx('more')}>
              <MoreIcon size={16} />
            </div>
          )}
        </TooltipTippy>
      </MenuTippy>

      <Modal isOpen={isOpenLyric} onClickOutside={closeModelLyric}>
        <LyricModel onRequestClose={closeModelLyric} encodeId={data.encodeId} hasLyric={data.hasLyric} />
      </Modal>
    </>
  )
}

export default MusicMoreSetting
