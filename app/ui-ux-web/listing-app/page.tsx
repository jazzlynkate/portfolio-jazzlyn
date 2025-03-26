import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Property Listing App</h1>
          <p className="body-lg text-muted-foreground">
          These pages in this app primarily focus on browsing, filtering, and viewing property details, helping users find homes or rental spaces that best suit their needs. With an intuitive design, users can easily explore listings, check essential details, and connect with property owners or agents.
          </p>
        </div>

        {/* Property Listing App Section */}
        <div>
          <Image
            src="/images/design/ui-ux-design/beauty-brand-landing-page.png"
            alt="Property Listing App"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
