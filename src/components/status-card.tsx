const status = [
  {
    label: 'users',
    value: '15.6k'
  },
  {
    label: 'gen/4hrs',
    value: '33.6k'
  },
  {
    label: 'artists',
    value: '1.4k'
  }
];

export default function StatusCard() {
  return (
    <div className='flex gap-[4rem] px-[71px] py-[37px] border-2 border-clr-midnight-slate bg-clr-very-dark-gray/60 backdrop-blur-2xl rounded-[33px] w-fit'>
      {status.map(({ label, value }, index) => (
        <div className='space-y-3' key={index}>
          <p className='text-base leading-[1.125] text-clr-purple-gray'>{label}</p>
          <p className='text-[2rem] leading-[1.25] text-white'>{value}</p>
        </div>
      ))}
    </div>
  );
}
