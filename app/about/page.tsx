import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] bg-white dark:bg-black text-black dark:text-white px-4 py-16">
      <section className="max-w-xl w-full border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8 bg-white dark:bg-neutral-900">
        <h1 className="text-3xl font-bold mb-4 text-center">신현재의 웹 프로그래밍 블로그</h1>
        <div className="mb-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-semibold border border-black dark:border-white">소속: 한신대학교 소프트웨어융합학부</span>
        </div>
        <p className="text-lg leading-relaxed text-center">
          관심: 웹프로그래밍 수업을 통해 같은 분야에 관심 있는 학생들과 함께 공부를 하는 블로그 입니다.
        </p>
      </section>
    </main>
  );
}
