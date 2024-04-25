import Logo from '@/components/logo';
import IntroIcon from '@/icons/intro';
import ScheduleIcon from '@/icons/schedule';
import FaqIcon from '@/icons/faq';
import AboutIcon from '@/icons/about';
import NotificationIcon from '@/icons/notification';
import DonationIcon from '@/icons/donation';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { link: '/intro', title: 'Intro', icon: <IntroIcon /> },
  { link: '/schedule', title: 'Schedule', icon: <ScheduleIcon /> },
  { link: '/faq', title: 'FAQ', icon: <FaqIcon /> },
  { link: '/about', title: 'About', icon: <AboutIcon /> }
];

export default function Header() {
  return (
    <header className='flex items-start gap-[123px] px-[73px] text-clr-light-purple font-medium leading-[1.125]'>
      <span className='mt-4'>
        <Logo />
      </span>
      <nav className='w-[450px] pt-[26px] pb-[25px] rounded-[48px] bg-clr-deep-charcoal/80 ml-auto backdrop-blur-2xl'>
        <ul className='px-4 flex gap-[24px] justify-center'>
          {pages.map(page => (
            <li key={page.title}>
              <Link
                href={page.link}
                className='flex items-center gap-2 cursor-pointer select-none hover:text-purple-300 transition-colors'
              >
                {page.icon}
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center gap-4 px-6 py-[18px] rounded-[48px] bg-clr-deep-charcoal/80 backdrop-blur-2xl'>
        <span className='cursor-pointer'>
          <NotificationIcon />
        </span>
        <div className='min-w-[1.5px] h-3 bg-clr-light-purple' />
        <Link
          href='/donate'
          className='flex items-center gap-2 select-none cursor-pointer hover:text-purple-300 transition-colors'
        >
          <DonationIcon />
          Donate
        </Link>
        <div className='min-w-[1.5px] h-3 bg-clr-light-purple' />
        <Image src='/profile.svg' alt='' width={24} height={24} className='select-none size-6' />
      </div>
    </header>
  );
}
