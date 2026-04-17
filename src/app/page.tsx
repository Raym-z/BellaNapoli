import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reservation } from "@/components/Reservation";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <TopNav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
