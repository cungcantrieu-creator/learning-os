"use client";

import { useMemo, useState } from "react";
import TopNav from "@/components/top-nav";
import LearningProfileCard from "@/components/learning-profile-card";

function getLearnResult(input: string) {
  const text = input.trim();

  if (!text) {
    return null;
  }

  if (
    text.includes("不知道下一步") ||
    text.includes("下一步") ||
    text.includes("不知道怎么学")
  ) {
    return {
      diagnosis: "当前问题更像是“任务路径不清”，不是你完全不会，而是不知道先做哪一步。",
      reason: "你现在缺的不是更多资料，而是一个当前最小动作。",
      nextAction: "先把大目标压成一个最小任务：只定义你今天要解决的 1 个具体问题。",
      avoid: "暂时不要继续扩展资料，也不要试图一次做完整套学习计划。",
      stage: "执行推进中",
    };
  }

  if (
    text.includes("看不懂") ||
    text.includes("太难") ||
    text.includes("读不懂") ||
    text.includes("论文")
  ) {
    return {
      diagnosis: "当前问题更像是“材料过难”或“前置结构不足”。",
      reason: "不是你学不会，而是你拿到的材料超过了你当前可处理的复杂度。",
      nextAction: "先不要硬啃整份材料，先只抽出 1 个核心概念，弄清它在整篇里的作用。",
      avoid: "不要试图一次看懂全部，也不要一边看一边同步查十几个新概念。",
      stage: "阅读辅助中",
    };
  }

  if (
    text.includes("概念") ||
    text.includes("分不清") ||
    text.includes("区别") ||
    text.includes("结构")
  ) {
    return {
      diagnosis: "当前问题更像是“认知地图不清”，你需要的不是死记，而是先建立关系图。",
      reason: "你现在可能知道一些词，但这些词在脑子里还没形成结构。",
      nextAction: "先只写出这几个概念的关系：谁是上位概念，谁是并列概念，谁是应用层。",
      avoid: "不要继续堆更多术语，也不要急着进入实现细节。",
      stage: "认知地图构建中",
    };
  }

  return {
    diagnosis: "当前问题更像是一个典型的执行停滞：目标没有被压缩到足够小，所以推进困难。",
    reason: "你不是没有行动意愿，而是任务还太大、太模糊。",
    nextAction: "把你现在的问题再缩小一层，只保留一个今天能完成的小动作。",
    avoid: "暂时不要重开新主题，也不要继续扩大问题范围。",
    stage: "执行推进中",
  };
}

export default function LearnPage() {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const result = useMemo(() => getLearnResult(submittedText), [submittedText]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <TopNav current="learn" />

        <div className="mb-10">
          <p className="mb-3 text-sm text-zinc-400">Learning OS / 学习推进</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            不先讲大道理，先帮你往前推一步
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            这一页模拟 Agent 2 的工作方式：识别你当前的卡点，并给出最小可执行下一步。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 text-sm text-zinc-400">输入你当前的卡点</div>

            <label className="mb-3 block text-sm text-zinc-300">
              比如：我看不懂这篇论文，不知道下一步做什么
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="把你现在最具体的卡点写出来。"
              className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500"
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setSubmittedText(input)}
                className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-300"
              >
                开始诊断
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
            theme="AI 智能体搭建"
            stage={result ? result.stage : "学习推进"}
            goal="识别当前卡点，并给出最小可执行下一步"
            nextStep={result ? result.nextAction : "等待输入卡点后生成下一步"}
            latestResult={result ? result.diagnosis : "等待输入后生成诊断结果"}
          />
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 text-sm text-zinc-400">推进结果</div>

          {!result ? (
            <div className="rounded-xl bg-zinc-800/50 p-4 text-sm leading-6 text-zinc-300">
              你输入卡点后，这里会显示：
              <br />- 当前卡点判断
              <br />- 为什么会卡住
              <br />- 当前最小可执行动作
              <br />- 暂时不要做什么
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前卡点判断</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.diagnosis}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">为什么会卡住</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.reason}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前阶段</div>
                <div className="mt-2 font-medium text-zinc-100">{result.stage}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前最小可执行动作</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.nextAction}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">暂时不要做什么</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.avoid}</div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}