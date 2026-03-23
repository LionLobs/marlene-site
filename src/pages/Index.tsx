import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Instagram, Linkedin, Clock, Users, Brain, Target, Heart, Shield, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WA_BASE = "https://wa.me/5511973356733?text=";
const waLink = (msg: string) => WA_BASE + encodeURIComponent(msg);

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      id={id}
      className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ filter: visible ? "blur(0)" : "blur(4px)" }}
    >
      {children}
    </section>
  );
}

// ─── NAV ───
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Programas", href: "#programas" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Serviços", href: "#corporativo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
   <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    {/* LOGO DA CLIENTE AQUI */}
    <a href="#" className="flex items-center gap-2 transition-transform active:scale-95">
      <img 
  src="/logo-cliente.PNG" 
  alt="Marlene Corrêa Logo" 
  className="h-20 w-auto object-contain md:h-24" 
/>
    </a>

    <div className="hidden md:flex items-center gap-8">
      {links.map(l => (
        <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200">{l.label}</a>
      ))}
    </div>
    
    <button onClick={() => setOpen(!open)} className="md:hidden text-foreground active:scale-95 transition-transform" aria-label="Menu">
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
  
  {open && (
    <div className="md:hidden bg-background/98 backdrop-blur-sm border-t px-6 pb-6 pt-2 space-y-1">
      {links.map(l => (
        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0">{l.label}</a>
      ))}
    </div>
  )}
</nav>
  );
}

