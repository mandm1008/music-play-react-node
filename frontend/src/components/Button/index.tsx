import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to = "",
  href,
  size = 40,
  icon,
  image,
  className,
  primary,
  hoverPrimary,
  ...props
}: {
  to?: string;
  href?: string;
  size?: number;
  icon?: { Icon: (...props: any[]) => JSX.Element; size: number };
  image?: React.ImgHTMLAttributes<HTMLImageElement>;
  className?: string;
  primary?: boolean;
  hoverPrimary?: boolean;
  [key: string]: any;
}) {
  const Btn = to ? Link : href ? "a" : "button";
  const Icon = icon && icon.Icon;
  const sizeIcon = icon && icon.size;
  props = {
    href,
    style: {
      width: size + "px",
      height: size + "px",
    },
    ...props,
  };

  return (
    <Btn
      to={to}
      className={cx("wrapper", {
        [className as any]: className,
      })}
      {...props}
    >
      {Icon && (
        <Icon className={cx({ primary, hoverPrimary })} size={sizeIcon} />
      )}
      {image && <img {...image} alt={image.alt} />}
    </Btn>
  );
}

export default Button;
