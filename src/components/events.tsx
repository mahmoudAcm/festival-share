'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import EventsCard from '@/components/events-card';
import { useState } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';

interface EventsProps {
  data: {
    src: string | StaticImageData;
    alt: string;
    title: string;
  }[];
}

export default function Events({ data }: EventsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMounted = useIsMounted();

  return (
    <div className='flex gap-[12.5px] relative'>
      {data.map((event, index) => (
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
            placeholder='blur'
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
  );
}
