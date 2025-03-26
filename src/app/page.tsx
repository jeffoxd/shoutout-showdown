"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { kollektif, zysolRound } from "./font";

export default function Home() {
  const router = useRouter();
  const loginAsGuestOnClick = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${process.env.SERVER_HOST}/create-guest`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // body: JSON.stringify({ keyword: 'menaiala' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    router.push("/dashboard");
  };

  return (
    <div>
      <header>
        <div className="navbar bg-base-100">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-6xl text-[#FB735F]">
              Shoutout Showdown!
            </a>
          </div>
          <div className="navbar-end">
            <Image
              src="/images/en_language_button.png"
              alt="en button"
              width={125}
              height={100}
            />
          </div>
        </div>
      </header>
      <main className="bg-[url('/images/homepage_bg.png')] bg-cover flex min-h-screen flex-col items-center">
        <Image
          src="/images/homepage_rocket.png"
          className="m-24"
          alt="homepage image"
          width={500}
          height={500}
        />
        <div className={`flex flex-col gap-4 pb-16 ${kollektif.className}`}>
          <button
            className="btn bg-[#FB735F] text-white border-none text-5xl w-big h-24 rounded-xl"
            onClick={loginAsGuestOnClick}
          >
            Log in as Guest
          </button>

          <button className="btn btn-outline text-white text-5xl w-bi h-24 rounded-xl border-4">
            Sign in
          </button>
        </div>

        <div
          className={`flex flex-col text-white gap-4 pb-24 text-3xl ${zysolRound.className}`}
        >
          <span>Customize your own quizzes!</span>
          <div className="flex flex-row justify-center items-center gap-2 text-xl">
            <a>Terms</a>
            <span>|</span>
            <a>Privacy</a>
            <span>|</span>
            <a>Cookie Notice</a>
          </div>
        </div>
      </main>
    </div>
  );
}
