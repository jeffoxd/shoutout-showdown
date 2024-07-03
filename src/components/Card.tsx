import Image from "next/image";

type Props = {
  className?: string;
  src?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Card({ src, onClick, className }: Props) {
  const figureClassName = src ? "" : "bg-[#4E66A8]";
  return (
    <button className={`card image-full ${className}`} onClick={onClick}>
      <figure>
        <div className={figureClassName}>
          {src && <Image src={src} alt="card" width={360} height={240} />}
        </div>
      </figure>
    </button>
  );
}
