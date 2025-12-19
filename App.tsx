import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, Download, 
  Code, Database, Server, Cpu, GraduationCap, Briefcase, 
  Award, ChevronRight, Send, Terminal, Globe, Coffee, 
  Layers, Users, Zap, Brain, Play, Monitor, Wrench, Binary, ArrowRight, Quote
} from 'lucide-react';
import { RESUME_DATA, PROJECTS, EXPERIENCES, EDUCATIONS, SKILLS, ACHIEVEMENTS } from './constants';
import { SkillCategory } from './types';

// --- Design System Constants ---
const PRIMARY_GREEN = "#00ED64";
const DARK_BASE = "#001E2B";

const HERO_QUOTES = [
  "Simplicity is the soul of efficiency.",
  "First, solve the problem. Then, write the code.",
  "The best way to predict the future is to invent it.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Design is not just what it looks like, it's how it works."
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// --- Atomic Components ---

const RotatingQuotes = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_QUOTES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 flex items-center gap-3 text-slate-400 dark:text-slate-500 font-medium italic overflow-hidden">
      <Quote size={14} className="text-primary-400 shrink-0" />
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="whitespace-nowrap"
          >
            {HERO_QUOTES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary-400/10 text-primary-400 border border-primary-400/20 rounded-full shadow-[0_0_15px_rgba(0,237,100,0.05)]">
    {children}
  </span>
);

const TechPill = ({ name }: { name: string }) => (
  <span className="px-3 py-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg whitespace-nowrap transition-colors hover:border-primary-400/30">
    {name}
  </span>
);

const IconButton = ({ icon: Icon, href, title }: { icon: any, href?: string, title: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary-400 hover:text-primary-400 transition-all shadow-sm"
    title={title}
  >
    <Icon size={20} />
  </a>
);

const BackgroundDecor = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FCFCFC] dark:bg-[#001E2B]">
    <motion.div 
      animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary-400/10 rounded-full custom-blur opacity-50"
    />
    <motion.div 
      animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full custom-blur opacity-50"
    />
    <div className="absolute inset-0 dark:opacity-[0.03] opacity-[0.01] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:6rem_6rem]" />
  </div>
);

// --- Layout Components ---

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#001E2B]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1300px] mx-auto px-8 flex justify-between items-center">
        <div 
          className="text-2xl font-black tracking-tighter cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-primary-400 group-hover:text-emerald-400 transition-colors">GP</span>
          <span className="text-slate-900 dark:text-white">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[12px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary-400 transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge: string }) => (
  <motion.div variants={itemVariants} className="mb-16">
    <Badge>{badge}</Badge>
    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// --- Main Application ---

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 font-inter">
      <BackgroundDecor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-[1300px] mx-auto px-8 pt-32 pb-24">
        
        {/* Hero */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-start py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Badge>Open for opportunities</Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1] text-slate-900 dark:text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">Gopal Patel.</span><br />
            I engineer <span className="underline decoration-primary-400/20 underline-offset-8">scalable</span> systems.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <RotatingQuotes />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium max-w-2xl leading-relaxed"
          >
            {RESUME_DATA.tagline} Focused on Java Full Stack development and high-performance architectures.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-primary-400 hover:bg-emerald-400 text-dark-950 rounded-2xl font-bold transition-all hover:scale-[1.03] active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,237,100,0.35)] flex items-center gap-3 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects 
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1pA90WtkQrH_yHZSHpsHsS-khfJYRhw-U" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="group px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-400 text-slate-700 dark:text-white rounded-2xl font-bold transition-all backdrop-blur-md flex items-center gap-3 hover:shadow-lg active:scale-95"
            >
              <Download size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-y-0.5" /> 
              Download Resume
            </a>
          </motion.div>
        </section>

        {/* About */}
        <motion.section 
          id="about" 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={itemVariants} className="space-y-8 order-2 lg:order-1">
              <SectionHeader 
                badge="Background" 
                title="Engineering with Purpose" 
                subtitle={RESUME_DATA.about}
              />
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Graduation", val: "B.Tech 2026", icon: <GraduationCap size={20} /> },
                  { label: "Current Focus", val: "Java Full Stack", icon: <Layers size={20} /> },
                  { label: "Location", val: RESUME_DATA.location, icon: <Globe size={20} /> },
                  { label: "Industry Experience", val: "Softpro Intern", icon: <Briefcase size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 hover:border-primary-400/30 transition-all flex items-center gap-5 group shadow-sm">
                    <div className="p-3 bg-primary-400/10 text-primary-400 rounded-xl group-hover:bg-primary-400 group-hover:text-dark-950 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</h4>
                      <p className="font-bold text-slate-900 dark:text-white">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative group">
                <img 
                  src="https://drive.google.com/file/d/1OGJAuj2gknJL2C4_XfXkdQeA62UFdIFP/view?usp=drivesdk" 
                  alt="Work Environment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001E2B] to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          id="skills" 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SectionHeader 
            badge="Arsenal" 
            title="Technical Proficiency" 
            subtitle="My stack is chosen for scalability, performance, and maintainability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(SkillCategory).map((cat) => (
              <motion.div
                key={cat}
                variants={itemVariants}
                className="p-8 bg-white/60 dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-primary-400/40 backdrop-blur-xl transition-all group shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary-400/10 text-primary-400 rounded-2xl group-hover:scale-110 group-hover:bg-primary-400 group-hover:text-dark-950 transition-all duration-300 shadow-inner ring-1 ring-primary-400/20">
                    {cat === SkillCategory.Frontend && <Monitor size={24} />}
                    {cat === SkillCategory.Backend && <Cpu size={24} />}
                    {cat === SkillCategory.Databases && <Database size={24} />}
                    {cat === SkillCategory.Tools && <Wrench size={24} />}
                    {cat === SkillCategory.Others && <Binary size={24} />}
                  </div>
                  <h3 className="font-black text-xl tracking-tight text-slate-800 dark:text-white">{cat}</h3>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <TechPill key={skill.name} name={skill.name} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SectionHeader 
            badge="Portfolio" 
            title="Recent Works" 
            subtitle="Complex problems solved with elegant, efficient code."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group p-8 md:p-10 bg-white/60 dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-primary-400/40 backdrop-blur-2xl transition-all shadow-xl dark:shadow-none flex flex-col h-full overflow-hidden relative"
              >
                <div className="flex justify-between items-start mb-8 gap-4">
                  <div className="space-y-3">
                    <Badge>{project.type}</Badge>
                    <h3 className="text-3xl font-black group-hover:text-primary-400 transition-colors tracking-tighter">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && <IconButton icon={Github} href={project.github} title="Source Code" />}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 px-6 py-3 bg-primary-400 hover:bg-emerald-400 text-dark-950 rounded-xl text-sm font-bold shadow-lg transition-all hover:scale-105"
                      >
                        <Play size={16} fill="currentColor" /> Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 flex-grow font-medium leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-10 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-400">Core Features</h4>
                  <ul className="space-y-3">
                    {project.features.map(f => (
                      <li key={f} className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary-400 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          id="experience" 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SectionHeader badge="Timeline" title="Professional Path" />
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative pl-10 border-l-2 border-slate-200 dark:border-white/10 pb-4">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-400 ring-4 ring-primary-400/20 shadow-[0_0_20px_#00ed64]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-3 text-primary-400 font-bold text-lg mt-1">
                      {exp.company} <span className="text-slate-400 font-medium">• {exp.location}</span>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-500 whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4 max-w-4xl">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed flex items-start gap-4">
                      <div className="mt-2.5 w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Achievements */}
        <div className="grid lg:grid-cols-2 gap-24 py-32">
          <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
            <SectionHeader badge="Academic" title="Education" />
            <div className="space-y-6">
              {EDUCATIONS.map((edu, i) => (
                <motion.div key={i} variants={itemVariants} className="p-8 bg-white/40 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/5 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold max-w-[70%]">{edu.institution}</h3>
                    <GraduationCap className="text-primary-400" size={24} />
                  </div>
                  <p className="text-primary-400 font-bold mb-4">{edu.degree}</p>
                  <div className="flex justify-between items-center font-bold text-sm text-slate-500">
                    <span>{edu.period}</span>
                    <span className="px-3 py-1 bg-primary-400/10 text-primary-400 rounded-lg">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
            <SectionHeader badge="Awards" title="Achievements" />
            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 p-8 rounded-3xl group hover:bg-white/50 dark:hover:bg-white/5 transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                  <div className="p-4 bg-primary-400/10 text-primary-400 rounded-2xl h-fit">
                    <Award size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{ach.title}</h3>
                    <p className="text-xs text-primary-400 font-bold uppercase tracking-widest mb-3">{ach.organization} • {ach.date}</p>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{ach.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact */}
        <motion.section 
          id="contact" 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SectionHeader badge="Reach Out" title="Let's Connect" subtitle="I'm always open to discussing technical projects or opportunities." />
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black">Ready to build?</h3>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Available for full-time roles and high-impact internships. Let's build the future together.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", val: RESUME_DATA.contact.email, href: `mailto:${RESUME_DATA.contact.email}` },
                  { icon: Linkedin, label: "LinkedIn", val: "Gopal Patel", href: RESUME_DATA.contact.linkedin },
                  { icon: Github, label: "GitHub", val: "GopalPatel-GitHub", href: RESUME_DATA.contact.github },
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-6 p-6 rounded-3xl bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-primary-400/50 transition-all group shadow-sm">
                    <div className="p-4 bg-primary-400/10 text-primary-400 rounded-2xl group-hover:bg-primary-400 group-hover:text-dark-950 transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-lg font-bold">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form variants={itemVariants} className="p-10 md:p-12 bg-white/60 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-white/10 backdrop-blur-3xl space-y-6 relative overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary-400 outline-none transition-all font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary-400 outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary-400 outline-none transition-all font-bold resize-none" />
              </div>
              <button className="w-full py-5 bg-primary-400 hover:bg-emerald-400 text-dark-950 rounded-[1.5rem] font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </motion.section>

      </main>

      <footer className="py-20 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-black/20 backdrop-blur-md">
        <div className="max-w-[1300px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-3xl font-black tracking-tighter">
              <span className="text-primary-400">GP</span>.
            </div>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} {RESUME_DATA.name}. Architecting the future.
            </p>
          </div>
          <div className="flex gap-8">
            <IconButton icon={Github} href={RESUME_DATA.contact.github} title="GitHub" />
            <IconButton icon={Linkedin} href={RESUME_DATA.contact.linkedin} title="LinkedIn" />
            <IconButton icon={Mail} href={`mailto:${RESUME_DATA.contact.email}`} title="Email" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;