"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
        title: "Message sent! 🎉",
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
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="I'm excited to work with anyone — a startup, an enterprise, a government team, or a fellow student. Drop a message and let's start a conversation."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Card className="overflow-hidden border-border/70">
              <CardContent className="p-6 sm:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Available for new opportunities
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  Ready when you are
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Whether you have a question, a project, or just want to say
                  hello — I'd genuinely love to hear from you. I respond to
                  every message.
                </p>

                <div className="mt-6 space-y-3">
                  {contactInfo.map((item) => {
                    const Inner = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="truncate text-sm font-semibold text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/40 p-3 transition-all hover:border-primary/40 hover:bg-primary/5"
                      >
                        {Inner}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/40 p-3"
                      >
                        {Inner}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Find me online
                  </p>
                  <div className="mt-2 flex gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        <s.icon className="h-4.5 w-4.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border/70">
              <CardContent className="p-6 sm:p-7">
                {done ? (
                  <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">
                      Message received!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Thank you for reaching out. I'll get back to you at the
                      earliest. In the meantime, feel free to connect on social
                      media.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => setDone(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={handleChange}
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={form.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Let's work together on..."
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
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
                      className="w-full rounded-full shadow-lg shadow-primary/25"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Your message goes straight to{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {profile.email}
                      </a>
                    </p>
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
