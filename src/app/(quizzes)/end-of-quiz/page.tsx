"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { kollektifBold } from "@/app/font";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="text-white text-8xl mt-48">Yippie!</span>
        {score && (
          <span className="text-white text-9xl mt-16 mb-48">
            Your score is {score}
          </span>
        )}
        <button
          className={`btn btn-outline w-big h-36 border-white text-white text-5xl ${kollektifBold.className}`}
          onClick={() => router.push("/dashboard")}
        >
          Return to dashboard
        </button>
      </div>
    </>
  );
}
