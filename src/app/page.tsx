'use client';

import EventsCard from '@/components/events-card';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/useIsMounted';
import StatusCard from '@/components/status-card';
import PlayButton from '@/components/play-button';
import Title from '@/components/title';

const events = [
  {
    src: '/event-1.png',
    alt: 'event-1',
    title: 'Main Event'
  },
  {
    src: '/event-2.png',
    alt: 'event-2',
    title: 'Quiver Dance'
  },
  {
    src: '/event-3.png',
    alt: 'event-3',
    title: 'Golden Road'
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMounted = useIsMounted();

  return (
    <main>
      <div className='grid grid-cols-[repeat(12,100px)] gap-[15px] relative isolate z-10'>
        <div className='grid place-content-start place-items-center gap-[21px] col-start-3 -ml-[24px] mt-[324px]'>
          <PlayButton className='shadow' />
          <span className='text-[1.5rem] leading-[1.25] tracking-[7px] text-white'>Intro</span>
        </div>
        <div className='col-start-7 -ml-[50px] mt-[50px]'>
          <Title />
        </div>
        <div className='col-span-7 absolute -z-[1]'>
          <Image
            src='/intro.png'
            alt=''
            width={923.44}
            height={810.8}
            className='-rotate-[24.2deg] -ml-[10px] mt-[20px] select-none'
          />
        </div>
        <div className='grid gap-[21.5px] col-start-8 col-span-6 mt-[70px]'>
          <div className='flex gap-[12.5px] relative'>
            {events.map((event, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={cn(
                  'relative w-[178px] h-[615px] rounded-[48px] object-cover cursor-pointer transition-[filter,width] duration-300 overflow-clip',
                  { 'w-[268.5px] event-image-clip-path': activeIndex === index }
                )}
              >
                <Image
                  src={event.src}
                  alt={event.alt}
                  fill
                  className={cn(
                    'object-cover brightness-[60%] select-none bg-gradient-to-t from-black/70 via-black/50 to-transparent ',
                    {
                      '!brightness-100': activeIndex === index
                    }
                  )}
                  sizes='(min-width:0px) 25vw'
                  priority
                />
                <div
                  className={cn({
                    'absolute inset-0 bottom-auto h-[180px] w-full bg-gradient-to-b from-black/60 via-black/50 to-transparent':
                      activeIndex === index
                  })}
                />
                <span
                  style={
                    activeIndex !== index
                      ? {
                          writingMode: 'vertical-lr',
                          msWritingMode: 'vertical-lr'
                        }
                      : undefined
                  }
                  className={cn(
                    'absolute top-0 right-0 flex items-center justify-center text-white text-[1.8rem] -translate-x-[19px] translate-y-[39px] opacity-80',
                    {
                      'translate-y-[33px] -translate-x-[1rem] rotate-[0deg]': activeIndex === index,
                      'fade-in-out': isMounted() && activeIndex === index
                    }
                  )}
                >
                  <span
                    className={cn('block truncate max-w-[178px] max-h-[268.5px]', {
                      'max-w-[268.5px]': activeIndex === index
                    })}
                  >
                    {event.title}
                  </span>
                </span>
              </div>
            ))}
            <div className='absolute left-[30px] bottom-[19px]'>
              <EventsCard />
            </div>
          </div>
          <div className='w-[538px] h-[262px] border border-clr-midnight-slate rounded-[48px] overflow-clip relative group'>
            <Image
              src='/gold-fish.png'
              alt=''
              fill
              className='object-cover brightness-[80%] select-none bg-gradient-to-t from-black/70 via-black/50 to-transparent transition group-hover:scale-125'
            />
            <div className='absolute z-10 grid place-items-end gap-1 right-[34px] top-[27px]'>
              <div className='text-[2rem] leading-[1.25] font-medium text-white text-right'>
                <p>Gold Fish</p>
                <p>Group Dance</p>
              </div>
              <span className='text-[0.75rem] leading-[0.9375] px-3 py-2 border border-white rounded-full text-white bg-white/30 select-none'>
                5:00 pm - 7:00 pm
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[34px] left-[31px] z-20'>
        <StatusCard />
      </div>
    </main>
  );
}
