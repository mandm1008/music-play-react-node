import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { Placement } from "tippy.js";
import classNames from "classnames/bind";
import styles from "./InfoMusicTippy.module.scss";
import StringOfList from "./StringOfList";

const cx = classNames.bind(styles);

function InfoMusicTippy({
  children,
  placement,
  data,
}: {
  children: JSX.Element;
  placement?: Placement;
  data: any;
}) {
  return (
    <Tippy
      appendTo={() => document.body}
      interactive
      placement={placement || "right"}
      render={(attr) =>
        data && (
          <div className={cx("wrapper")} {...attr}>
            {data.artists && <h3>Nghệ sĩ</h3>}
            {data.artists && (
              <p>
                <StringOfList data={data.artists} />
              </p>
            )}
            {data.album && <h3>ALBUM</h3>}
            {data.album && (
              <p>
                <Link to={data.album.link}>{data.album.title}</Link>
              </p>
            )}
            {data.composers && <h3>Sáng tác</h3>}
            {data.composers && (
              <p>
                <StringOfList data={data.composers} />
              </p>
            )}
            {data.genres && <h3>Thể loại</h3>}
            {data.genres && (
              <p>
                <StringOfList data={data.genres} />
              </p>
            )}
          </div>
        )
      }
    >
      {children}
    </Tippy>
  );
}

export default InfoMusicTippy;
