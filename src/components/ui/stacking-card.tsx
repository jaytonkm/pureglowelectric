'use client';

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  imagePosition?: string;
}

// Custom image position overrides for specific assets.
// Adjust or delete this map to control per-image positioning without touching page data.
const imagePositionOverrides: Record<string, string> = {
  // Pin image to top of the frame; delete or change this entry to adjust.
  '/PotlightsWorker.webp': 'center 10%',
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  imagePosition?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isLast: boolean;
  isSecondLast: boolean;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  imagePosition,
  progress,
  range,
  targetScale,
  isLast,
  isSecondLast,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  // Slightly overscale to avoid any bottom clipping on mobile
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.05]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const resolvedImagePosition = imagePositionOverrides[url] ?? imagePosition ?? 'center';

  return (
    <div
      ref={container}
      className={cn(
        'flex items-start justify-center sticky top-0 pt-32',
        isLast ? 'min-h-screen md:h-screen' : 'h-screen'
      )}
    >
      <motion.div
        style={{
          scale,
          top: `${i * 25}px`,
          backgroundColor: '#ffffff',
          borderColor: 'rgba(0,0,0,0.15)',
        }}
        className={cn(
          'flex flex-col relative w-full max-w-xl rounded-xl p-8 origin-top border text-black',
          isLast 
            ? 'h-[calc(100vh_-_8rem_-_100px)] md:h-auto md:min-h-[500px]' 
            : isSecondLast
              ? 'h-auto min-h-[375px] md:min-h-[350px]'
              : 'h-auto min-h-[640px] md:min-h-[500px]'
        )}
      >
        <h2 className='text-xl text-left font-semibold font-msung-hk'>{title}</h2>
        <div className={`flex flex-col h-full mt-4 gap-6`}>
          <div className={`flex-1`}>
            <p className={cn(
              'font-msung-hk leading-relaxed text-pretty break-words',
              isLast ? 'text-base' : 'text-sm'
            )}>
              {description}
            </p>
            <span className='flex items-center gap-2 pt-4'>
              <a
                href={url}
                target='_blank'
                rel='noreferrer noopener'
                className='underline cursor-pointer font-msung-hk'
              >
                See more
              </a>
            </span>
          </div>

          <div
            className={cn(
              'relative w-full rounded-xl overflow-hidden',
              isLast ? 'hidden md:block h-64' : '',
              isSecondLast ? 'h-56 md:h-56' : 'h-80 md:h-64'
            )}
          >
            <motion.div
              className={`w-full h-full relative`}
              style={{ scale: imageScale, transformOrigin: 'center bottom' }}
            >
              <Image 
                src={url} 
                alt={title} 
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className='object-cover'
                style={{ objectPosition: resolvedImagePosition }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main className='bg-white font-msung-hk' ref={container}>
      <section className='text-black w-full bg-white'>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
            {/* Sticky paragraph on the left */}
            <div className='lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-start pt-32'>
              <div className='py-12 lg:py-0'>
                <h2 className='text-3xl lg:text-4xl font-semibold font-msung-hk mb-6 text-black'>
                  At PureGlow Electric
                </h2>
                <p className='text-base lg:text-lg leading-relaxed text-gray-700 font-msung-hk'>
                  We transform the way you experience lighting and electrical services by blending innovation, luxury, and expert craftsmanship. We specialize in creating personalized lighting solutions that go beyond the ordinary, making your home shine with excitement and beauty. Our commitment to continuous growth and excellence ensures that every project is an opportunity to learn, evolve, and deliver 100% customer satisfaction. From residential to commercial, we are dedicated to building long-lasting relationships with our clients and setting the stage for a future where no job is too big or too complex.
                </p>
              </div>
            </div>
            
            {/* Stacking cards on the right */}
            <div className='lg:w-1/2 pb-24'>
              {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                const isLast = i === projects.length - 1;
                const isSecondLast = i === projects.length - 2;
                return (
                  <Card
                    key={`p_${i}`}
                    i={i}
                    url={project.link}
                    imagePosition={project.imagePosition}
                    title={project.title}
                    color={project.color}
                    description={project.description}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                    isLast={isLast}
                    isSecondLast={isSecondLast}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
});

Component.displayName = 'Component';

export default Component;

