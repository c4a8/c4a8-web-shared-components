declare namespace _default {
    export let tagName: string;
    export namespace computed {
        function blogView(): any;
        function combinedTitle(): string;
        function noLink(): boolean;
        function indexValue(): any;
        function style(): string | null;
        function hasAnimationValue(): boolean;
        function utilityAnimationStep(): "1" | null;
        function rowValue(): boolean;
        function variant(): string;
        function classList(): any[];
        function productValue(): any;
        function truncatedExcerpt(): string;
        function strippedExcerpt(): any;
        function cardDate(): any;
        function hasExtension(): any;
        function hasBlogTitlePic(): boolean;
        function hasNoLink(): boolean;
        function ctaValue(): any;
        function cardFooterData(): any;
    }
    export function created(): void;
    export function mounted(): void;
    export namespace methods {
        function isTags(target: any): boolean;
        function formatDate(date: any): any;
        function authorList(author: any): any;
        function subPointsList(subpoints: any): any;
        function headlineClassValue(index: any): "" | "mt-5";
        function handleClick(e: any): void;
        function isIncluded(include: any): "check-mark" | "x-mark";
    }
    export namespace props {
        namespace teamCards {
            let type: ObjectConstructor;
            let required: boolean;
        }
        let url: StringConstructor;
        let title: StringConstructor;
        let target: StringConstructor;
        let excerpt: StringConstructor;
        namespace author {
            let type_1: (ArrayConstructor | StringConstructor)[];
            export { type_1 as type };
        }
        let date: StringConstructor;
        let footer: StringConstructor;
        namespace tag {
            let _default: null;
            export { _default as default };
        }
        namespace large {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace long {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace product {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace subPoints {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace event {
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace webcast {
            let _default_6: null;
            export { _default_6 as default };
        }
        let youtubeUrl: StringConstructor;
        let dataAuthors: ObjectConstructor;
        let scope: StringConstructor;
        namespace cta {
            let _default_7: null;
            export { _default_7 as default };
        }
        namespace hasAnimation {
            let _default_8: null;
            export { _default_8 as default };
        }
        let index: NumberConstructor;
        let externalLanguage: StringConstructor;
        let spacing: StringConstructor;
        namespace store {
            let _default_9: null;
            export { _default_9 as default };
        }
        namespace row {
            let _default_10: null;
            export { _default_10 as default };
        }
        let tags: ArrayConstructor;
    }
    export namespace teamCards_1 {
        let type_2: ObjectConstructor;
        export { type_2 as type };
        let required_1: boolean;
        export { required_1 as required };
    }
    export { teamCards_1 as teamCards };
}
export default _default;
