import { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Icons.module.scss";

const cx = classNames.bind(styles);

function Icon(
  {
    icon,
    size,
    className,
  }: {
    icon: string;
    size: number;
    className?: string;
  },
  ref: any
) {
  return (
    <i
      ref={ref}
      style={{
        width: size + "px",
        height: size + "px",
        fontSize: size + "px",
      }}
      className={cx("icon", icon, className)}
    ></i>
  );
}

export default forwardRef(Icon);
