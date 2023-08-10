import milkbottlesImgMobile from "../assets/mobile/image-gallery-milkbottles.jpg"
import milkbottlesImgDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import orangeImgMobile from "../assets/mobile/image-gallery-orange.jpg";
import orangeImgDesktop from "../assets/desktop/image-gallery-orange.jpg";
import coneImgMobile from "../assets/mobile/image-gallery-cone.jpg";
import coneImgDesktop from "../assets/desktop/image-gallery-cone.jpg";
import sugarCubesImgMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubesImgDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg";

import { Image } from "./Image"

export const Gallery = () => {
  return (
    <section className=" grid grid-cols-2 sm:flex">
      <Image
        imgMobile={milkbottlesImgMobile}
        imgDesktop={milkbottlesImgDesktop}
      />
      
      <Image
        imgMobile={orangeImgMobile}
        imgDesktop={orangeImgDesktop}
      />
      
      <Image
        imgMobile={coneImgMobile}
        imgDesktop={coneImgDesktop}
      />
      
      <Image
        imgMobile={sugarCubesImgMobile}
        imgDesktop={sugarCubesImgDesktop}
      />

    </section>
  );
}
