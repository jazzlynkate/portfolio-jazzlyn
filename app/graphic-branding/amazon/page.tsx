import Image from "next/image";

export default function AmazonListingPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">
          Amazon Content
          </h1>
          <p className="body-lg text-muted-foreground">
          This practice project features a series of social media and e-commerce visuals designed to showcase Freshlight’s hair dye products in an engaging and informative way. The key visual uses a balanced, Harajuku-inspired aesthetic with vibrant colors and dreamy elements to create a playful yet stylish look. Social media designs, including Instagram stories and product posts, focus on helping users find their ideal shade through clear visuals and call-to-actions.<br />E-commerce thumbnails are designed in both minimalistic and branded styles, ensuring versatility across platforms while maintaining brand recognition.
          </p>
        </div>

        {/*Lumina Assets Section */}
          <div className="mb-5">
            {/* <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Key Visual
            </h3> */}
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
          <div className="mb-5">
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
      </section>
    </div>
  );
}
