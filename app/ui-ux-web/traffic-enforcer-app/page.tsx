import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Traffic Enforcer App</h1>
          <p className="body-lg text-muted-foreground">
            This app is built for traffic enforcers in Santa Rosa, Laguna, to
            issue and record violation tickets directly into a digital database.
            It aims to reduce lost physical tickets and eliminate the need for
            manual data entry. The interface closely follows the layout of the
            physical tickets, making it easy for enforcers to use without
            confusion.
          </p>
        </div>

        {/* Traffic App Section */}
        <div>
          <Image
            src="/images/design/ui-ux-design/ctmeu-app.png"
            alt="Traffic Enforcer App"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
