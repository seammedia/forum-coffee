import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { Catering } from "@/components/catering";
import { Instagram } from "@/components/instagram";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Catering />
      <Instagram />
      <Visit />
      <Footer />
    </>
  );
}
