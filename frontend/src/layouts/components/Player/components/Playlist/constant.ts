import type { DataMenuTippy } from '~/components/CustomTippy/MenuTippy'
import { AddCircleIcon, DownloadIcon, GoRightIcon, TrashIcon } from '~/components/Icons'

const iconSize = 16

const DATA_MENU: DataMenuTippy[] = [
  {
    icon: { icon: TrashIcon, size: iconSize },
    title: 'Xoá danh sách phát'
  },
  {
    icon: { icon: DownloadIcon, size: iconSize },
    title: 'Tải danh sách phát'
  },
  {
    icon: { icon: AddCircleIcon, size: iconSize },
    title: 'Thêm vào danh sách phát',
    play: GoRightIcon
  }
]

export { DATA_MENU }
