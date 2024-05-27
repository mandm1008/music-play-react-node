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
  rank,
  active,
  width,
  playlist,
  primary
}: {
  data: any
  chart?: { rank: number; color: string; percent: number }
  rank?: number
  active?: boolean
  width?: string
  playlist?: boolean
  primary?: boolean
}) {
  const [music, dispatch] = useMusic()
  let imgSize = 60
  let iconSize = 20
  imgSize = rank ? 120 : imgSize
  imgSize = playlist ? 30 : imgSize
  iconSize = playlist ? 12 : iconSize

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
    <div className={cx('wrapper', { chart, active, rank, playlist, primary })} style={{ width }}>
      {chart && (
        <div className={cx('rank')} style={{ ['--cl' as any]: chart.color }}>
          {chart.rank + 1}
        </div>
      )}

      <div
        className={cx('image')}
        onClick={data.isWorldWide ? playMusic : undefined}
        style={{ ['--img-size' as string]: `${imgSize}px` }}
      >
        <img src={data.thumbnail} alt={data.title} width={imgSize} height={imgSize} />
        {music.play && music.items[music.index].encodeId === data.encodeId ? (
          <img
            width={iconSize}
            height={iconSize}
            className={cx('playing-icon')}
            src={images.playing}
            alt="Playing..."
          />
        ) : (
          <PlayNoIcon size={iconSize} className={cx('play-icon')} />
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

        {!chart && !rank && !playlist && <span>{getTime(data.releaseDate)}</span>}
        {rank && (
          <div className={cx('rank_index')}>
            <span>#{rank}</span>
            <span>{getTime(data.releaseDate)}</span>
          </div>
        )}
      </div>

      {!chart && !rank && <MusicMoreSetting data={data} size={playlist ? 12 : undefined}></MusicMoreSetting>}

      {chart && <div className={cx('percent')}>{chart.percent + '%'}</div>}
    </div>
  )
}

export default MusicItem
