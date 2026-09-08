import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SITE } from '@/lib/constants'
import { copyToClipboard } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormData = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(SITE.email)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
      setStatus('success')
      setForm(initialForm)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: SITE.email,
        },
        publicKey,
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-border" aria-label="Contact">
      <div className="section-container">
        <SectionHeading index="05" label="05" title="Contact" />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
          >
            <div className="border border-border p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <a href={`mailto:${SITE.email}`} className="truncate text-sm text-foreground hover:underline">
                  {SITE.email}
                </a>
                <Button variant="ghost" size="sm" onClick={handleCopyEmail} aria-label="Copy email address">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 border border-border p-5">
              <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
                <p className="mt-1 text-sm text-foreground">{SITE.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={`https://github.com/${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-5"
            >
              <Github className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">GitHub</p>
                <p className="mt-1 text-sm text-foreground">@{SITE.github}</p>
              </div>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-5"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</p>
                <p className="mt-1 text-sm text-foreground">linkedin.com/in/{SITE.linkedinHandle}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 border border-border p-5"
            >
              <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <p className="text-sm text-foreground">Open your email app</p>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="border border-border p-6 md:p-8 lg:col-span-3"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-300" role="status">
                Message sent. I will reply when I can.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-700 dark:text-red-300" role="alert">
                The form did not send. Email me directly at {SITE.email}.
              </p>
            )}

            <Button type="submit" size="lg" className="mt-6" disabled={status === 'loading'}>
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
