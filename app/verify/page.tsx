export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-3 text-sm text-zinc-400">Learning OS / 验证复盘</p>
        <h1 className="text-4xl font-bold tracking-tight">验证复盘</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          这里以后会接入 Agent 3，用来判断你是否真的掌握，并给出下一轮修正建议。
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="text-sm text-zinc-400">验证结论（演示）</div>
          <div className="mt-4 space-y-3 text-zinc-200">
            <p>当前对象：Prompt 理解</p>
            <p>当前层级：解释层</p>
            <p>已掌握：知道 Prompt 的作用</p>
            <p>未掌握：迁移与结构设计</p>
          </div>
        </div>
      </div>
    </main>
  );
}