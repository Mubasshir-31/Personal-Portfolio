import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Text-To-Speech',
    description: 'A web application that converts written text into spoken words using HTML, CSS, and JavaScript. The project provides a user-friendly interface where users can input text and listen to it being read aloud, utilizing the browser\'s built-in speech synthesis capabilities.',
    image: 'https://placehold.co/600x400.png',
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/Text-to-Speech.git',
  },
  {
    title: 'PromptDB Chatbot',
    description: 'A powerful Python-based chatbot that bridges the gap between human language and database queries, allowing for full CRUD functionality through a conversational interface using OpenRouter and MongoDB.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Python', 'Flask', 'MongoDB', 'OpenRouter AI', 'HTML', 'CSS', 'JS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/PromptDB.git',
  },
  {
    title: 'TechBlog Blog Website',
    description: 'TechBlog is an auto-updating technology blog that delivers the latest tech news, trends, and innovations from around the world. Powered by Python, Flask, and MongoDB Atlas, the site fetches fresh content every hour using external APIs and presents it in a clean, responsive interface.',
    image: 'https://placehold.co/600x400.png',
    stack: ['Python', 'Flask', 'MongoDB Atlas', 'HTML', 'CSS', 'JavaScript', 'NewsData.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/TechBlog.git',
  },
   {
    title: 'PathGen-AI',
    description: 'PathGen AI is the smart way to build roadmaps. Simply input your project goals and let our AI instantly generate a structured, professional, and easy-to-follow plan. Get from concept to completion with clarity and confidence.',
    image: 'https://placehold.co/600x400.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'GenerativeModel API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/PathGen-AI.git',
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
              <Button asChild disabled={project.liveUrl === '#'}>
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
