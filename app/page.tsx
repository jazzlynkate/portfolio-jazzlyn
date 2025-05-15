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
              <h1 className="heading-xl mb-4">Jazzlyn Kate</h1>

            </div>
            <p className="body-lg text-muted-foreground max-w-md">
            I enjoy working on projects that explore various forms of digital media, helping businesses and individuals create engaging content while continuously learning and improving my skills.
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
                src="/images/design/my-photo.png?height=600&width=600"
                alt="Jazzlyn Kate"
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
          {/* <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
           Explore my creative work across design, web, and media.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Graphic Design */}
          <Link href="/graphic-branding" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/images/design/graphic-design/sour-grapes-cover-vinyl.png"
                alt="Graphic Design"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Graphic Design</h3>
                <p className="text-white/80">Social media, marketing graphics, and print design</p>
              </div>
            </div>
          </Link>

          {/* UI/UX & Web Design */}
          <Link href="/ui-ux-web" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/images/design/web-design-cover.png"
                alt="UI/UX & Web Design"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">UI/UX & Web Design</h3>
                <p className="text-white/80">Wireframes, web, and app page designs</p>
              </div>
            </div>
          </Link>

          {/* Photography */}
          <Link href="/photography" className="group">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src="/images/design/photography-cover.png"
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
                src="/images/design/video-cover.png"
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
          {/* Stickers Project */}
          <div className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">01</span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                EP Stickers
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                A collection of custom stickers designed for an EP album launch, featuring song titles in a postcard-style layout. 
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/graphic-branding/stickers">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/images/design/graphic-design/stickers-cover.png"
                    alt="Brand Identity Project"
                    width={480}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Photo Quotes Project */}
          <div className="group">
            <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
              <div className="md:col-start-2">
                <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">02</span>
                <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                  Photo Quotes
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                 A collection of photo quotes using free stock images and well-matched fonts.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="graphic-branding/photo-quotes">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg md:col-start-1">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/images/design/quotes-cover.png"
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
                 Freshlight Marketing Assets
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                 A set of social media marketing materials for Freshlight. Designed to promote hair color products with a playful and trendy aesthetic.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href="/graphic-branding/freshlight-assets">View Project</Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <Image
                    src="/images/design/graphic-design/freshlight-cover.png"
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
                "Adobe Lightroom",
                "Figma",
                "Canva",
                "Adobe Illustrator",
                "Adobe After Effects",
                "Adobe Premiere Pro",
                "Adobe InDesign",
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
            I'm always open to new opportunities to learn, grow, and expand my skills.<br/>Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <a href="mailto:katejazzlyn@gmail.com" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">katejazzlyn@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/jazzlyn-kate/" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/jazzlyn-kate</span>
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8" action="https://getform.io/f/adrnmdxa" method="POST">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="message"
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

