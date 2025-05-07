import Image from "next/image";

export default function EcommercePage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">K2PH Ecommerce Site</h1>
          <p className="body-lg text-muted-foreground">
          An online store for buying items from Korea, mostly BTS merch and collectibles.
          </p>
        </div>

        {/*Ecommerce Section */}
        <div>
          {Array(3).fill(null).map((_, index) => (
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
