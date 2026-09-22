import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="notebook">
          <Navigation />
          <main id="main">
            <Hero />
            <Experience />
            <Education />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
