"use client";

import { useMemo, useState } from "react";
import TopNav from "@/components/top-nav";
import LearningProfileCard from "@/components/learning-profile-card";

function getClarifyResult(input: string) {
  const text = input.trim();

  if (!text) {
    return null;
  }

  const lower = text.toLowerCase();

  if (text.includes("AI") || text.includes("人工智能") || lower.includes("ai")) {
    return {
      understanding:
        "我当前理解你想学的方向和 AI 有关，但这个目标还太宽，暂时不能直接开始推进。",
      questions: [
        "你更想学 AI 应用、AI 智能体、AI 编程，还是 AI 算法原理？",
        "你学这个主要是为了工作提效、转行、副业，还是单纯兴趣？",
      ],
      stage: "需求澄清中",
    };
  }

  if (
    text.includes("英语") ||
    text.includes("英文") ||
    lower.includes("english")
  ) {
    return {
      understanding:
        "我当前理解你想学英语，但英语本身不是一个足够清晰的学习目标。",
      questions: [
        "你主要是想提升口语、阅读、写作，还是为了考试？",
        "你学英语是为了工作、留学、旅行，还是日常交流？",
      ],
      stage: "需求澄清中",
    };
  }

  if (
    text.includes("编程") ||
    text.includes("代码") ||
    text.includes("python") ||
    text.includes("前端") ||
    text.includes("后端")
  ) {
    return {
      understanding:
        "我当前理解你想学编程相关内容，但还不清楚你到底想进入哪个方向。",
      questions: [
        "你更想学前端、后端、Python 自动化，还是做项目开发？",
        "你学编程是为了转行、做副业、完成项目，还是提高工作效率？",
      ],
      stage: "需求澄清中",
    };
  }

  return {
    understanding:
      "我当前理解你已经有一个学习意图，但目标还不够具体，暂时不能直接生成学习路径。",
    questions: [
      "你现在最想学的到底是什么？尽量说到一个具体主题。",
      "你学这个是为了什么？工作、项目、考试、副业，还是兴趣？",
    ],
    stage: "需求澄清中",
  };
}

export default function ClarifyPage() {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const result = useMemo(() => getClarifyResult(submittedText), [submittedText]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <TopNav current="clarify" />

        <div className="mb-10">
          <p className="mb-3 text-sm text-zinc-400">Learning OS / 需求澄清</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            先把目标说清楚，再开始学
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            这一页模拟 Agent 1 的工作方式：先把模糊目标压缩成一个可执行的学习方向。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 text-sm text-zinc-400">输入你的模糊目标</div>

            <label className="mb-3 block text-sm text-zinc-300">
              比如：我想学 AI，但说不清
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="把你现在想学的东西直接口语化写下来就行。"
              className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500"
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setSubmittedText(input)}
                className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-300"
              >
                开始澄清
              </button>

              <button
                onClick={() => {
                  setInput("");
                  setSubmittedText("");
                }}
                className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800"
              >
                清空
              </button>
            </div>
          </section>

          <LearningProfileCard
            theme="待明确"
            stage="需求澄清"
            goal="把模糊学习意图压缩成清晰目标"
            nextStep="明确方向、动机与目标层级"
            latestResult={result ? result.understanding : "等待输入后生成澄清结果"}
          />
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 text-sm text-zinc-400">澄清结果</div>

          {!result ? (
            <div className="rounded-xl bg-zinc-800/50 p-4 text-sm leading-6 text-zinc-300">
              你输入内容后，这里会显示：
              <br />- 当前理解
              <br />- 还没说清的关键点
              <br />- 下一轮该问的两个问题
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前理解</div>
                <div className="mt-2 leading-7 text-zinc-100">
                  {result.understanding}
                </div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前阶段</div>
                <div className="mt-2 font-medium text-zinc-100">
                  {result.stage}
                </div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">下一轮最关键的问题</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-100">
                  {result.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}