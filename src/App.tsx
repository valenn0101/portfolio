import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Services } from "@/sections/Services";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground theme-transition">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
