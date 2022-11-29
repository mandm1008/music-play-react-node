import Tippy from '@tippyjs/react/headless'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './InfoArtistTippy.module.scss'
import images from '~/assets/images'
import { AddFriendIcon, PlayNoIcon } from '~/components/Icons'
import Item from './components/Item'
import { getK } from '~/tools'

const cx = classNames.bind(styles)

function InfoArtistTippy({ children, data }: { children: JSX.Element; data: any }) {
  console.log(data)
  return (
    <Tippy
      appendTo={() => document.body}
      interactive
      placement="bottom-start"
      delay={[500, 0]}
      render={(attrs) => (
        <div className={cx('wrapper')} {...attrs}>
          {data ? (
            <>
              <div className={cx('info')}>
                <div className={cx('artist')}>
                  <div className={cx('thumbnail')}>
                    <img src={data.thumbnailM} alt={data.name} />

                    <div className={cx('play')}>
                      <PlayNoIcon size={16} />
                    </div>
                  </div>

                  <div className={cx('name')}>
                    <h4>
                      <Link to={data.link}>{data.name}</Link>
                    </h4>

                    <p>{getK(data.follow) + ' quan tâm'}</p>
                  </div>
                </div>

                <button className={cx('sub')}>
                  <AddFriendIcon className={cx('icon')} size={16} />
                  Quan tâm
                </button>
              </div>

              {data.sortBiography && (
                <div className={cx('description')}>
                  <span>{data.sortBiography.substring(0, 52)}</span>
                  <span>{data.sortBiography.substring(52)}</span>

                  <Link className={cx('view-more')} to={data.link}>
                    Xem thêm
                  </Link>
                </div>
              )}

              <div className={cx('latest')}>
                <h3>Mới nhất</h3>

                <div className={cx('content')}>
                  <Item id={data.id} />
                </div>
              </div>
            </>
          ) : (
            <img src={images.loading} alt="Loading" />
          )}
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default InfoArtistTippy
