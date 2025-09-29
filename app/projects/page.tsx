import { Metadata } from 'next'

import Projects from '@/components/projects'
import { getProjects } from '@/actions/projects'

export const metadata: Metadata = {
  title: 'Projects | Keyur Sanghani - Backend Developer Portfolio',
  description:
    'Explore a collection of web development projects by Keyur Sanghani, showcasing expertise in PHP Laravel, Vue.js, API development, and database management solutions.',
  openGraph: {
    title: 'Projects | Keyur Sanghani - Backend Developer Portfolio',
    description:
      'Explore a collection of web development projects by Keyur Sanghani, showcasing expertise in PHP Laravel, Vue.js, API development, and database management solutions.',
    type: 'website'
  },
  keywords: [
    'Keyur Sanghani projects',
    'Backend Developer portfolio',
    'PHP Laravel projects',
    'Vue.js development',
    'API development portfolio',
    'database management projects',
    'web development portfolio',
    'SaaS applications'
  ]
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
