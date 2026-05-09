import type { LucideIcon } from "lucide-react";

type StatPillProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function StatPill({ icon: Icon, label, value }: StatPillProps) {
  return (
    <div className="flex min-h-[74px] min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-0.5 hover:border-ice-blue/25 hover:bg-ice-blue/[0.07]">
      <Icon className="shrink-0 text-bright-gold" size={18} />
      <div className="min-w-0">
        <span className="block truncate text-xs font-bold text-text-secondary">{label}</span>
        <strong className="mt-1 block truncate text-sm font-black text-text-primary">{value}</strong>
      </div>
    </div>
  );
}
