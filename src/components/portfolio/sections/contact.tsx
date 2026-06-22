"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { WhatsAppIcon } from "@/components/portfolio/whatsapp-icon";
import { profile, contactInfo, socials } from "@/lib/portfolio-data";

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Almost there",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Get in Touch"
          title="Let us build something together."
          description="I welcome the opportunity to work with anyone — a startup, an enterprise, a government team, or a fellow student. Send a message and begin the conversation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Whether you have a question, a project, or just want to say
                hello — I&apos;d genuinely love to hear from you. I respond to
                every message.
              </p>
            </div>

            {/* Contact rows */}
            <div className="divide-y divide-border border-y border-border">
              {contactInfo.map((item) => {
                const Inner = (
                  <>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                      <item.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 py-4 transition-colors hover:bg-muted/30"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 py-4"
                  >
                    {Inner}
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">
                  Chat on WhatsApp
                </p>
                <p className="truncate text-sm text-muted-foreground">
                  {profile.phoneDisplay} — fastest way to reach me
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* Socials */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Find me online
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <s.icon className="h-[17px] w-[17px]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border">
              <CardContent className="p-6 sm:p-7">
                {done ? (
                  <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      Message received!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you at the
                      earliest. In the meantime, feel free to connect on social
                      media.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-md"
                      onClick={() => setDone(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Your name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={handleChange}
                          autoComplete="name"
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Email address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={handleChange}
                          autoComplete="email"
                          className="h-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Let's work together on..."
                        value={form.subject}
                        onChange={handleChange}
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, role, or idea..."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full rounded-md"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
