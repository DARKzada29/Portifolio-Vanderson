'use server';

import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Project, Experience, Contact } from '@/types';

// Project actions
export async function getProjects(category?: string, featured?: boolean) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        published: true,
        ...(category && category !== 'all' && { category: category.toUpperCase() as any }),
        ...(featured !== undefined && { featured }),
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' },
      ],
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> & { authorId: string }) {
  try {
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        longDescription: data.longDescription,
        image: data.image,
        technologies: data.technologies,
        category: data.category.toUpperCase() as any,
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        featured: data.featured,
        authorId: data.authorId,
      },
    });

    revalidatePath('/projetos');
    revalidatePath('/admin/projetos');
    
    return { success: true, project };
  } catch (error) {
    console.error('Error creating project:', error);
    return { success: false, error: 'Failed to create project' };
  }
}

export async function updateProject(id: string, data: Partial<Project>) {
  try {
    const project = await prisma.project.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description && { description: data.description }),
        ...(data.longDescription && { longDescription: data.longDescription }),
        ...(data.image && { image: data.image }),
        ...(data.technologies && { technologies: data.technologies }),
        ...(data.category && { category: data.category.toUpperCase() as any }),
        ...(data.githubUrl !== undefined && { githubUrl: data.githubUrl }),
        ...(data.liveUrl !== undefined && { liveUrl: data.liveUrl }),
        ...(data.featured !== undefined && { featured: data.featured }),
      },
    });

    revalidatePath('/projetos');
    revalidatePath('/admin/projetos');
    
    return { success: true, project };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: 'Failed to update project' };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath('/projetos');
    revalidatePath('/admin/projetos');
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: 'Failed to delete project' };
  }
}

// Experience actions
export async function getExperiences() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: [
        { current: 'desc' },
        { startDate: 'desc' },
      ],
    });

    return experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function createExperience(data: Omit<Experience, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const experience = await prisma.experience.create({
      data: {
        title: data.title,
        company: data.company,
        location: data.location,
        startDate: data.startDate,
        endDate: data.endDate,
        current: data.current,
        description: data.description,
        technologies: data.technologies,
      },
    });

    revalidatePath('/sobre');
    revalidatePath('/admin/experiencias');
    
    return { success: true, experience };
  } catch (error) {
    console.error('Error creating experience:', error);
    return { success: false, error: 'Failed to create experience' };
  }
}

// Skills actions
export async function getSkills() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [
        { category: 'asc' },
        { level: 'desc' },
      ],
    });

    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

// Contact actions
export async function createContact(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'read' | 'replied'>) {
  try {
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });

    revalidatePath('/admin/contatos');
    
    return { success: true, contact };
  } catch (error) {
    console.error('Error creating contact:', error);
    return { success: false, error: 'Failed to send message' };
  }
}

export async function getContacts() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
}

export async function markContactAsRead(id: string) {
  try {
    await prisma.contact.update({
      where: { id },
      data: { read: true },
    });

    revalidatePath('/admin/contatos');
    
    return { success: true };
  } catch (error) {
    console.error('Error marking contact as read:', error);
    return { success: false, error: 'Failed to mark as read' };
  }
}

// Analytics actions
export async function trackEvent(event: string, category: string, label?: string, value?: number) {
  try {
    await prisma.analytics.create({
      data: {
        event,
        category,
        label,
        value,
      },
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

export async function getAnalytics(days: number = 30) {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const analytics = await prisma.analytics.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return analytics;
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return [];
  }
}

