import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiPython } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveLink?: string;
  sourceLink?: string;
};

const ProjectCard = ({ title, description, technologies, image, liveLink, sourceLink }: Project) => {
  const techIcons: { [key: string]: React.ReactNode } = {
    React: <FaReact className="inline-block mr-1" />,
    TypeScript: <SiTypescript className="inline-block mr-1" />,
    'Tailwind CSS': <SiTailwindcss className="inline-block mr-1" />,
    'Node.js': <FaNodeJs className="inline-block mr-1" />,
    Express: <SiExpress className="inline-block mr-1" />,
    Python: <SiPython className="inline-block mr-1" />,
    python: <SiPython className="inline-block mr-1" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative pb-[100%]"> {/* Ratio 1:1 pour des images plus compactes */}
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-3"> {/* Réduction du padding à p-3 */}
        <h3 className="text-lg font-bold mb-1">{title}</h3> {/* Réduction de la marge à mb-1 */}
        <p className="text-sm text-gray-700 mb-2 line-clamp-3">{description}</p> {/* Marge réduite à mb-2 */}
        <div className="flex flex-wrap mb-1"> {/* Marge réduite à mb-1 */}
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded mr-1 mb-1 flex items-center text-xs"
            >
              {techIcons[tech] || null}
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Demo
          </a>
          <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'e-commerce',
      description: 'Designed specifically for sale in Africa.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '../../public/screenwebsite.png',
      liveLink: 'https://kamikael.github.io/website/',
      sourceLink: 'https://github.com/kamikael/website',
    },
    {
      title: 'SAAS (in progress)',
      description: 'An application to track the best-selling products in Africa with videos and product sheets.',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'TypeScript', 'Python'],
      image: '../../public/saas.png',
    },
  ];

  return (
    <section id="projects" className="py-6 bg-gray-100"> {/* Réduction à py-6 */}
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4">My Projets</h2> {/* Réduction à mb-4 */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10} 
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>
        {`
        .swiper-button-prev,
            .swiper-button-next {
              width: 2.5rem;
              height: 2.5rem;
              background-color: #2563eb; /* blue-600 */
              color: white;
              border-radius: 9999px;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
              transition: background-color 0.3s ease;
            }

            .swiper-button-prev:hover,
            .swiper-button-next:hover {
              background-color: #1d4ed8; /* blue-700 */
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 1rem;
              font-weight: bold;
            }                                            
        `}
      </style>
    </section>
  );
};

export default Projects;
