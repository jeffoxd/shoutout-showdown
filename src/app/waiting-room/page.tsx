"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import { kollektifBold } from "../font";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quiz = searchParams.get("quiz");
  console.log(quiz);
  return (
    <div className="bg-[url('/images/waiting_room_bg.png')] bg-cover min-h-screen p-24">
      <span className="text-7xl text-white pl-8">Waiting Room...</span>
      <div className="grid grid-cols-2 justify-center items-center p-8 pt-12 gap-x-8">
        <Image
          src="/images/waiting_room_lobby.png"
          alt="waiting room placeholder"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-4">
          <button
            className={`btn w-big text-5xl h-24 bg-[#F8B02D] hover:bg-[#F8B02D] text-white border-none ${kollektifBold.className}`}
          >
            Kick All
          </button>
          <button
            className={`btn w-big text-5xl h-24 bg-[#C6CF45] hover:bg-[#C6CF45] text-white border-none ${kollektifBold.className}`}
            onClick={() => router.push(`/quiz?type=${quiz}`)}
          >
            Start Quiz
          </button>
          <button
            className={`btn w-big text-5xl h-24 bg-[#FB735F] hover:bg-[#FB735F] text-white border-none ${kollektifBold.className}`}
            onClick={() => router.push(`/dashboard`)}
          >
            End Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
