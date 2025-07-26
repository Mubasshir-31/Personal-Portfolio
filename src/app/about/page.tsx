import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Heart } from 'lucide-react';

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

        <div className="md:col-span-2 space-y-6 text-lg text-foreground/90">
          <h2 className="text-3xl font-headline font-semibold text-primary">My Story</h2>
          <p>
            From a young age, I have been captivated by the intersection of technology and creativity. My journey into web development started not in a classroom, but from a place of curiosity, dismantling old electronics and trying to understand how things work. This curiosity evolved into a passion for building elegant, efficient, and impactful digital solutions.
          </p>
          <p>
            I believe that the best products are born from a deep understanding of user needs, coupled with meticulous attention to detail. Whether it is writing clean, scalable code or designing an intuitive user interface, I strive for excellence in every aspect of my work.
          </p>
          <p>
            When I am not coding, you can find me exploring the great outdoors, experimenting with new recipes in the kitchen, or getting lost in a good book. These experiences fuel my creativity and provide fresh perspectives that I bring back to my professional work.
          </p>
        </div>
      </div>

       <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
                <Award className="w-10 h-10 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary">Experience</h3>
                <p className="text-muted-foreground mt-2">5+ years in web development, creating solutions for a diverse range of clients.</p>
            </Card>
            <Card className="p-6">
                <Briefcase className="w-10 h-10 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary">Philosophy</h3>
                <p className="text-muted-foreground mt-2">"Code is craftsmanship." I focus on quality, scalability, and maintainability.</p>
            </Card>
             <Card className="p-6">
                <Heart className="w-10 h-10 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary">Passions</h3>
                <p className="text-muted-foreground mt-2">Continuous learning, open-source contribution, and mentoring aspiring developers.</p>
            </Card>
        </div>
       </div>
    </div>
  );
}
