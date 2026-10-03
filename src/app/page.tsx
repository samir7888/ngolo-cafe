import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Menu } from "@/components/sections/menu";
import { Visit } from "@/components/sections/visit";
import { localBusinessJsonLd, menuJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd()) }}
      />
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
