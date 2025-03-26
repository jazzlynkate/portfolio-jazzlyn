import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Beauty Brand Landing Page</h1>
          <p className="body-lg text-muted-foreground">
          This project is a practice landing page for a skincare brand. It showcases best-selling products, customer reviews, and a FAQ section where users can find answers to common questions. The goal is to create an engaging, user-friendly experience that highlights the product’s key benefits and encourages users to explore more about the brand.
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
