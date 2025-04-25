// import { useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import Button from '~/components/Button'
import { BackIcon, ForwardIcon, SettingIcon, UploadIcon, VipIcon } from '~/components/Icons'
import images from '~/assets/images'
import { MenuTippy, TooltipTippy } from '~/components/CustomTippy'
import { DataMenu, DataSettings } from './components/constant'
import Search from './components/Search'
// import useMusic from '~/hooks/useMusic'

const cx = classNames.bind(styles)

function Header() {
  // const [state, dispatch] = useMusic()

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/search?keyword=' + encodeURIComponent('karik'))
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       if (res.msg === 'Success') return res.data.playlists[0]
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       console.log(dispatch)
  //     })
  // }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-ctn')}>
        <BackIcon size={24} />
        <ForwardIcon className={cx('icon')} size={24} />
        <Search />
      </div>
      <div className={cx('action')}>
        <TooltipTippy content="Chủ đề">
          <Button
            image={{
              src: images.theme,
              alt: 'Theme'
            }}
          />
        </TooltipTippy>
        <TooltipTippy content="Nâng cấp VIP">
          <Button to="/vip" icon={{ Icon: VipIcon, size: 20 }} />
        </TooltipTippy>
        <TooltipTippy content="Tải lên">
          <Button icon={{ Icon: UploadIcon, size: 20 }} />
        </TooltipTippy>
        <MenuTippy data={DataSettings as any}>
          <TooltipTippy content="Cài đặt">
            <Button icon={{ Icon: SettingIcon, size: 20 }} />
          </TooltipTippy>
        </MenuTippy>
        <MenuTippy data={DataMenu as any}>
          <Button
            image={{
              src: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
              alt: 'Avatar',
              width: 40,
              height: 40
            }}
          />
        </MenuTippy>
      </div>
    </div>
  )
}

export default Header
