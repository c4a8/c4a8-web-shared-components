declare namespace _default {
    let tagName: string;
    namespace computed {
        function otherId(): string;
        function otherName(): string;
        function required(): any;
        function idValue(): any;
        function nameValue(): any;
    }
    namespace methods {
        function handleChange(e: any): void;
    }
    namespace props {
        let checkbox: ObjectConstructor;
        let group: StringConstructor;
        let id: StringConstructor;
        let name: StringConstructor;
    }
}
export default _default;
