"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDownloadModal({ isOpen, onClose }: ResumeDownloadModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Email address is required.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(cleanEmail)) {
      setError("Please provide a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Send API request to server backend (which relays to email service)
      await fetch("/api/request-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      // Also send direct client-side web request to FormSubmit as backup to guarantee delivery
      try {
        await fetch("https://formsubmit.co/ajax/aneesh.analyst@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: "Requesting password for resume",
            "User Email": cleanEmail,
            "Message": `User ${cleanEmail} has requested the password to unlock your PDF resume.`,
            _captcha: "false"
          })
        });
      } catch (clientErr) {
        console.warn("Client side mail dispatch fallback:", clientErr);
      }

      // Trigger automatic PDF file download
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/Aneesh_K_Resume.pdf";
        link.download = "Aneesh_K_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setLoading(false);
        setSubmitted(true);
      }, 500);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-2xl space-y-5">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors p-1"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center space-y-4 py-4">
            <div className="rounded-full bg-brand-success/10 p-3 text-brand-success border border-brand-success/20">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-brand-text">Password Request Sent!</h3>
            <div className="space-y-2 text-xs text-brand-muted max-w-sm">
              <p>
                Thank you! Your request has been submitted. The password to open the PDF resume will be delivered to <strong className="text-brand-text">{email}</strong>.
              </p>
              <p className="text-[11px] text-brand-muted/80">
                Your PDF file download has started.
              </p>
            </div>
            <Button onClick={handleClose} variant="primary" className="w-full mt-2">
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
              <div className="rounded-lg bg-brand-primary/10 p-2 text-brand-primary border border-brand-primary/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-text">Protected PDF Resume</h3>
                <p className="text-xs text-brand-muted">Enter your email to request the password</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-brand-bg/80 border border-brand-border/60 text-xs text-brand-muted leading-relaxed">
              <p>
                🔒 <strong className="text-brand-text">Note:</strong> The password to unlock the PDF will be delivered to this email address.
              </p>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="userEmail" className="text-xs font-semibold text-brand-text">
                Your Email Address
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="name@example.com"
                className={`w-full rounded-lg border bg-brand-bg px-3.5 py-2 text-xs text-brand-text transition-colors focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                  error ? "border-brand-error" : "border-brand-border"
                }`}
                autoFocus
              />
              {error && <p className="text-[10px] text-brand-error font-medium">{error}</p>}
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" onClick={handleClose} variant="secondary" className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="primary" className="flex-1" disabled={loading}>
                {loading ? "Sending..." : "Submit & Download"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
