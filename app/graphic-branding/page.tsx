import Link from "next/link"
import Image from "next/image"

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Brand Identity for XYZ",
    description: "Complete brand identity including logo design, color palette, typography, and brand guidelines.",
    category: "Brand Identity & Print",
    subcategory: "Brand Identity",
    image: "/placeholder.svg?height=600&width=800",
    slug: "brand-identity",
  },
  {
    id: 2,
    title: "Logo Collection",
    description: "A collection of logo designs for various clients across different industries.",
    category: "Brand Identity & Print",
    subcategory: "Logos",
    image: "/placeholder.svg?height=600&width=800",
    slug: "logo-collection",
  },
  {
    id: 3,
    title: "Shirt & Wristband Designs",
    description: "Custom apparel designs for events, brands, and merchandise.",
    category: "Brand Identity & Print",
    subcategory: "Shirt & Wristband Designs",
    image: "/placeholder.svg?height=600&width=800",
    slug: "apparel-designs",
  },
  {
    id: 4,
    title: "Company Anniversary Graphics",
    description: "Celebratory graphics for a company's milestone anniversary.",
    category: "Social Media & Marketing Graphics",
    subcategory: "Company Anniversary Graphics",
    image: "/placeholder.svg?height=600&width=800",
    slug: "anniversary-graphics",
  },
  {
    id: 5,
    title: "Instagram Post Series",
    description: "Cohesive Instagram post designs for a lifestyle brand's campaign.",
    category: "Social Media & Marketing Graphics",
    subcategory: "Instagram Post for a Brand",
    image: "/placeholder.svg?height=600&width=800",
    slug: "instagram-series",
  },
  {
    id: 6,
    title: "Organic Strawberry Jar Design",
    description: "Product packaging design for an organic strawberry brand.",
    category: "Social Media & Marketing Graphics",
    subcategory: "Product Design (Jar Design)",
    image: "/placeholder.svg?height=600&width=800",
    slug: "jar-design",
  },
  {
    id: 7,
    title: "Indie Album Vinyl Cover",
    description: "Vinyl album cover design for an independent music artist.",
    category: "Social Media & Marketing Graphics",
    subcategory: "Album Cover (Vinyl Design)",
    image: "/placeholder.svg?height=600&width=800",
    slug: "vinyl-design",
  },
]

export default function GraphicBrandingPage() {
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
          <h1 className="heading-xl mb-6">Graphic & Branding Design</h1>
          <p className="body-lg text-muted-foreground">
            Creating visual identities and marketing materials that communicate brand values and captivate audiences.
          </p>
        </div>

        {/* Brand Identity & Print Section */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Brand Identity & Print
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          {/* Logos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Logos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Brand Identity & Print"]["Logos"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

          {/* Shirt & Wristband Designs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Shirt & Wristband Designs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Brand Identity & Print"]["Shirt & Wristband Designs"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

          {/* Brand Identity */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Brand Identity</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {groupedProjects["Brand Identity & Print"]["Brand Identity"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
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

        {/* Social Media & Marketing Graphics Section */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Social Media & Marketing Graphics
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          {/* Company Anniversary Graphics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Company Anniversary Graphics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Social Media & Marketing Graphics"]["Company Anniversary Graphics"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

          {/* Instagram Post for a Brand */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Instagram Post for a Brand</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Social Media & Marketing Graphics"]["Instagram Post for a Brand"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

          {/* Product Design (Jar Design) */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Product Design (Jar Design)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Social Media & Marketing Graphics"]["Product Design (Jar Design)"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

          {/* Album Cover (Vinyl Design) */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Album Cover (Vinyl Design)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedProjects["Social Media & Marketing Graphics"]["Album Cover (Vinyl Design)"]?.map((project) => (
                <Link
                  key={project.id}
                  href={`/graphic-branding/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={800}
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

