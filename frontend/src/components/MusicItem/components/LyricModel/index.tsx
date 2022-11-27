import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./LyricModel.module.scss";
import images from "~/assets/images";
import { getLyric } from "~/servers";

const cx = classNames.bind(styles);

function LyricModel({
  hasLyric = false,
  encodeId,
  onRequestClose,
}: {
  hasLyric?: boolean;
  encodeId: string;
  onRequestClose?: () => void;
}) {
  const [lyric, setLyric] = useState<any>();

  useEffect(() => {
    if (hasLyric) {
      !lyric &&
        getLyric(encodeId)
          .then((res) => res.data.data)
          .then((data) => {
            setLyric(data);
          });
    } else {
      setLyric({});
    }
  }, [encodeId, hasLyric]);

  function parseLyric() {
    return lyric.sentences ? (
      <>
        {lyric.sentences.map((line: any, i: number) => (
          <p key={i}>
            {line.words.reduce(
              (prev: any, crr: any) => prev + crr.data + " ",
              ""
            )}
          </p>
        ))}
      </>
    ) : (
      "Lời bài hát chưa được cập nhật"
    );
  }

  return (
    <div className={cx("wrapper")}>
      <h2>Lời bài hát</h2>

      <div className={cx("content")}>
        {hasLyric && !lyric && <img src={images.loading} />}
        {lyric && parseLyric()}
      </div>

      <div className={cx("control")}>
        <button className={cx("send")}>Đóng góp lời bài hát</button>
        <button className={cx("close")} onClick={onRequestClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}

export default LyricModel;
