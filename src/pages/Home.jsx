import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import Starbackground from "../components/Starbackground";
import Themetoggle from "../components/Themetoggle";
import { Trials } from "../components/Trials";

export const AppContext = createContext();

export default function Home() {
  const client = new QueryClient();
  const [name, setname] = useState("MEME");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <AppContext.Provider value={{ name, setname }}>
        {/* <QueryClientProvider> */}
        <QueryClientProvider client={client}>
          {/* {theme toggle} */}
          <Themetoggle />
          {/* {background} */}
          <Starbackground />
          {/* {Navbar} */}
          <Navbar />
          {/* {Main Content} */}
          <main>
            <h1 className="bg-primary">{name}</h1>
            <Trials />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            {/* <Contact /> */}
          </main>
          {/* {Footer} */}
          <Footer />
          {/* </QueryClientProvider> */}
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}
