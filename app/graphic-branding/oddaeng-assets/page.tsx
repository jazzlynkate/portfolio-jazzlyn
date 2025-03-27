import Image from "next/image";

export default function OddaengAssetsPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">
            Oddaeng Mart
            <br />
            Branding Assets
          </h1>
          <p className="body-lg text-muted-foreground">
            Created for the X layout of Oddaeng Mart, this project features the
            logo, header photo, and promotional graphics. It also includes
            engagement-focused posts like sale announcements and thank-you
            messages to enhance audience interaction.
          </p>
        </div>

        {/*Oddaeng Assets Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
              Oddaeng Text Logo
            </h3>
            <Image
              src="/images/design/graphic-design/oddaeng-main.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[550px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
              Oddaeng Text Logo (Header Size)
            </h3>
            <Image
              src="/images/design/graphic-design/oddaeng-cover.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[900px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
              Oddaeng Contacts (Header Size)
            </h3>
            <Image
              src="/images/design/graphic-design/oddaeng-header.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[900px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Promotional Schedule
            </h3>
            <Image
              src="/images/design/graphic-design/oddaeng-sale.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[550px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Customer Appreciation Post
            </h3>
            <Image
              src="/images/design/graphic-design/oddaeng-ty.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[550px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
      </section>
    </div>
  );
}
