import './Icon.scss';
import { FiMenu } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft, FaWhatsapp } from "react-icons/fa";


export const Icon = ({ type, isInstagramSlider }) => {

  return (
    <>
      { (type === 'user') &&
        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 9C10.4853 9 12.5 6.98531 12.5 4.5C12.5 2.01469 10.4853 0 8 0C5.515 0 3.5 2.01469 3.5 4.5C3.5 6.98531 5.51562 9 8 9ZM8 1.5C9.65437 1.5 11 2.84563 11 4.5C11 6.15406 9.65437 7.5 8 7.5C6.34594 7.5 5 6.15406 5 4.5C5 2.84563 6.34687 1.5 8 1.5ZM10.9719 10H5C2.23875 10 0 12.2384 0 15C0 15.5522 0.447812 16 0.971875 16H15C15.5522 16 15.9719 15.5522 15.9719 15C16 12.2375 13.7625 10 10.9719 10ZM1.53562 14.5C1.77897 12.8059 3.24 11.5 5.00125 11.5H10.9731C12.7334 11.5 14.195 12.8059 14.4388 14.5H1.53562Z" fill="currentColor"></path></svg>
      }
      { (type === 'magnifier') &&
        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="currentColor"></path></svg>
      }
      { (type === 'heart') &&
        <svg className='icon icon--heart' xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none"><path d="M17.0924 8.3751L9.87501 15.8752L2.65757 8.3751C2.21617 7.91037 1.88057 7.35562 1.6738 6.74894C1.46702 6.14226 1.39398 5.49803 1.45968 4.86046C1.52538 4.22289 1.72827 3.60709 2.05441 3.05533C2.38056 2.50357 2.82224 2.02891 3.34913 1.66396C3.87602 1.299 4.47565 1.05238 5.10685 0.941028C5.73805 0.829676 6.38587 0.85623 7.00584 1.01887C7.62581 1.1815 8.20324 1.47637 8.6985 1.88322C9.19376 2.29008 9.59511 2.79928 9.87501 3.37588C10.1549 2.79928 10.5563 2.29008 11.0515 1.88322C11.5468 1.47637 12.1242 1.1815 12.7442 1.01887C13.3641 0.85623 14.012 0.829676 14.6432 0.941028C15.2744 1.05238 15.874 1.299 16.4009 1.66396C16.9278 2.02891 17.3695 2.50357 17.6956 3.05533C18.0217 3.60709 18.2246 4.22289 18.2903 4.86046C18.356 5.49803 18.283 6.14226 18.0762 6.74894C17.8694 7.35562 17.5338 7.91037 17.0924 8.3751Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      }
      { (type === 'cart') &&
        <svg className='icon icon--cart' xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none"><path d="M14.375 18H1.625V5.25H14.375V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 7.5V4.5C5 2.85 6.35 1.5 8 1.5C9.65 1.5 11 2.85 11 4.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      }
      { (type === 'menu') &&
        <FiMenu className='icon icon--menu' />
      }
      {/* social */}
      { (type === 'facebook') &&
        <svg className='icon icon--social' xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none"><path d="M9.70117 10.7671H7.06445V18.6421H3.54883V10.7671H0.666016V7.53271H3.54883V5.03662C3.54883 2.22412 5.23633 0.64209 7.80273 0.64209C9.0332 0.64209 10.334 0.888184 10.334 0.888184V3.66553H8.89258C7.48633 3.66553 7.06445 4.50928 7.06445 5.42334V7.53271H10.1934L9.70117 10.7671Z"></path></svg>
      }
      { (type === 'twitter') &&
        <svg className='icon icon--social' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M14.1828 2.32959H16.6649L11.2438 8.52412L17.6211 16.9546H12.6289L8.71603 11.8429L4.24415 16.9546H1.75861L7.55587 10.3276L1.4422 2.32959H6.56095L10.0942 7.00186L14.1828 2.32959ZM13.3109 15.471H14.6856L5.81212 3.73584H4.33556L13.3109 15.471Z"></path></svg>
      }
      { (type === 'instagram') &&
        <svg className='icon icon--social' xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none"><g clipPath="url(#clip0_89_2537)"><path d="M8.50353 5.59893C6.26759 5.59893 4.46407 7.40244 4.46407 9.63838C4.46407 11.8743 6.26759 13.6778 8.50353 13.6778C10.7395 13.6778 12.543 11.8743 12.543 9.63838C12.543 7.40244 10.7395 5.59893 8.50353 5.59893ZM8.50353 12.2646C7.05861 12.2646 5.87736 11.0868 5.87736 9.63838C5.87736 8.18994 7.05509 7.01221 8.50353 7.01221C9.95197 7.01221 11.1297 8.18994 11.1297 9.63838C11.1297 11.0868 9.94845 12.2646 8.50353 12.2646ZM13.6504 5.43369C13.6504 5.95752 13.2285 6.37588 12.7082 6.37588C12.1844 6.37588 11.766 5.954 11.766 5.43369C11.766 4.91338 12.1879 4.4915 12.7082 4.4915C13.2285 4.4915 13.6504 4.91338 13.6504 5.43369ZM16.3258 6.38994C16.266 5.12783 15.9777 4.00986 15.0531 3.08877C14.132 2.16768 13.0141 1.87939 11.752 1.81611C10.4512 1.74229 6.55236 1.74229 5.25157 1.81611C3.99298 1.87588 2.87501 2.16416 1.9504 3.08525C1.02579 4.00635 0.741028 5.12432 0.677747 6.38643C0.603918 7.68721 0.603918 11.586 0.677747 12.8868C0.737512 14.1489 1.02579 15.2669 1.9504 16.188C2.87501 17.1091 3.98947 17.3974 5.25157 17.4606C6.55236 17.5345 10.4512 17.5345 11.752 17.4606C13.0141 17.4009 14.132 17.1126 15.0531 16.188C15.9742 15.2669 16.2625 14.1489 16.3258 12.8868C16.3996 11.586 16.3996 7.69072 16.3258 6.38994ZM14.6453 14.2825C14.3711 14.9716 13.8402 15.5024 13.1477 15.7802C12.1106 16.1915 9.64962 16.0966 8.50353 16.0966C7.35743 16.0966 4.89298 16.188 3.85939 15.7802C3.17032 15.506 2.63947 14.9751 2.36173 14.2825C1.9504 13.2454 2.04532 10.7845 2.04532 9.63838C2.04532 8.49229 1.95392 6.02783 2.36173 4.99424C2.63595 4.30518 3.16681 3.77432 3.85939 3.49658C4.8965 3.08525 7.35743 3.18018 8.50353 3.18018C9.64962 3.18018 12.1141 3.08877 13.1477 3.49658C13.8367 3.7708 14.3676 4.30166 14.6453 4.99424C15.0567 6.03135 14.9617 8.49229 14.9617 9.63838C14.9617 10.7845 15.0567 13.2489 14.6453 14.2825Z"></path></g></svg>
      }
      { (type === 'pinterest') &&
        <svg className='icon icon--social' xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none"><g clipPath="url(#clip0_89_2540)"><path d="M7.92188 0.870605C4.31484 0.870605 0.75 3.27529 0.75 7.16709C0.75 9.64209 2.14219 11.0483 2.98594 11.0483C3.33398 11.0483 3.53437 10.078 3.53437 9.80381C3.53437 9.47686 2.70117 8.78076 2.70117 7.42021C2.70117 4.59365 4.85273 2.58975 7.63711 2.58975C10.0312 2.58975 11.8031 3.95029 11.8031 6.4499C11.8031 8.3167 11.0543 11.8183 8.62852 11.8183C7.75313 11.8183 7.0043 11.1854 7.0043 10.2784C7.0043 8.94951 7.93242 7.66279 7.93242 6.2917C7.93242 3.96436 4.63125 4.38623 4.63125 7.19873C4.63125 7.78936 4.70508 8.44326 4.96875 8.98115C4.48359 11.0694 3.49219 14.1808 3.49219 16.3323C3.49219 16.9968 3.58711 17.6507 3.65039 18.3151C3.76992 18.4487 3.71016 18.4347 3.89297 18.3679C5.66484 15.9421 5.60156 15.4675 6.40313 12.2929C6.83555 13.1155 7.95352 13.5585 8.83945 13.5585C12.573 13.5585 14.25 9.91982 14.25 6.63975C14.25 3.14873 11.2336 0.870605 7.92188 0.870605Z"></path></g></svg>
      }
      { (type === 'sendArrowRight') &&
        <BsArrowRight className='icon icon--arrow-right' />
      }
      { /* bag */ }
      { (type === 'addItem') &&
        <TbShoppingBagPlus  className='icon icon--addItem' />
      }
      {/* services */}
      { (type === 'shipping') &&
        <svg className='icon icon--service' xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none"><path d="M6.95455 12.1421H3.68182" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.95456 17.5967H5.86365" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.8589 18.6876H25.5V12.1421L21.1364 9.96032L20.0454 5.59668H11.3182V18.6876H13.6865" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.5 6.6875H6.95455" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.5 1.23291H11.3182V5.59655" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.7727 23.0513C18.5802 23.0513 20.0455 21.5861 20.0455 19.7786C20.0455 17.9711 18.5802 16.5059 16.7727 16.5059C14.9652 16.5059 13.5 17.9711 13.5 19.7786C13.5 21.5861 14.9652 23.0513 16.7727 23.0513Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.6818 8.86914V11.051H17.8636" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      }
      { (type === 'guarantee') &&
        <svg className='icon icon--service' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_89_2317)"><path d="M1.5 8.14209H10.264" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 12.6011V16.1421H1.5V7.14209V3.14209H16.5V6.14209" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.5 12.1421H7.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 13.1421C16.3 13.1421 14.5 11.3421 14.5 9.14209H12.5C10.843 9.14209 9.5 7.79909 9.5 6.14209H16.444C20.234 6.14209 23.462 9.13409 23.499 12.9231C23.537 16.9151 20.524 20.1421 16.5 20.1421C13.799 20.1421 9.73 19.6861 7.372 19.3901C6.226 19.2461 5.272 18.4581 4.907 17.3631L4.5 16.1421" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_89_2317"><rect width="24" height="24" fill="white" transform="translate(0.5 0.14209)"></rect></clipPath></defs></svg>
      }
      { (type === 'support') &&
        <svg className='icon icon--service' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_89_2333)"><path d="M20.278 4.36426L16.036 8.60626" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.278 19.9202L16.036 15.6782" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.72202 19.9202L8.96402 15.6782" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.72202 4.36426L8.96402 8.60626" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.2779 19.9202C24.5736 15.6245 24.5736 8.65972 20.2779 4.36399C15.9822 0.0682642 9.01743 0.0682642 4.7217 4.36399C0.425977 8.65972 0.425977 15.6245 4.7217 19.9202C9.01743 24.2159 15.9822 24.2159 20.2779 19.9202Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.0353 15.6776C17.9879 13.725 17.9879 10.5592 16.0353 8.60659C14.0827 6.65399 10.9169 6.65399 8.9643 8.60659C7.0117 10.5592 7.0117 13.725 8.9643 15.6776C10.9169 17.6302 14.0827 17.6302 16.0353 15.6776Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_89_2333"><rect width="24" height="24" fill="white" transform="translate(0.5 0.14209)"></rect></clipPath></defs></svg>
      }
      { (type === 'payment') &&
        <svg className='icon icon--service' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clipPath="url(#clip0_89_2350)"><path d="M1.5 7.14209H23.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.5 11.1421H23.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.5 21.1421H3.5C2.395 21.1421 1.5 20.2471 1.5 19.1421V5.14209C1.5 4.03709 2.395 3.14209 3.5 3.14209H16.5H21.5C22.605 3.14209 23.5 4.03709 23.5 5.14209V19.1421C23.5 20.2471 22.605 21.1421 21.5 21.1421Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.5 16.1421H10.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5 16.1421H19.5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_89_2350"><rect width="24" height="24" fill="white" transform="translate(0.5 0.14209)"></rect></clipPath></defs></svg>
      }
      {/* instagram slider */}
      { (type === 'prev') &&
        <FaChevronLeft   className='icon icon--arrow-instagram icon--arrow-instagram-prev' />
      }
      { (type === 'next') &&
        <FaChevronRight  className='icon icon--arrow-instagram icon--arrow-instagram-next' />
      }
      { (type === 'exit') &&
          <IoClose className={`icon icon--exit ${(isInstagramSlider) ? 'instagram-slider-close-btn' : '' }`} />
      }
    </>
  )
}