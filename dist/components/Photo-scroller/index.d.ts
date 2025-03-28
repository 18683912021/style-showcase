import { PropType } from "vue";
import "../../styles/Photo-scroller.scss";
interface ImageItem {
    src: string;
}
declare const PhotoScroller: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    leftImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
    centerImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
    rightImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    leftImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
    centerImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
    rightImage: {
        type: PropType<ImageItem[]>;
        default: () => {
            src: string;
        }[];
    };
}>> & Readonly<{}>, {
    leftImage: ImageItem[];
    centerImage: ImageItem[];
    rightImage: ImageItem[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default PhotoScroller;
