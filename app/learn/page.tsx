export default function LearnPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm text-zinc-400">Learning OS / 学习推进</p>
        <h1 className="text-4xl font-bold tracking-tight">学习推进</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          这里以后会接入 Agent 2，用来帮你推进学习、诊断卡点、压缩下一步。
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="text-sm text-zinc-400">当前演示</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前阶段</div>
              <div className="mt-1 font-medium">第 1 阶段：基础理解</div>
            </div>
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前卡点</div>
              <div className="mt-1 font-medium">概念结构不清</div>
            </div>
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <div className="text-sm text-zinc-400">当前下一步</div>
              <div className="mt-1 font-medium">先理解 LLM 与 Agent 的区别</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}