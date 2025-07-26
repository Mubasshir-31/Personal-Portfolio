import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About Me</h1>
        <p className="text-lg text-muted-foreground mt-2">A little bit about my journey and passions.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                 <Image
                  src="https://i.postimg.cc/k40wHhKR/Mubasshir-s-Photo.jpg"
                  alt="Professional photo"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="professional portrait"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8 text-lg text-foreground/90">
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><GraduationCap className="w-8 h-8 mr-3 text-accent" />My Background</h2>
            <p>
              As a motivated and detail-oriented Master of Computer Applications (MCA) graduate, I have a strong academic foundation in REST API integration, Object-Oriented Programming, and SQL. I am passionate about building backend applications and have hands-on experience with Python and Flask.
            </p>
          </div>
           <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><Code className="w-8 h-8 mr-3 text-accent" />My Skills</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>Backend Development with Python and Flask.</li>
                <li>REST API design and integration.</li>
                <li>Database management with SQL and MongoDB.</li>
                <li>Familiarity with testing APIs using Postman.</li>
                <li>Frontend development with HTML, CSS, and JavaScript.</li>
            </ul>
          </div>
           <div>
             <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><Star className="w-8 h-8 mr-3 text-accent" />My Strengths</h2>
            <p>
              I am a quick learner, highly motivated, and thrive in collaborative environments. My problem-solving skills and attention to detail allow me to develop robust and efficient solutions. I am always eager to take on new challenges and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
