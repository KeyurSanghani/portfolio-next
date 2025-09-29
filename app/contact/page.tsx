import ContactForm from '@/components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Keyur Sanghani - Backend Developer',
  description:
    "Get in touch with Keyur Sanghani, a skilled Backend Developer specializing in PHP Laravel and Vue.js. Let's discuss your project and turn your ideas into reality.",
  openGraph: {
    title: 'Contact | Keyur Sanghani - Backend Developer',
    description:
      'Reach out to Keyur Sanghani, a skilled Backend Developer, to discuss your project and explore innovative solutions in web development.',
    type: 'website',
    images: [
      {
        url: '/images/authors/keyur-sanghani.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Keyur Sanghani - Backend Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Keyur Sanghani - Backend Developer',
    description:
      'Contact Keyur Sanghani to discuss your project and explore innovative solutions in web development and backend systems.',
    images: ['/images/authors/keyur-sanghani.jpg']
  },
  alternates: {
    canonical: '/contact'
  },
  keywords: [
    'contact Keyur Sanghani',
    'Backend Developer contact',
    'PHP Laravel developer',
    'Vue.js developer',
    'project inquiry',
    'web development services',
    'API development',
    'database development'
  ]
}

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  )
}
