"use client";

import { useMemo, useState } from "react";
import TopNav from "@/components/top-nav";
import LearningProfileCard from "@/components/learning-profile-card";

function getVerifyResult(input: string) {
  const text = input.trim();

  if (!text) {
    return null;
  }

  const lower = text.toLowerCase();

  if (
    text.includes("我会了") ||
    text.includes("我懂了") ||
    text.includes("我理解了") ||
    lower.includes("i understand")
  ) {
    return {
      level: "解释层",
      confirmed:
        "你已经具备一定的概念理解，至少能表达出“自己觉得懂了”的主观判断。",
      missing:
        "但这还不能证明你已经具备迁移能力或独立应用能力。",
      evidence:
        "当前输入更像是结论，而不是解释过程，所以最多只能判断你在“解释层附近”，还没看到更高层级证据。",
      nextStep:
        "下一步不要继续自我判断，试着用自己的话解释这个概念，或者给出一个具体场景说明你会怎么用。",
    };
  }

  if (
    text.includes("区别") ||
    text.includes("就是") ||
    text.includes("本质") ||
    text.includes("因为")
  ) {
    return {
      level: "解释层 / 辨析层之间",
      confirmed:
        "你已经开始尝试用自己的话解释概念，说明不只是停留在看过和复述。",
      missing:
        "还不能确定你是否具备稳定的辨析能力和迁移能力。",
      evidence:
        "你提供的是解释型表达，这比单纯说“我会了”更强，但还缺一个新场景下的应用证据。",
      nextStep:
        "下一步试着回答：如果换一个相似但不同的情景，你会怎么判断或处理？",
    };
  }

  if (
    text.includes("比如") ||
    text.includes("场景") ||
    text.includes("如果") ||
    text.includes("我会先")
  ) {
    return {
      level: "迁移层",
      confirmed:
        "你已经不只是解释概念，而是在尝试把理解放进具体情景里，这说明迁移能力开始形成。",
      missing:
        "还不能确认你是否已经达到独立应用层，也就是脱离提示后稳定完成任务。",
      evidence:
        "你的输入包含场景化思考或处理步骤，这比解释层更进一步。",
      nextStep:
        "下一步可以试着独立完成一个最小任务，不看资料，看看是否还能稳定做出来。",
    };
  }

  return {
    level: "复述层 / 解释层附近",
    confirmed:
      "你已经开始输出一些内容，说明不是完全空白，也不只是被动输入。",
    missing:
      "但目前还无法确认你是否真正理解了边界、结构和应用方式。",
    evidence:
      "当前输入信息量有限，能看出你在尝试表达，但还不足以证明更高层级掌握。",
    nextStep:
      "下一步请用自己的话解释一次，或者给出一个小场景，说明你会怎么用这个知识。",
  };
}

export default function VerifyPage() {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const result = useMemo(() => getVerifyResult(submittedText), [submittedText]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <TopNav current="verify" />

        <div className="mb-10">
          <p className="mb-3 text-sm text-zinc-400">Learning OS / 验证复盘</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            不凭感觉，验证你到底学会没有
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            这一页模拟 Agent 3 的工作方式：判断你当前掌握层级，并指出下一步最该补的那一块。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 text-sm text-zinc-400">输入你的理解或结果</div>

            <label className="mb-3 block text-sm text-zinc-300">
              比如：我觉得我已经理解 Prompt 和 Agent 的区别了
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="把你现在的理解、解释、例子或你完成的结果写出来。"
              className="min-h-[140px] w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-zinc-500"
            />

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setSubmittedText(input)}
                className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-300"
              >
                开始验证
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
            stage="验证复盘"
            goal="判断真实掌握层级，并指出下一步最该补的部分"
            nextStep={result ? result.nextStep : "等待输入后生成补强建议"}
            latestResult={result ? result.level : "等待输入后生成掌握层级判断"}
          />
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 text-sm text-zinc-400">验证结果</div>

          {!result ? (
            <div className="rounded-xl bg-zinc-800/50 p-4 text-sm leading-6 text-zinc-300">
              你输入内容后，这里会显示：
              <br />- 当前掌握层级
              <br />- 已掌握的部分
              <br />- 尚未真正掌握的部分
              <br />- 下一步最该补什么
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">当前掌握层级</div>
                <div className="mt-2 font-medium text-zinc-100">{result.level}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">已确认掌握的部分</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.confirmed}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">尚未真正掌握的部分</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.missing}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">主要依据</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.evidence}</div>
              </div>

              <div className="rounded-xl bg-zinc-800/60 p-4">
                <div className="text-sm text-zinc-400">下一步最该补的点</div>
                <div className="mt-2 leading-7 text-zinc-100">{result.nextStep}</div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}