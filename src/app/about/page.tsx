import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Star, UserCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About Me</h1>
        <p className="text-lg text-muted-foreground mt-2">My journey, my skills, and my passion for development.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
           <Card className="shadow-xl transform hover:scale-105 transition-transform duration-500 flex items-center justify-center aspect-square bg-secondary/30">
            <UserCircle2 className="w-32 h-32 text-primary" />
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8 text-lg text-foreground/90">
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><GraduationCap className="w-8 h-8 mr-3 text-accent" />My Story</h2>
            <p>
              I am a recent Master of Computer Applications (MCA) graduate with a strong foundation in backend development, REST API integration, and database management. I'm passionate about building elegant and efficient solutions to complex problems and eager to contribute my skills to a dynamic team.
            </p>
          </div>
           <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><Code className="w-8 h-8 mr-3 text-accent" />My Expertise</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>Backend Development with Python (Flask) and JavaScript (Node.js).</li>
                <li>REST API design, integration, and testing with Postman.</li>
                <li>Database management with both SQL and NoSQL (MongoDB) databases.</li>
                <li>Modern frontend development with HTML, CSS, JavaScript, and React.</li>
                 <li>AI integration using modern tools and frameworks.</li>
            </ul>
          </div>
           <div>
             <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><Star className="w-8 h-8 mr-3 text-accent" />Why I Stand Out</h2>
            <p>
              As a quick learner and a highly motivated developer, I excel in collaborative environments. I possess strong problem-solving skills and a keen attention to detail, allowing me to develop robust and scalable applications. I'm always ready to embrace new challenges and continue my growth in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
