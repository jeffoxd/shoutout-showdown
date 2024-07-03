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
        <span className="text-white text-7xl mt-12">Yippie!</span>
        {score && (
          <span className="text-white text-5xl mt-16 mb-48">
            Your score is {score}
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
