import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sparkles, Code2, Megaphone, Palette, BriefcaseBusiness } from 'lucide-react';
import OrbScene from './components/OrbScene';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } } };
const capabilities = [
  { icon: Megaphone, number: '01', title: 'Strategic communications', text: 'Public relations, brand positioning, editorial planning, stakeholder communication and digital storytelling.' },
  { icon: Palette, number: '02', title: 'Creative production', text: 'Research-led writing, visual content, graphic design and end-to-end social media publishing.' },
  { icon: BriefcaseBusiness, number: '03', title: 'Operations & coordination', text: 'Administrative support, office coordination, correspondence, scheduling and documentation.' },
  { icon: Code2, number: '04', title: 'Software & emerging technology', text: 'Full-stack development projects, system design, AI tools and practical experimentation.' },
];
const software = [
  { name: 'Meridian Pivot', type: 'Individual · Serverless inventory sync', tech: 'Node.js · Vercel Functions · Upstash Redis', detail: 'A serverless inventory synchronization service with webhook updates, scheduled polling and a persistent stock cache.', href: 'https://github.com/TheRealMilkah/meridian-pivot-serverless', status: 'Repository' },
  { name: 'Solstice Kiosk', type: 'Individual · Asynchronous workflow', tech: 'TypeScript · Fastify · Temporal', detail: 'An asynchronous check-in and badge-printing workflow with vendor queue publishing, callbacks and durable workflow state.', href: 'https://github.com/TheRealMilkah/solstice-kiosk', status: 'Repository' },
  { name: 'QuickNotes', type: 'Individual · System design', tech: 'HTML · CSS · JavaScript · REST', detail: 'A browser-based notes demonstration and documented relational data model. API writes are simulated; notes are not persistently stored.', href: 'https://github.com/TheRealMilkah/quicknotes-system-design', status: 'Repository' },
  { name: 'AZ-900 Clarity Coach', type: 'Individual · Learning prototype', tech: 'React · TypeScript · Vite', detail: 'An educational prototype that helps learners unpack Azure Fundamentals practice questions and review explanations.', href: 'https://az-900-clarity-coach-0ro2.bolt.host', status: 'Live prototype', secondary: 'https://github.com/TheRealMilkah/az-900-clarity-coach' },
  { name: 'Library Management System', type: 'Individual · In progress', tech: 'NestJS · Prisma · PostgreSQL', detail: 'A backend-focused library management project with user roles, books, genres, reviews and database migrations.', href: 'https://github.com/TheRealMilkah/library-management-system', status: 'Repository' },
];
const collaborative = [
  { name: 'Reflex — Delivery Sync', role: 'Dispatcher component contributor; README documentation', href: 'https://github.com/TheRealMilkah/reflex-delivery-sync', detail: 'A team prototype connecting retailer, dispatcher and rider views through live delivery status updates.' },
  { name: 'Northstar — Support Deflection MVP', role: 'Data engineering & packaging', href: 'https://github.com/TheRealMilkah/GROUP36', detail: 'Prepared and packaged a validated offline JSON dataset for a Python support chatbot. Team MVP scored 93.1%.', demo: 'https://northstar-support-deflection-mvp.onrender.com/' },
  { name: 'FinAssist', role: 'Product development, frontend & watsonx.ai', href: 'https://github.com/ChaserFrank/FinAssist', detail: 'Collaborative IBM technology training project. A currently available public demo has not been confirmed.' },
];

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{note && <p>{note}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Expertise', '#expertise'], ['Work', '#work'], ['Experience', '#experience'], ['Contact', '#contact']];
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>MM<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="mailto:michiramilkah@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow hero-kicker"><span className="status-dot"/> MULTIDISCIPLINARY PROFESSIONAL · NAIROBI, KENYA</motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.08 }}>Ideas into <em>impact.</em><br/>Across disciplines.</motion.h1>
            <motion.p className="hero-intro" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.16 }}>I’m Milkah Michira — a generalist working across strategic communications, creative production, organizational operations and software development.</motion.p>
            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.24 }}>
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="text-link" href="mailto:michiramilkah@gmail.com">Get in touch <ArrowUpRight size={16}/></a>
            </motion.div>
            <div className="hero-meta"><span>CURIOUS BY NATURE</span><span>BUILT THROUGH PRACTICE</span></div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <div className="visual-halo"/><OrbScene/><div className="visual-index">FIG. 01 <span>FORM IN MOTION</span></div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="intro-band"><div className="section-wrap intro-inner"><Sparkles size={18}/><p>Different disciplines. One consistent approach: <strong>understand the problem, make the work clear, and follow through.</strong></p></div></section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>A broad skill set.<br/><em>A connected way of thinking.</em></>} />
          <div className="about-grid">
            <div className="portrait-frame"><img src="/images/milkah-michira.jpg" alt="Portrait of Milkah Michira"/><span className="portrait-label">MILKAH MICHIRA · NAIROBI</span></div>
            <div className="about-copy"><p className="lead-copy">My work sits at the intersection of communication, creativity, coordination and technology.</p><p>I enjoy moving between strategy and execution: researching an issue, shaping the message, producing the visual, coordinating the details and, increasingly, building digital tools that solve practical problems.</p><p>This portfolio brings those strands together. It documents the work I do independently, the projects I contribute to with teams and the technical skills I continue to develop.</p><div className="about-signoff">Thoughtful work, made tangible. <span>— MM</span></div></div>
          </div>
        </section>

        <section className="section-wrap section-block expertise-section" id="expertise">
          <SectionHeading eyebrow="02 / WHAT I BRING" title="Four connected work streams." note="A generalist by practice, with each discipline contributing to the way I approach a brief." />
          <div className="capability-grid">{capabilities.map((item) => { const Icon = item.icon; return <motion.article className="capability-card" key={item.number} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}><div className="cap-top"><span>{item.number}</span><Icon size={21} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="card-rule"/></motion.article>; })}</div>
        </section>

        <section className="work-section section-block" id="work"><div className="section-wrap"><SectionHeading eyebrow="03 / SELECTED WORK" title="Work across disciplines." note="A selection of individual builds, communications work and collaborative projects. Open each project to explore its source or demonstration." />
          <div className="work-subhead"><span>COMMUNICATIONS & CREATIVE</span><span>01 — 02</span></div>
          <div className="brand-work-grid">
            <article className="brand-card azice"><div className="brand-card-top"><span>AZICE FOUNDATION</span><span>2024 — PRESENT</span></div><div className="brand-visual azice-visual"><div className="azice-mark">A<span>.</span></div><div className="azice-lines"><i/><i/><i/></div></div><h3>Communication for nonprofit practice.</h3><p>Social media management, communications planning, research, copywriting, visual content creation and publishing.</p><a href="https://www.linkedin.com/company/azice-foundation/" target="_blank" rel="noreferrer">View organization <ArrowUpRight size={15}/></a></article>
            <article className="brand-card mwangaza"><div className="brand-card-top"><span>MWANGAZA AFRICA CONSULTANTS</span><span>2023 — PRESENT</span></div><div className="brand-visual mwangaza-visual"><div className="mwangaza-mark">M<span>/</span></div><div className="mwangaza-lines"><i/><i/><i/></div></div><h3>Ideas and insight for business audiences.</h3><p>Public relations, thought leadership, research, editorial planning, graphic design, publishing and administrative coordination.</p><a href="https://www.linkedin.com/company/mwangazaafricaconsultants/" target="_blank" rel="noreferrer">View organization <ArrowUpRight size={15}/></a></article>
          </div>
          <div className="work-subhead software-heading"><span>SOFTWARE & DIGITAL PRODUCTS</span><span>INDIVIDUAL PROJECTS</span></div>
          <div className="project-list">{software.map((project, i) => <article className="project-row" key={project.name}><span className="project-number">0{i + 1}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.detail}</p><span className="project-tech">{project.tech}</span></div><div className="project-link"><a href={project.href} target="_blank" rel="noreferrer">{project.status} <ArrowUpRight size={16}/></a>{project.secondary && <a className="secondary-link" href={project.secondary} target="_blank" rel="noreferrer">Source code <Github size={14}/></a>}</div></article>)}</div>
          <div className="work-subhead software-heading"><span>TEAM PROJECTS</span><span>COLLABORATIVE CONTRIBUTIONS</span></div>
          <div className="collab-grid">{collaborative.map((project, i) => <article className="collab-card" key={project.name}><span className="project-type">TEAM PROJECT · 0{i + 1}</span><h3>{project.name}</h3><p>{project.detail}</p><div className="collab-role">MY CONTRIBUTION<br/><strong>{project.role}</strong></div><div className="collab-links"><a href={project.href} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={14}/></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>}</div></article>)}</div>
        </div></section>

        <section className="section-wrap section-block" id="experience"><SectionHeading eyebrow="04 / EXPERIENCE" title="Where the work happens." note="Professional roles where communications, content and coordination meet day-to-day execution."/><div className="experience-list"><article><div className="experience-date">MAR 2024 — PRESENT</div><div><h3>Social Media Manager & Communications Specialist</h3><p className="experience-org">Azice Foundation · Nairobi, Kenya · Hybrid</p><p>Lead and deliver digital communications and social media activity, including research, editorial planning, content development, visual production and publishing.</p><a href="https://www.linkedin.com/company/azice-foundation/" target="_blank" rel="noreferrer">Organization profile <ArrowUpRight size={14}/></a></div></article><article><div className="experience-date">JUL 2023 — PRESENT</div><div><h3>Public Relations Specialist</h3><p className="experience-org">Mwangaza Africa Consultants · Nairobi, Kenya · On-site</p><p>Support public relations and brand communications through research, thought leadership, copywriting, visual content, social media publishing and administrative coordination.</p><a href="https://www.linkedin.com/company/mwangazaafricaconsultants/" target="_blank" rel="noreferrer">Organization profile <ArrowUpRight size={14}/></a></div></article></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="eyebrow">05 / START A CONVERSATION</span><h2>Have something<br/>interesting in <em>mind?</em></h2><p>For collaborations, opportunities or a conversation about an idea, I'd be glad to hear from you.</p><a className="button button-light" href="mailto:michiramilkah@gmail.com">Email me <ArrowUpRight size={17}/></a><div className="social-links"><a href="https://www.linkedin.com/in/milkah-m-6731b4233/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/TheRealMilkah" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="mailto:michiramilkah@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a></div></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#home">MM<span>.</span></a><span>© {new Date().getFullYear()} MILKAH MICHIRA</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}
