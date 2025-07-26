import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and secure checkout functionalities.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'A SaaS application that leverages generative AI to help users create marketing copy, blog posts, and social media updates.',
    image: 'https://placehold.co/600x400.png',
    stack: ['React', 'Node.js', 'Express', 'Genkit AI', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, inspired by Trello.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Vue.js', 'Tailwind CSS', 'Supabase', 'GraphQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, with custom charts, filters, and data export options.',
    image: 'https://placehold.co/600x400.png',
    stack: ['D3.js', 'React', 'Python', 'Flask', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">My Work</h1>
        <p className="text-lg text-muted-foreground mt-2">A selection of projects that I'm proud of.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
           <Card key={project.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl" style={{ animationDelay: `${index * 150}ms`, animationName: 'fade-in' }}>
            <div className="relative h-56 w-full">
               <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint="tech project"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <Badge key={tech} variant="secondary" className="font-medium">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github /> GitHub
                </Link>
              </Button>
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink /> Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
