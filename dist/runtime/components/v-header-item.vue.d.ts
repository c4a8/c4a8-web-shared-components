declare namespace _default {
    let tagName: string;
    namespace computed {
        function navigation(): any;
    }
    namespace methods {
        function headerItemClasses(item: any): any[];
        function headerLinkClasses(item: any, index: any): any;
        function getListClasses(item: any, index: any, classes: any): any[];
        function isLinkListHidden(item: any, index: any): boolean;
        function isMenuButton(item: any): boolean;
        function isMenuOpen(item: any, index: any): boolean;
        function getMenuId(item: any, index: any, listIndex: any): string | null;
        function getMenuControls(item: any, index: any): string;
        function navHighlightClasses(item: any, index: any): string[];
        function headerProductListClasses(item: any, index: any): any[];
    }
    namespace props {
        let lowerLang: StringConstructor;
        let activeNavigation: ObjectConstructor;
        let handleMouseOver: FunctionConstructor;
        let handleClick: FunctionConstructor;
        let getHref: FunctionConstructor;
        let getTarget: FunctionConstructor;
        let linkLists: ObjectConstructor;
        let getId: FunctionConstructor;
        let getIdToken: FunctionConstructor;
        let getFlyoutId: FunctionConstructor;
        namespace openFlyout {
            export let type: NumberConstructor;
            let _default: null;
            export { _default as default };
        }
        let inTransition: BooleanConstructor;
        let renderMegaMenu: BooleanConstructor;
        let crawlableMenus: BooleanConstructor;
    }
}
export default _default;
