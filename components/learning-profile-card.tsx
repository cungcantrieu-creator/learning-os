type LearningProfileCardProps = {
  theme: string;
  stage: string;
  goal: string;
  nextStep: string;
  latestResult: string;
};

export default function LearningProfileCard({
  theme,
  stage,
  goal,
  nextStep,
  latestResult,
}: LearningProfileCardProps) {
  return (
    <aside className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-4 text-sm text-zinc-400">学习档案</div>

      <div className="space-y-4">
        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前学习主题</div>
          <div className="mt-1 font-medium text-zinc-100">{theme}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前阶段</div>
          <div className="mt-1 font-medium text-zinc-100">{stage}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前目标</div>
          <div className="mt-1 font-medium text-zinc-100">{goal}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前下一步</div>
          <div className="mt-1 font-medium text-zinc-100">{nextStep}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">最近一次判断</div>
          <div className="mt-1 font-medium text-zinc-100">{latestResult}</div>
        </div>
      </div>
    </aside>
  );
}