import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "About Aneesh K | Mainframe & Payment Switch Journey",
  description: "Learn about Aneesh K's 10-year professional path engineering credit card systems for leading global financial institutions.",
};

export default function About() {
  const experiences = [
    {
      company: "Leading Global IT Consulting Firm (Client: Premier Latin American Bank)",
      location: "Offshore, Bangalore",
      period: "March 2024 – Present",
      role: "Design / Senior Developer & Team Lead",
      description:
        "Serving as a Senior Consultant and Lead Developer, coordinating and guiding a team of 5 engineers in maintaining and improving core banking services.",
      accomplishments: [
        "Pago de Servicio: Engineered deposit limits for ATM cash integrations and balanced inquiries limit updates.",
        "High Availability: Integrated RLS (Record Level Sharing) concepts to handle VSAM files and additional socket connections safely.",
      ],
      skills: ["Mainframe", "CICS", "VSAM", "RLS Setup", "System Design"],
    },
    {
      company: "Global IT Services Enterprise (Client: Tier-1 Global Bank, Singapore)",
      location: "Offshore, Chennai",
      period: "January 2021 – March 2024",
      role: "Design / Senior Developer & Lead",
      description:
        "Managed development, analysis, and L3 batch support for the Wealth Management - Collateral Management (MLT) Application for a tier-1 global bank.",
      accomplishments: [
        "Analyse the existing system, co-ordinate with business team to finalise the design requirement.",
        "Led SIT/UAT support phases and managed deployment infrastructure alignments with change control operations.",
        "Provided L3 batch and product support for the collateral management application.",
      ],
      skills: ["Wealth Management", "Batch Support", "SDLC Management", "High HLD Walkthrough"],
    },
    {
      company: "Global IT Services Enterprise (Client: Tier-1 Global Bank, Singapore)",
      location: "Offshore, Chennai",
      period: "March 2016 – March 2021",
      role: "Design / Senior Mainframe Developer",
      description:
        "Worked on an Enhanced Authorization System (EAS) - a credit card financial authorization engine powered by the VisionPLUS platform.",
      accomplishments: [
        "Develop the code for the design and unit test the same in various testing phases (FUT, PAT, SIT).",
        "Implemented RBI regulatory compliance code updates and card certification modules.",
        "Handled Mastercard and Diners card certification projects directly.",
      ],
      skills: ["VisionPLUS", "EAS Auth", "ISO 8583", "Mastercard/Diners", "COBOL/CICS"],
    },
    {
      company: "Global IT Services Enterprise (Client: Tier-1 Global Bank, Singapore)",
      location: "Offshore, Chennai",
      period: "September 2015 – March 2016",
      role: "Mainframe Developer",
      description:
        "Supported the Extended Payment Plan (EPP) system for a major global banking institution, developing and testing code modules.",
      accomplishments: [
        "Programmed online loan booking link pipelines matching design specifications.",
        "Created unit testing logs and coordinated deployment changes with DB teams across staging envs.",
      ],
      skills: ["EPP Systems", "JCL", "DB2", "Unit Testing"],
    },
  ];

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="space-y-16">
        {/* Intro */}
        <div>
          <SectionHeading
            title="About Me"
            subtitle="My professional journey engineering robust financial systems."
          />
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 flex flex-col gap-4 text-brand-muted text-sm leading-relaxed">
              <p>
                I am a seasoned FinTech Engineer with **9.9 years of experience** specializing in high-throughput credit card authorization systems, VisionPLUS platforms, and mainframe engineering. I have spent my career designing and optimizing core financial networks that handle millions of real-time card authorization messages securely.
              </p>
              <p>
                Over the years, I&apos;ve had the privilege of engineering core solutions for premier tier-1 global banking institutions. My expertise bridges low-level online system programming (COBOL, CICS sockets, VSAM, DB2) with modern systems analysis and release management pipelines.
              </p>
              <p>
                My professional philosophy centers on building **highly resilient, zero-downtime systems**. In payment routing, a single second of latency or failure translates into lost revenues and customer friction. I approach software engineering with a rigorous, detail-oriented design workflow—analyzing failure vectors, implementing robust fallbacks, and maintaining transparent communications.
              </p>
              <p>
                Currently, I am integrating my deep core banking domain knowledge with modern full-stack development tools (Python, FastAPI, React) and Generative AI, creating next-generation autonomous rule switches for finance.
              </p>
            </div>
            
            <div className="lg:col-span-4 rounded-xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-6">
              <h3 className="text-base font-bold text-brand-text">Professional Attributes</h3>
              <ul className="space-y-3 text-xs text-brand-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span>SLA Zero-Downtime Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span>Payment Sockets &amp; ISO 8583</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span>Agile Scrum Team Leadership</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span>Regulatory Compliance Auditing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <SectionHeading
            title="Career Timeline"
            subtitle="A timeline of my professional roles and core bank modernization efforts."
          />
          <div className="relative border-l border-brand-border pl-6 ml-4 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-primary bg-brand-bg">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-brand-primary">{exp.period}</span>
                    <span className="text-xs text-brand-muted">{exp.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text">{exp.company}</h3>
                  <p className="text-sm font-semibold text-brand-primary/80">{exp.role}</p>
                  <p className="text-xs text-brand-muted max-w-3xl mt-1 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-2 pl-4 border-l border-brand-border/60 space-y-1.5 text-xs text-brand-muted max-w-3xl">
                    {exp.accomplishments.map((acc, aIdx) => (
                      <p key={aIdx} className="leading-relaxed">
                        • {acc}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
