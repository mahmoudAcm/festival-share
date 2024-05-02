'use client';

import { useEffect, useRef, useState } from 'react';

const status = [
  {
    label: 'users',
    value: 15600
  },
  {
    label: 'gen/4hrs',
    value: 35600
  },
  {
    label: 'artists',
    value: 1400
  }
];

type Timeout = ReturnType<typeof setTimeout>;

const AnimatedNumber = ({ value }: { value: number }) => {
  const [current, setCurrent] = useState(0);
  const timeout = useRef<Timeout | null>(null);
  const amount = useRef(10 ** Math.floor(Math.log10(value) - 1)).current;

  useEffect(() => {
    if (current >= value) return;

    timeout.current = setTimeout(() => {
      return setCurrent(current => Math.min(current + amount, value));
    }, 50);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current]);

  return <>{(current / 1000).toFixed(1)}</>;
};

export default function StatsCard() {
  return (
    <div className='grid grid-cols-3 w-[485px] gap-[4rem] px-[71px] py-[37px] border-2 border-clr-midnight-slate bg-clr-very-dark-gray/60 backdrop-blur-2xl rounded-[33px]'>
      {status.map(({ label, value }, index) => (
        <div className='space-y-3' key={index}>
          <p className='text-base leading-[1.125] text-clr-purple-gray'>{label}</p>
          <p className='text-[2rem] leading-[1.25] text-white'>
            <AnimatedNumber value={value} />k
          </p>
        </div>
      ))}
    </div>
  );
}
