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
    <div className="min-h-screen bg-[color:var(--background)] text-zinc-50">
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
          className="relative border-y border-white/10 bg-gradient-to-b from-[color:var(--background)] via-[#0b1124] to-[#0f1630] py-20 sm:py-28"
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
          className="border-y border-white/10 bg-gradient-to-b from-[color:var(--background)] via-[#0f1630] to-[color:var(--background)] py-20 sm:py-28"
        >
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="VİTRİN"
                title={site.projects.title}
                description="Seçili çalışmalarımı burada sade ama etkileyici bir şekilde sergileyeceğim."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {site.projects.items.map((project, idx) => (
                <Reveal key={project.title} delay={idx * 0.04}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-zinc-50">
                          {project.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-300">
                          {project.description}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-200">
                        {project.kind === "EMC" ? "EMC" : "Software"}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 opacity-80" />
                  </div>
                </Reveal>
              ))}
            </div>
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
