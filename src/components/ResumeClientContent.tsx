"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ResumeDownloadModal from "@/components/ResumeDownloadModal";

export default function ResumeClientContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillset = [
    { category: "Software & Languages", items: ["COBOL", "CICS", "JCL", "Easytrieve", "DB2", "VSAM"] },
    {
      category: "Tools & Utilities",
      items: [
        "File Aid",
        "File Manager",
        "Change Man",
        "ISPF",
        "NDM",
        "TSO",
        "SPUFI",
        "RTC",
        "QC",
        "Endevor",
        "Control-M",
        "Bitbucket",
        "Abend Aid",
        "Visa/MC Simulators",
        "Finsim",
      ],
    },
    {
      category: "Domain Expertise",
      items: [
        "VisionPLUS",
        "FAS (Credit Card Auth)",
        "EAS (Enhanced Auth)",
        "Wealth Management (MLT)",
        "Extended Payment Plan (EPP)",
      ],
    },
    {
      category: "Scheduling & Release",
      items: ["Tivoli Workload Scheduler", "ServiceNow (Change Request)", "Control-M"],
    },
    { category: "Future Tech & Exposure", items: ["Python", "FastAPI", "React", "JavaScript", "Hadoop", "Google Cloud"] },
  ];

  const certifications = [
    "Mainframes L2 Level Enterprise Certification",
    "Unified Certification on Cobol L2, CICS L2, JCL L2, DB2 L2",
    "Training Certification on Google Cloud & Java",
    "Coursera Certificate on Cryptography",
    "Coursera Certificate on Social Media Marketing",
  ];

  const awards = [
    "Archimedes – Best Technical / Process / Domain Innovation Award",
    "Certificate of Excellence – Outstanding contribution to client satisfaction",
    "Earned 3 Promotions within a span of 5 Years owing to continuous excellent ratings",
  ];

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="space-y-12">
        {/* Header Block */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-brand-border/60 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">Aneesh K</h1>
            <p className="text-sm text-brand-primary mt-1 font-medium">
              Authorization/Payment Expert | Agentic AI Specialist | Modernisation Consultant
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-brand-muted mt-2">
              <span>📍 Bangalore, India</span>
              <span>📧 aneesh.analyst@gmail.com</span>
            </div>
          </div>
          <Button onClick={() => setIsModalOpen(true)} variant="primary" size="md">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF Resume
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Experience Panel */}
          <div className="lg:col-span-8 space-y-8">
            <SectionHeading title="Work Experience" align="left" />

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l border-brand-border/80 pl-4 space-y-2">
                <div className="flex flex-wrap justify-between text-xs text-brand-muted">
                  <span className="font-semibold text-brand-primary">March 2024 – Present</span>
                  <span>Bangalore, India</span>
                </div>
                <h3 className="text-base font-bold text-brand-text">Leading Global IT Consulting Firm</h3>
                <p className="text-xs font-semibold text-brand-muted">Senior Consultant &amp; Team Lead (Client: Premier Latin American Bank)</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Act as a Senior Mainframe developer and coordinator for an offshore development team of 5 members, designing payment calculation engines.
                </p>
                <ul className="text-xs text-brand-muted space-y-1 pl-4 list-disc">
                  <li><strong>Pago de Servicio</strong>: ATM cash deposit limits evaluation and limit responses during inquiry.</li>
                  <li><strong>System Optimization</strong>: Introduced CICS VSAM Record Level Sharing (RLS) configurations to handle concurrent socket transaction pipelines.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l border-brand-border/80 pl-4 space-y-2">
                <div className="flex flex-wrap justify-between text-xs text-brand-muted">
                  <span className="font-semibold text-brand-primary">January 2021 – March 2024</span>
                  <span>Chennai, India</span>
                </div>
                <h3 className="text-base font-bold text-brand-text">Global IT Services Enterprise</h3>
                <p className="text-xs font-semibold text-brand-muted">Design / Senior Developer &amp; Team Lead (Client: Tier-1 Global Bank, Singapore)</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Coordinated requirements gathering and system analysis with business representatives for the Wealth Management Collateral Management (MLT) application.
                </p>
                <ul className="text-xs text-brand-muted space-y-1 pl-4 list-disc">
                  <li>Analyse the existing system, co-ordinate with business team to finalise the design requirement.</li>
                  <li>Led L3 support batched scheduling and UAT SIT release deployments.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l border-brand-border/80 pl-4 space-y-2">
                <div className="flex flex-wrap justify-between text-xs text-brand-muted">
                  <span className="font-semibold text-brand-primary">March 2016 – March 2021</span>
                  <span>Chennai, India</span>
                </div>
                <h3 className="text-base font-bold text-brand-text">Global IT Services Enterprise</h3>
                <p className="text-xs font-semibold text-brand-muted">Design / Senior Developer (Client: Tier-1 Global Bank, Singapore)</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Developed, tested, and shipped logic parameters for an Enhanced Authorization System (EAS) credit card authorization switch on the VisionPLUS platform.
                </p>
                <ul className="text-xs text-brand-muted space-y-1 pl-4 list-disc">
                  <li>Coordinated card schema certification compliance cycles for Diners and Mastercard networks.</li>
                  <li>Shipped compliance requirements in compliance with Reserve Bank of India (RBI) updates.</li>
                  <li>Conducted high-level walkthrough designs directly to client teams.</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l border-brand-border/80 pl-4 space-y-2">
                <div className="flex flex-wrap justify-between text-xs text-brand-muted">
                  <span className="font-semibold text-brand-primary">September 2015 – March 2016</span>
                  <span>Chennai, India</span>
                </div>
                <h3 className="text-base font-bold text-brand-text">Global IT Services Enterprise</h3>
                <p className="text-xs font-semibold text-brand-muted">Developer (Client: Tier-1 Global Bank, Singapore)</p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Engineered and verified modular processing items for Extended Payment Plan (EPP) transaction booking.
                </p>
                <ul className="text-xs text-brand-muted space-y-1 pl-4 list-disc">
                  <li>Develop the code as per the design documents.</li>
                  <li>Managed staging environment compilation and deployment configurations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Panel for Skills & Credentials */}
          <div className="lg:col-span-4 space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-4">Skills Matrix</h3>
              <div className="space-y-4">
                {skillset.map((skill, idx) => (
                  <Card key={idx} hoverable={false} className="p-4 border-brand-border/60">
                    <h4 className="text-xs font-semibold text-brand-text mb-2">{skill.category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skill.items.map((item, iIdx) => (
                        <Badge key={iIdx} variant="outline" className="text-[10px] px-1.5 py-0.5">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-4">Certifications</h3>
              <Card hoverable={false} className="p-4 border-brand-border/60">
                <ul className="space-y-2.5 text-xs text-brand-muted">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-brand-primary select-none">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-4">Awards &amp; Recognition</h3>
              <Card hoverable={false} className="p-4 border-brand-border/60">
                <ul className="space-y-2.5 text-xs text-brand-muted">
                  {awards.map((award, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-brand-primary select-none">★</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Container>

      {/* Password Request Modal */}
      <ResumeDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
