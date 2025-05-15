import Image from "next/image";

export default function FreshlightAssetsPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">
          Freshlight<br />Marketing Assets
          </h1>
          <p className="body-lg text-muted-foreground">
          This practice project features a series of social media and e-commerce visuals designed to showcase Freshlight’s hair dye products in an engaging and informative way. The key visual uses a balanced, Harajuku-inspired aesthetic with vibrant colors and dreamy elements. Social media designs, including Instagram stories and product posts, focus on helping users find their ideal shade through clear visuals and call-to-actions. E-commerce thumbnails are designed in both minimalistic and branded styles, ensuring versatility across platforms while maintaining brand recognition.
          </p>
        </div>

        {/*Freshlight Assets Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Key Visual
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-kv.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Social Media Post
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-sm.jpg"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Instagram Story Ad
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-ig.gif"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[400px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Thumbnails (White Background)
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-tn-1.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
             Thumbnails (Key Visual)
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-tn-2.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 mx-auto text-center">
            Thumbnails (Product Range)
            </h3>
            <Image
              src="/images/design/graphic-design/freshlight-tn-3.png"
              alt="ewan"
              width={800}
              height={800}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 mx-auto rounded-xl"
            />
          </div>
      </section>
    </div>
  );
}
