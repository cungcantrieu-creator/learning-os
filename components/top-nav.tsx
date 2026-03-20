import Link from "next/link";

type TopNavProps = {
  current: "home" | "clarify" | "learn" | "verify";
};

function getItemClass(active: boolean) {
  return active
    ? "rounded-xl bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900"
    : "rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-100";
}

export default function TopNav({ current }: TopNavProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3">
      <Link href="/" className={getItemClass(current === "home")}>
        首页
      </Link>
      <Link href="/clarify" className={getItemClass(current === "clarify")}>
        需求澄清
      </Link>
      <Link href="/learn" className={getItemClass(current === "learn")}>
        学习推进
      </Link>
      <Link href="/verify" className={getItemClass(current === "verify")}>
        验证复盘
      </Link>
    </div>
  );
}