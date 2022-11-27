type IconFun = (props: { size: number; className?: string }) => JSX.Element;

interface Icon {
  icon: IconFun;
  size?: number;
}
