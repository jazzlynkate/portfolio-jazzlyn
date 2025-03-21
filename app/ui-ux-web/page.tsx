import Link from "next/link"
import Image from "next/image"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Beauty Brand Landing Page",
    description: "UI/UX design for a beauty brand's landing page, focusing on conversion and user experience.",
    category: "Case Studies & Components",
    subcategory: "Beauty Brand Landing Page",
    image: "/placeholder.svg?height=600&width=800",
    slug: "beauty-brand",
  },
  {
    id: 2,
    title: "Traffic Enforcer App UI",
    description: "Mobile app interface design for traffic enforcers to streamline violation reporting.",
    category: "Case Studies & Components",
    subcategory: "Traffic Enforcer App UI",
    image: "/placeholder.svg?height=600&width=800",
    slug: "traffic-enforcer-app",
  },
  {
    id: 3,
    title: "Listing App Browsing Page",
    description: "UI design for a property listing app's browsing page with filtering and sorting capabilities.",
    category: "Case Studies & Components",
    subcategory: "Listing App (Browsing Page)",
    image: "/placeholder.svg?height=600&width=800",
    slug: "listing-app",
  },
  {
    id: 4,
    title: "Resume Scorer Wireframe",
    description: "Low-fidelity wireframes for a resume scoring application with user flow and interaction design.",
    category: "Wireframes & Prototypes",
    subcategory: "Resume Scorer Wireframe",
    image: "/placeholder.svg?height=600&width=800",
    slug: "resume-scorer",
  },
]

export default function UiUxWebPage() {
  // Group projects by category and subcategory
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = {}
    }
    if (!acc[project.category][project.subcategory]) {
      acc[project.category][project.subcategory] = []
    }
    acc[project.category][project.subcategory].push(project)
    return acc
  }, {})

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">UI/UX & Web Design</h1>
          <p className="body-lg text-muted-foreground">
            Creating intuitive and engaging digital experiences through thoughtful interface and interaction design.
          </p>
        </div>

        {/* Case Studies & Components Section */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Case Studies & Components
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          {/* Beauty Brand Landing Page */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Beauty Brand Landing Page</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groupedProjects["Case Studies & Components"]["Beauty Brand Landing Page"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/ui-ux-web/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Traffic Enforcer App UI */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Traffic Enforcer App UI</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groupedProjects["Case Studies & Components"]["Traffic Enforcer App UI"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/ui-ux-web/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Listing App (Browsing Page) */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Listing App (Browsing Page)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groupedProjects["Case Studies & Components"]["Listing App (Browsing Page)"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/ui-ux-web/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Wireframes & Prototypes Section */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Wireframes & Prototypes
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          {/* Resume Scorer Wireframe */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Resume Scorer Wireframe</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groupedProjects["Wireframes & Prototypes"]["Resume Scorer Wireframe"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/ui-ux-web/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

