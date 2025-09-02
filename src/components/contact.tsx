"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Btn from "./buttons/button";

// Polished contact page with:
// - Animated hero & card, subtle gradient + grid background
// - Client-side validation (name/email/message)
// - Loading state + success/error banners
// - Accessible labels, hints, aria-live regions
// - Honeypot field to reduce spam
// - Works with your /api/contact endpoint

export default function ContactPage() {
  const socialLinks = useMemo(
    () => [
      { icon: <FaGithub />, href: "#", label: "GitHub" },
      { icon: <FaTwitter />, href: "#", label: "Twitter" },
      { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
      { icon: <FaEnvelope />, href: "mailto:hello@getup.dev", label: "Email" },
    ],
    []
  );

  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
    hp: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "" | "ok" | "err";
    msg: string;
  }>({ type: "", msg: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.values(errors).every((e) => !e);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // Honeypot: if filled, silently ignore
    if (form.hp.trim()) return;

    // Final validation gate
    if (!isValid) {
      setTouched({ username: true, email: true, message: true });
      setStatus({ type: "err", msg: "Please fix the highlighted fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "ok", msg: "Message sent successfully!" });
      setForm({ username: "", email: "", message: "", hp: "" });
      setTouched({});
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Error sending message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      <BackgroundGrid />
      <GlowOrbs />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-16 sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-center text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mt-4 max-w-3xl text-center text-base leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-lg"
        >
          I’m always open to new projects, collaborations, and friendly hellos.
          Fill out the form or reach me via social links below.
        </motion.p>

        {/* Status Banner */}
        <AnimatePresence>
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={
                "mt-6 w-full max-w-2xl rounded-lg border p-3 text-sm " +
                (status.type === "ok"
                  ? "border-emerald-600/20 bg-emerald-50 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-900/30 dark:text-emerald-200"
                  : "border-rose-600/20 bg-rose-50 text-rose-800 dark:border-rose-400/20 dark:bg-rose-900/30 dark:text-rose-200")
              }
              role="status"
              aria-live="polite"
            >
              {status.msg}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-8 w-full max-w-2xl rounded-2xl border border-black/5 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/60 sm:p-8"
          noValidate
        >
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <Field
            label="Name"
            name="username"
            type="text"
            placeholder="Your Name"
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username ? errors.username : ""}
          />

          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : ""}
          />

          <FieldTextarea
            label="Message"
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message ? errors.message : ""}
          />

          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              I usually reply within 24–48 hours.
            </p>
            <Btn
              type="submit"
              className="min-w-36 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-2.5 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-indigo-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <Spinner /> Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </Btn>
          </div>
        </motion.form>

        {/* Social Links */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-neutral-700 dark:text-neutral-300">
            Or reach me via social links:
          </p>
          <div className="flex gap-6 text-2xl text-neutral-600 dark:text-neutral-300">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -2 }}
                className="transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------- Helpers -------------------------------- */
function validate(form: {
  username: string;
  email: string;
  message: string;
  hp?: string;
}) {
  const e: Record<string, string> = {};
  if (!form.username.trim()) e.username = "Please enter your name.";
  if (!form.email.trim()) e.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email))
    e.email = "Please enter a valid email address.";
  if (!form.message.trim()) e.message = "Please enter a message.";
  else if (form.message.trim().length < 10)
    e.message = "Message should be at least 10 characters.";
  return e;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
}) {
  const id = name;
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={
          "w-full rounded-lg border bg-white/90 px-4 py-2.5 text-neutral-900 shadow-sm outline-none transition focus:ring-2 " +
          (error
            ? "border-rose-300 focus:ring-rose-300 dark:border-rose-400/40"
            : "border-neutral-300 focus:ring-neutral-300 dark:border-white/10 dark:bg-neutral-800/70 dark:text-white")
        }
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={name === "username" ? "name" : name}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-sm text-rose-600 dark:text-rose-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  error?: string;
}) {
  const id = name;
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={6}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={
          "w-full rounded-lg border bg-white/90 px-4 py-2.5 text-neutral-900 shadow-sm outline-none transition focus:ring-2 " +
          (error
            ? "border-rose-300 focus:ring-rose-300 dark:border-rose-400/40"
            : "border-neutral-300 focus:ring-neutral-300 dark:border-white/10 dark:bg-neutral-800/70 dark:text-white")
        }
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-sm text-rose-600 dark:text-rose-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
      <svg
        className="h-full w-full opacity-40 dark:opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          className="text-neutral-200 dark:text-neutral-800"
        />
      </svg>
    </div>
  );
}

function GlowOrbs() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-500/20" />
    </>
  );
}
