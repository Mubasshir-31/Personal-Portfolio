import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Bot, Newspaper, Volume2, GitMerge } from 'lucide-react';

const projects = [
  {
    title: 'Text-To-Speech',
    description: 'A web application that converts written text into spoken words using HTML, CSS, and JavaScript. This project provides a user-friendly interface to input text and listen to it being read aloud.',
    icon: <Volume2 className="w-16 h-16 text-primary" />,
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/Text-to-Speech.git',
  },
  {
    title: 'PromptDB Chatbot',
    description: 'A powerful Python-based chatbot that bridges the gap between human language and database queries, allowing for full CRUD functionality through a conversational interface using OpenRouter and MongoDB.',
    icon: <Bot className="w-16 h-16 text-primary" />,
    stack: ['Python', 'Flask', 'MongoDB', 'OpenRouter AI', 'HTML', 'CSS', 'JS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/PromptDB.git',
  },
  {
    title: 'TechBlog Blog Website',
    description: 'An auto-updating technology blog that delivers the latest tech news. Powered by Python, Flask, and MongoDB, the site fetches fresh content hourly using external APIs and presents it in a clean, responsive interface.',
    icon: <Newspaper className="w-16 h-16 text-primary" />,
    stack: ['Python', 'Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'NewsData.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mubasshir-31/TechBlog.git',
  },
   {
    title: 'PathGen-AI',
    description: 'A smart way to build roadmaps. Simply input your project goals and let our AI instantly generate a structured, professional, and easy-to-follow plan to get from concept to completion with clarity.',
    icon: <GitMerge className="w-16 h-16 text-primary" />,
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Generative AI'],
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
           <Card key={project.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl" style={{ animationDelay: `${index * 150}ms`}}>
            <div className="h-48 w-full flex items-center justify-center bg-secondary/30">
              {project.icon}
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-sm line-clamp-3 min-h-[60px]">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow py-2">
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <Badge key={tech} variant="secondary" className="font-medium text-xs">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 pt-4 mt-auto">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github /> GitHub
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
