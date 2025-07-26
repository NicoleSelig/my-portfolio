type Props = {
  insights: string[];
};

export default function InsightRoll({ insights }: Props) {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light whitespace-nowrap overflow-hidden">
      <div className="w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
        {insights.map((insight: string, key: number) => (
          <div key={key}>
            {insight} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
