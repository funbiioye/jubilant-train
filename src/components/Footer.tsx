import pishon from '../assets/Icons/Pishon (4).svg';

const Footer = () => {
  return (
    <div className='w-full h-[938px] bg-[#00359E] px-[16px] pt-[48px]'>
      <div className='flex flex-col md:flex md:flex-row md:gap-12'>
        <div className='bg-[#00359E] md:flex-[0.40]'>
          <img
            src={pishon}
            alt='Pishon logo'
          />
          <p className=' h-[48px] mt-[24px] md:mt-[32px] '>
            Buy shares of rental properties in under 5 <br></br> minutes starting from
            $10.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8 md:flex-[0.60] my-[48px]'>
          <span className='w-[140.8px] '>
            <ul>
              <li className='pb-[16px]'>Product</li>
              <li className='pb-[12px]'>Overview</li>
              <li className='pb-[10px]'>Features</li>
            </ul>
          </span>
          <span className='w-[140.8px]'>
            <ul>
              <li className='pb-[16px]'>Company</li>
              <li className='pb-[12px]'>About Us</li>
              <li className='pb-[12px]'>careers</li>
              <li className='pb-[12px]'>Contact</li>
            </ul>
          </span>
          <span className='w-[140.8px]'>
            <ul>
              <li className='pb-[16px]'>Resources</li>
              <li className='pb-[12px]'>Blog</li>
              <li className='pb-[12px]'>Newsletter</li>
              <li className='pb-[12px]'>Help Center</li>
              <li className='pb-[12px]'>Support</li>
            </ul>
          </span>
          <span className='w-[140.8px]'>
            <ul>
              <li className='pb-[16px]'>Social</li>
              <li className='pb-[12px]'>Twitter</li>
              <li className='pb-[12px]'>LinkedIn</li>
              <li className='pb-[12px]'>Facebook</li>
              <li className='pb-[12px]'>Youtube</li>
              <li className='pb-[12px]'>Instagram</li>
            </ul>
          </span>
          <span className='w-[140.8px]'>
            <ul>
              <li className='pb-[16px]'>Legal</li>
              <li className='pb-[12px]'>Terms</li>
              <li className='pb-[12px]'>Privacy</li>
              <li className='pb-[12px]'>Cookies</li>
            </ul>
          </span>
        </div>
      </div>
      <div className=''>
        <p>© 2023 Pishon Inc. All rights reserved.</p>
        <span className=''>
          <img
            src=''
            alt=''
          />
          <img
            src=''
            alt=''
          />
          <img
            src=''
            alt=''
          />
          <img
            src=''
            alt=''
          />
          <img
            src=''
            alt=''
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
