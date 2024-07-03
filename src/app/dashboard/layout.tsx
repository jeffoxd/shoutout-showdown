"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function Layout({
  discover,
  quizzes,
  leaderboard,
}: {
  discover: React.ReactNode;
  quizzes: React.ReactNode;
  leaderboard: React.ReactNode;
}) {
  const [page, setPage] = useState(0);
  const currPage = [discover, quizzes, leaderboard];
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFAE9]">
      <Header className="flex-none" />
      <div className="flex flex-1 flex-row min-w-full">
        <Navbar
          className="flex-none w-36 pt-8"
          currPage={page}
          setCurrPage={setPage}
        />
        <main className="flex-1 justify-center items-center mx-16 my-12">
          <>{currPage[page]}</>
        </main>
      </div>
    </div>
  );
}
