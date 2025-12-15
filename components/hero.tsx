"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail, Send } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-700">
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in zoom-in-50 duration-1000">
          Ahmed Abdelgaffar
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
        >
          Flutter Developer
        </p>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: "400ms", animationFillMode: "backwards" }}
        >
          Building scalable cross-platform mobile applications with Flutter & Dart. 1+ year of experience creating
          user-focused solutions with modern architecture patterns.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: "600ms", animationFillMode: "backwards" }}
        >
          <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
            <a href="#contact">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div
          className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: "800ms", animationFillMode: "backwards" }}
        >
          <a
            href="https://github.com/kauroah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/xrotw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="mailto:ahmedabdelhady0246@gmail.com"
            className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
