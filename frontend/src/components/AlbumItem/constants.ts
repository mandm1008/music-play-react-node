import useMusic from '~/hooks/useMusic'
import { PlayPlusIcon, CommentIcon, DownloadIcon, LinkIcon, ShareIcon } from '../Icons'
import { addPlaylists } from '../store/actions'
import { copyToClipboard, downloadMusic } from '~/tools'

export const DATA_MORE_CONTROL = (data: any) => {
  const [, setMusic] = useMusic()

  async function downloadPlaylist() {
    const songs = (await addPlaylists(data.encodeId)).payload
    songs.forEach((song: any) => {
      downloadMusic(song.encodeId, song.alias)
    })
  }

  return [
    {
      icon: {
        icon: PlayPlusIcon,
        size: 16
      },
      title: 'Thêm vào danh sách phát',
      props: {
        onClick: async () => {
          setMusic(await addPlaylists(data.encodeId))
        }
      }
    },
    {
      icon: {
        icon: CommentIcon,
        size: 16
      },
      title: 'Bình luận'
    },
    {
      icon: {
        icon: DownloadIcon,
        size: 16
      },
      title: 'Tải xuống',
      props: {
        onClick: downloadPlaylist
      }
    },
    {
      icon: {
        icon: LinkIcon,
        size: 16
      },
      title: 'Sao chép link',
      props: {
        onClick: () => {
          copyToClipboard(data.link)
        }
      }
    },
    {
      icon: {
        icon: ShareIcon,
        size: 16
      },
      title: 'Chia sẻ'
    }
  ]
}
