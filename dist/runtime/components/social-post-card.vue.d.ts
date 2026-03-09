declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function hasAnimationValue(): boolean;
        function utilityAnimationStep(): "1" | null;
        function style(): string | null;
        function firstMedia(): any;
        function formattedPostedAt(): any;
        function postedAtISO(): string | null;
        function truncatedContent(): any;
        function truncatedRepostContent(): any;
        function showReadMore(): any;
        function showRepostReadMore(): any;
    }
    function mounted(): void;
    namespace methods {
        function hasReadMore(content: any): boolean;
        function truncateContent(content: any): any;
        function formatDate(date: any): any;
        function handleClick(): void;
        function handleMediaClick(): void;
    }
    namespace props {
        namespace author {
            export let type: ObjectConstructor;
            function _default(): {};
            export { _default as default };
        }
        namespace postedAt {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace contentHtml {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace media {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_1(): never[];
            export { _default_1 as default };
        }
        namespace stats {
            let type_4: ObjectConstructor;
            export { type_4 as type };
            function _default_2(): {};
            export { _default_2 as default };
        }
        namespace postUrl {
            let type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace hasAnimation {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace resharedPost {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        let index: NumberConstructor;
        namespace maxContentLength {
            let type_7: NumberConstructor;
            export { type_7 as type };
            let _default_5: number;
            export { _default_5 as default };
        }
        namespace companyPageUrl {
            let type_8: StringConstructor;
            export { type_8 as type };
        }
    }
}
export default _default;
