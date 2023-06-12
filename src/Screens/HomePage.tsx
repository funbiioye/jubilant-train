import play from '../assets/Icons/play.svg';
import home_img_2 from '../assets/images/home_img_2.png';
import TopNav from '../components/TopNav';

const HomePage = () => {
  return (
    <div className='bg-'>
      <TopNav />
      <div className='flex flex-col md:flex-row py-[64px] md:py-[96px] container md:justify-between'>
        <div className='flex flex-col justify-start items-start  md:mt-[97px] md:flex-[0.40]'>
          <h1
            className='mb-[16px] font-semibold text-[#101828] text-[36px] leading-[44px] md:text-[60px] md:leading-[72px] text-start md:w-[560px] md:h-[160px]
]'>
            The Easiest Way to Invest in Real Estate
          </h1>
          <p className='w-[343px] font-normal text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] text-[#475467] text-start md:w-[560px] md:h-[90px]'>
            Buy shares of rental properties in under 5 minutes starting from
            $10. Earn monthly income and grow your real estate portfolio. Let
            Pishon take care of the rest.
          </p>
          <span className='flex flex-col md:flex-row mt-[48px]'>
            <button className='flex justify-center items-center gap-[14px] text-center border-2 w-[343px] md:w-[207px] h-[60px]  bg-[#FFF] font-inter font-semibold text-[16px] text-[#344054] leading-[24px]  rounded-lg'>
              <img
                className='w-[20px] h-[20px]'
                src={play}
                alt=''
              />
              How it Works
            </button>
            <button className='justify-center items-center text-center border-2 w-[343px] md:w-[207px] h-[60px] mt-[20px] md:mt-0 py-[10px] bg-[#00359E] font-inter font-semibold text-[16px] text-[#FFFFFF] leading-[24px]  rounded-lg'>
              View Properties
            </button>
          </span>
        </div>
        <div className='md:max-w-[560px] md:max-h-[640px] md:flex-[0.60]'>
          <img
            className='hidden md:flex md:h-full md:w-full '
            src={home_img_2}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
