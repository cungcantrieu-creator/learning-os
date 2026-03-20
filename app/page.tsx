export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans tracking-tight">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
        <div className="mb-16">
          <p className="mb-4 text-xs text-zinc-500 font-mono tracking-[0.2em] uppercase">Learning OS / V1.0</p>
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl text-white mb-8">
            不是回答问题，
            <br />
            而是管理你的学习过程
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            一个帮助你完成“目标澄清 → 学习推进 → 验证复盘”的学习操作系统。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-500 hover:bg-zinc-800/80">
            <div className="mb-5 text-xs text-zinc-600 font-mono tracking-widest uppercase">Phase 01</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">目标澄清</h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              先帮你把模糊目标压缩成一个真正可执行的学习方向。
            </p>
          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-500 hover:bg-zinc-800/80">
            <div className="mb-5 text-xs text-zinc-600 font-mono tracking-widest uppercase">Phase 02</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">执行推进</h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              不讲空话，直接帮你定位卡点，并给出最小下一步动作。
            </p>
          </div>

          <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-500 hover:bg-zinc-800/80">
            <div className="mb-5 text-xs text-zinc-600 font-mono tracking-widest uppercase">Phase 03</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">验证复盘</h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              帮你区分“看过了”和“真的掌握了”，确保学习闭环。
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/30 p-10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-zinc-400 font-semibold tracking-widest uppercase">Current Progress</span>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest font-bold">Subject</div>
              <div className="text-xl font-medium text-white">AI 智能体搭建</div>
            </div>
            <div className="md:border-l md:border-zinc-800 md:pl-8">
              <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest font-bold">Stage</div>
              <div className="text-xl font-medium text-white">基础理解阶段</div>
            </div>
            <div className="md:border-l md:border-zinc-800 md:pl-8">
              <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-widest font-bold">Next Move</div>
              <div className="text-xl font-medium text-white underline decoration-zinc-600 underline-offset-8">理解 Agent 逻辑</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}