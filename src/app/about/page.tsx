import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Briefcase, Heart } from 'lucide-react';

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
                  src="https://placehold.co/400x400.png"
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
            <p>
              Through academic projects and self-learning, I have become familiar with testing APIs using Postman and developing robust solutions. I am eager to apply my skills and continue to grow in a professional software development environment, contributing to impactful and innovative projects.
            </p>
          </div>
           <div>
             <h2 className="text-3xl font-headline font-semibold text-primary mb-3 flex items-center"><Heart className="w-8 h-8 mr-3 text-accent" />My Interests</h2>
            <p>
              When I am not coding, you can find me exploring the great outdoors, experimenting with new recipes in the kitchen, or getting lost in a good book. These experiences fuel my creativity and provide fresh perspectives that I bring back to my professional work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
