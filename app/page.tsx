import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">Jane Doe</h1>
              <h2 className="heading-md text-muted-foreground">Graphic Designer & Visual Artist</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              I create compelling visual identities, engaging UI/UX designs, and captivating photo and video content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/graphic-branding">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Jane Doe"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#portfolio" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* Portfolio Categories Section */}
      <section id="portfolio" className="container-custom section-spacing">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">My Portfolio</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work across different design disciplines, from brand identity to motion graphics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Graphic & Branding Design */}
          <Link href="/graphic-branding" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Graphic & Branding Design"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Graphic & Branding Design</h3>
                <p className="text-white/80">Brand identity, print design, and marketing graphics</p>
              </div>
            </div>
          </Link>

          {/* UI/UX & Web Design */}
          <Link href="/ui-ux-web" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="UI/UX & Web Design"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">UI/UX & Web Design</h3>
                <p className="text-white/80">Case studies, components, wireframes, and prototypes</p>
              </div>
            </div>
          </Link>

          {/* Photography */}
          <Link href="/photography" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Photography"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Photography</h3>
                <p className="text-white/80">Lightroom editing for predebut & prenup wedding photos</p>
              </div>
            </div>
          </Link>

          {/* Video Editing & Motion Graphics */}
          <Link href="/video-motion" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Video Editing & Motion Graphics"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Video & Motion Graphics</h3>
                <p className="text-white/80">After Effects and Premiere Pro projects</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
          </h2>
        </div>

        <div className="grid gap-24">
          {/* Brand Identity Project */}
          <div className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">01</span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                  Brand Identity for XYZ
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Complete brand identity including logo design, color palette, typography, and brand guidelines.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/graphic-branding/brand-identity">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/placeholder.svg?height=270&width=480"
                    alt="Brand Identity Project"
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Project */}
          <div className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
              <div className="md:col-start-2">
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">02</span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                  Beauty Brand Landing Page
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  UI/UX design for a beauty brand's landing page, focusing on conversion and user experience.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/ui-ux-web/beauty-brand">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg md:col-start-1">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/placeholder.svg?height=270&width=480"
                    alt="UI/UX Project"
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Project */}
          <div className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">03</span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                  Brand Ad Video
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Social media advertisement video with motion graphics and visual effects for a lifestyle brand.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/video-motion/brand-ad">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/placeholder.svg?height=270&width=480"
                    alt="Video Project"
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {[
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe InDesign",
                "Adobe XD",
                "Figma",
                "Adobe Lightroom",
                "Adobe Premiere Pro",
                "Adobe After Effects",
              ].map((skill, index) => (
                <div key={skill} className="border-b border-border pb-2 group">
                  <div className="flex items-baseline">
                    <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          Get In Touch
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
            03
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">jane.doe@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/janedoe</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">twitter.com/janedoe</span>
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              <div>
                <Button size="lg" className="text-lg px-8 w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

