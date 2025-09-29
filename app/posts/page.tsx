import { getPosts } from '@/actions/posts'
import PostsWithSearch from '@/components/posts-with-search'
import React from 'react'
import { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
  title: 'Blog Posts | Keyur Sanghani - Backend Developer',
  description:
    'Discover technical insights, tutorials, and backend development experiences shared by Keyur Sanghani, specializing in PHP Laravel, database optimization, and API integrations.',
  openGraph: {
    title: 'Blog Posts | Keyur Sanghani - Backend Developer',
    description:
      'Discover technical insights, tutorials, and backend development experiences shared by Keyur Sanghani, specializing in PHP Laravel, database optimization, and API integrations.',
    type: 'website',
    images: [
      {
        url: '/images/authors/keyur-sanghani.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Posts by Keyur Sanghani - Backend Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Posts | Keyur Sanghani - Backend Developer',
    description:
      'Discover technical insights, tutorials, and backend development experiences shared by Keyur Sanghani, specializing in PHP Laravel, database optimization, and API integrations.',
    images: ['/images/authors/keyur-sanghani.jpg']
  },
  keywords: [
    'Keyur Sanghani blog',
    'Backend Developer blog',
    'PHP Laravel tutorials',
    'Database optimization articles',
    'API integration guides',
    'Web development insights',
    'Software development blog'
  ],
  alternates: {
    canonical: '/posts'
  }
}

const PostsPage = async (props: Props) => {
  const posts = await getPosts()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Blog Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostsPage
