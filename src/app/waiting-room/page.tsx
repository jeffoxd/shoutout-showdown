"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Card from "@/components/Card";

import { kollektifBold } from "../font";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quiz = searchParams.get("quiz");
  console.log(quiz);
  return (
    <div className="bg-[url('/images/waiting_room_bg.png')] bg-cover min-h-screen p-24">
      <span className="text-7xl text-white pl-8">Waiting Room...</span>
      <div className="grid grid-cols-2 justify-center items-center p-8 pt-12">
        <div className="flex-1 flex-col carousel carousel-vertical bg-[#4E66A8] rounded-box h-96 justify-center items-center border-t-[32px] w-4/5 border-t-[#FB735F]">
          <div className="carousel-item h-full">
            <Card
              width={480}
              height={360}
              className="w-big"
              onClick={() => {}}
            />
          </div>
        </div>
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
