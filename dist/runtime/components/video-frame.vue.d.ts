declare namespace _default {
    let tagName: string;
    namespace props {
        let thumb: StringConstructor;
        let alt: StringConstructor;
        let id: StringConstructor;
        namespace preset {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace container {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace corner {
            let type_2: (ObjectConstructor | BooleanConstructor)[];
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace spacingTop {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace fullWidth {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace headline {
            let type_5: (ObjectConstructor | BooleanConstructor)[];
            export { type_5 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace sticky {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
        namespace ctaData {
            let type_7: ObjectConstructor;
            export { type_7 as type };
        }
        namespace playlist {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let _default_7: boolean;
            export { _default_7 as default };
        }
        namespace color {
            let type_9: StringConstructor;
            export { type_9 as type };
        }
        namespace fontSize {
            let type_10: StringConstructor;
            export { type_10 as type };
        }
        namespace cover {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_8: boolean;
            export { _default_8 as default };
        }
        namespace lightbox {
            let type_12: BooleanConstructor;
            export { type_12 as type };
            let _default_9: boolean;
            export { _default_9 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function headlineClasses(): any;
        function hasVideo(): any;
        function parentId(): string;
        function targetId(): string;
        function stickyClassList(): (string | {
            'video-frame--cover': any;
        })[];
        function rootClassList(): {
            'video-frame--played': any;
        }[];
        function containerClass(): any[];
        function rowClass(): (string | {
            'position-relative': any;
        })[];
        function mainClass(): any[];
        function stickyStyles(): {
            position: string;
            top: string;
        } | {
            position?: undefined;
            top?: undefined;
        };
        function playerClass(): string[];
        function cornerClass(): any[];
        function rootStyle(): {
            '--video-frame-color': any;
            '--video-frame-headline-color': string;
        };
        function videoPlayerOptions(): {
            videoId?: undefined;
            parentSelector?: undefined;
            targetSelector?: undefined;
            isAutoplay?: undefined;
            classMap?: undefined;
        } | {
            videoId: any;
            parentSelector: string;
            targetSelector: string;
            isAutoplay: boolean;
            classMap: {
                toggle: string;
            };
        };
        function embedSrc(): string;
        function showIframe(): any;
        function showLightbox(): any;
    }
    namespace methods {
        function handleClick(): void;
        function setPlayed(): void;
        function handleLightboxClose(): void;
    }
    function data(): {
        isPlayed: boolean;
        options: {};
        openIframe: boolean;
    };
}
export default _default;
