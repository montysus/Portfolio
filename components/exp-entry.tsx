interface ExperienceEntryProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceEntry({
  title,
  company,
  period,
  description,
}: ExperienceEntryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold underline">{title}</h3>
      <p className="mb-2 text-sm italic text-gray-500 dark:text-gray-400">
        {company} • {period}
      </p>
      <p className="text-base">{description}</p>
    </div>
  );
}
