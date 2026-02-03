/*
 * DESIGN: Neon Cyber Gradient - Portfolio Page
 * - Blue/Purple/Magenta/Cyan gradient theme
 * - Professional experience timeline
 * - Education section
 * - Projects showcase
 * - Glass card styling with colorful glow
 */

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Rocket, ExternalLink, Apple } from "lucide-react";

// User's YouTube banner as background
const PORTFOLIO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330671572/mNMHngtIioEBwhsJ.png";

// User's thumbs up character
const CHARACTER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330671572/dmGISyJAodxIbeOk.png";

interface Position {
  role: string;
  where: string;
  interval: string;
  responsibilities: string[];
  technologies: string[];
}

interface Job {
  title: string;
  positions: Position[];
}

const jobs: Job[] = [
  {
    title: "PicPay",
    positions: [
      {
        role: "Staff iOS",
        where: "Design System",
        interval: "Outubro 2023 – Presente",
        responsibilities: [
          "Responsável por construir o novo Design System (DS) do zero, da concepção à produção.",
          "Criou uma estrutura de inversão de dependência para garantir o uso seguro e controlado dos recursos do DS.",
          "Desenvolveu proteções usando Go, TypeScript e Ruby para orientar a implementação adequada do DS.",
          "Construiu scripts e painéis para monitorar a adoção e uso do DS entre as equipes."
        ],
        technologies: ["Swift", "Go", "TypeScript", "Ruby", "SDUI", "Bitrise", "XcodeGen"]
      },
      {
        role: "Staff iOS",
        where: "Empréstimos",
        interval: "Janeiro 2022 – Setembro 2023",
        responsibilities: [
          "Suporte multifuncional na BU de Empréstimos, auxiliando múltiplos squads com arquitetura, documentação e programação em par.",
          "Desenvolveu um framework DSL usando ResultBuilder para padronizar ações, análises e feedbacks.",
          "Criou o Feedback Framework para mensagens dinâmicas ao usuário sem necessidade de atualizações do aplicativo.",
          "Desenvolveu o SampleKit, um módulo de exemplo para acelerar testes e reutilizar lógicas comuns."
        ],
        technologies: ["Swift", "Go", "SDUI"]
      }
    ]
  },
  {
    title: "Projetos Freelance",
    positions: [
      {
        role: "Senior iOS",
        where: "Greenlight Bank",
        interval: "Setembro 2023 – Agosto 2024",
        responsibilities: [
          "Trabalhou na modernização e manutenção do recurso de personalização de cartões."
        ],
        technologies: ["Swift"]
      },
      {
        role: "Senior iOS",
        where: "VidaaS",
        interval: "Maio 2021 – Agosto 2024",
        responsibilities: [
          "Implementou recursos para emissão e importação de certificados digitais.",
          "Integrou Compras In-App para direitos de uso de certificados.",
          "Criou scripts e templates para agilizar o desenvolvimento de novos recursos."
        ],
        technologies: ["Swift", "InAppPurchase"]
      },
      {
        role: "Flutter",
        where: "Vesti",
        interval: "2021 – 2022",
        responsibilities: [
          "Desenvolveu dois aplicativos de vendas de roupas (atacado e varejo).",
          "Utilizou arquitetura MVVM.",
          "Integrou funcionalidades nativas de iOS e Android."
        ],
        technologies: ["Flutter", "Dart", "Swift", "Android", "Objective-C"]
      }
    ]
  },
  {
    title: "Cornershop by Uber",
    positions: [
      {
        role: "Senior iOS",
        where: "Chat - Order",
        interval: "2021 – 2022",
        responsibilities: [
          "Integrou notificações push.",
          "Desenvolveu recursos de Timeline (fluxo de chat pós-venda).",
          "Refatorou Timeline de Objective-C para Swift usando arquitetura MVVM.",
          "Migrou telas legadas de Objective-C para Swift."
        ],
        technologies: ["Swift", "Objective-C", "Tuist", "CircleCI"]
      }
    ]
  },
  {
    title: "XP Inc.",
    positions: [
      {
        role: "Senior iOS",
        where: "Home",
        interval: "2020 – 2021",
        responsibilities: [
          "Desenvolveu a tela de Investimentos com informações detalhadas por ativo.",
          "Criou um Framework de Banner para campanhas de marketing.",
          "Integrou múltiplos módulos no aplicativo principal.",
          "Avaliou o desenvolvimento de novos produtos e monitorou a qualidade do código."
        ],
        technologies: ["Swift", "C#", "Azure DevOps", "XcodeGen"]
      }
    ]
  },
  {
    title: "Itaú",
    positions: [
      {
        role: "Senior iOS",
        where: "Sustentação",
        interval: "2019 – 2020",
        responsibilities: [
          "Manteve e garantiu a estabilidade de aplicativos como Itaú PF, Itaucard, Itaú Empresas e ITI."
        ],
        technologies: ["Swift"]
      }
    ]
  },
  {
    title: "Santander",
    positions: [
      {
        role: "Pleno iOS",
        where: "Globile Santander Project",
        interval: "2018 – 2019",
        responsibilities: [
          "Trabalhou em projeto global com o Santander Espanha.",
          "Desenvolveu componentes para Apple Watch."
        ],
        technologies: ["Swift", "Objective-C", "Apple Watch"]
      },
      {
        role: "Pleno iOS",
        where: "System Team - Sustentação - Santander ID",
        interval: "2017 – 2018",
        responsibilities: [
          "Criou um framework de segurança.",
          "Avaliou novos produtos e monitorou a qualidade do desenvolvimento."
        ],
        technologies: ["Swift", "Objective-C"]
      }
    ]
  }
];

