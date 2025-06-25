import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Events Tabulation System (Activity Log)</h1>
          <p className="body-lg text-muted-foreground">
            The Activity Log page of the Events Tabulation System is designed to track and display all admin actions, such as posting, adding, editing, or removing entries within the system. Its purpose is to maintain transparency and accountability by showing a detailed history of updates made across various sections.
          </p>
        </div>

        {/*Resume Scorer Wireframe Section */}
        <div>
          {Array(6).fill(null).map((_, index) => (
            <Image
              key={index}
              src={`/images/design/ui-ux-design/events/events_${index + 1}.png`}
              alt="Events Tabulation System (Activity Log)"
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
