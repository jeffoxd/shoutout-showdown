"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const quizzes = [
    { route: "biology-quiz", src: "/images/biology_quiz.png" },
    { route: "history-quiz", src: "/images/history_quiz.png" },
  ];
  return (
    <div className="grid grid-cols-2 pt-48">
      {quizzes.map((quiz, i) => {
        return (
          <Card
            key={`quizzes-${i}`}
            src={quiz.src}
            onClick={() => {
              router.push(`/waiting-room?quiz=${quiz.route}`);
            }}
          />
        );
      })}
    </div>
  );
}
