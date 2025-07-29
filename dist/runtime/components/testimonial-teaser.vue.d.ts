declare namespace _default {
    let tagName: string;
    namespace props {
        namespace href {
            let type: StringConstructor;
        }
        namespace name {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace title {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace img {
            let type_3: ObjectConstructor;
            export { type_3 as type };
            export let required: boolean;
        }
        namespace imgPosition {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default: string;
            export { _default as default };
        }
        namespace cloudinary {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace video {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace cornerImg {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace bgColor {
            let type_8: StringConstructor;
            export { type_8 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace bgColorHover {
            let type_9: StringConstructor;
            export { type_9 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        namespace aspectRatio {
            let type_10: StringConstructor;
            export { type_10 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
    }
    function data(): {
        videoPlaying: boolean;
    };
    function mounted(): void;
    namespace methods {
        function getVideoState(): any;
        function setVideoPlayed(): void;
    }
    namespace computed {
        function aspectRatioClass(): string;
        function imgObjectPositionClass(): string;
        function cornerPosition(): "testimonial-teaser__corner--left" | "testimonial-teaser__corner--right";
        function bgStyling(): string;
        function nameReplaced(): any;
        function imgSrcSet(): any;
    }
}
export default _default;
