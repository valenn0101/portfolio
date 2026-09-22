import { useState } from "react";
import { MousePointer2 } from "lucide-react";
import { track } from "@vercel/analytics/react";
import { useLanguage } from "@/hooks/useLanguage";
import type { NoteId } from "@/content/portfolio";

export function Hero() {
  const { content } = useLanguage();
  const [selectedNote, setSelectedNote] = useState<NoteId>("now");
  const note = content.notes[selectedNote];

  function noteButton(id: Exclude<NoteId, "now">, number: number) {
    return <button type="button" className="note-word" aria-pressed={selectedNote === id}
      aria-controls="margin-note" aria-label={`${content.a11y.readNote} ${content.hero.noteNames[id]}`}
      onClick={() => setSelectedNote(selectedNote === id ? "now" : id)}>
      {content.hero.noteNames[id]}<sup aria-hidden="true">{number}</sup>
    </button>;
  }

  return (
    <section className="hero" id="about" aria-labelledby="name">
      <div className="notebook-grid" aria-hidden="true" />
      <div className="section-kicker"><span>{content.hero.filename}</span><span>{content.hero.kicker}</span></div>
      <div className="hero-layout">
        <div>
          <h1 id="name"><span>Valentín</span><span className="surname">Caceres<span className="cursor-mark" aria-hidden="true">_</span></span></h1>
          <p className="bio"><strong>{content.hero.role}</strong><br />
            {content.hero.intro}{" "}{noteButton("endtoend", 1)}, {noteButton("architecture", 2)} {content.hero.conjunction}{" "}{noteButton("ai", 3)}.
          </p>
          <div className="social-links">
            <a href="https://github.com/valenn0101" target="_blank" rel="noreferrer" onClick={() => track("social_link_clicked", { platform: "GitHub" })}>github ↗</a>
            <a href="https://www.linkedin.com/in/vcvalentin/" target="_blank" rel="noreferrer" onClick={() => track("social_link_clicked", { platform: "LinkedIn" })}>linkedin ↗</a>
          </div>
        </div>
        <aside className="margin-note" id="margin-note" aria-label={content.a11y.marginNote}>
          <span className="registration-mark" aria-hidden="true">+</span>
          <div aria-live="polite" aria-atomic="true">
            <p className="note-label">{note.label}</p><h2>{note.title}</h2>
            <p className="note-copy">{note.text}</p><p className="note-meta">{note.meta}</p>
          </div>
          {selectedNote !== "now" && <button type="button" className="note-return" onClick={() => setSelectedNote("now")}>{content.a11y.back}</button>}
        </aside>
      </div>
      <p className="note-hint"><MousePointer2 size={14} aria-hidden="true" /><span>{content.hero.hint}</span></p>
      <div className="hero-meta"><span>{content.hero.meta}</span><span>{content.hero.interests}</span></div>
    </section>
  );
}
