import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Check, Copy, Github, Linkedin, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SITE } from '@/lib/constants'
import { copyToClipboard } from '@/lib/utils'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

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
      // Fallback: open mailto
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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      action: handleCopyEmail,
      actionLabel: copied ? 'Copied!' : 'Copy',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: `@${SITE.github}`,
      href: `https://github.com/${SITE.github}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'marlvin-munyanyi',
      href: SITE.linkedin,
    },
  ]

  return (
    <section id="contact" className="section-padding bg-card/20" aria-label="Contact section">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Open to internships, freelance projects, and collaboration opportunities."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {contactLinks.map(({ icon: Icon, label, value, href, action, actionLabel }) => (
              <div key={label} className="glass rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric-light">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block truncate text-sm font-medium text-foreground hover:text-electric-light transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                  {action && (
                    <Button variant="ghost" size="sm" onClick={action} aria-label="Copy email address">
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      {actionLabel}
                    </Button>
                  )}
                </div>
              </div>
            ))}

            <Button variant="default" size="lg" className="w-full" asChild>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Marlvin, I'd like to discuss a project opportunity.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 lg:col-span-3"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
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
                placeholder="Project inquiry"
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
                placeholder="Tell me about your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-emerald-400" role="status">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-400" role="alert">
                Failed to send message. Please email me directly at {SITE.email}.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={status === 'loading'}
            >
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
