import { SkillsOptimizerForm } from "./components/skills-optimizer-form";

export default function SkillsOptimizerPage() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
       <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">AI Skills Optimizer</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Unsure which skills to highlight on your resume or portfolio? Paste your profile description and current industry trends below. Our AI will analyze the information and suggest key skills to emphasize, helping you stand out to recruiters.
        </p>
      </div>

      <SkillsOptimizerForm />
    </div>
  );
}
