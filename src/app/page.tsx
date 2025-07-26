import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Laptop, Palette, ServerCog, BotMessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { name: 'Frontend Development', icon: <Laptop className="w-12 h-12 text-primary" />, description: 'Crafting responsive and performant user interfaces.' },
  { name: 'Backend Development', icon: <ServerCog className="w-12 h-12 text-primary" />, description: 'Building robust and scalable server-side applications.' },
  { name: 'UI/UX Design', icon: <Palette className="w-12 h-12 text-primary" />, description: 'Designing intuitive and visually appealing user experiences.' },
  { name: 'AI Integration', icon: <BotMessageSquare className="w-12 h-12 text-primary" />, description: 'Leveraging AI to build smart and innovative features.' },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Passionate Developer Eager to Build & Learn</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Welcome to my portfolio. As a recent graduate, I'm excited to apply my skills in building beautiful, functional, and user-centric web applications.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image
              src="https://i.postimg.cc/4yLRv3LZ/Whats-App-Image-2025-06-13-at-16-09-28-4f0ea501-removebg-preview.png"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              data-ai-hint="professional portrait"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="container mx-auto px-4 py-16 bg-secondary/30 rounded-lg">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">My Skill Set</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I have a solid foundation in a range of technologies to bring ideas to life, from concept to deployment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
             <Card key={skill.name} className="text-center animate-fade-in transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: `${index * 150}ms`}}>
              <CardHeader className="items-center">
                {skill.icon}
                <CardTitle className="pt-4">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
