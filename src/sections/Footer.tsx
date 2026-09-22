import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { content } = useLanguage();
  return <footer className="notebook-footer"><span>Valentín Caceres</span><span>{content.footer}</span></footer>;
}
