import Intro from '@/components/intro'
import Experience from '@/components/experience'
import RecentPosts from '@/components/recent-post'
import RecentProjects from '@/components/recent-projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keyur Sanghani - Backend Developer | PHP Laravel & Vue.js Expert',
  description: 'Keyur Sanghani is a skilled Backend Developer with expertise in PHP Laravel, Vue.js, RESTful APIs, and database optimization. Experienced in building scalable SaaS applications and third-party integrations.',
}

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <Experience />
        {/* <RecentPosts /> */}
        <RecentProjects />
      </div>
    </section>
  )
}

export default Home
