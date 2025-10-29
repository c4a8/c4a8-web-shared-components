declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any[];
        function hasNoAnimation(): boolean;
        function classListTitle(): string[];
        function classListList(): string[];
        function hasActiveItem(): any;
        function isHidden(): boolean;
    }
    namespace watch {
        function hidden(oldValue: any, _: any): void;
    }
    function updated(): void;
    function mounted(): void;
    namespace methods {
        function bindEvents(): void;
        function handleUpdate(event: any): void;
        function isLowerBreakpoint(): boolean;
        function isExpandable(): any;
        function updateHeight(): void;
        function handleClick(event: any): void;
        function resetLinks(index: any): void;
        function getLinkRef(refName: any): any;
        function getRef(name: any, refName: any): any;
        function handleMouseOver(index: any): void;
        function handleMouseOut(index: any): void;
        function setCtaClasses(): void;
        function toggleIcon(index: any): "expand" | undefined;
    }
    namespace props {
        let list: ObjectConstructor;
        let lang: StringConstructor;
        let classes: StringConstructor;
        namespace hidden {
            let _default: null;
            export { _default as default };
        }
        namespace noAnimation {
            let _default_1: null;
            export { _default_1 as default };
        }
    }
    function data(): {
        inTransition: boolean;
        isExpanded: boolean;
        parentOfParent: null;
        hoverChild: boolean;
        ctaClassList: null;
    };
}
export default _default;
