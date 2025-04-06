import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Mock projects data
const projects = [
  {
    id: 1,
    title: "Simula ng Wakas EP Stickers",
    image: "/images/design/graphic-design/stickers-cover.png",
    slug: "stickers",
  },

  {
    id: 2,
    title: "Photo Quotes",
    image: "/images/design/quotes-cover.png",
    slug: "photo-quotes",
  },

  {
    id: 3,
    title: "Oddaeng Mart Branding Assets",
    image: "/images/design/graphic-design/oddaeng-main.png",
    slug: "oddaeng-assets",
  },

  {
    id: 4,
    title: "Freshlight Marketing Assets",
    image: "/images/design/graphic-design/freshlight-cover.png",
    slug: "freshlight-assets",
  },

  {
    id: 5,
    title: "Amazon",
    image: "/images/design/graphic-design/amazon/lumina/p1.jpg",
    slug: "amazon",
  },
];

export default function GraphicBrandingPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-12">Graphic Design</h1>
          <p className="body-lg text-muted-foreground">
            My work includes projects for non-profits, church social media
            pages, commissioned designs, practice works, and personal projects
            made for fun!
          </p>
        </div>

    {/* Graphic Design Section */}
        {/* AMAZON */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
           Amazon
          </h3>
          <section className="container-custom max-w-[710px] w-full h-full">
            {(() => {
              const project = projects.find((p) => p.id === 5);

              return project ? (
                <div className="bg-card border border-border rounded-lg p-8">
                  <Image
                    src={project.image || "/images/design/graphic-design/amazon/lumina/p1.jpg"}
                    alt={project.title || "Amazon"}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href={`/graphic-branding/${project.slug || "#"}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </section>
        </div>

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
              className="max-w-[600px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
           Illustrated Paper Bag Design for a Matcha Brand
          </h3>
          <Image
            src="/images/design/graphic-design/matcha-bag.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
          />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Marcid Blue's 20th Anniversary
          </h3>
          <Image
            src="/images/design/graphic-design/marcid-anniv.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
          />
        </div>

                {/* FRESHLIGHT */}
                <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Freshlight Marketing Assets
          </h3>
          <section className="container-custom max-w-[710px] w-full h-full">
            {(() => {
              const project = projects.find((p) => p.id === 4);

              return project ? (
                <div className="bg-card border border-border rounded-lg p-8">
                  <Image
                    src={
                      project.image ||
                      "/images/design/graphic-design/freshlight-cover.png"
                    }
                    alt={project.title || "Freshlight Marketing Assets"}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href={`/graphic-branding/${project.slug || "#"}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </section>
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
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Concert Wristband
          </h3>
          <Image
            src="/images/design/graphic-design/wristband.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
          />
        </div>

        {/* STICKERS */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            "Simula ng Wakas" EP Stickers
          </h3>
          <section className="container-custom max-w-[710px] w-full h-full">
            {(() => {
              const project = projects.find((p) => p.id === 1);

              return project ? (
                <div className="bg-card border border-border rounded-lg p-8">
                  <Image
                    src={
                      project.image ||
                      "/images/design/graphic-design/stickers-cover.png"
                    }
                    alt={project.title || "Stickers"}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href={`/graphic-branding/${project.slug || "#"}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </section>
        </div>

        {/* PHOTO QUOTES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Photo Quotes
          </h3>
          <section className="container-custom max-w-[710px] w-full h-full">
            {(() => {
              const project = projects.find((p) => p.id === 2);

              return project ? (
                <div className="bg-card border border-border rounded-lg p-8">
                  <Image
                    src={project.image || "/images/design/quotes-cover.png"}
                    alt={project.title || "Photo Quotes"}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href={`/graphic-branding/${project.slug || "#"}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </section>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Event Countdown Post
          </h3>
          <Image
            src="/images/design/graphic-design/event-cd-1.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[440px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl mb-8"
          />
          <Image
            src="/images/design/graphic-design/event-cd-2.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[440px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl mb-8"
          />
          <Image
            src="/images/design/graphic-design/event-cd-3.png"
            alt="ewan"
            width={800}
            height={800}
            className="max-w-[440px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
          />
        </div>

        {/* MART MATERIALS */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Oddaeng Mart Branding Assets
          </h3>
          <section className="container-custom max-w-[550px] w-full h-full">
            {(() => {
              const project = projects.find((p) => p.id === 3);

              return project ? (
                <div className="bg-card border border-border rounded-lg p-8">
                  <Image
                    src={
                      project.image ||
                      "/images/design/graphic-design/oddaeng-main.png"
                    }
                    alt={project.title || "Oddaeng Mart Branding Assets"}
                    width={800}
                    height={450}
                    className="w-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="flex justify-center mt-6">
                    <Button asChild>
                      <Link href={`/graphic-branding/${project.slug || "#"}`}>
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </section>
        </div>
      </section>
    </div>
  );
}
