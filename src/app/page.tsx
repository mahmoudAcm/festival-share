import Image from 'next/image';
import StatsCard from '@/components/stats-card';
import IntroPlayer from '@/components/intro-player';
import Title from '@/components/title';
import Sun from '@/components/sun';

//images
import event1Src from '@images/event-1.png';
import event2Src from '@images/event-2.png';
import event3Src from '@images/event-3.png';
import goldFishSrc from '@images/gold-fish.png';
import Events from '@/components/events';

const events = [
  {
    src: event1Src,
    alt: 'event-1',
    title: 'Main Event'
  },
  {
    src: event2Src,
    alt: 'event-2',
    title: 'Quiver Dance'
  },
  {
    src: event3Src,
    alt: 'event-3',
    title: 'Golden Road'
  }
];

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-[repeat(12,100px)] gap-[15px] relative isolate z-10'>
        <IntroPlayer />
        <div className='col-start-7 -ml-[50px] mt-[50px] z-[3]'>
          <Title />
        </div>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -z-[1] -translate-y-[11rem]'>
          <Sun />
        </div>
        <div className='grid gap-[21.5px] col-start-8 col-span-6 mt-[70px]'>
          <Events data={events} />
          <div className='w-[538px] h-[262px] border border-clr-midnight-slate rounded-[48px] overflow-clip relative group'>
            <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-[#F77320] to-[#D1A381] backdrop-blur-md' />
            <Image
              src={goldFishSrc}
              alt=''
              fill
              className='object-cover brightness-[80%] select-none transition group-hover:scale-125'
              placeholder='blur'
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
        <StatsCard />
      </div>
    </main>
  );
}
