import classNames from 'classnames/bind'
import styles from './MusicItem.module.scss'
import ArtistItem from '../ArtistItem'
import { PlayNoIcon } from '../Icons'
import useMusic from '~/hooks/useMusic'
import { setMusic } from '../store/actions'
import images from '~/assets/images'
import MusicMoreSetting from './components/MusicMoreSetting'

const cx = classNames.bind(styles)

function MusicItem({
  data,
  chart,
  active
}: {
  data: any
  chart?: { rank: number; color: string; percent: number }
  active?: boolean
}) {
  const [music, dispatch] = useMusic()

  function getTime(time: number) {
    const date = new Date(+new Date(time) - +new Date(0))
    const d = date.getDate()

    if (d === 0) return date.getHours() + ' giờ trước'
    if (d === 1) return 'Hôm qua'
    return d + ' ngày trước'
  }

  function playMusic() {
    dispatch(setMusic(data))
  }

  return (
    <div className={cx('wrapper', { chart, active })}>
      {chart && (
        <div className={cx('rank')} style={{ ['--cl' as any]: chart.color }}>
          {chart.rank + 1}
        </div>
      )}

      <div className={cx('image')} onClick={data.isWorldWide ? playMusic : undefined}>
        <img src={data.thumbnail} alt={data.title} width={60} height={60} />
        {music.play && music.items[music.index].encodeId === data.encodeId ? (
          <img width={20} height={20} className={cx('playing-icon')} src={images.playing} alt="Playing..." />
        ) : (
          <PlayNoIcon size={20} className={cx('play-icon')} />
        )}
      </div>

      <div className={cx('content', { disable: !data.isWorldWide })}>
        <h3>
          <span>{data.title}</span>
          {!data.isWorldWide && (
            <i style={{ paddingLeft: '4px' }}>
              <img src={images.premium} />
            </i>
          )}
        </h3>

        <p>
          {data.artists.reduce(
            (prev: any, crr: any, i: number) =>
              i > 0 ? [...prev, ', ', <ArtistItem key={i} data={crr} />] : [...prev, <ArtistItem key={i} data={crr} />],
            []
          )}
        </p>

        {!chart && <span>{getTime(data.releaseDate)}</span>}
      </div>

      {!chart && <MusicMoreSetting data={data}></MusicMoreSetting>}

      {chart && <div className={cx('percent')}>{chart.percent + '%'}</div>}
    </div>
  )
}

export default MusicItem
