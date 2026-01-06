import { Cpu, Globe, Layers, Server } from "lucide-react";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        İçeriğe atla
      </a>

      <ScrollProgress />
      <Navbar />
      <Hero />

      <main id="icerik">
        <section
          id="hakkimda"
          className="relative border-y border-white/10 bg-gradient-to-b from-black via-black to-[#070714] py-20 sm:py-28"
        >
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="HİKAYE"
                title={site.about.title}
                description="Donanımın disiplinini, yazılımın hızına taşıyorum."
              />
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="space-y-5">
                  {site.about.paragraphs.map((p, idx) => (
                    <Reveal key={idx} delay={idx * 0.04}>
                      <p className="text-base leading-8 text-zinc-300">{p}</p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal className="lg:col-span-1" delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-zinc-50">
                    Hızlı Özet
                  </p>
                  <ul className="mt-5 space-y-4 text-sm text-zinc-300">
                    <li className="flex gap-3">
                      <Layers className="mt-0.5 size-4 text-zinc-200" />
                      <span>
                        React.js • Node.js • PostgreSQL ile Full‑Stack ürünler
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Server className="mt-0.5 size-4 text-zinc-200" />
                      <span>AWS • Docker • Linux ile üretim odaklı kurulum</span>
                    </li>
                    <li className="flex gap-3">
                      <Cpu className="mt-0.5 size-4 text-zinc-200" />
                      <span>EMC / elektromanyetik yaklaşım ile sistematik düşünce</span>
                    </li>
                    <li className="flex gap-3">
                      <Globe className="mt-0.5 size-4 text-zinc-200" />
                      <span>UI/UX • SEO • Prompt Engineering</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="odak" className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="YETKİNLİK"
                title={site.focus.title}
                description="Teknoloji yığını kadar, problem çözme yaklaşımı da önemlidir."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {site.focus.items.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                    <p className="text-sm font-semibold text-zinc-50">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="projeler"
          className="border-y border-white/10 bg-gradient-to-b from-black via-[#070714] to-black py-20 sm:py-28"
        >
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="VİTRİN"
                title={site.projects.title}
                description="Seçili çalışmalarımı burada sade ama etkileyici bir şekilde sergileyeceğim."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-zinc-50">
                      Proje {idx + 1}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">
                      Yakında — kısa açıklama, teknoloji yığını ve linkler.
                    </p>
                    <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 opacity-80" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-zinc-300">
                {site.projects.note}
              </p>
            </Reveal>
          </Container>
        </section>

        <section id="iletisim" className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="BAĞLANTI"
                title="İletişim"
                description="Bir fikir, iş birliği veya proje için kolayca ulaşabilirsin."
              />
            </Reveal>

            <div className="mt-10">
              <Reveal delay={0.06}>
                <Contact />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
