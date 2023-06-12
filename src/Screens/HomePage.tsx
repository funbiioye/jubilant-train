import play from '../assets/Icons/play.svg';

const HomePage = () => {
  return (
    <div>
      <div className=''>
        <span className='flex flex-col justify-center items-center py-[64px] md:py-[96px]'>
          <h1
            className='mt-[12px] mb-[16px] md:mb-[24px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] text-center
]'>
            The Easiest Way to Invest in Real Estate
          </h1>
          <p className='w-[343px] md:w-[768px] px-[16px] font-normal text-[18px] leading-[28px] text-[#475467] text-center'>
            Buy shares of rental properties in under 5 minutes starting from
            $10. Earn monthly income and grow your real estate portfolio. Let
            Pishon take care of the rest.
          </p>
          <span>
            <button className='justify-center items-center text-center border-2 w-[343px] md:w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
              <img
                src={play}
                alt=''
              />
              How it Works
            </button>
            <button className='justify-center items-center text-center border-2 w-[343px] md:w-[129px] h-[48px] mt-[32px] mx-[24px] py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
              View Properties
            </button>
          </span>
        </span>
        <span className=''></span>
      </div>
    </div>
  );
};

export default HomePage;
