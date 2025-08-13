declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function expandClassList(): string[];
        function headlineClassValue(): string;
        function headlineLevelValue(): string;
        function tagList(): any;
    }
    function mounted(): void;
    namespace methods {
        function init(): void;
        function handleExpand(): void;
        function showJobs(): void;
        function loadJobData(): any;
        function loadJob(multiple: any): void;
        function loadJobs(): void;
        function handleJobs(data: any): void;
        function filterJobs(data: any, orderedList: any): void;
        function showExpandButton(): void;
        function isAvailableEntry(data: any): boolean;
        function stopLoading(): void;
        function handleEntryClick(e: any): void;
        function getData(element: any): any;
        function getDetailUrl(data: any): any;
    }
    function data(): {
        loadingDelay: number;
        sleepDelay: number;
        loading: {};
        hasLoading: boolean;
        hasLoader: boolean;
        api: {};
        hasExpand: boolean;
        isExpandVisible: boolean;
        entries: never[];
        jobData: {};
        promises: never[];
        isEmpty: boolean;
    };
    namespace props {
        let clientName: StringConstructor;
        let maxItems: StringConstructor;
        let detailUrl: ObjectConstructor;
        let jobId: StringConstructor;
        let tags: StringConstructor;
        let lang: StringConstructor;
        let team: StringConstructor;
        let apiUrl: StringConstructor;
        let headlineClasses: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineText: StringConstructor;
        let expandText: StringConstructor;
        let sublineText: StringConstructor;
        namespace sticky {
            let _default: null;
            export { _default as default };
        }
    }
}
export default _default;
