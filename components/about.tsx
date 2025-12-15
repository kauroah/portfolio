import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Flutter developer with nearly 2 years of experience building cross-platform mobile applications
              using Flutter and Dart, alongside hands-on experience as a Java developer. I specialize in creating
              scalable, performant, and user-friendly mobile solutions with a focus on clean architecture and
              exceptional user experience.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Founders, I contributed to developing an investment mobile app, implementing dynamic investment lists,
              filters, detailed screens, and user profiles. My optimization of widget structure and state management
              resulted in 30% performance improvements and reduced development time.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">Kazan Federal University</p>
              <p className="text-sm text-muted-foreground">Software Engineering, 2026</p>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Kazan, Russia</p>
              <p className="text-sm text-muted-foreground">Open to relocation</p>
            </div>
          </Card>

          <Card className="p-6 flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground">Arabic (Native)</p>
              <p className="text-sm text-muted-foreground">English, Russian (B2)</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
