declare namespace _default {
    let tagName: string;
    function data(): {
        translationData: null;
        defaultLimit: number;
        maxLimitDefault: number;
        showMore: boolean;
        files: never[];
    };
    namespace computed {
        function classList(): (string | null)[];
        function lastIndex(): number;
        function limitValue(): any;
        function maxLimitValue(): any;
        function eventsValue(): any;
        function hasMore(): boolean;
        function query(): {
            where: {
                eventid: {
                    $in: any;
                };
            };
            path: string;
        };
        function sort(): {
            moment: number;
        };
    }
    function mounted(): void;
    namespace methods {
        function updatedEvent(event: any): any;
        function isVisible(index: any): any;
        function handleShowMore(): void;
        function updateFiles(files: any): boolean;
    }
    namespace props {
        let events: ArrayConstructor;
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let overlap: BooleanConstructor;
        let limit: NumberConstructor;
        let maxLimit: NumberConstructor;
        let url: StringConstructor;
        let moreUrl: StringConstructor;
        let order: ArrayConstructor;
    }
}
export default _default;
