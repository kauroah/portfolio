"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Database, Wrench } from "lucide-react"
import { useState } from "react"

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "BLoC Pattern", "Provider", "Cubit", "Firebase", "REST APIs"],
    },
    {
      icon: Code,
      title: "Backend & Web",
      skills: ["Java", "Spring Framework", "Hibernate", "Node.js", "TypeScript", "JavaScript"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Firebase Firestore", "Cloud Storage"],
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: ["Git", "Docker", "CI/CD", "Agile", "Selenium", "HTML", "Linux"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "backwards",
                }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 bg-accent/10 rounded-lg transition-all duration-300 ${hoveredCategory === index ? "bg-accent/20 scale-110" : ""}`}
                  >
                    <Icon
                      className={`h-6 w-6 text-accent transition-transform duration-300 ${hoveredCategory === index ? "rotate-12" : ""}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
