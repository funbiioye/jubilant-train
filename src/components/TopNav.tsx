import Pishon from '../assets/Images/Pishon (1).svg';

let links = [
  { name: 'Marketplace', link: '#' },
  { name: 'About Us', link: '#' },
  { name: 'Contact Us', link: '#' },
  { name: 'Blog', link: '#' },
];

const TopNav = () => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-centerjustify-start md:justify-between top-0 left-0 bg-[#ffffff] w-full h-[80px] border-b-[1px] border-b-[#F2F4F7] shadow-sm md:py-[21px] md:px-[112px]'>
      <div className='flex flex-col md:flex  md:flex-row items-start md:justify-center'>
        <span className='w-[102px] h-[38px] justify-center items-center cursor-pointer  '>
          <img
            src={Pishon}
            alt=''
          />
        </span>
        <div className='flex flex-col md:flex-row items-center justify-center '>
          <ul className='grid grid-flow-row md:flex justify-start md:items-center my-[32px] md:mt-[0] w-full relative md:static bg-white md:z-auto left-0'>
            {links.map((link) => (
              <li
                key={link.name}
                className='grid grid-flow-row md:flex  md:mx-[32px] py-[20px] md:py-[10px]  font-inter font-semibold text-base text-[#475467] h-[24px]'>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=' md:flex md:items-center justify-center relative md:static bg-white md:z-auto left-0'>
        <span className='flex flex-col-reverse  md:flex-row items-start md:items-center justify-start md:justify-center'>
          <button className='flex flex-row justify-center items-center font-inter font-semibold text-base text-[#475467] md:w-[95px] md:h-[44px] px-[10px] bg-[#FFFFFF] border-[1px] border-none rounded-lg '>
            Log in
          </button>
          <button className='flex flex-row justify-center items-center font-inter font-semibold text-base text-[#ffffff] md:w-[95px] md:h-[44px] px-[10px] bg-[#00359E] border-[1px] rounded-lg shadow-sm'>
            Sign up
          </button>
        </span>
      </div>
    </div>
  );
};

export default TopNav;
