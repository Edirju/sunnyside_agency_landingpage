import { Image } from './Image'
import { Text } from './Text';
import { ImageText } from './ImageText';
import imgTransformMob from '../assets/mobile/image-transform.jpg'
import imgTransformDesk from "../assets/desktop/image-transform.jpg";
import imgStandMobile from '../assets/mobile/image-stand-out.jpg'
import imgStandDesk from '../assets/desktop/image-stand-out.jpg'
import graphicMobile from '../assets/mobile/image-graphic-design.jpg'
import graphicDesk from '../assets/desktop/image-graphic-design.jpg'
import photoMobile from '../assets/mobile/image-photography.jpg'
import photoDesk from '../assets/desktop/image-photography.jpg'


export const Services = () => {
  return (
    <section className=" tablet:grid tablet:grid-cols-2">
      <Image
        order="order-2"
        imgMobile={imgTransformMob}
        imgDesktop={imgTransformDesk}
      />
      <Text
        order="order-1"
        title={"Transform your brand"}
        text={
          "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        }
        color={"bg-Yellow"}
      />
      <Image
        order="order-3"
        imgMobile={imgStandMobile}
        imgDesktop={imgStandDesk}
      />
      <Text
        order="order-4"
        title={"Stand out to the right audience"}
        text={
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        }
        color={"bg-Soft-red"}
      />
      <ImageText
        order="order-5"
        imgMobile={graphicMobile}
        imgDesktop={graphicDesk}
        title={"Graphic design"}
        text={
          "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        }
      />
      <ImageText
        order="order-6"
        imgMobile={photoMobile}
        imgDesktop={photoDesk}
        title={"Photography"}
        text={
          "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        }
      />
    </section>
  );
}
