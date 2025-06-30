declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function columnClassList(): string[];
        function isList(): any;
        function isRow(): boolean;
    }
    namespace watch {
        function view(): void;
        function items(): void;
    }
    function created(): void;
    function updated(): void;
    namespace methods {
        function resetUtilityAnimation(): void;
        function reinitUtilityAnimation(): void;
        function blogImgUrl(url: any): any;
        function handleCardTagClicked(event: any): void;
    }
    namespace props {
        let items: StringConstructor;
        let view: StringConstructor;
        let dataAuthors: ArrayConstructor;
    }
}
export default _default;
