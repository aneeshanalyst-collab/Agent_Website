import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Aneesh K | Professional FinTech Consulting",
  description:
    "Get in touch with Aneesh K for core banking development inquiries, card auth setups, or AI routing consults.",
};

export default function ContactPage() {
  return <ContactForm />;
}
