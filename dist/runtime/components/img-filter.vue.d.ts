declare namespace _default {
    let tagName: string;
    namespace props {
        let img: StringConstructor;
        let alt: StringConstructor;
        namespace cloudinary {
            let _default: null;
            export { _default as default };
        }
        let lazy: BooleanConstructor;
        let classes: StringConstructor;
        let color: StringConstructor;
    }
    namespace computed {
        function cloudinaryValue(): boolean;
        function colorValue(): any;
        function svgFilter(): string;
    }
}
export default _default;
