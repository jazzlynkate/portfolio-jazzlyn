import Link from "next/link";
import Image from "next/image";

export default function GraphicBrandingPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Graphic & Branding Design</h1>
          <p className="body-lg text-muted-foreground">
            Some of my work includes projects for non-profit organizations,
            church social media page, commisioned works, and personal projects
            created for fun!
          </p>
        </div>

        {/* Brand Identity & Print Section */}
        <div className="mb-16">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
              Pwersa ng Kabataan
            </h3>
            <Image
              src="/images/design/graphic-design/pnk-design.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[450px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
        </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Le Sserrafim's Sour Grapes Album Cover
            </h3>
            <Image
              src="/images/design/graphic-design/sour-grapes-cover.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[450px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl mb-8"
            />
            <Image
              src="/images/design/graphic-design/sour-grapes-cover-vinyl.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[450px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Strawberry Jar Label
            </h3>
            <Image
              src="/images/design/graphic-design/jam-label.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[450px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
      </section>
    </div>
  );
}
