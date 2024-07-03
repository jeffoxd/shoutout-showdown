import Image from "next/image";

type Props = {
  className?: string;
  src?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  width: number;
  height: number;
};

export default function Card({
  src,
  onClick,
  className,
  width,
  height,
}: Props) {
  const figureClassName = src ? "" : "bg-[#4E66A8]";
  return (
    <button className={`card image-full ${className}`} onClick={onClick}>
      <figure>
        <div className={figureClassName}>
          {src && <Image src={src} alt="card" width={width} height={height} />}
        </div>
      </figure>
    </button>
  );
}
