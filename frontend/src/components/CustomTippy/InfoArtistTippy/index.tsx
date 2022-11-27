import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./InfoArtistTippy.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function InfoArtistTippy({
  children,
  data,
}: {
  children: JSX.Element;
  data: any;
}) {
  console.log(data);
  return (
    <Tippy
      appendTo={() => document.body}
      interactive
      placement="bottom-start"
      delay={[500, 0]}
      render={(attrs) => (
        <div className={cx("wrapper")} {...attrs}>
          {data ? (
            <>
              <div className={cx("info")}>
                <div className={cx("artist")}>
                  <img src={data.thumbnailM} alt={data.name} />

                  <div className={cx("name")}>
                    <h4>{data.name}</h4>

                    <p></p>
                  </div>
                </div>
              </div>

              <div className={cx("description")}>
                <p></p>
              </div>

              <div className={cx("latest")}>
                <h3>Mới nhất</h3>

                <div className={cx("content")}></div>
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
  );
}

export default InfoArtistTippy;
