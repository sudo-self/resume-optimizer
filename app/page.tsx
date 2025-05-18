import { ResumeForm } from "@/components/resume-form"

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Resume Optimizer</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Fill out the form below and select the <strong>Generate Resume</strong> button to create
          a professional resume that is optimized for applicant tracking software (ATS).
        </p>
      </header>
      <main>
        <ResumeForm />
      </main>
    </div>
  )
}
