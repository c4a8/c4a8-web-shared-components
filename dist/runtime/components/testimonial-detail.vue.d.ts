declare namespace _default {
    let tagName: string;
    namespace props {
        namespace detailColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace title {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace name {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace location {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace light {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace headlineLevel {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
        namespace headlineClasses {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_6: string;
            export { _default_6 as default };
        }
        namespace description {
            let type_7: StringConstructor;
            export { type_7 as type };
            let _default_7: string;
            export { _default_7 as default };
        }
        namespace image {
            let type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_8(): {
                img: string;
                alt: string;
            };
            export { _default_8 as default };
        }
        namespace imgSrcSets {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            function _default_9(): {};
            export { _default_9 as default };
        }
    }
    namespace computed {
        function testimonialsDetailColor(): any;
        function testimonialsDetailTitle(): any;
        function testimonialsDetailName(): any;
        function testimonialsDetailLocation(): any;
        function testimonialsDetailLight(): any;
        function testimonialsDetailHeadlineLevel(): () => () => /*elided*/ any;
        function testimonialsDetailHeadlineClasses(): () => string;
        function testimonialsDetailDescription(): any;
        function testimonialsDetailImage(): any;
        function testimonialsDetailImageCloudinary(): any;
        function testimonialsDetailSubline(): string | (() => any);
        function headlineLevel(): () => /*elided*/ any;
        function headlineClasses(): string;
    }
}
export default _default;
