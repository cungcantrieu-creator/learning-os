export default function ClarifyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm text-zinc-400">Learning OS / 需求澄清</p>
        <h1 className="text-4xl font-bold tracking-tight">需求澄清</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          这里以后会接入 Agent 1，用来把你的模糊学习目标压缩成清晰目标。
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="text-sm text-zinc-400">示例问题</div>
          <div className="mt-3 space-y-3 text-zinc-200">
            <p>1. 你现在到底想学什么？</p>
            <p>2. 你为什么学？是工作、转行、副业，还是好奇？</p>
            <p>3. 你希望学到什么程度？</p>
          </div>
        </div>
      </div>
    </main>
  );
}