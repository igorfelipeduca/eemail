interface SectionDividerProps {
  icon: React.ReactNode;
  text: string;
}

export default function SectionDivider({ icon, text }: SectionDividerProps) {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}

      <span className="text-zinc-500 text-sm font-medium capitalize">
        {text}
      </span>
    </div>
  );
}
