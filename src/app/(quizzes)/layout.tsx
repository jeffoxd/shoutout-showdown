"use client";

import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[url('/images/quiz_bg.png')] bg-cover py-16 px-24">
      <Suspense>{children}</Suspense>
    </main>
  );
}
