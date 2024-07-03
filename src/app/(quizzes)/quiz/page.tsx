"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Biology from "./biology.json";
import History from "./history.json";
import { kollektifBold, kollektif } from "@/app/font";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const jsonFile = type === "biology-quiz" ? Biology : History;
  const currQuestion: number = !searchParams.get("question")
    ? 1
    : Number(searchParams.get("question"));

  const timerInitial = 60;
  const [timer, setTimer] = useState(timerInitial);
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const displayTimer = timer < 10 ? `0${timer}` : timer;
  const answersColor = ["#FB735F", "#C6CF45", "#F8B02D", "#2FA896"];

  const toNextQuestion = () => {
    setTimer(timerInitial);
    if (question >= 10) {
      router.push(`end-of-quiz?score=${score}`);
    } else {
      router.push(`quiz?type=${type}&question=${question + 1}`);
    }
  };
  const correctOnClick = () => {
    setScore((score) => score + 1);
    alert("Correct!");
    toNextQuestion();
  };
  const wrongOnClick = () => {
    alert("Wrong!");
    toNextQuestion();
  };

  useEffect(() => {
    setQuestion(currQuestion);
  }, [currQuestion]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          alert("Out of time!");
          toNextQuestion();
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="text-6xl flex-1 text-white py-12 pl-16">
            Question {question}
          </span>
          <div className="relative text-center flex-none">
            <Image
              className=""
              src="/images/question_timer.png"
              alt="question timer"
              width={150}
              height={150}
            />
            <span className="absolute top-0 left-0 text-4xl pt-[70px] pl-[52px] text-white text-end">
              {displayTimer}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-32">
        {question <= 10 && (
          <>
            <span
              className={`text-4xl text-white ${kollektifBold.className} pl-16`}
            >
              {jsonFile[question - 1].question}
            </span>
            <div className={`flex flex-col gap-4 ${kollektif.className}`}>
              <div className="flex flex-row gap-4 justify-center items-center">
                {jsonFile[question - 1].answers.map((answer, i) => {
                  const onClick = answer.correct
                    ? correctOnClick
                    : wrongOnClick;
                  if (i == 0 || i == 1) {
                    return (
                      <button
                        className={`btn w-2/6 h-24 text-4xl bg-[${answersColor[i]}] border-none text-white`}
                        key={`${answer.text}-${i}`}
                        onClick={onClick}
                      >
                        {answer.text}
                      </button>
                    );
                  }
                })}
              </div>
              <div className="flex flex-row gap-4 justify-center items-center">
                {jsonFile[question - 1].answers.map((answer, i) => {
                  const onClick = answer.correct
                    ? correctOnClick
                    : wrongOnClick;
                  if (i == 2 || i == 3) {
                    return (
                      <button
                        className={`btn w-2/6 h-24 text-4xl bg-[${answersColor[i]}] border-none text-white`}
                        key={`${answer.text}-${i}`}
                        onClick={onClick}
                      >
                        {answer.text}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