// ─── HERO ───
function Hero() {
  const { ref, visible } = useInView(0.1);
  return (
    <header ref={ref} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ filter: visible ? "blur(0)" : "blur(4px)" }}>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Saúde Mental e Reconstrução Profissional</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-primary leading-[1.1] text-wrap-balance">
            Saúde Mental e Reconstrução Profissional para Mulheres 40+
          </h1>
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-secondary/80">
            Marlene Corrêa — Psicanalista Clínica e Mentora Estratégica
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Profissional em saúde mental como psicanalista clínica e mentora estratégica, criadora do Programa Exclusivo de Reconstrução 40+, conduzo mulheres que desejam romper padrões, ressignificar sua história e reconstruir carreira com propósito, maturidade emocional e direção.
          </p>
          <div className="pt-2 space-y-2">
            <p className="text-foreground/70 text-sm">Não é apenas sobre mudança profissional.</p>
            <p className="text-foreground/90 italic font-display text-sm">É sobre reconstruir identidade e assumir a potência que a maturidade trouxe.</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href={waLink("Olá Marlene! Gostaria de solicitar uma aplicação para um de seus programas.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground font-semibold text-sm px-7 py-3 tracking-wide uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.97] transition-all duration-200">
              Solicitar Aplicação
            </a>
            <a href="#contato"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary/30 text-primary font-semibold text-sm px-7 py-3 tracking-wide uppercase hover:bg-primary/5 active:scale-[0.97] transition-all duration-200">
              Conhecer Mais
            </a>
          </div>
        </div>
        <div className={`relative transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ filter: visible ? "blur(0)" : "blur(4px)" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <img src="/marlene-photo.png" alt="Marlene Corrêa - Psicanalista Clínica e Mentora" className="w-full h-auto object-cover" loading="eager" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── SOBRE ───
function About() {
  return (
    <Section id="sobre" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="w-16 h-[3px] bg-secondary mb-6" />
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-secondary mb-4">Marlene Corrêa — Psicanalista Clínica e Mentora</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-6 leading-tight">Expertise & Experiência</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Profissional em saúde mental como psicanalista clínica e mentora estratégica, criadora do <strong className="text-foreground">Programa Exclusivo de Reconstrução 40+</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Conduzo mulheres que desejam romper padrões, ressignificar sua história e reconstruir carreira com propósito, maturidade emocional e direção.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Com mais de <strong className="text-foreground">20 anos de experiência no mercado corporativo</strong>, incluindo atuação como gerente de serviços em empresa multinacional, uno conhecimento organizacional à prática clínica.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── PROGRAMS ───
const programs = [
  {
    title: "Programa Exclusivo de Reconstrução 40+",
    subtitle: "Pelo Método Identidade Estratégica™",
    badge: "🔒 Sob Aplicação",
    description: "Um processo profundo, estruturado e seletivo para mulheres 40+ que desejam reconstruir identidade, direção e propósito com estratégia e maturidade emocional.",
    features: ["10 semanas individuais", "Diagnóstico emocional e identitário profundo", "Ressignificação de padrões inconscientes", "Reconstrução estratégica de identidade", "Plano de posicionamento profissional", "Suporte personalizado durante todo o processo"],
    note: "Este programa é destinado a mulheres comprometidas com uma reconstrução real. O investimento é apresentado exclusivamente na Conversa de Alinhamento.",
    cta: "Solicitar Aplicação",
    waMsg: "Olá Marlene! Gostaria de solicitar aplicação para o Programa Exclusivo de Reconstrução 40+.",
    icon: Target,
    featured: true,
  },
  {
    title: "Jornada Essencial de Reconstrução 40+",
    subtitle: "Processo estruturado de 5 semanas",
    badge: "Entrada Contínua",
    description: "Processo estruturado de 5 semanas para mulheres que precisam de clareza emocional e direção estratégica para iniciar sua reconstrução.",
    features: ["5 semanas estruturadas", "Clareza emocional", "Direção estratégica", "Possibilidade de evolução"],
    note: "Participantes que desejarem evoluir para o Programa Exclusivo poderão ter parte do investimento considerado na continuidade do processo.",
    cta: "Iniciar Jornada Essencial",
    waMsg: "Olá Marlene! Gostaria de iniciar a Jornada Essencial de Reconstrução 40+. Como funciona?",
    icon: Heart,
  },
  {
    title: "Atendimentos Individuais Terapêuticos",
    subtitle: "Atuação Clínica Integrativa",
    badge: "",
    description: "Atuação clínica integrativa voltada ao cuidado contínuo da saúde mental e manejo de questões emocionais específicas. Atendo mulheres e homens em diferentes fases da vida, com abordagem personalizada.",
    features: ["Psicanálise Clínica", "Terapia Sistêmica", "Hipnoterapia", "Constelação Familiar", "Contoterapia", "Ferramentas complementares de autoconhecimento"],
    note: "Indicado para acompanhamento contínuo em saúde mental, momentos de transição ou suporte complementar aos programas estruturados.",
    cta: "Agendar Atendimento Individual",
    waMsg: "Olá Marlene! Gostaria de agendar um atendimento individual terapêutico. Qual é a disponibilidade?",
    icon: Brain,
  },
];

function Programs() {
  return (
    <Section id="programas" className="py-20 md:py-28 bg-primary/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-[3px] bg-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-4">Programas de Transformação</h2>
          <p className="text-muted-foreground">Processos estruturados e seletivos para sua reconstrução profissional e pessoal</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={`group relative rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${p.featured ? "bg-primary text-primary-foreground shadow-lg" : "bg-card shadow-md shadow-foreground/5 border border-border/60"}`}>
                <div className="mb-5">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${p.featured ? "bg-primary-foreground/15" : "bg-secondary/15"}`}>
                    <Icon size={22} className={p.featured ? "text-primary-foreground" : "text-secondary"} />
                  </div>
                  <h3 className={`font-display text-xl font-semibold mb-1 ${p.featured ? "" : "text-foreground"}`}>{p.title}</h3>
                  <p className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.subtitle}</p>
                  {p.badge && (
                    <span className={`inline-block mt-3 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full ${p.featured ? "bg-secondary text-secondary-foreground" : "bg-secondary/15 text-secondary"}`}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{p.description}</p>
                <ul className="space-y-2 mb-5">
                  {p.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${p.featured ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.featured ? "bg-secondary" : "bg-secondary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className={`text-xs italic mb-6 ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground/70"}`}>{p.note}</p>
                <a
                  href={waLink(p.waMsg)} target="_blank" rel="noopener noreferrer"
                  className={`block w-full text-center text-sm font-semibold py-3 rounded-lg tracking-wide uppercase transition-all duration-200 active:scale-[0.97] ${p.featured ? "bg-secondary text-secondary-foreground hover:brightness-105" : "bg-primary text-primary-foreground hover:brightness-110"}`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── TESTIMONIALS ───
const testimonials = [
  {
    text: "As sessões de terapias energéticas e também as sessões terapêuticas com os movimentos sistêmicos foram um divisor de águas para meu autoconhecimento, crescimento pessoal e espiritual.",
    name: "Fernanda Parra",
    tag: "Acompanhamento Terapêutico",
  },
  {
    text: "Foi excelente ter feito sessões de terapia com a Marlene, frente a uma mudança de país vem alguns desafios emocionais como: estar longe da família, lidar e conviver com pessoas de cultura diferentes.",
    name: "Patrícia Kaltner",
    tag: "Acompanhamento Terapêutico",
  },
  {
    text: "A Terapia Sistêmica mudou completamente minha vida. Tanto que escolhei fazer somente as sessões com a Marlene, e optei por não dar continuidade na terapia convencional. Tenho mexido em emoções que estão atreladas a minha criança interior e isso tem me ajudado a me curar.",
    name: "Ariane Cavalcante",
    tag: "Acompanhamento Terapêutico",
  },
  {
    text: "Querida Marlene, como sua mentorada nesse meu processo de transição de carreira pude aprender a me planejar, a colocar foco e determinar as etapas para realmente fazer acontecer meus negócios. Eu realmente amadureci nesse período em que estivemos juntas.",
    name: "Karina Marquis",
    tag: "Mentoria Transição de Carreira",
  },
];

function Testimonials() {
  return (
    <Section id="depoimentos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-[3px] bg-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-4">Histórias de Transformação</h2>
          <p className="text-muted-foreground">Veja como mulheres como você reconstruíram suas vidas e carreiras</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-md shadow-foreground/5 border border-border/60 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-secondary text-secondary" />)}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed italic flex-1 mb-6">"{t.text}"</blockquote>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-secondary mt-1">{t.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── CORPORATE ───
function Corporate() {
  const features = [
    "Diagnóstico dos fatores psicossociais",
    "Plano de ação estratégico",
    "Relatórios técnicos para PGR e auditorias",
    "Assessoria para RH e lideranças",
    "Programas personalizados de saúde mental",
  ];

  return (
    <Section id="corporativo" className="py-20 md:py-28 bg-primary/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="/corporativo.png" alt="Saúde Mental Corporativa" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          <div>
            <div className="w-16 h-[3px] bg-secondary mb-6" />
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-secondary mb-3">Saúde Mental Corporativa</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-4">Programas Corporativos em Saúde Mental & NR-1</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Atuação estratégica para empresas com foco em prevenção de riscos psicossociais e implementação de programas contínuos de saúde mental em conformidade com o Ministério do Trabalho.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com +20 anos de experiência no mercado corporativo, incluindo atuação como gerente de serviços no ramo de prestação de serviços em Recursos Humanos em empresa multinacional, uno conhecimento organizacional à prática clínica para oferecer soluções técnicas e humanizadas.
            </p>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Inclui:</h3>
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <Shield size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink("Olá Marlene! Gostaria de solicitar uma proposta para o programa corporativo.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground font-semibold text-sm px-7 py-3 tracking-wide uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.97] transition-all duration-200"
            >
              Solicitar Proposta Corporativa
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── CONTACT ───
function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const msg = `Olá Marlene! Meu nome é ${fd.get("name")}. Email: ${fd.get("email")}. WhatsApp: ${fd.get("phone")}. ${fd.get("message") || ""}`;
    window.open(waLink(msg), "_blank");
    setTimeout(() => setSending(false), 1000);
  };

  return (
    <Section id="contato" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-[3px] bg-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-4">Comece Sua Transformação Hoje</h2>
          <p className="text-muted-foreground">Deixe seus dados e receba uma proposta personalizada para sua jornada de reconstrução.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg shadow-foreground/5 border border-border/60 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Nome Completo *</label>
            <input name="name" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
              <input name="email" type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">WhatsApp *</label>
              <input name="phone" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem (Opcional)</label>
            <textarea name="message" rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none" />
          </div>
          <button type="submit" disabled={sending}
            className="w-full rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm py-3.5 tracking-wide uppercase shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.97] transition-all duration-200 disabled:opacity-60">
            {sending ? "Enviando..." : "Receber Proposta Personalizada"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Seus dados são confidenciais e serão usados apenas para enviar sua proposta personalizada. Você receberá contato em até 24 horas.
          </p>
        </form>
      </div>
    </Section>
  );
}

// ─── FAQ ───
const faqs = [
  { q: "Qual é a diferença entre o Programa Reconstrução 40+ e a Jornada Essencial?", a: "O Programa Reconstrução 40+ é um processo profundo de 10 semanas com o Método Identidade Estratégica™, voltado para mulheres que desejam uma transformação completa. A Jornada Essencial é um processo de 5 semanas focado em clareza emocional e direção estratégica, ideal para quem está iniciando sua reconstrução." },
  { q: "Como funciona a Conversa de Alinhamento?", a: "A Conversa de Alinhamento é uma etapa seletiva onde avaliamos juntas se o programa é adequado para o seu momento. É uma conversa franca sobre suas necessidades, objetivos e expectativas." },
  { q: "Posso fazer atendimentos enquanto estou em um programa?", a: "Sim, os atendimentos individuais podem complementar o programa, oferecendo suporte adicional durante o processo de transformação." },
  { q: "Qual é o investimento dos programas?", a: "O investimento é apresentado exclusivamente na Conversa de Alinhamento, pois cada processo é personalizado de acordo com as necessidades individuais." },
  { q: "Como funciona o atendimento corporativo?", a: "O atendimento corporativo inclui diagnóstico dos fatores psicossociais, plano de ação estratégico, relatórios técnicos e assessoria contínua para RH e lideranças, em conformidade com a NR-1." },
  { q: "Qual é a metodologia que você utiliza?", a: "Utilizo uma abordagem integrativa que combina Psicanálise Clínica, Terapia Sistêmica, Hipnoterapia e Constelação Familiar, aliada à minha experiência de mais de 20 anos no mercado corporativo." },
];

function FAQ() {
  return (
    <Section id="faq" className="py-20 md:py-28 bg-primary/[0.03]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-[3px] bg-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Respostas para as perguntas mais comuns sobre os programas e serviços</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/60 shadow-sm px-6 overflow-hidden">
              <AccordionTrigger className="text-left font-medium text-foreground text-sm py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-display text-xl font-semibold mb-2">Marlene Corrêa</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">Psicanalista Clínica e Mentora Estratégica. Reconstrução 40+.</p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80">Contato</p>
            <a href="https://wa.me/5511973356733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone size={14} /> (11) 97335-6733
            </a>
            <a href="mailto:contato@marlenecorrea.com.br" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail size={14} /> contato@marlenecorrea.com.br
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80">Redes Sociais</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Marlene Corrêa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ───
export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Corporate />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
