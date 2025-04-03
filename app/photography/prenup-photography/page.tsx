import Image from "next/image";

export default function PhotographyPage() {
  // Sample images (Replace these with actual image URLs)
  const photos = [
    {
      src: "/images/design/photography/prewed-1.png",
      alt: "Portrait 1",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/prewed-4.png",
      alt: "Portrait 2",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/prewed-2.png",
      alt: "Landscape 1",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/prewed-7.png",
      alt: "Portrait 3",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/prewed-6.png",
      alt: "Portrait 4",
      orientation: "portrait",
    },
    {
      src: "/images/design/photography/prewed-3.png",
      alt: "Landscape 2",
      orientation: "landscape",
    },
    {
      src: "/images/design/photography/prewed-5.png",
      alt: "Portrait 5",
      orientation: "portrait",
    },
  ];

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Prenup Photography</h1>
          <p className="body-lg text-muted-foreground">
          {/* Capturing the love story, enhancing the photos of their shared moments and cherished locations. */}
          </p>
        </div>

        {/* Lightroom Editing Section */}
        <div>
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
      </section>
    </div>
  );
}
