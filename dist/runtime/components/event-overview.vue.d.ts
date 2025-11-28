declare namespace _default {
    let tagName: string;
    function data(): {
        translationData: null;
        defaultLimit: number;
        maxLimitDefault: number;
        showMore: boolean;
        filesValue: never[];
    };
    namespace computed {
        function classList(): (string | null)[];
        function lastIndex(): number;
        function limitValue(): any;
        function maxLimitValue(): any;
        function eventsValue(): any;
        function hasMore(): any;
        function query(): {
            where: any;
            path: string;
        };
        function sort(): any;
    }
    function mounted(): void;
    namespace methods {
        function updatedEvent(event: any): any;
        function isVisible(index: any): any;
        function handleShowMore(): void;
        function updateFiles(files: any): true | undefined;
    }
    namespace props {
        let events: ArrayConstructor;
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let overlap: BooleanConstructor;
        let limit: NumberConstructor;
        let maxLimit: NumberConstructor;
        let moreUrl: StringConstructor;
        let order: ArrayConstructor;
        let sortBy: ObjectConstructor;
        namespace useSharedContent {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        namespace tag {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
    }
}
export default _default;
