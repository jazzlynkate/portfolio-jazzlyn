import Image from "next/image";

export default function AmazonListingPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">
          Amazon
          </h1>
          <p className="body-lg text-muted-foreground">
          This Amazon A+ Content sample features design concepts for two fictional brands — Lumina, a jewelry brand, and Somna, a weighted blanket brand. Each design reflects the look and feel of the brand and is tailored based on the product and target audience. These designs were created solely for portfolio use and are not affiliated with or available on Amazon.

          </p>
        </div>

        {/*Lumina Assets Section */}
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Lumina Jewelry
            </h3>
            <Image
              src="/images/design/graphic-design/amazon/lumina/items.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-5">
            {/* <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Social Media Post
            </h3> */}
            <Image
              src="/images/design/graphic-design/amazon/lumina/p1.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-5">
            {/* <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Thumbnails (White Background)
            </h3> */}
            <Image
              src="/images/design/graphic-design/amazon/lumina/p2.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-5">
            {/* <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Thumbnails (Key Visual)
            </h3> */}
            <Image
              src="/images/design/graphic-design/amazon/lumina/p3.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            {/* <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Thumbnails (Product Range)
            </h3> */}
            <Image
              src="/images/design/graphic-design/amazon/lumina/p4.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-5">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Somna Weighted Blanket
            </h3>
            <Image
              src="/images/design/graphic-design/amazon/somna/somna-full.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[770px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
      </section>
    </div>
  );
}
