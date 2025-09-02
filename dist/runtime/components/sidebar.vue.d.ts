declare namespace _default {
    let tagName: string;
    namespace props {
        namespace sections {
            let type: ArrayConstructor;
        }
    }
    function data(): {
        isReady: boolean;
    };
    function mounted(): void;
    namespace methods {
        function getDialogByIndex(index: any): any;
        function openDialog(index: any): void;
        function closeDialog(index: any): void;
    }
}
export default _default;
