"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, MapPin } from "lucide-react"
import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("loading")

    const formData = new FormData(e.currentTarget)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setFormState("success")
        setMessage(
          "Message received! Note: This is a demo form. For direct contact, please use the email address above.",
        )
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => {
          setFormState("idle")
          setMessage("")
        }, 5000)
      } else {
        setFormState("error")
        setMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setFormState("error")
      setMessage("An error occurred. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          I'm currently open to new opportunities and interesting projects. Feel free to reach out if you'd like to
          discuss potential collaboration!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a href="mailto:ahmedabdelhady0246@gmail.com" className="block">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground hover:text-accent break-all">ahmedabdelhady0246@gmail.com</p>
            </Card>
          </a>

          <a href="tel:+79968469573" className="block">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground hover:text-accent">+7 (996) 846-95-73</p>
            </Card>
          </a>

          <a href="https://t.me/xrotw" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <Send className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-sm text-muted-foreground hover:text-accent">@xrotw</p>
            </Card>
          </a>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Kazan, Russia</p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  disabled={formState === "loading"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  disabled={formState === "loading"}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                disabled={formState === "loading"}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                rows={6}
                disabled={formState === "loading"}
              />
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg text-center ${
                  formState === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                }`}
              >
                {message}
              </div>
            )}

            <Button type="submit" size="lg" className="w-full gap-2" disabled={formState === "loading"}>
              {formState === "loading" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>

      <footer className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>© 2025 Ahmed Abdelhady. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </section>
  )
}
