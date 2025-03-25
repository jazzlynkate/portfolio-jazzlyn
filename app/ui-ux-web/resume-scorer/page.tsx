import Image from "next/image";

export default function PhotographyPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-lg mb-6">Resume Scorer Wireframe</h1>
          <p className="body-lg text-muted-foreground">
            AI-powered Resume Scoring and Enhancement System helps job seekers
            optimize their resumes efficiently. Users can upload or paste their
            resumes, receive an AI-generated score, and get detailed feedback
            with prioritized suggestions. An interactive editor allows real-time
            updates, rescoring, and continuous improvement. Once finalized,
            resumes can be downloaded in multiple formats or saved for future
            updates.
          </p>
        </div>

        {/*Resume Scorer Section */}
        <div>
          {Array(8).fill(null).map((_, index) => (
            <Image
              key={index}
              src={`/images/design/wireframe/Wireframe_${index + 1}.png`}
              alt="Resume Scorer Wireframe"
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
