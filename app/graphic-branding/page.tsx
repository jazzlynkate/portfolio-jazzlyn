import Link from "next/link";
import Image from "next/image";

export default function GraphicBrandingPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Graphic & Branding Design</h1>
          <p className="body-lg text-muted-foreground">
            Creating visual identities and marketing materials that communicate
            brand values and captivate audiences.
          </p>
        </div>

        {/* Brand Identity & Print Section */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Brand Identity & Print
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">
              01
            </span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Logos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src="/images/design/logos/PNK-Logo-2.png"
                    alt="ewan"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Ewan na title
                  </h4>
                  <p className="text-muted-foreground">Ewan na description</p>
                </div>
              </div>
              <div className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src="/images/design/logos/PNK-Logo.png"
                    alt="ewan"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Ewan na title
                  </h4>
                  <p className="text-muted-foreground">Ewan na description</p>
                </div>
              </div>
              <div className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <Image
                    src="/images/design/logos/PNK-Logo-1.png"
                    alt="ewan"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Ewan na title
                  </h4>
                  <p className="text-muted-foreground">Ewan na description</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
