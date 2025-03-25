import Image from "next/image";

export default function PhotographyPage() {
  // Sample images (Replace these with actual image URLs)
  const photos = [
    {
      src: "/images/design/photography/ange-7.jpg",
      alt: "Portrait 1",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/ange-6.jpg",
      alt: "Portrait 2",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/ange-1.jpg",
      alt: "Landscape 1",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/ange-4.jpg",
      alt: "Portrait 3",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/ange-8.jpg",
      alt: "Portrait 4",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/ange.png",
      alt: "Landscape 2",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/ange-2.png",
      alt: "Portrait 5",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/janna-1.jpg",
      alt: "Portrait 6",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/janna-2.jpg",
      alt: "Landscape 3",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/janna-4.jpg",
      alt: "Landscape 4",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/janna-3.jpg",
      alt: "Portrait 7",
      orientation: "portrait",
    },
  ];

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Predebut Photography</h1>
          <p className="body-lg text-muted-foreground">
            Capturing and enhancing special moments through photo editing and
            color grading.
          </p>
        </div>

        {/* Lightroom Editing Section */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Angelyn XVIII | Predebut Highlights
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">
              01
            </span>
          </h2>

          {/* Photo Grid */}
          <div className="grid gap-6">
            {/* 1st Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:col-span-2">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* 2nd Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Image
                  src={photos[5].src}
                  alt={photos[5].alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:col-span-1">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* 3rd Row (3 Portraits) */}
            <div className="grid md:grid-cols-3 gap-6">
              {photos
                .filter((_, index) => [3, 4, 6].includes(index))
                .map((photo, index) => (
                  <div key={index}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Lightroom Editing Section */}
        <div>
          <h2 className="heading-lg mb-10 mt-20 relative">
            Janna XVIII | Predebut Highlights
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">
              02
            </span>
          </h2>

          {/* Photo Grid */}
          <div className="grid gap-6">
            {/* 1st Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Image
                  src={photos[7].src}
                  alt={photos[7].alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:col-span-2">
                <Image
                  src={photos[8].src}
                  alt={photos[8].alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* 2nd Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Image
                  src={photos[9].src}
                  alt={photos[9].alt}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:col-span-1">
                <Image
                  src={photos[10].src}
                  alt={photos[10].alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
