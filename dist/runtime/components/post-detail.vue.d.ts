declare namespace _default {
    let tagName: string;
    function setup(): {
        authors: any;
    };
    namespace computed {
        function normalizedPost(): {
            url: any;
            date: any;
            moment: any;
            excerpt: any;
        };
        function blogImagePath(): string;
        function formattedDate(): string;
        function formattedDateXml(): string;
    }
    let methods: {};
    namespace props {
        namespace post {
            let type: ObjectConstructor;
            let required: boolean;
        }
    }
}
export default _default;
