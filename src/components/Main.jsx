import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

export const Main = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 639px )" srcSet={imgMobile} />
        <source media="(min-width: 640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="background header" />
      </picture>
      
      <p className="absolute w-[327px] font-Fraunces text-center text-[40px] tracking-[6.25px] text-White uppercase top-[144px] left-0 right-0 mx-auto sm:w-[600px]">
        We are creatives</p>
      <img
        className="absolute top-[294px] right-0 left-0 mx-auto sm:top-[220px]"
        src={arrow}
        alt="arrow"
      />
      
    </section>
  );
}

