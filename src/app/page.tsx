import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-12 md:py-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Badge variant="primary" className="w-fit">
              Authorization/Payment Expert | Agentic AI Specialist | Modernisation Consultant
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-text sm:text-5xl md:text-6xl">
              Engineering the Future of <span className="text-brand-primary">AI-Powered Payments</span>
            </h1>
            <div className="flex flex-col gap-4 text-brand-muted max-w-2xl leading-relaxed text-base">
              <p>
                Technology has continually transformed the way we move money—from cash to cards, online banking to real-time payments—making every generation of financial systems faster, more secure, and more accessible.
              </p>
              <p>
                For over a decade, I&apos;ve worked behind the scenes where every payment demanded reliability, resilience, and trust.
              </p>
              <p>
                Today, I&apos;m bridging traditional payment infrastructure with Agentic AI and modern full-stack engineering to explore what&apos;s possible next.
              </p>
              <p className="text-brand-primary font-semibold">
                Building the next generation of intelligent payment infrastructure—where AI makes financial systems faster, smarter, and more resilient.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="/projects" variant="primary" size="lg">
                Explore Projects
              </Button>
              <Button href="/resume" variant="secondary" size="lg">
                View Resume
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card className="glow-primary border-brand-primary/20 bg-brand-surface/90">
              <CardHeader>
                <CardTitle className="text-brand-primary">Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-1 border-b border-brand-border/60 pb-3">
                  <span className="text-sm font-semibold text-brand-text">Agentic AI</span>
                  <span className="text-xs text-brand-muted">Autonomous systems for financial services</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-brand-border/60 pb-3">
                  <span className="text-sm font-semibold text-brand-text">Payment Infrastructure</span>
                  <span className="text-xs text-brand-muted">Engineering intelligent payment platforms</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-brand-border/60 pb-3">
                  <span className="text-sm font-semibold text-brand-text">Modern Engineering</span>
                  <span className="text-xs text-brand-muted">Cloud-native, API-first architectures, LLMs, RAG, MCP &amp; AI Agents</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-brand-text">Modern Full Stack</span>
                  <span className="text-xs text-brand-muted">FastAPI • React • Docker • Cloud</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Expertise Summary Section */}
      <section className="bg-brand-surface/30 py-16 border-y border-brand-border/40">
        <Container>
          <div className="flex flex-col mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-brand-text sm:text-3xl">
              Core Expertise Areas
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              Deep understanding of high-throughput payment architectures combined with hands-on systems analysis.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-bg p-6">
              <div className="text-brand-primary mb-1">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text">Payment Authorization</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Expertise in Enhanced Authorization Systems (EAS), wallet transactions (Samsung Pay / Mobile Wallets), and QR transaction processing.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-bg p-6">
              <div className="text-brand-primary mb-1">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text">Mainframe Engineering</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Proficient with COBOL, CICS online programming, JCL batch runs, DB2 databases, VSAM file systems, and performance tuning (RLS).
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-bg p-6">
              <div className="text-brand-primary mb-1">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text">Team Leadership</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Led offshore engineering teams, aligned requirements with global client stakeholders, and managed critical batch schedules.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-bg p-6">
              <div className="text-brand-primary mb-1">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-text">AI &amp; Future Tech</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Extending legacy core systems using modern AI, creating agentic copilots for banking rules, and implementing FastAPI applications.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Flagship Project Section */}
      <section>
        <Container>
          <div className="flex flex-col mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-brand-text sm:text-3xl">
              Featured Flagship Project
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              Introducing my active open-source project bridging Generative AI and core payment processing lines.
            </p>
          </div>

          <Card className="overflow-hidden hover:border-brand-primary/40 transition-glow">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7 flex flex-col gap-4">
                <Badge variant="success" className="w-fit">Active Development</Badge>
                <h3 className="text-2xl font-bold text-brand-text">FinAgent AI</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  An open-source platform demonstrating how Generative and Agentic AI can transform traditional payment systems. It combines credit card authorization principles with intelligent assistant routing to construct compliance audits, ISO 8583 parsers, and smart routing networks.
                </p>
                <div className="flex flex-wrap gap-2 my-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <Button href="/projects" variant="primary">
                    Project Architecture Details
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5 bg-brand-surface rounded-lg p-6 border border-brand-border">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary mb-3">System Roadmap</h4>
                <ul className="space-y-3 text-xs text-brand-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                    <span>Phase 1: Payment Switch &amp; Rule Engine (In Progress)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/40" />
                    <span>Phase 2: Real-time AI Authorization Copilot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary/40" />
                    <span>Phase 3: Agentic Compliance Operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-brand-surface to-brand-bg py-16 border-t border-brand-border">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl leading-relaxed">
            I am currently open to senior engineering roles, architectural consultations, and FinTech product design opportunities. Let&apos;s discuss how we can modernize your payment systems or integrate AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Me
            </Button>
            <Button href="/resume" variant="outline" size="lg">
              View Skills Directory
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
