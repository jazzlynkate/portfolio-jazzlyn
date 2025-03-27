import Image from "next/image";

export default function StickersPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">"Simula ng Wakas" EP Album Stickers</h1>
          <p className="body-lg text-muted-foreground">
          These stickers were created as a fun freebie for the EP album launch, featuring all the song titles in a vibrant, postcard-style design, and each sticker has a unique vibe inspired by the music. Special thanks to Christine Cheng for the stunning typography design!
          </p>
        </div>

        {/*Stickers Section */}
        <div>
          {Array(6).fill(null).map((_, index) => (
            <Image
              key={index}
              src={`/images/design/graphic-design/sticker-${index + 1}.png`}
              alt="Resume Scorer Wireframe"
              width={800}
              height={600}
              className="max-w-[650px] w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl mb-5 mx-auto"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
