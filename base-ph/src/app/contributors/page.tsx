'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Search } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleSponsors, setVisibleSponsors] = useState(20);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );
  // Add state for contributors to avoid hydration mismatch
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isClient, setIsClient] = useState(false);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle flip state
    }));
  };

  interface SocialLinks {
    facebook: string;
    instagram: string;
    x: string;
    linkedin: string;
    telegram: string;
  }

  interface Contributor {
    name: string;
    position: string;
    image: string;
    tags?: string[];
    social: SocialLinks;
  }

  // Use useEffect to ensure this only runs on the client
  useEffect(() => {
    setIsClient(true);

    // Move the random generation to a useEffect to avoid hydration mismatch
    const generateContributors = (count: number): Contributor[] => {
      // Use a deterministic pattern for server rendering
      return Array(count)
        .fill(null)
        .map((_, i) => ({
          name: `Contributor ${i + 1}`,
          position: `Contributor ${i + 1}`,
          image: '/placeholder.svg',
          tags: ['Developer', 'Creatives', 'Social Media'].slice(
            0,
            (i % 3) + 1
          ), // Deterministic pattern
          social: {
            facebook: '#',
            instagram: '#',
            x: '#',
            linkedin: '#',
            telegram: '#',
          },
        }));
    };

    const initialSponsors = [
      {
        name: 'Juan Dela Cruz',
        position: 'Contributor 1',
        image: '/contributors/karina.webp',
        tags: ['Developer', 'Creatives', 'Social Media', 'Marketing'],
        social: {
          facebook: 'https://www.facebook.com/profile.php?id=100008903117894',
          instagram: 'https://www.instagram.com/direct/t/101704667894326/',
          x: 'https://x.com/',
          linkedin: '#',
          telegram: '#',
        },
      },
      ...generateContributors(1000),
    ];

    setContributors(initialSponsors);

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        setVisibleSponsors((prev) => prev + 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter sponsors only after client-side rendering
  const filteredSponsors = isClient
    ? contributors
        .filter((sponsor) =>
          sponsor.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, visibleSponsors)
    : [];

  return (
    <section className='w-full py-16 px-4'>
      <div className='flex flex-col justify-center space-y-8'>
        <div>
          <h2 className='text-3xl font-bold mb-6 text-center text-white'>
            Our Contributors
          </h2>
          <div className='relative max-w-lg mx-auto mb-6'>
            <input
              type='text'
              placeholder='Search contributors...'
              className='w-full p-3 pl-10 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white/40'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-6 h-6' />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center mx-auto'>
          {filteredSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className='group [perspective:1500px] cursor-pointer transition-transform duration-300 hover:-translate-y-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
            >
              {/* Card Container with hover and click effects */}
              <div
                onClick={() => toggleFlip(index)}
                className={`relative w-[240px] h-[340px] transition-all duration-500 ease-in-out [transform-style:preserve-3d] ${
                  flippedCards[index] ? '[transform:rotateY(180deg)]' : ''
                } group-hover:shadow-2xl group-hover:scale-105 transition-transform`}
              >
                {/* Front Side */}
                <div className='absolute inset-0 flex flex-col items-center w-full h-full bg-white/10 backdrop-blur-xl rounded-lg p-4 shadow-lg text-center border border-white/20 [backface-visibility:hidden] transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15'>
                  <div className='w-[150px] h-[150px] mx-auto rounded-full overflow-hidden mb-3 border border-white/30'>
                    {isClient && (
                      <Image
                        src={sponsor.image || '/placeholder.svg'}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className='object-cover'
                      />
                    )}
                  </div>

                  {/* Fixed height container for name and position to keep them stable */}
                  <div className='h-14 flex flex-col justify-center mb-auto'>
                    <h3 className='text-sm font-medium text-white'>
                      {sponsor.name}
                    </h3>
                    <p className='text-xs text-gray-400'>{sponsor.position}</p>
                  </div>

                  {/* Tags */}
                  {sponsor.tags && sponsor.tags.length > 0 && (
                    <div className='flex flex-wrap justify-center gap-2 mt-auto w-full'>
                      {sponsor.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='px-3 py-1 text-xs font-medium text-white rounded-full bg-slate-700/80 backdrop-blur-sm border border-slate-600/50'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Back Side */}
                <div className='absolute inset-0 flex flex-col items-center justify-between w-full h-full bg-white rounded-lg shadow-lg border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-300 group-hover:border-gray-300 p-6'>
                  {/* Top section with logo and name */}
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
                      <div className='w-4 h-0.5 bg-white'></div>
                    </div>
                    <span className='text-black font-bold'>
                      BASE PHILIPPINES
                    </span>
                  </div>

                  {/* Middle section with portfolio */}
                  <div className='flex flex-col items-center'>
                    <div className='w-24 h-24 bg-black flex flex-col items-center justify-center relative'>
                      <div className='text-white font-bold text-center'>
                        <div>PORT</div>
                        <div>FOLIO</div>
                      </div>
                      <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white border-l border-r border-b border-black'></div>
                    </div>
                    <p className='mt-4 text-black text-sm'>
                      Click to view Portfolio
                    </p>
                  </div>

                  {/* Social media icons */}
                  <div className='flex gap-3'>
                    <a
                      href={sponsor.social.facebook}
                      className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors'
                    >
                      <Facebook className='w-5 h-5' />
                    </a>
                    <a
                      href={sponsor.social.instagram}
                      className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors'
                    >
                      <Instagram className='w-5 h-5' />
                    </a>
                    <a
                      href={sponsor.social.x}
                      className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors'
                    >
                      {isClient && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M18 6L6 18M6 6l12 12' />
                        </svg>
                      )}
                    </a>
                    <a
                      href={sponsor.social.linkedin}
                      className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors'
                    >
                      <Linkedin className='w-5 h-5' />
                    </a>
                    <a
                      href={sponsor.social.telegram}
                      className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' />
                        <path d='M11 8a3 3 0 0 1 6 0v1a3.5 3.5 0 0 0 7 0v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a3.5 3.5 0 0 0-7 0v1a3 3 0 0 1-6 0v-2' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
