import Tippy from "@tippyjs/react";
import { Placement } from "tippy.js";
import classNames from "classnames/bind";
import styles from "./TooltipTippy.module.scss";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function TooltipTippy({
  content,
  children,
  placement = "bottom",
  noDiv,
  noMG,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  noDiv?: boolean;
  noMG?: boolean;
}) {
  return noDiv ? (
    <Tippy
      appendTo={() => document.body}
      placement={placement}
      content={
        <div
          className={cx("tippy", {
            noMG: noMG,
          })}
        >
          {content}
        </div>
      }
    >
      {children as any}
    </Tippy>
  ) : (
    <Tippy placement={placement} content={content}>
      <div
        className={cx("tippy", {
          noMG: noMG,
        })}
      >
        {children}
      </div>
    </Tippy>
  );
}

export default TooltipTippy;
