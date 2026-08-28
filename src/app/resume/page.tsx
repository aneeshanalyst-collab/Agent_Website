import type { Metadata } from "next";
import React from "react";
import ResumeClientContent from "@/components/ResumeClientContent";

export const metadata: Metadata = {
  title: "Aneesh K | Interactive Resume & Skills Matrix",
  description: "Review professional FinTech employment history, VisionPLUS/COBOL certifications, and technical awards.",
};

export default function ResumePage() {
  return <ResumeClientContent />;
}
