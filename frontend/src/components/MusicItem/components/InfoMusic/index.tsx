import { useEffect, useState, forwardRef } from 'react'
import classNames from 'classnames/bind'
import styles from './InfoMusic.module.scss'
import images from '~/assets/images'
import { LikeIcon, ListenIcon } from '~/components/Icons'
import { InfoMusicTippy } from '~/components/CustomTippy'
import { getInfoSong } from '~/servers'
import { getK } from '~/tools'

const cx = classNames.bind(styles)

function InfoMusic({ encodeId }: { encodeId: string }, ref: any) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    getInfoSong(encodeId)
      .then((res) => res.data.data)
      .then((res) => {
        setData(res)
      })
  }, [encodeId])

  return data ? (
    <InfoMusicTippy data={data}>
      <div ref={ref} className={cx('ctn')}>
        <img src={data.thumbnail} alt={data.title} />
        <div className={cx('content')}>
          <h3>{data.title}</h3>
          <p>
            <span>
              <LikeIcon size={12} /> {data && getK(data.like)}
            </span>
            <span>
              <ListenIcon size={12} /> {data && getK(data.listen)}
            </span>
          </p>
        </div>
      </div>
    </InfoMusicTippy>
  ) : (
    <div className={cx('loading')}>
      <img src={images.loading} alt="Loading..." />
    </div>
  )
}

export default forwardRef(InfoMusic)