const education = [
  {
    title: "Universidade Presbiteriana Mackenzie",
    role: "Análise e Desenvolvimento de Sistemas",
    place: "São Paulo, Brasil",
    interval: "2013 – 2017",
    description: "Formação tecnológica focada em programação e arquitetura de sistemas."
  },
  {
    title: "Escola de Tecnologia Impacta",
    role: "Desenvolvimento iOS",
    place: "São Paulo, Brasil",
    interval: "2013 – 2014",
    description: "Formação técnica em desenvolvimento iOS"
  },
  {
    title: "Escola de Tecnologia Impacta",
    role: "Desenvolvimento Android",
    place: "São Paulo, Brasil",
    interval: "2015 – 2016",
    description: "Formação técnica em desenvolvimento Android"
  }
];

const projects = [
  {
    name: "KettleGym",
    description: "Aplicativo de academia onde os usuários podem criar e acompanhar seus treinos e evolução.",
    link: "https://www.testflight.apple.com/join/ejXdUCCm",
    linkLabel: "TestFlight"
  }
];

function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 md:p-8"
    >
      <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-6">
        {job.title}
      </h3>
      
      <div className="space-y-6">
        {job.positions.map((position, posIndex) => (
          <div
            key={posIndex}
            className={`${posIndex > 0 ? "pt-6 border-t border-purple-500/20" : ""}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <span className="text-purple-400 font-semibold">{position.role}</span>
                <span className="text-white/60 mx-2">•</span>
                <span className="text-white">{position.where}</span>
              </div>
              <span className="text-white/50 text-sm italic">{position.interval}</span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {position.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {position.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-display font-semibold text-lg text-white">{edu.title}</h4>
          <p className="text-purple-400">{edu.role}</p>
        </div>
        <span className="text-white/50 text-sm italic whitespace-nowrap">{edu.interval}</span>
      </div>
      <p className="text-white/50 text-sm mb-2">{edu.place}</p>
      <p className="text-white/70 text-sm">{edu.description}</p>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card-hover p-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
          <Rocket className="text-purple-400" size={24} />
        </div>
        <div className="flex-1">
          <h4 className="font-display font-semibold text-lg text-white mb-2">{project.name}</h4>
          <p className="text-white/70 text-sm mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 text-sm font-medium transition-colors"
          >
            <Apple size={16} />
            {project.linkLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={PORTFOLIO_BG}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#1e1b4b]/90 to-[#0f172a]" />
          </div>
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  João Gabriel de <span className="gradient-text">Medeiros Pereira</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-6">
                  Desenvolvedor iOS
                </p>
                <p className="text-white/60 leading-relaxed">
                  Sou um desenvolvedor de software com mais de 10 anos de experiência, especializado em desenvolvimento iOS com Swift e tecnologias relacionadas. Possuo formação em Análise e Desenvolvimento de Sistemas e trabalhei em empresas financeiras e fintechs criando soluções reutilizáveis e colaborativas.
                </p>
              </motion.div>
              
              {/* Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full scale-75" />
                  <img
                    src={CHARACTER}
                    alt="Dev ao Cubo Character"
                    className="relative w-full max-w-xs drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Briefcase className="text-purple-400" size={20} />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Experiência Profissional
              </h2>
            </motion.div>
            
            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <JobCard key={job.title} job={job} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 bg-purple-500/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <GraduationCap className="text-pink-400" size={20} />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Educação
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <EducationCard key={edu.title + edu.role} edu={edu} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Rocket className="text-cyan-400" size={20} />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Projetos
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
