import PlayButton from '@/components/play-button';
import Image from 'next/image';

export default function IntroPlayer() {
  return (
    <>
      <PlayButton className='shadow absolute z-[2] col-start-3 -ml-[24px] mt-[324px]' />
      <Image
        src='/intro.png'
        alt=''
        width={923.44}
        height={810.8}
        className='-rotate-[24.2deg] -ml-[10px] mt-[20px] select-none absolute'
      />
    </>
  );
}
