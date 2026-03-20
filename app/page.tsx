import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm text-zinc-400">Learning OS</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            不是回答问题，
            <br />
            而是管理你的学习过程
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            一个帮助你完成“目标澄清 → 学习推进 → 验证复盘”的学习操作系统。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/clarify"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            <div className="mb-3 text-sm text-zinc-400">入口 1</div>
            <div className="text-xl font-semibold">我想学点东西，但说不清</div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              先帮你把模糊目标压缩成清晰目标。
            </p>
          </Link>

          <Link
            href="/learn"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            <div className="mb-3 text-sm text-zinc-400">入口 2</div>
            <div className="text-xl font-semibold">我已经在学，但卡住了</div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              直接帮你定位卡点，并给出下一步。
            </p>
          </Link>

          <Link
            href="/verify"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            <div className="mb-3 text-sm text-zinc-400">入口 3</div>
            <div className="text-xl font-semibold">我想确认自己学会没有</div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              帮你区分“看过了”和“真的掌握了”。
            </p>
          </Link>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 text-sm text-zinc-400">当前状态（演示）</div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前主题</div>
              <div className="mt-1 font-medium">AI 智能体搭建</div>
            </div>
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前阶段</div>
              <div className="mt-1 font-medium">需求挖掘</div>
            </div>
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前下一步</div>
              <div className="mt-1 font-medium">明确学习目标</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}