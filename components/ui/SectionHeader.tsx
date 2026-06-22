import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
}

export default function SectionHeader({ index, eyebrow, title, lead }: SectionHeaderProps) {
  return (
    <Reveal className="sec-head">
      <span className="eyebrow">
        {index} · {eyebrow}
      </span>
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </Reveal>
  );
}
