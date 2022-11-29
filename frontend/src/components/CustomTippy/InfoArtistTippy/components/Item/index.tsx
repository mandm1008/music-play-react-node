import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Item.module.scss'
import { getListArtistSong } from '~/servers'
import { PlayNoIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Item({ id }: { id: string }) {
  const [data, setData] = useState<any>()
  console.log(data)

  useEffect(() => {
    getListArtistSong(id, 1, 4)
      .then((res) => res.data.data)
      .then((res) => setData(res))
  }, [])

  return data
    ? data.items.map((item: any) => (
        <div key={item.encodeId} className={cx('wrapper')}>
          <div className={cx('image')}>
            <img src={item.thumbnailM} alt={item.title} />

            <div className={cx('play')}>
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
    : null
}

export default Item
