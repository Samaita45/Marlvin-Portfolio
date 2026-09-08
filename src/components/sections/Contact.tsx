import { motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SITE } from '@/lib/constants'
import { copyToClipboard, getWhatsAppUrl } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormData = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(SITE.email)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const text = [
      form.subject,
      '',
      form.message,
      '',
      `From: ${form.name}`,
      `Email: ${form.email}`,
    ].join('\n')

    const url = getWhatsAppUrl(text)
    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    if (!opened) {
      window.location.href = url
    }

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section-padding border-t border-border" aria-label="Contact">
      <div className="section-container">
        <SectionHeading index="12" label="12" title="Contact" />

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
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border p-5"
            >
              <Send className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</p>
                <p className="mt-1 text-sm text-foreground">{SITE.whatsappDisplay}</p>
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
                WhatsApp is opening with your message.
              </p>
            )}

            <Button type="submit" size="lg" className="mt-6">
              <Send className="h-4 w-4" />
              Send message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
