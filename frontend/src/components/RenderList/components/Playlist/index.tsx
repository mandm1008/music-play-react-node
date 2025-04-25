import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import AlbumItem from "~/components/AlbumItem";

const cx = classNames.bind(styles);

function Playlist({ data }: { data: any }) {
  return (
    <div className={cx("wrapper")}>
      {data.title && <h2>{data.title}</h2>}
      <div className={cx("content")}>
        {data.items &&
          data.items
            .slice(0, 4)
            .map((item: any) => <AlbumItem key={item.encodeId} data={item} />)}
      </div>
    </div>
  );
}

export default Playlist;
