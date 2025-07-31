declare namespace _default {
    let tagName: string;
    namespace components {
        export { LMap };
        export { LTileLayer };
        export { LMarker };
        export { LPopup };
    }
    function data(): {
        zoom: number;
        loaded: boolean;
        icon: null;
    };
    namespace computed {
        function classList(): string[];
        function center(): any;
        function markerIcon(): any;
        function leafletOptions(): {
            scrollWheelZoom: boolean;
            id: string;
        };
    }
    function beforeMount(): Promise<void>;
    function mounted(): void;
    let methods: {};
    namespace props {
        namespace location {
            let _default: null;
            export { _default as default };
        }
        namespace entries {
            let _default_1: null;
            export { _default_1 as default };
        }
    }
}
export default _default;
import { LMap } from '@vue-leaflet/vue-leaflet';
import { LTileLayer } from '@vue-leaflet/vue-leaflet';
import { LMarker } from '@vue-leaflet/vue-leaflet';
import { LPopup } from '@vue-leaflet/vue-leaflet';
