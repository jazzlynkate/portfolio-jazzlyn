import Image from "next/image";

export default function PhotoQuotesPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Photo Quotes</h1>
          <p className="body-lg text-muted-foreground">
          A collection of photo quotes using free stock images and well-matched fonts, with each quote paired with visuals and typography that reflect its message.
          </p>
        </div>

        {/*Stickers Section */}
        <div>
          {Array(17).fill(null).map((_, index) => (
            <Image
              key={index}
              src={`/images/design/graphic-design/photo-quotes/quotes-${index + 1}.png`}
              alt="Photo Quote"
              width={800}
              height={600}
              className="max-w-[500px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl mb-5 mx-auto"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
