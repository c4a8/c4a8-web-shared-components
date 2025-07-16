declare namespace _default {
    let tagName: string;
    function data(): {
        sortBy: {
            moment: number;
        };
    };
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
        function hasSocials(): any;
        function servicesData(): any;
        function showSocials(): any;
    }
    namespace props {
        namespace person {
            let type: ObjectConstructor;
        }
        namespace personData {
            let type_1: ObjectConstructor;
            export { type_1 as type };
        }
        namespace posts {
            let type_2: ArrayConstructor;
            export { type_2 as type };
        }
        namespace events {
            let type_3: ArrayConstructor;
            export { type_3 as type };
        }
    }
}
export default _default;
