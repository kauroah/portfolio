"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Investment Platform Mobile App",
      company: "Founders",
      description:
        "A comprehensive mobile investment platform featuring real-time data updates, dynamic filtering, and secure authentication. Built with Flutter and Firebase, implementing clean architecture and BLoC state management.",
      achievements: [
        "Developed dynamic investment filtering system improving user navigation by 40%",
        "Integrated real-time Firebase data synchronization",
        "Improved performance by 30% through widget and BLoC optimization",
        "Delivered full-featured MVP within tight deadlines",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "BLoC", "Figma"],
    },
    {
      title: "Enterprise Microservices",
      company: "Salesforce (TrueSolv)",
      description:
        "Backend microservices architecture for enterprise solutions using Java Spring Framework. Implemented RESTful APIs, database optimization, and CI/CD workflows for reliable software delivery.",
      achievements: [
        "Built scalable microservices with Spring Boot",
        "Implemented RESTful API endpoints with comprehensive testing",
        "Optimized database queries for improved performance",
        "Maintained code quality through unit testing and debugging",
      ],
      technologies: ["Java", "Spring", "Hibernate", "PostgreSQL", "Docker", "REST API"],
    },
    {
      title: "E-Commerce Shopping App",
      company: "Personal Project",
      description:
        "Full-featured e-commerce mobile application with shopping cart, payment integration, and order tracking. Implemented Provider state management and integrated with Stripe for secure payments.",
      achievements: [
        "Built complete shopping flow from product browsing to checkout",
        "Integrated Stripe payment gateway for secure transactions",
        "Implemented local cart persistence and wish list functionality",
        "Created responsive UI adapting to different screen sizes",
      ],
      technologies: ["Flutter", "Provider", "Stripe", "REST API", "SQLite"],
    },
    {
      title: "Weather Forecast App",
      company: "Personal Project",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Features clean UI with animated weather icons and detailed hourly/weekly forecasts.",
      achievements: [
        "Integrated OpenWeather API for accurate weather data",
        "Implemented geolocation services for automatic city detection",
        "Created animated weather icons for enhanced UX",
        "Added offline caching for previously searched locations",
      ],
      technologies: ["Flutter", "GetX", "OpenWeather API", "Google Maps", "Hive"],
    },
    {
      title: "Task Management & Productivity App",
      company: "Personal Project",
      description:
        "Productivity app with task scheduling, reminders, and habit tracking. Features calendar integration, priority management, and data visualization for tracking progress over time.",
      achievements: [
        "Implemented local notifications for task reminders",
        "Created interactive charts for productivity insights",
        "Built calendar view with drag-and-drop task scheduling",
        "Added dark mode with custom theme switching",
      ],
      technologies: ["Flutter", "Riverpod", "Isar Database", "Notification API", "Charts"],
    },
    {
      title: "Social Media Chat Application",
      company: "Academic Project",
      description:
        "Real-time messaging app with group chats, media sharing, and push notifications. Built using Firebase Firestore for real-time updates and Cloud Storage for media files.",
      achievements: [
        "Implemented real-time messaging with read receipts",
        "Added image/video sharing with compression",
        "Built user authentication with phone number verification",
        "Created group chat functionality with admin controls",
      ],
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "FCM", "Image Picker"],
    },
    {
      title: "Fitness & Health Tracker",
      company: "Personal Project",
      description:
        "Health monitoring app tracking workouts, nutrition, and water intake. Features step counter, calorie calculator, and progress visualization with weekly/monthly reports.",
      achievements: [
        "Integrated pedometer for step counting and activity tracking",
        "Built nutrition database with calorie tracking",
        "Created workout builder with custom exercise plans",
        "Designed data visualization for health metrics",
      ],
      technologies: ["Flutter", "BLoC", "Health Kit", "Charts", "Local Storage"],
    },
    {
      title: "Hotel Booking Platform",
      company: "Academic Project",
      description:
        "Full-stack hotel reservation system with room availability checking, booking management, and payment processing. Built with Java Spring Boot backend and RESTful API architecture with MySQL database.",
      achievements: [
        "Developed comprehensive booking system with real-time availability",
        "Implemented secure payment processing and booking confirmation",
        "Built admin dashboard for room and reservation management",
        "Created RESTful APIs with Spring Security authentication",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Thymeleaf", "REST API"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-in fade-in duration-700">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "backwards",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-8">
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="mb-3 animate-in slide-in-from-left-4 duration-500"
                    style={{ animationDelay: `${index * 150 + 200}ms`, animationFillMode: "backwards" }}
                  >
                    {project.company}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground animate-in fade-in slide-in-from-left-2 duration-500"
                        style={{
                          animationDelay: `${index * 150 + 300 + i * 100}ms`,
                          animationFillMode: "backwards",
                        }}
                      >
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
