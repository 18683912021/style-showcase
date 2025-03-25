import { defineComponent, toRefs } from "vue";
import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/3.jpeg";
import image4 from "../../assets/4.jpeg";
import image5 from "../../assets/5.jpeg";
import "../../styles/Photo-scroller.scss";

interface ImageItem {
  src: string;
}

export default defineComponent({
  name: "PhotoScroller",
  props: {
    leftImage: {
      type: Array as () => ImageItem[],
      default: () => [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image3 },
        { src: image4 },
      ],
    },
    centerImage: {
      type: Array as () => ImageItem[],
      default: () => [
        { src: image5 },
        { src: image3 },
        { src: image4 },
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image2 },
      ],
    },
    rightImage: {
      type: Array as () => ImageItem[],
      default: () => [
        { src: image4 },
        { src: image1 },
        { src: image5 },
        { src: image2 },
        { src: image3 },
        { src: image1 },
        { src: image5 },
      ],
    },
  },
  setup(props) {
    const { leftImage, centerImage, rightImage } = toRefs(props);

    return () => (
      <div class="photo-scroller">
        <div class="main">
          <div class="section">
            {leftImage.value.map((item, index) => (
              <img key={index} src={item.src} alt="" />
            ))}
          </div>
          <div class="section">
            {centerImage.value.map((item, index) => (
              <img key={index} src={item.src} alt="" />
            ))}
          </div>
          <div class="section">
            {rightImage.value.map((item, index) => (
              <img key={index} src={item.src} alt="" />
            ))}
          </div>
        </div>
      </div>
    );
  },
});