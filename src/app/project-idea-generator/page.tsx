import { ProjectIdeaForm } from "./components/project-idea-form";

export default function ProjectIdeaGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
       <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">AI Project Idea Generator</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Feeling stuck? Enter some technologies you'd like to work with, and our AI will generate unique project ideas to get your creativity flowing.
        </p>
      </div>

      <ProjectIdeaForm />
    </div>
  );
}
