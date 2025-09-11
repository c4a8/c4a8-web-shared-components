declare namespace _default {
    let tagName: string;
    function data(): {
        clientWidth: null;
        resizeObserver: null;
    };
    function setup(props: any): {
        openSidebarModal?: undefined;
    } | {
        openSidebarModal: (sectionTitle: any) => void;
    };
    namespace computed {
        function jsonItems(): any;
        function classList(): string[];
        function style(): string[];
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function updateClientWidth(): void;
        function handleItemClick(item: any): void;
    }
    namespace props {
        let items: ArrayConstructor;
        let bgColor: StringConstructor;
        let component: StringConstructor;
    }
}
export default _default;
