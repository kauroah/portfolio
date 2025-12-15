import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Founders",
      role: "Flutter Developer",
      period: "June 2025 - Present",
      duration: "6 months",
      description: [
        "Developed and implemented interface for investment mobile app using Flutter and Dart",
        "Applied BLoC pattern for scalable and maintainable state management",
        "Integrated Firebase services (Auth, Firestore, Cloud Storage) for secure data handling and real-time updates",
        "Created custom UI components for investment lists, filters, detailed views, and user profiles based on Figma designs",
        "Reduced screen creation time and improved performance by 30% through efficient BLoC and widget optimization",
      ],
      skills: ["Flutter", "Dart", "BLoC", "Firebase", "Figma"],
    },
    {
      company: "Salesforce (TrueSolv)",
      role: "Java Developer",
      period: "June 2023 - September 2024",
      duration: "1 year 4 months",
      description: [
        "Worked with development and version control systems",
        "Experienced with modern software architecture models and CI/CD workflows",
        "Proficient in Java frameworks including Spring and Hibernate, Java EE",
        "Strong understanding of RESTful APIs and microservices architecture",
        "Experience with database management systems including MySQL and PostgreSQL",
        "Implemented effective solutions through debugging complex code",
      ],
      skills: ["Java", "Spring", "Hibernate", "REST API", "MySQL", "PostgreSQL", "Docker"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-lg text-accent mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
