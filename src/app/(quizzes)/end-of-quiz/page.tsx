"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { kollektifBold } from "@/app/font";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score"));
  let message: string;
  if (score < 5) {
    message = "Better luck next time!";
  } else if (score < 7) {
    message = "Good!";
  } else if (score < 9) {
    message = "Great!";
  } else {
    message = "Yippie!";
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span className="text-white text-7xl mt-12">{message}</span>
        {score != undefined && (
          <span className="text-white text-5xl mt-16 mb-48">
            Your score is {score.toString()}
          </span>
        )}
        <button
          className={`btn btn-outline btn-wide h-24 border-white text-white text-2xl ${kollektifBold.className}`}
          onClick={() => router.push("/dashboard")}
        >
          Return to dashboard
        </button>
      </div>
    </>
  );
}
