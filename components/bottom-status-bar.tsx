type BottomStatusBarProps = {
  moduleName: string;
  stage: string;
  nextStep: string;
};

export default function BottomStatusBar({
  moduleName,
  stage,
  nextStep,
}: BottomStatusBarProps) {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前模块</div>
          <div className="mt-1 font-medium text-zinc-100">{moduleName}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前阶段</div>
          <div className="mt-1 font-medium text-zinc-100">{stage}</div>
        </div>

        <div className="rounded-xl bg-zinc-800/60 p-4">
          <div className="text-sm text-zinc-400">当前下一步</div>
          <div className="mt-1 font-medium text-zinc-100">{nextStep}</div>
        </div>
      </div>
    </div>
  );
}