import { defineComponent, PropType } from 'vue';
import "../../styles/Photo-scroller.scss";

import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/3.jpeg";
import image4 from "../../assets/4.jpeg";
import image5 from "../../assets/5.jpeg";

interface ImageItem {
    src: string;
}

export default defineComponent({
    name: "PhotoScroller",
    props: {
        leftImage: {
            type: Array as PropType<ImageItem[]>,
            default: () => [
                { src: image1 },
                { src: image2 },
                { src: image3 },
                { src: image4 },
                { src: image5 },
                { src: image3 },
                { src: image4 },
            ]
        },
        centerImage: {
            type: Array as PropType<ImageItem[]>,
            default: () => [
                { src: image5 },
                { src: image3 },
                { src: image4 },
                { src: image1 },
                { src: image2 },
                { src: image3 },
                { src: image2 },
            ]
        },
        rightImage: {
            type: Array as PropType<ImageItem[]>,
            default: () => [
                { src: image4 },
                { src: image1 },
                { src: image5 },
                { src: image2 },
                { src: image3 },
                { src: image1 },
                { src: image5 },
            ]
        },
    },
    setup(props) {
        return () => (
            <div class="photo-scroller">
                <div class="main">
                    <div class="section">
                        {props.leftImage.map((item, index) => (
                            <img key={index} src={item.src} alt="" />
                        ))}
                    </div>
                    <div class="section">
                        {props.centerImage.map((item, index) => (
                            <img key={index} src={item.src} alt="" />
                        ))}
                    </div>
                    <div class="section">
                        {props.rightImage.map((item, index) => (
                            <img key={index} src={item.src} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
});
