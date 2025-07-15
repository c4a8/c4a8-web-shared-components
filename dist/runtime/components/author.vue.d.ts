declare namespace _default {
    let tagName: string;
    function setup(): {
        locale: import("vue").WritableComputedRef<string, string>;
    };
    namespace computed {
        function postCount(): any;
        function introText(): any;
        function intro(): {
            body: {
                type: string;
                value: (() => any)[];
            };
        };
        function imageUrl(): any;
    }
    namespace props {
        namespace person {
            let type: ObjectConstructor;
        }
        namespace personData {
            let type_1: ObjectConstructor;
            export { type_1 as type };
        }
        let posts: NumberConstructor;
    }
}
export default _default;
