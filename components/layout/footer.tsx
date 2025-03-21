import Link from "next/link"
import { Linkedin, Mail, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-playfair text-3xl font-bold tracking-tight">
              Jane<span className="text-muted-foreground">Doe</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Graphic Designer & Visual Artist specializing in brand identity, UI/UX design, and multimedia content.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/graphic-branding"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Graphic & Branding
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-web" className="text-muted-foreground hover:text-foreground transition-colors">
                  UI/UX & Web
                </Link>
              </li>
              <li>
                <Link href="/photography" className="text-muted-foreground hover:text-foreground transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/video-motion" className="text-muted-foreground hover:text-foreground transition-colors">
                  Video & Motion
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

