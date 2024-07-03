"use client";
import Image from "next/image";

type Props = {
  className?: string;
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navbar({ className, currPage, setCurrPage }: Props) {
  const pages = ["discover", "quizzes", "leaderboard"];
  const pagesImages = [
    "/images/discover_button.png",
    "/images/quizzes_button.png",
    "/images/leaderboard_button.png",
  ];
  const pagesActiveImages = [
    "/images/discover_button_active.png",
    "/images/quizzes_button_active.png",
    "/images/leaderboard_button_active.png",
  ];
  return (
    <ul className={`drawer shadow-2xl shadow-blue-300 ${className}`}>
      <div className="drawer-content flex flex-col items-center justify-center">
        <ul className="flex-grow">
          {pages.map((page, i) => {
            if (i == currPage) {
              return (
                <li key={`navbar-${i}`}>
                  <button className="" onClick={() => setCurrPage(i)}>
                    <Image
                      className="bg-[#4E66A8]"
                      src={pagesActiveImages[i]}
                      alt="pages images"
                      width={125}
                      height={125}
                    />
                  </button>
                </li>
              );
            } else {
              return (
                <li key={`navbar-${i}`}>
                  <button onClick={() => setCurrPage(i)}>
                    <Image
                      src={pagesImages[i]}
                      alt="pages images"
                      width={125}
                      height={125}
                    />
                  </button>
                </li>
              );
            }
          })}
        </ul>
        <Image
          src="/images/help_button.png"
          alt="help button"
          className="flex-none"
          width={80}
          height={80}
        />
      </div>
    </ul>
  );
}
