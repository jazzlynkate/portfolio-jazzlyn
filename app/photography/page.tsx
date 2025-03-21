import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Predebut Photography",
    description: "Lightroom editing for predebut photoshoots, enhancing colors and creating a dreamy atmosphere.",
    category: "Lightroom Editing",
    subcategory: "Predebut Photos",
    image: "/placeholder.svg?height=600&width=800",
    slug: "predebut-photography",
  },
  {
    id: 2,
    title: "Prenup Wedding Photography",
    description: "Prenup wedding photo editing with a focus on romantic tones and natural lighting enhancement.",
    category: "Lightroom Editing",
    subcategory: "Prenup Wedding Photos",
    image: "/placeholder.svg?height=600&width=800",
    slug: "prenup-photography",
  },
]

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Photography</h1>
          <p className="body-lg text-muted-foreground">
            Capturing and enhancing special moments through professional photo editing and color grading.
          </p>
        </div>

        {/* Lightroom Editing Section */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Lightroom Editing
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/photography/${project.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1067}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.subcategory}</p>
              </Link>
            ))}
            {/* Add more placeholder images to fill the gallery */}
            {[...Array(7)].map((_, index) => (
              <div key={`placeholder-${index}`} className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={`/placeholder.svg?height=1067&width=800&text=Photo+${index + 3}`}
                  alt={`Photo ${index + 3}`}
                  width={800}
                  height={1067}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Project Descriptions */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <Button asChild>
                  <Link href={`/photography/${project.slug}`}>View Project</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

