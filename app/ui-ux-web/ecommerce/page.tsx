import Image from "next/image";

export default function EcommercePage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">K2PH Ecommerce Site</h1>
          <p className="body-lg text-muted-foreground">
          An ongoing e-commerce project for a seller of korean group items, primarily BTS merchandise and collectibles. The platform is intended to replace her use of Facebook group by providing a more organized and professional way to manage and sell products online.
          </p>
        </div>

        {/*Ecommerce Section */}
        <div>
          {Array(4).fill(null).map((_, index) => (
            <Image
              key={index}
              src={`/images/design/ui-ux-design/ecommerce/ecommerce-${index + 1}.png`}
              alt="K2PH Ecommerce Site"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl mb-12"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
