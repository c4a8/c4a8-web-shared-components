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
    function updated(): void;
    namespace methods {
        function getBlogTitlepic(item: any): any;
        function resetUtilityAnimation(): void;
        function reinitUtilityAnimation(): void;
        function blogImgUrl(url: any): any;
        function handleCardTagClicked(event: any): void;
    }
    namespace props {
        let items: ArrayConstructor;
        let view: StringConstructor;
        let dataAuthors: ObjectConstructor;
        let hasNoAspectRatio: BooleanConstructor;
    }
}
export default _default;
