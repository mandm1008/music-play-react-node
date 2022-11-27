import {
  LikeIcon,
  PlayPlusIcon,
  PlayPrevIcon,
  AddCircleIcon,
  CommentIcon,
  LinkIcon,
  ShareIcon,
} from "~/components/Icons";
import styles from "../MusicItem.module.scss";
import { toast } from "~/tools";
import { DOMAIN } from "~/constants";

const size = 18;
export const DATA_MENU_MUSIC_ITEM = (
  data: any,
  ...components: ((key: number) => JSX.Element)[]
) => [
  ...components.map((component) => ({ component })),
  {
    icon: { icon: LikeIcon, size },
    title: "Thêm vào thư viện",
    className: styles.custom,
  },
  {
    icon: { icon: PlayPlusIcon, size },
    title: "Thêm vào danh sách phát",
  },
  {
    icon: { icon: PlayPrevIcon, size },
    title: "Phát tiếp theo",
  },
  {
    icon: { icon: AddCircleIcon, size },
    title: "Thêm vào playlist",
  },
  {
    icon: { icon: CommentIcon, size },
    title: "Bình luận",
  },
  {
    icon: { icon: LinkIcon, size },
    title: "Sao chép link",
    props: {
      onClick: () => {
        navigator.clipboard.writeText(DOMAIN + data.link).then(() => {
          toast.create("success", "Link đã được sao chép vào clipboard");
        });
      },
    },
  },
  {
    icon: { icon: ShareIcon, size },
    title: "Chia sẻ",
    sub: true,
  },
];
