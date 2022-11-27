import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./MusicItem.module.scss";
import ArtistItem from "../ArtistItem";
import {
  MoreIcon,
  PlayNoIcon,
  DownloadIcon,
  LyricIcon,
  DenialIcon,
} from "../Icons";
import { TooltipTippy, MenuTippy } from "../CustomTippy";
import Modal from "../Modal";
import { DATA_MENU_MUSIC_ITEM } from "./components/constants";
import LyricModel from "./components/LyricModel";
import InfoMusic from "./components/InfoMusic";

const cx = classNames.bind(styles);

function MusicItem({ data }: { data: any }) {
  const [isOpenLyric, setIsOpenLyric] = useState<boolean>(false);
  const menuRef = useRef<any>();

  function getTime(time: number) {
    const date = new Date(+new Date(time) - +new Date(0));
    const d = date.getDate();

    if (d === 0) return date.getHours() + " giờ trước";
    if (d === 1) return "Hôm qua";
    return d + " ngày trước";
  }

  const MusicInfoMini = (key: number) => (
    <InfoMusic key={key} encodeId={data.encodeId} />
  );

  const MusicToolMini = (key: number) => (
    <div key={key} className={cx("tool-mini")}>
      <div className={cx("tool-mini-item")}>
        <DownloadIcon size={16} />
        Tải xuống
      </div>
      <div
        className={cx("tool-mini-item")}
        onClick={() => {
          setIsOpenLyric(true);
          menuRef.current &&
            menuRef.current._tippy &&
            typeof menuRef.current._tippy.hide === "function" &&
            menuRef.current._tippy.hide();
        }}
      >
        <LyricIcon size={16} />
        Lời bài hát
      </div>
      <div className={cx("tool-mini-item")}>
        <DenialIcon size={16} />
        Chặn
      </div>
    </div>
  );

  function closeModelLyric() {
    setIsOpenLyric(false);
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img src={data.thumbnail} alt={data.title} width={60} height={60} />
        <PlayNoIcon size={20} className={cx("play-icon")} />
      </div>

      <div className={cx("content")}>
        <h3>{data.title}</h3>
        <p>
          {data.artists.reduce(
            (prev: any, crr: any, i: number) =>
              i > 0
                ? [...prev, ", ", <ArtistItem key={i} data={crr} />]
                : [...prev, <ArtistItem key={i} data={crr} />],
            []
          )}
        </p>
        <span>{getTime(data.releaseDate)}</span>
      </div>

      <MenuTippy
        ref={menuRef}
        placement="right"
        data={DATA_MENU_MUSIC_ITEM(data, MusicInfoMini, MusicToolMini) as any}
      >
        <TooltipTippy noDiv content={"Khác"} placement="top">
          <div className={cx("more")}>
            <MoreIcon size={16} />
          </div>
        </TooltipTippy>
      </MenuTippy>

      <Modal isOpen={isOpenLyric} onClickOutside={closeModelLyric}>
        <LyricModel
          onRequestClose={closeModelLyric}
          encodeId={data.encodeId}
          hasLyric={data.hasLyric}
        />
      </Modal>
    </div>
  );
}

export default MusicItem;
