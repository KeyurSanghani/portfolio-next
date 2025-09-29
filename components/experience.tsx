export default function Experience() {
  const experience = [
    {
      company: 'Vivansh Infotech',
      position: 'Backend Developer',
      date: 'Jul 2024 – Present',
      description:
        'Backend Developer skilled in PHP (Laravel), Vue.js, RESTful API development. Experienced in building scalable, high-performance web applications. Proficient in MySQL, PostgreSQL, with expertise in designing efficient database schemas. Extensive experience in multi-tenant SaaS applications, with expertise in third-party integrations, including Stripe, Square POS, Toast POS, Twilio, DocuSign, Zoom Video SDK, Google Ads, Facebook Ads, QuickBooks, Exchange rate and other APIs.'
    },
    {
      company: 'Vivansh Infotech',
      position: 'Intern',
      date: 'Jan 2024 – Jun 2024',
      description:
        'Developed an EMS platform for internal company management, featuring project hours estimation, total hours calculation, and developer-specific reporting categorized by project types. Integrated PHP (Laravel) backend with robust APIs for seamless system operations. Gained experience in backend development, RESTful API design, and database management (MySQL, PostgreSQL).'
    },
    {
      company: 'MSquare Technologies',
      position: 'Web Developer Intern',
      date: 'Apr 2022 – Jun 2022',
      description:
        'Developed an online order management system for the textile industry with a responsive and visually appealing interface using Bootstrap. Implemented efficient back-end functionality in PHP and optimized database structures for seamless data processing and management using MySQL.'
    }
  ]

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Experience</h2>

        {experience.map((item, index) => (
          <div className='experience-item mb-8' key={index}>
            <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
              {item.company}
            </h3>
            <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
              {item.position}
            </p>
            <p className='text-md text-gray-600 dark:text-gray-400'>
              {item.date}
            </p>
            <p className='text-base text-gray-800 dark:text-gray-200'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
