import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Beauty Brand Landing Page</h1>
          <p className="body-lg text-muted-foreground">
          This is a practice landing page created for a conceptual skincare brand called "Bloom." Both the logo and product designs were made solely for this design exercise. The page showcases best-selling products, customer reviews, and a helpful FAQ section to inform users about the brand. The main objective is to deliver an engaging, user-friendly experience that highlights the key benefits of the products and encourages visitors to explore further.
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
