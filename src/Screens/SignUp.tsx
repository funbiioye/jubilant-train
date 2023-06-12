import Pishon from '../assets/Images/Pishon (1).svg';
// import LogButton from '../components/LogButton';

function SignUp() {
  return (
    <div className='grid grid-flow-col w-full h-screen py-24 bg-white justify-center font-inter text-sm'>
      <div>
        <span className='flex justify-center text-center '>
          <img
            className='w-360px h-38px'
            src={Pishon}
            alt='Pishon logo'
          />
        </span>
        <div className='flex  flex-col justify-center text-center pt-6'>
          <h1
            className='w-[360px] h-[38px] font-semibold font-sans text-[38px] text-[#101828] leading-[38px];
]'>
            Create an account
          </h1>
          <span className='my-3'>
            <p className='w-[360px] h-[24px] font-normal text-base text-[#475467] '>
              Start your journey to financial freedom.
            </p>
          </span>
        </div>
        <div className='grid grid-flow-row md:grid-flow-col pt-3 justify-between '>
          <div>
            <p className='pt-5 font-inter font-medium text-[14px] leading-[20px] text-[#344054]'>
              First name
            </p>
            <input className='w-[360px] h-[44px] text-[#101828] md:w-[168px]  px-[14px] py-[10px] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] mt-[6px]  bg-white rounded-lg border-1'></input>
          </div>
          <div>
            <p className=' font-inter font-medium text-[14px] leading-[20px] text-[#344054] sm:mt-5 '>
              Last name
            </p>
            <input className='w-[360px] h-[44px] text-[#101828] md:w-[168px] border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583]   mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </div>
        </div>
        <div className='grid grid-flow-row'>
          <span>
            <p className='pt-5 text-[#344054] font-inter font-medium text-[14px] leading-[20px]'>
              Phone number
            </p>
            <input
              placeholder='Enter your Phone number'
              className='border-2 text-[#101828] border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[360px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </span>
          <span>
            <p className='pt-5  text-[#344054] font-inter font-medium text-[14px] leading-[20px]'>
              Email
            </p>
            <input
              placeholder='Enter your email'
              className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[360px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
          </span>
          <span>
            <p className='pt-5 text-[#344054] font-inter font-medium text-[14px] leading-[20px]'>
              Password
            </p>
            <input
              placeholder='Create your password'
              className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[360px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
            <p className='pt-[6px] text-[#344054] font-inter font-normal text-[14px] leading-[20px]'>
              Must be at least 8 characters.
            </p>
          </span>
          <span>
            <p className='pt-5 text-[#344054] font-medium text-[14px] leading-[20px]'>
              Referal code
            </p>
            <input
              placeholder='Referral code of the user that referred you'
              className='border-2 border-[#D0D5DD] focus:outline-none focus:border-[#32D583] focus:ring-1 focus:[#32D583] w-[360px] h-[44px] mt-[6px] px-[14px] py-[10px] bg-white rounded-lg '></input>
            <p className='pt-[6px] text-[#344054] font-normal text-[14px] leading-[20px]'>
              Must be at least 8 characters.
            </p>
          </span>
        </div>
        <div className='grid grid-flow-row pt-6'>
          <a href='LoginPage'>
            <button className='justify-center border-2 w-full h-[44px] mt-[24px] px-[135.5px] py-[10px] bg-[#00359E] font-semibold text-[16px] text-[#FFFFFF]  rounded-lg  '>
              Get Started
            </button>
          </a>
          {/* <span>
            <LogButton />
          </span>   */}
          <span className='pt-4'>
            <button className='flex justify-center border-2 w-[360px] h-[44px] mt-[16px] pl-[75px] px-[16px] py-[10px] bg-[#FFFFFF] font-semibold text-[16px] text-[#000000] rounded-lg'>
              Sign up with Google
              <svg
                className='relative'
                transform='translate(-190)'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_689_60922)'>
                  <path
                    d='M24.2663 12.2765C24.2663 11.4608 24.2001 10.6406 24.059 9.83813H12.7402V14.4591H19.222C18.953 15.9495 18.0888 17.2679 16.8233 18.1056V21.104H20.6903C22.9611 19.014 24.2663 15.9274 24.2663 12.2765Z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z'
                    fill='#34A853'
                  />
                  <path
                    d='M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z'
                    fill='#FBBC04'
                  />
                  <path
                    d='M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z'
                    fill='#EA4335'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_689_60922'>
                    <rect
                      width='24'
                      height='24'
                      fill='white'
                      transform='translate(0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </span>
          <span className='grid grid-flow-row justify-center mt-8'>
            <p className='font-normal text-[14px] leading-[20px]'>
              Already have an account?
              <a
                className='text-[#00359E] text-[14px] font-semibold leading-[20px] ml-[4px]'
                href='/loginpage'>
                Log in
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
