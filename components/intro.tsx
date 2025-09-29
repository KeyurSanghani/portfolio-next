import Image from 'next/image'
import authorImage from '@/public/images/authors/keyur-sanghani.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Keyur Sanghani.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I am a skilled Backend Developer with expertise in PHP Laravel, Vue.js, 
          and building scalable web applications. Experienced in RESTful API development, 
          multi-tenant SaaS applications, and third-party integrations including Stripe, 
          Square POS, DocuSign, and more. Passionate about delivering high-performance 
          solutions with modern web technologies.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Keyur Sanghani'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
