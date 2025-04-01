import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Beauty Brand Landing Page</h1>
          <p className="body-lg text-muted-foreground">
          This is a practice landing page designed for a conceptual skincare brand. The "Bloom" logo and product designs are also part of my practice work. The page features best-selling products, customer reviews, and an FAQ section to help users learn more about the brand. The goal is to create an engaging and user-friendly experience that highlights the products' key benefits and encourages exploration.
          </p>
        </div>

        {/* Landing Page Section */}
        <div>
          <Image
            src="/images/design/ui-ux-design/beauty-brand-landing-page.png"
            alt="Beauty Brand Landing Page"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
