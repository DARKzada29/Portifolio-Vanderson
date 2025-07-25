'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-neon-blue bg-neon-blue/10 border-neon-blue/20';
      case 'backend':
        return 'text-neon-green bg-neon-green/10 border-neon-green/20';
      case 'fullstack':
        return 'text-neon-purple bg-neon-purple/10 border-neon-purple/20';
      default:
        return 'text-foreground bg-secondary border-border';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <CardHeader className="p-0">
          <div className="relative h-48 overflow-hidden">
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Overlay with links */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neon-blue/20 backdrop-blur-sm rounded-full text-neon-blue hover:bg-neon-blue/30 transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neon-green/20 backdrop-blur-sm rounded-full text-neon-green hover:bg-neon-green/30 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-neon-purple/20 backdrop-blur-sm text-neon-purple text-xs font-medium rounded-full border border-neon-purple/30">
                  Destaque
                </span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-2 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </div>
        </CardHeader>

        {/* Project Info */}
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar size={14} className="mr-1" />
              {new Date(project.createdAt).getFullYear()}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-6 pt-0">
          <Link
            href={`/projetos/${project.id}`}
            className="w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 bg-neon-blue/10 text-neon-blue border border-neon-blue/20 rounded-lg font-medium hover:bg-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300"
            >
              Ver Detalhes
            </motion.button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

