declare namespace _default {
    let tagName: string;
    namespace computed {
        function videoClass(): any[];
        function style(): {
            'background-color': any;
        } | null;
        function videoPlayerClass(): any[];
        function videoContentClass(): any[];
        function videoTextClasses(): string[];
        function isCompact(): any;
        function hasCustomLevel(): any;
        function variantClasses(): string;
        function isVariantRow(): boolean;
        function videoParsed(): any;
        function onClickVideoContent(): "this.querySelector('a').click()" | null;
        function onClick(): "this.querySelector('a').click()" | null;
        function videoId(): string;
        function videoFrameId(): string;
        function headlineClasses(): string;
        function dataOptionsLightBox(): string;
        function options(): {
            videoId: any;
            parentSelector: string;
            targetSelector: string;
            isAutoplay: boolean;
        };
        function dataOptionsRegular(): string;
        function dataSrc(): string;
        function embedSrc(): string;
        function dataCaption(): any;
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function isReversed(): any;
        function handleButtonClick(): void;
        function handleLightboxClick(): void;
        function handleLightboxClose(): void;
        function handleClose(): void;
    }
    function data(): {
        isPlayed: boolean;
        elementClasses: {};
    };
    namespace props {
        let video: ObjectConstructor;
        let variant: StringConstructor;
        let spacing: StringConstructor;
        let overlapping: (BooleanConstructor | StringConstructor)[];
        let bgColor: StringConstructor;
        namespace left {
            export let type: (BooleanConstructor | StringConstructor)[];
            let _default: boolean;
            export { _default as default };
        }
        namespace light {
            let type_1: (BooleanConstructor | StringConstructor)[];
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace level {
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace noAnimation {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace playlist {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace subtitles {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace lazy {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
    }
}
export default _default;
