import type { Metadata } from "next";
import React from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "FinTech Portfolio | FinAgent AI & Payment Switches",
  description: "Explore payment switches, QR scan-and-pay integrations, and the open-source FinAgent AI orchestration engine.",
};

export default function Projects() {
  const bankProjects = [
    {
      title: "High Availability & RLS Integration",
      client: "Premier Latin American Bank",
      description:
        "Introduced Record Level Sharing (RLS) concepts to VSAM files, resolving file locking contentions and handling additional concurrent Socket connections for balanced system performance.",
      outcomes: ["Uptime enhancement", "Concurrent socket load support", "Decreased file contention"],
      tags: ["VSAM RLS", "CICS Sockets", "COBOL", "High Availability"],
    },
    {
      title: "Pago de Servicio ATM Engine",
      client: "Premier Latin American Bank",
      description:
        "Designed ATM cash deposit calculation rules, validating limits dynamically and responding with current available limit bounds during real-time balance inquiries.",
      outcomes: ["Dynamic limits enforcement", "ATM transaction validation", "Reduced accounting gaps"],
      tags: ["COBOL", "CICS Online", "ATM Systems", "Business Logic"],
    },
    {
      title: "EAS Enhanced Card Authorization System",
      client: "Tier-1 Global Bank, Singapore",
      description:
        "Maintained and updated online card authorization modules built on the VisionPLUS platform, handling transactional routing, card validations, and card schema compliance validations.",
      outcomes: [
        "Mastercard & Diners card certifications",
        "RBI regulatory code updates",
        "High throughput transaction switch tuning",
      ],
      tags: ["VisionPLUS", "EAS Auth", "Mastercard / Diners", "ISO 8583"],
    },
    {
      title: "Bharath-QR Scan and Pay",
      client: "Tier-1 Global Bank, Singapore",
      description:
        "Implemented authorization rules and processing logic for accepting scan-and-pay transactions using QR codes.",
      outcomes: ["QR transaction parsing", "Reduced payment routing times"],
      tags: ["QR Payments", "EPP Systems", "VisionPLUS"],
    },
    {
      title: "INC-Lending for Spending & EPP",
      client: "Tier-1 Global Bank, Singapore",
      description:
        "Created design schemas and code modules linking the Extended Payment Plan (EPP) with active card systems, allowing clients to book loans online dynamically.",
      outcomes: ["Online loan booking system", "Automated EMI calculations"],
      tags: ["EPP Modules", "DB2 Databases", "JCL Batch", "Loan Processing"],
    },
    {
      title: "Samsung Pay & Mobile Wallet Integration",
      client: "Tier-1 Global Bank, Singapore",
      description:
        "Engineered retrofitted card processing layers to support secure wallet-based transactions for major mobile wallets.",
      outcomes: ["Secure tokenization processing", "Wallet authorization enabling"],
      tags: ["Wallet Transactions", "Mobile Wallets", "Card Tokenization"],
    },
  ];

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="space-y-16">
        {/* Flagship Section */}
        <div>
          <SectionHeading
            title="Flagship Project"
            subtitle="Bridging core payment infrastructures with intelligent Agentic AI."
          />

          <Card className="glow-primary border-brand-primary/20 bg-brand-surface/80 p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-brand-text">FinAgent AI</h3>
                  <p className="text-xs font-mono text-brand-primary mt-0.5">Version v0.1.0 • Under Active Development</p>
                </div>
                <Badge variant="primary" className="h-fit">Open Source Demonstration</Badge>
              </div>

              <p className="text-sm text-brand-muted leading-relaxed">
                FinAgent AI is a concept platform demonstrating how Artificial Intelligence can transform modern payment switches and credit card engines. The project integrates standard payment structures (like message structures, validation routines, and routing networks) with Generative AI models and Agentic frameworks to construct automated audit checks and smart compliance modules.
              </p>

              <div className="grid gap-6 md:grid-cols-3 border-t border-brand-border/60 pt-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-2">Planned Features</h4>
                  <ul className="space-y-1.5 text-xs text-brand-muted">
                    <li>• ISO 8583 Message Parser</li>
                    <li>• AI-Based Authorization Copilot</li>
                    <li>• Dynamic Risk Rule Engine</li>
                    <li>• Compliance Operations Agent</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-2">Technology Stack</h4>
                  <ul className="space-y-1.5 text-xs text-brand-muted">
                    <li>• Python (FastAPI backend)</li>
                    <li>• OpenAI API / LangChain</li>
                    <li>• React &amp; Tailwind CSS</li>
                    <li>• PostgreSQL &amp; Docker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-2">Roadmap Milestones</h4>
                  <ul className="space-y-1.5 text-xs text-brand-muted">
                    <li>• Phase 1: Core Payment Switch</li>
                    <li>• Phase 2: Fraud Detection Models</li>
                    <li>• Phase 3: Operations AI &amp; Audit Logs</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-brand-border/40">
                <Button href="https://github.com" variant="outline" size="md">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub Repository
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bank Modernization Portfolio */}
        <div>
          <SectionHeading
            title="Enterprise Banking Portfolio"
            subtitle="Modernization projects, card integrations, and transaction authorization systems engineered for global banking clients."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bankProjects.map((project, idx) => (
              <Card key={idx} className="flex flex-col h-full hover:border-brand-primary/30 transition-glow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-primary">{project.client}</span>
                  </div>
                  <CardTitle className="text-base font-bold text-brand-text leading-snug">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-1 pl-2 border-l border-brand-border/60 text-[11px] text-brand-muted">
                    {project.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-brand-primary/60" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-brand-border/40 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant="outline" className="text-[10px] px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
