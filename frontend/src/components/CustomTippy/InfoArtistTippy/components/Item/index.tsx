import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Item.module.scss'
import { getListArtistSong } from '~/servers'
import { PlayNoIcon } from '~/components/Icons'
import images from '~/assets/images'
import useMusic from '~/hooks/useMusic'
import { setMusic } from '~/components/store/actions'

const cx = classNames.bind(styles)

function Item({ id }: { id: string }) {
  const [, dispatch] = useMusic()
  const [data, setData] = useState<any>()

  useEffect(() => {
    getListArtistSong(id, 1, 4)
      .then((res) => res.data.data)
      .then((res) => setData(res))
  }, [id])

  return data ? (
    data.items &&
      data.items.map((item: any) => (
        <div key={item.encodeId} className={cx('wrapper')}>
          <div className={cx('image')}>
            <img src={item.thumbnailM} alt={item.title} />

            <div className={cx('play')} onClick={() => dispatch(setMusic(item))}>
              <PlayNoIcon size={16} />
            </div>
          </div>

          <Link to={item.link} className={cx('title')}>
            <span>{item.title.substring(0, 10)}</span>
            <span>{item.title.substring(10)}</span>
          </Link>

          <p className={cx('year')}>{new Date(item.releaseDate).getFullYear()}</p>
        </div>
      ))
  ) : (
    <div className={cx('loading')}>
      <img src={images.loading} alt="Loading" />
    </div>
  )
}

export default Item
