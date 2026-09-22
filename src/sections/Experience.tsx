import { useLanguage } from "@/hooks/useLanguage";

export function Experience() {
  const { content } = useLanguage();
  const { experience } = content;
  return <section className="experience" id="experience" aria-labelledby="experience-title">
    <div className="section-heading"><h2 id="experience-title">{experience.title}</h2><span>{experience.filename}</span></div>
    {experience.entries.map(entry => <article className="experience-entry" key={entry.id}>
      <p className="experience-period">{entry.period}</p><div className="timeline-branch" aria-hidden="true" />
      <div className="experience-body">
        <div className="job-heading"><h3>{entry.company}</h3><span>{entry.role}</span></div>
        <p className="job-summary">{entry.summary}</p>
        <details className="experience-details">
          <summary><span className="expand-sign" aria-hidden="true" /><span className="details-closed">{experience.more}</span><span className="details-open">{experience.less}</span><span className="sr-only"> · {entry.company}</span></summary>
          <ul className="contributions">{entry.contributions.map((item, index) => <li key={index}><strong>{item.title}</strong> {item.text}</li>)}</ul>
          {entry.stack && <p className="job-stack">{entry.stack}</p>}
        </details>
      </div>
    </article>)}
  </section>;
}
