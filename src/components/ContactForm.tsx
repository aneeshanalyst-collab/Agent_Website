"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Card } from "@/components/Card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="flex-1 py-12 md:py-20 bg-brand-bg">
      <Container className="space-y-12">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch for consultations, opportunities, or feedback."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverable={false} className="p-6 border-brand-border/60">
              <h3 className="text-base font-bold text-brand-text mb-4">Direct Communication</h3>

              <div className="space-y-4 text-xs text-brand-muted">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-surface p-2 text-brand-primary border border-brand-border">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">Professional Email</p>
                    <a
                      href="mailto:aneesh.analyst@gmail.com"
                      className="hover:text-brand-primary transition-colors"
                    >
                      aneesh.analyst@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-surface p-2 text-brand-primary border border-brand-border">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">Get in Touch</p>
                    <p className="text-brand-muted">
                      Thanks, send me a note, I will get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card hoverable={false} className="p-6 border-brand-border/60">
              <h3 className="text-base font-bold text-brand-text mb-4">Availability</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                I am based in Bangalore, India, working on offshore/hybrid engagements. Typically
                active during Indian Standard Time (IST) zones, as well as coordinating with
                Mexican/Singapore business hours.
              </p>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Card hoverable={false} className="border-brand-border/60 p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="rounded-full bg-brand-success/10 p-3 text-brand-success border border-brand-success/20">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text">Message Sent Successfully!</h3>
                  <p className="text-xs text-brand-muted max-w-sm">
                    Thank you for reaching out. I have received your simulated submission and will
                    respond as soon as possible.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-brand-text">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border bg-brand-bg px-3.5 py-2 text-xs text-brand-text transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                          errors.name ? "border-brand-error" : "border-brand-border"
                        }`}
                        placeholder="Aneesh K"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-brand-error font-medium">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-brand-text">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border bg-brand-bg px-3.5 py-2 text-xs text-brand-text transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                          errors.email ? "border-brand-error" : "border-brand-border"
                        }`}
                        placeholder="example@mail.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-brand-error font-medium">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-brand-text">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border bg-brand-bg px-3.5 py-2 text-xs text-brand-text transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                        errors.subject ? "border-brand-error" : "border-brand-border"
                      }`}
                      placeholder="Consultation details"
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-brand-error font-medium">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-brand-text">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border bg-brand-bg px-3.5 py-2 text-xs text-brand-text transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none ${
                        errors.message ? "border-brand-error" : "border-brand-border"
                      }`}
                      placeholder="Tell me about your project specifications..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-brand-error font-medium">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <Button type="submit" variant="primary" className="w-full" disabled={loading}>
                    {loading ? "Transmitting..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
