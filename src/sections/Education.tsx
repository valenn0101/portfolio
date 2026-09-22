import { useLanguage } from "@/hooks/useLanguage";

export function Education() {
  const { content } = useLanguage();
  return <section className="education" aria-labelledby="education-title">
    <div className="section-heading"><h2 id="education-title">{content.education.title}</h2><span>{content.education.filename}</span></div>
    <p>{content.education.degree}</p><small>{content.education.period}</small>
  </section>;
}
