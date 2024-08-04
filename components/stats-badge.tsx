interface StatsBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function StatsBadge({ icon, text }: StatsBadgeProps) {
  return (
    <div className="rounded-full bg-[#EFEBEA] p-2 flex items-center gap-x-2 min-w-16">
      <div className="size-5 bg-[#BCB7B4] p-1 rounded-full">{icon}</div>

      <span className="text-xs text-zinc-500">{text}</span>
    </div>
  );
}
