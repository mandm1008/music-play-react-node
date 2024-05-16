import {
  LikeIcon,
  PlayPlusIcon,
  PlayPrevIcon,
  AddCircleIcon,
  CommentIcon,
  LinkIcon,
  ShareIcon
} from '~/components/Icons'
import styles from '../MusicItem.module.scss'
import { copyToClipboard } from '~/tools'
import useMusic from '~/hooks/useMusic'
import { addMusic, addTopMusic } from '~/components/store/actions'

const size = 18
export const DATA_MENU_MUSIC_ITEM = (data: any, ...components: ((key: number) => JSX.Element)[]) => {
  const [, setMusic] = useMusic()

  return [
    ...components.map((component) => ({ component })),
    {
      icon: { icon: LikeIcon, size },
      title: 'Thêm vào thư viện',
      className: styles.custom
    },
    {
      icon: { icon: PlayPlusIcon, size },
      title: 'Thêm vào danh sách phát',
      props: {
        onClick: () => {
          setMusic(addMusic(data))
        }
      }
    },
    {
      icon: { icon: PlayPrevIcon, size },
      title: 'Phát tiếp theo',
      props: {
        onClick: () => {
          setMusic(addTopMusic(data))
        }
      }
    },
    {
      icon: { icon: AddCircleIcon, size },
      title: 'Thêm vào playlist'
    },
    {
      icon: { icon: CommentIcon, size },
      title: 'Bình luận'
    },
    {
      icon: { icon: LinkIcon, size },
      title: 'Sao chép link',
      props: {
        onClick: () => {
          copyToClipboard(data.link)
        }
      }
    },
    {
      icon: { icon: ShareIcon, size },
      title: 'Chia sẻ',
      sub: true
    }
  ]
}
