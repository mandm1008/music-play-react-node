import classNames from 'classnames/bind'
import styles from './AlbumItem.module.scss'
import { TooltipTippy, MenuTippy } from '../CustomTippy'
import { DATA_MORE_CONTROL } from './constants'
import { LikeIcon, PlayIcon, MoreIcon } from '../Icons'
import { Link } from 'react-router-dom'
import ArtistItem from '../ArtistItem'

const cx = classNames.bind(styles)

function AlbumItem({ data }: { data: any }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <Link to={data.link}>
          <img src={data.thumbnail} alt={data.title} />
        </Link>

        <div className={cx('control')}>
          <TooltipTippy noDiv content={'Thêm vào thư viện'} placement="top">
            <span>
              <LikeIcon size={20} className={cx('icon')} />
            </span>
          </TooltipTippy>

          <PlayIcon size={50} className={cx('icon', 'play-icon')} />

          <MenuTippy data={DATA_MORE_CONTROL} placement="bottom-start">
            <TooltipTippy noDiv content={'Khác'} placement={'top'}>
              <span>
                <MoreIcon size={20} className={cx('icon')} />
              </span>
            </TooltipTippy>
          </MenuTippy>
        </div>
      </div>

      <div className={cx('content')}>
        <h3 className={cx('title')}>
          <Link to={data.link}>{data.title}</Link>
        </h3>

        <p className={cx('description')}>
          {data.sortDescription && (
            <>
              <span>{data.sortDescription.substring(0, 30)}</span>
              <span>{data.sortDescription.substring(30)}</span>
            </>
          )}
          {!!data.artists &&
            data.artists.reduce(
              (prev: any, crr: any, i: number) =>
                i > 0
                  ? [...prev, ', ', <ArtistItem key={i} data={crr} />]
                  : [...prev, <ArtistItem key={i} data={crr} />],
              []
            )}
        </p>
      </div>
    </div>
  )
}

export default AlbumItem
