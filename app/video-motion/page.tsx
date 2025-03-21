import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Bible Verse Motion Graphics",
    description: "Animated typography and visual effects for Bible verses, designed for church presentations.",
    category: "Motion Graphics",
    subcategory: "Bible Verse Video",
    image: "/placeholder.svg?height=600&width=800",
    slug: "bible-verse-motion",
  },
  {
    id: 2,
    title: "Brand Advertisement Video",
    description: "Social media advertisement video with motion graphics and visual effects for a lifestyle brand.",
    category: "Video Editing",
    subcategory: "Brand Ad Video",
    image: "/placeholder.svg?height=600&width=800",
    slug: "brand-ad",
  },
]

export default function VideoMotionPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Video & Motion Graphics</h1>
          <p className="body-lg text-muted-foreground">
            Creating engaging video content and dynamic motion graphics using After Effects and Premiere Pro.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Featured Projects
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <Badge className="mb-4">{project.category}</Badge>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                    <Button asChild size="lg">
                      <Link href={`/video-motion/${project.slug}`}>View Project</Link>
                    </Button>
                  </div>
                  <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-primary-foreground fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            My Process
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Concept & Storyboarding</h3>
              <p className="text-muted-foreground">
                Every project begins with a clear concept and detailed storyboard to map out the visual narrative and
                flow.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Animation & Editing</h3>
              <p className="text-muted-foreground">
                Using After Effects and Premiere Pro to bring the storyboard to life with dynamic animations and precise
                editing.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Refinement & Delivery</h3>
              <p className="text-muted-foreground">
                Fine-tuning the timing, transitions, and effects to create a polished final product that meets client
                objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

