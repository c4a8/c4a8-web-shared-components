declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    location: {
        default: null;
    };
    entries: {
        default: null;
    };
    images: {
        default: null;
    };
}>, {}, {
    zoom: number;
    loaded: boolean;
    icon: null;
}, {
    classList(): string[];
    center(): any[];
    markerIcon(): any;
    leafletOptions(): {
        scrollWheelZoom: boolean;
        id: string;
    };
    sliderOptions(): {
        dots: boolean;
        prevArrow: string;
        nextArrow: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    location: {
        default: null;
    };
    entries: {
        default: null;
    };
    images: {
        default: null;
    };
}>> & Readonly<{}>, {
    entries: null;
    location: null;
    images: null;
}, {}, {
    LMap: import("vue").DefineComponent<{
        center: {
            type: import("vue").PropType<L.PointExpression>;
        };
        bounds: {
            type: (ObjectConstructor | ArrayConstructor)[];
        };
        maxBounds: {
            type: (ObjectConstructor | ArrayConstructor)[];
        };
        zoom: {
            type: NumberConstructor;
        };
        minZoom: {
            type: NumberConstructor;
        };
        maxZoom: {
            type: NumberConstructor;
        };
        paddingBottomRight: {
            type: import("vue").PropType<L.PointExpression>;
        };
        paddingTopLeft: {
            type: import("vue").PropType<L.PointExpression>;
        };
        padding: {
            type: import("vue").PropType<L.PointExpression>;
        };
        worldCopyJump: {
            type: BooleanConstructor;
            default: undefined;
        };
        crs: {
            type: (ObjectConstructor | StringConstructor)[];
        };
        maxBoundsViscosity: {
            type: NumberConstructor;
        };
        inertia: {
            type: BooleanConstructor;
            default: undefined;
        };
        inertiaDeceleration: {
            type: NumberConstructor;
        };
        inertiaMaxSpeed: {
            type: NumberConstructor;
        };
        easeLinearity: {
            type: NumberConstructor;
        };
        zoomAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        zoomAnimationThreshold: {
            type: NumberConstructor;
        };
        fadeAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        markerZoomAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        noBlockingAnimations: {
            type: BooleanConstructor;
            default: undefined;
        };
        useGlobalLeaflet: {
            type: BooleanConstructor;
            default: boolean;
            custom: boolean;
        };
        options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }, {
        root: import("vue").Ref<HTMLElement | undefined>;
        ready: import("vue").ComputedRef<boolean>;
        leafletObject: import("vue").ComputedRef<{
            getRenderer: (layer: L.Path) => L.Renderer;
            addControl: (control: L.Control) => L.Map;
            removeControl: (control: L.Control) => L.Map;
            addLayer: (layer: L.Layer) => L.Map;
            removeLayer: (layer: L.Layer) => L.Map;
            hasLayer: (layer: L.Layer) => boolean;
            eachLayer: (fn: (layer: L.Layer) => void, context?: any) => L.Map;
            openPopup: {
                (popup: L.Popup): L.Map;
                (content: L.Content, latlng: L.LatLngExpression, options?: L.PopupOptions | undefined): L.Map;
            };
            closePopup: (popup?: L.Popup | undefined) => L.Map;
            openTooltip: {
                (tooltip: L.Tooltip): L.Map;
                (content: L.Content, latlng: L.LatLngExpression, options?: L.TooltipOptions | undefined): L.Map;
            };
            closeTooltip: (tooltip?: L.Tooltip | undefined) => L.Map;
            setView: (center: L.LatLngExpression, zoom?: number | undefined, options?: L.ZoomPanOptions | undefined) => L.Map;
            setZoom: (zoom: number, options?: L.ZoomPanOptions | undefined) => L.Map;
            zoomIn: (delta?: number | undefined, options?: L.ZoomOptions | undefined) => L.Map;
            zoomOut: (delta?: number | undefined, options?: L.ZoomOptions | undefined) => L.Map;
            setZoomAround: (position: L.LatLngExpression | L.Point, zoom: number, options?: L.ZoomOptions | undefined) => L.Map;
            fitBounds: (bounds: L.LatLngBoundsExpression, options?: L.FitBoundsOptions | undefined) => L.Map;
            fitWorld: (options?: L.FitBoundsOptions | undefined) => L.Map;
            panTo: (latlng: L.LatLngExpression, options?: L.PanOptions | undefined) => L.Map;
            panBy: (offset: L.PointExpression, options?: L.PanOptions | undefined) => L.Map;
            setMaxBounds: (bounds: L.LatLngBoundsExpression) => L.Map;
            setMinZoom: (zoom: number) => L.Map;
            setMaxZoom: (zoom: number) => L.Map;
            panInside: (latLng: L.LatLngExpression, options?: L.PanInsideOptions | undefined) => L.Map;
            panInsideBounds: (bounds: L.LatLngBoundsExpression, options?: L.PanOptions | undefined) => L.Map;
            invalidateSize: (options?: boolean | L.InvalidateSizeOptions | undefined) => L.Map;
            stop: () => L.Map;
            flyTo: (latlng: L.LatLngExpression, zoom?: number | undefined, options?: L.ZoomPanOptions | undefined) => L.Map;
            flyToBounds: (bounds: L.LatLngBoundsExpression, options?: L.FitBoundsOptions | undefined) => L.Map;
            addHandler: (name: string, HandlerClass: any) => L.Map;
            remove: () => L.Map;
            createPane: (name: string, container?: HTMLElement | undefined) => HTMLElement;
            getPane: (pane: string | HTMLElement) => HTMLElement | undefined;
            getPanes: () => {
                [name: string]: HTMLElement;
            } & L.DefaultMapPanes;
            getContainer: () => HTMLElement;
            whenReady: (fn: () => void, context?: any) => L.Map;
            getCenter: () => L.LatLng;
            getZoom: () => number;
            getBounds: () => L.LatLngBounds;
            getMinZoom: () => number;
            getMaxZoom: () => number;
            getBoundsZoom: (bounds: L.LatLngBoundsExpression, inside?: boolean | undefined, padding?: L.Point | undefined) => number;
            getSize: () => L.Point;
            getPixelBounds: () => L.Bounds;
            getPixelOrigin: () => L.Point;
            getPixelWorldBounds: (zoom?: number | undefined) => L.Bounds;
            getZoomScale: (toZoom: number, fromZoom?: number | undefined) => number;
            getScaleZoom: (scale: number, fromZoom?: number | undefined) => number;
            project: (latlng: L.LatLngExpression, zoom?: number | undefined) => L.Point;
            unproject: (point: L.PointExpression, zoom?: number | undefined) => L.LatLng;
            layerPointToLatLng: (point: L.PointExpression) => L.LatLng;
            latLngToLayerPoint: (latlng: L.LatLngExpression) => L.Point;
            wrapLatLng: (latlng: L.LatLngExpression) => L.LatLng;
            wrapLatLngBounds: (bounds: L.LatLngBounds) => L.LatLngBounds;
            distance: (latlng1: L.LatLngExpression, latlng2: L.LatLngExpression) => number;
            containerPointToLayerPoint: (point: L.PointExpression) => L.Point;
            containerPointToLatLng: (point: L.PointExpression) => L.LatLng;
            layerPointToContainerPoint: (point: L.PointExpression) => L.Point;
            latLngToContainerPoint: (latlng: L.LatLngExpression) => L.Point;
            mouseEventToContainerPoint: (ev: MouseEvent) => L.Point;
            mouseEventToLayerPoint: (ev: MouseEvent) => L.Point;
            mouseEventToLatLng: (ev: MouseEvent) => L.LatLng;
            locate: (options?: L.LocateOptions | undefined) => L.Map;
            stopLocate: () => L.Map;
            attributionControl: {
                setPrefix: (prefix: string | false) => L.Control.Attribution;
                addAttribution: (text: string) => L.Control.Attribution;
                removeAttribution: (text: string) => L.Control.Attribution;
                options: {
                    prefix?: string | boolean | undefined;
                    position?: L.ControlPosition | undefined;
                };
                getPosition: () => L.ControlPosition;
                setPosition: (position: L.ControlPosition) => L.Control.Attribution;
                getContainer: () => HTMLElement | undefined;
                addTo: (map: L.Map) => L.Control.Attribution;
                remove: () => L.Control.Attribution;
                onAdd?: ((map: L.Map) => HTMLElement) | undefined;
                onRemove?: ((map: L.Map) => void) | undefined;
            };
            boxZoom: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            doubleClickZoom: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            dragging: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            keyboard: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            scrollWheelZoom: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            tap?: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            } | undefined;
            touchZoom: {
                enable: () => L.Handler;
                disable: () => L.Handler;
                enabled: () => boolean;
                addHooks?: (() => void) | undefined;
                removeHooks?: (() => void) | undefined;
            };
            zoomControl: {
                options: {
                    zoomInText?: string | undefined;
                    zoomInTitle?: string | undefined;
                    zoomOutText?: string | undefined;
                    zoomOutTitle?: string | undefined;
                    position?: L.ControlPosition | undefined;
                };
                getPosition: () => L.ControlPosition;
                setPosition: (position: L.ControlPosition) => L.Control.Zoom;
                getContainer: () => HTMLElement | undefined;
                addTo: (map: L.Map) => L.Control.Zoom;
                remove: () => L.Control.Zoom;
                onAdd?: ((map: L.Map) => HTMLElement) | undefined;
                onRemove?: ((map: L.Map) => void) | undefined;
            };
            options: {
                preferCanvas?: boolean | undefined;
                attributionControl?: boolean | undefined;
                zoomControl?: boolean | undefined;
                closePopupOnClick?: boolean | undefined;
                zoomSnap?: number | undefined;
                zoomDelta?: number | undefined;
                trackResize?: boolean | undefined;
                boxZoom?: boolean | undefined;
                doubleClickZoom?: L.Zoom | undefined;
                dragging?: boolean | undefined;
                crs?: {
                    latLngToPoint: (latlng: L.LatLngExpression, zoom: number) => L.Point;
                    pointToLatLng: (point: L.PointExpression, zoom: number) => L.LatLng;
                    project: (latlng: L.LatLng | L.LatLngLiteral) => L.Point;
                    unproject: (point: L.PointExpression) => L.LatLng;
                    scale: (zoom: number) => number;
                    zoom: (scale: number) => number;
                    getProjectedBounds: (zoom: number) => L.Bounds;
                    distance: (latlng1: L.LatLngExpression, latlng2: L.LatLngExpression) => number;
                    wrapLatLng: (latlng: L.LatLng | L.LatLngLiteral) => L.LatLng;
                    code?: string | undefined;
                    wrapLng?: [number, number] | undefined;
                    wrapLat?: [number, number] | undefined;
                    infinite: boolean;
                } | undefined;
                center?: [number, number] | {
                    equals: (otherLatLng: L.LatLngExpression, maxMargin?: number | undefined) => boolean;
                    toString: () => string;
                    distanceTo: (otherLatLng: L.LatLngExpression) => number;
                    wrap: () => L.LatLng;
                    toBounds: (sizeInMeters: number) => L.LatLngBounds;
                    clone: () => L.LatLng;
                    lat: number;
                    lng: number;
                    alt?: number | undefined;
                } | {
                    lat: number;
                    lng: number;
                } | undefined;
                zoom?: number | undefined;
                minZoom?: number | undefined;
                maxZoom?: number | undefined;
                layers?: {
                    addTo: (map: L.Map | L.LayerGroup<any>) => L.Layer;
                    remove: () => L.Layer;
                    removeFrom: (map: L.Map) => L.Layer;
                    getPane: (name?: string | undefined) => HTMLElement | undefined;
                    addInteractiveTarget: (targetEl: HTMLElement) => L.Layer;
                    removeInteractiveTarget: (targetEl: HTMLElement) => L.Layer;
                    bindPopup: (content: ((layer: L.Layer) => L.Content) | L.Content | L.Popup, options?: L.PopupOptions | undefined) => L.Layer;
                    unbindPopup: () => L.Layer;
                    openPopup: (latlng?: L.LatLngExpression | undefined) => L.Layer;
                    closePopup: () => L.Layer;
                    togglePopup: () => L.Layer;
                    isPopupOpen: () => boolean;
                    setPopupContent: (content: L.Content | L.Popup) => L.Layer;
                    getPopup: () => L.Popup | undefined;
                    bindTooltip: (content: L.Content | ((layer: L.Layer) => L.Content) | L.Tooltip, options?: L.TooltipOptions | undefined) => L.Layer;
                    unbindTooltip: () => L.Layer;
                    openTooltip: (latlng?: L.LatLngExpression | undefined) => L.Layer;
                    closeTooltip: () => L.Layer;
                    toggleTooltip: () => L.Layer;
                    isTooltipOpen: () => boolean;
                    setTooltipContent: (content: L.Content | L.Tooltip) => L.Layer;
                    getTooltip: () => L.Tooltip | undefined;
                    onAdd: (map: L.Map) => L.Layer;
                    onRemove: (map: L.Map) => L.Layer;
                    getEvents?: (() => {
                        [name: string]: L.LeafletEventHandlerFn;
                    }) | undefined;
                    getAttribution?: (() => string | null) | undefined;
                    beforeAdd?: ((map: L.Map) => L.Layer) | undefined;
                    options: {
                        pane?: string | undefined;
                        attribution?: string | undefined;
                    };
                    on: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Layer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Layer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Layer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Layer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Layer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                    };
                    off: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                        (): L.Layer;
                    };
                    fire: (type: string, data?: any, propagate?: boolean | undefined) => L.Layer;
                    listens: {
                        (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tileerror", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    };
                    once: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Layer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Layer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Layer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Layer;
                        (type: "tileerror", fn: L.TileEventHandlerFn, context?: any): L.Layer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                    };
                    addEventParent: (obj: L.Evented) => L.Layer;
                    removeEventParent: (obj: L.Evented) => L.Layer;
                    addEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Layer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Layer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Layer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Layer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Layer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                    };
                    removeEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Layer;
                        (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                    };
                    clearAllEventListeners: () => L.Layer;
                    addOneTimeEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Layer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Layer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Layer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Layer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Layer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Layer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Layer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Layer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Layer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Layer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Layer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Layer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Layer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Layer;
                    };
                    fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => L.Layer;
                    hasEventListeners: (type: string) => boolean;
                }[] | undefined;
                maxBounds?: {
                    extend: (latlngOrBounds: L.LatLngExpression | L.LatLngBoundsExpression) => L.LatLngBounds;
                    pad: (bufferRatio: number) => L.LatLngBounds;
                    getCenter: () => L.LatLng;
                    getSouthWest: () => L.LatLng;
                    getNorthEast: () => L.LatLng;
                    getNorthWest: () => L.LatLng;
                    getSouthEast: () => L.LatLng;
                    getWest: () => number;
                    getSouth: () => number;
                    getEast: () => number;
                    getNorth: () => number;
                    contains: (otherBoundsOrLatLng: L.LatLngExpression | L.LatLngBoundsExpression) => boolean;
                    intersects: (otherBounds: L.LatLngBoundsExpression) => boolean;
                    overlaps: (otherBounds: L.LatLngBoundsExpression) => boolean;
                    toBBoxString: () => string;
                    equals: (otherBounds: L.LatLngBoundsExpression, maxMargin?: number | undefined) => boolean;
                    isValid: () => boolean;
                } | [number, number][] | undefined;
                renderer?: {
                    options: {
                        padding?: number | undefined;
                        tolerance?: number | undefined;
                        pane?: string | undefined;
                        attribution?: string | undefined;
                    };
                    addTo: (map: L.Map | L.LayerGroup<any>) => L.Renderer;
                    remove: () => L.Renderer;
                    removeFrom: (map: L.Map) => L.Renderer;
                    getPane: (name?: string | undefined) => HTMLElement | undefined;
                    addInteractiveTarget: (targetEl: HTMLElement) => L.Renderer;
                    removeInteractiveTarget: (targetEl: HTMLElement) => L.Renderer;
                    bindPopup: (content: ((layer: L.Layer) => L.Content) | L.Content | L.Popup, options?: L.PopupOptions | undefined) => L.Renderer;
                    unbindPopup: () => L.Renderer;
                    openPopup: (latlng?: L.LatLngExpression | undefined) => L.Renderer;
                    closePopup: () => L.Renderer;
                    togglePopup: () => L.Renderer;
                    isPopupOpen: () => boolean;
                    setPopupContent: (content: L.Content | L.Popup) => L.Renderer;
                    getPopup: () => L.Popup | undefined;
                    bindTooltip: (content: L.Content | ((layer: L.Layer) => L.Content) | L.Tooltip, options?: L.TooltipOptions | undefined) => L.Renderer;
                    unbindTooltip: () => L.Renderer;
                    openTooltip: (latlng?: L.LatLngExpression | undefined) => L.Renderer;
                    closeTooltip: () => L.Renderer;
                    toggleTooltip: () => L.Renderer;
                    isTooltipOpen: () => boolean;
                    setTooltipContent: (content: L.Content | L.Tooltip) => L.Renderer;
                    getTooltip: () => L.Tooltip | undefined;
                    onAdd: (map: L.Map) => L.Renderer;
                    onRemove: (map: L.Map) => L.Renderer;
                    getEvents?: (() => {
                        [name: string]: L.LeafletEventHandlerFn;
                    }) | undefined;
                    getAttribution?: (() => string | null) | undefined;
                    beforeAdd?: ((map: L.Map) => L.Renderer) | undefined;
                    on: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Renderer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                    };
                    off: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                        (): L.Renderer;
                    };
                    fire: (type: string, data?: any, propagate?: boolean | undefined) => L.Renderer;
                    listens: {
                        (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: "tileerror", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    };
                    once: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Renderer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileerror", fn: L.TileEventHandlerFn, context?: any): L.Renderer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                    };
                    addEventParent: (obj: L.Evented) => L.Renderer;
                    removeEventParent: (obj: L.Evented) => L.Renderer;
                    addEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Renderer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                    };
                    removeEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Renderer;
                        (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                    };
                    clearAllEventListeners: () => L.Renderer;
                    addOneTimeEventListener: {
                        (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Renderer;
                        (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Renderer;
                        (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Renderer;
                        (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Renderer;
                        (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Renderer;
                        (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Renderer;
                        (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Renderer;
                        (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Renderer;
                        (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Renderer;
                        (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Renderer;
                        (eventMap: L.LeafletEventHandlerFnMap): L.Renderer;
                    };
                    fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => L.Renderer;
                    hasEventListeners: (type: string) => boolean;
                } | undefined;
                fadeAnimation?: boolean | undefined;
                markerZoomAnimation?: boolean | undefined;
                transform3DLimit?: number | undefined;
                zoomAnimation?: boolean | undefined;
                zoomAnimationThreshold?: number | undefined;
                inertia?: boolean | undefined;
                inertiaDeceleration?: number | undefined;
                inertiaMaxSpeed?: number | undefined;
                easeLinearity?: number | undefined;
                worldCopyJump?: boolean | undefined;
                maxBoundsViscosity?: number | undefined;
                keyboard?: boolean | undefined;
                keyboardPanDelta?: number | undefined;
                scrollWheelZoom?: L.Zoom | undefined;
                wheelDebounceTime?: number | undefined;
                wheelPxPerZoomLevel?: number | undefined;
                tap?: boolean | undefined;
                tapTolerance?: number | undefined;
                touchZoom?: L.Zoom | undefined;
                bounceAtZoomLimits?: boolean | undefined;
            };
            on: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Map;
                (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Map;
                (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Map;
                (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Map;
                (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Map;
                (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Map;
                (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
            };
            off: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Map;
                (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Map;
                (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Map;
                (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Map;
                (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Map;
                (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Map;
                (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
                (): L.Map;
            };
            fire: (type: string, data?: any, propagate?: boolean | undefined) => L.Map;
            listens: {
                (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "resize", fn: L.ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: "tileerror", fn: L.TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                (type: string, fn: L.LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
            };
            once: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Map;
                (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Map;
                (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Map;
                (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Map;
                (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Map;
                (type: "tileerror", fn: L.TileEventHandlerFn, context?: any): L.Map;
                (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
            };
            addEventParent: (obj: L.Evented) => L.Map;
            removeEventParent: (obj: L.Evented) => L.Map;
            addEventListener: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Map;
                (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Map;
                (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Map;
                (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Map;
                (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Map;
                (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Map;
                (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
            };
            removeEventListener: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: L.LayersControlEventHandlerFn | undefined, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn?: L.LayerEventHandlerFn | undefined, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Map;
                (type: "resize", fn?: L.ResizeEventHandlerFn | undefined, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn?: L.PopupEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn?: L.TooltipEventHandlerFn | undefined, context?: any): L.Map;
                (type: "locationerror", fn?: L.ErrorEventHandlerFn | undefined, context?: any): L.Map;
                (type: "locationfound", fn?: L.LocationEventHandlerFn | undefined, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: L.LeafletMouseEventHandlerFn | undefined, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn?: L.LeafletKeyboardEventHandlerFn | undefined, context?: any): L.Map;
                (type: "zoomanim", fn?: L.ZoomAnimEventHandlerFn | undefined, context?: any): L.Map;
                (type: "dragend", fn?: L.DragEndEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: L.TileEventHandlerFn | undefined, context?: any): L.Map;
                (type: "tileerror", fn?: L.TileErrorEventHandlerFn | undefined, context?: any): L.Map;
                (type: string, fn?: L.LeafletEventHandlerFn | undefined, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
            };
            clearAllEventListeners: () => L.Map;
            addOneTimeEventListener: {
                (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: L.LayersControlEventHandlerFn, context?: any): L.Map;
                (type: "layeradd" | "layerremove", fn: L.LayerEventHandlerFn, context?: any): L.Map;
                (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (type: "resize", fn: L.ResizeEventHandlerFn, context?: any): L.Map;
                (type: "popupopen" | "popupclose", fn: L.PopupEventHandlerFn, context?: any): L.Map;
                (type: "tooltipopen" | "tooltipclose", fn: L.TooltipEventHandlerFn, context?: any): L.Map;
                (type: "locationerror", fn: L.ErrorEventHandlerFn, context?: any): L.Map;
                (type: "locationfound", fn: L.LocationEventHandlerFn, context?: any): L.Map;
                (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: L.LeafletMouseEventHandlerFn, context?: any): L.Map;
                (type: "keypress" | "keydown" | "keyup", fn: L.LeafletKeyboardEventHandlerFn, context?: any): L.Map;
                (type: "zoomanim", fn: L.ZoomAnimEventHandlerFn, context?: any): L.Map;
                (type: "dragend", fn: L.DragEndEventHandlerFn, context?: any): L.Map;
                (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: L.TileEventHandlerFn, context?: any): L.Map;
                (type: "tileerror", fn: L.TileErrorEventHandlerFn, context?: any): L.Map;
                (type: string, fn: L.LeafletEventHandlerFn, context?: any): L.Map;
                (eventMap: L.LeafletEventHandlerFnMap): L.Map;
            };
            fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => L.Map;
            hasEventListeners: (type: string) => boolean;
        } | undefined>;
        attrs: import("@vue-leaflet/vue-leaflet/dist/src/utils.js").Data;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ready" | "update:zoom" | "update:center" | "update:bounds")[], "ready" | "update:zoom" | "update:center" | "update:bounds", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        center: {
            type: import("vue").PropType<L.PointExpression>;
        };
        bounds: {
            type: (ObjectConstructor | ArrayConstructor)[];
        };
        maxBounds: {
            type: (ObjectConstructor | ArrayConstructor)[];
        };
        zoom: {
            type: NumberConstructor;
        };
        minZoom: {
            type: NumberConstructor;
        };
        maxZoom: {
            type: NumberConstructor;
        };
        paddingBottomRight: {
            type: import("vue").PropType<L.PointExpression>;
        };
        paddingTopLeft: {
            type: import("vue").PropType<L.PointExpression>;
        };
        padding: {
            type: import("vue").PropType<L.PointExpression>;
        };
        worldCopyJump: {
            type: BooleanConstructor;
            default: undefined;
        };
        crs: {
            type: (ObjectConstructor | StringConstructor)[];
        };
        maxBoundsViscosity: {
            type: NumberConstructor;
        };
        inertia: {
            type: BooleanConstructor;
            default: undefined;
        };
        inertiaDeceleration: {
            type: NumberConstructor;
        };
        inertiaMaxSpeed: {
            type: NumberConstructor;
        };
        easeLinearity: {
            type: NumberConstructor;
        };
        zoomAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        zoomAnimationThreshold: {
            type: NumberConstructor;
        };
        fadeAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        markerZoomAnimation: {
            type: BooleanConstructor;
            default: undefined;
        };
        noBlockingAnimations: {
            type: BooleanConstructor;
            default: undefined;
        };
        useGlobalLeaflet: {
            type: BooleanConstructor;
            default: boolean;
            custom: boolean;
        };
        options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }>> & {
        onReady?: ((...args: any[]) => any) | undefined;
        "onUpdate:zoom"?: ((...args: any[]) => any) | undefined;
        "onUpdate:center"?: ((...args: any[]) => any) | undefined;
        "onUpdate:bounds"?: ((...args: any[]) => any) | undefined;
    }, {
        options: Record<string, any>;
        worldCopyJump: boolean;
        inertia: boolean;
        zoomAnimation: boolean;
        fadeAnimation: boolean;
        markerZoomAnimation: boolean;
        noBlockingAnimations: boolean;
        useGlobalLeaflet: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    LTileLayer: import("vue").DefineComponent<{
        readonly tms: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly subdomains: {
            readonly type: import("vue").PropType<String | String[]>;
            readonly validator: (prop: any) => boolean;
        };
        readonly detectRetina: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly url: {
            readonly type: StringConstructor;
            readonly required: true;
            readonly custom: true;
        };
        readonly opacity: {
            readonly type: NumberConstructor;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
        };
        readonly tileSize: {
            readonly type: import("vue").PropType<Number | L.PointExpression>;
        };
        readonly noWrap: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly minZoom: {
            readonly type: NumberConstructor;
        };
        readonly maxZoom: {
            readonly type: NumberConstructor;
        };
        readonly className: {
            readonly type: StringConstructor;
        };
        readonly pane: {
            readonly type: StringConstructor;
        };
        readonly attribution: {
            readonly type: StringConstructor;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly custom: true;
        };
        readonly layerType: {
            readonly type: import("vue").PropType<import("@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType.js").LayerType>;
            readonly custom: true;
        };
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly custom: true;
            readonly default: true;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }, {
        leafletObject: import("vue").Ref<L.TileLayer | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly tms: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly subdomains: {
            readonly type: import("vue").PropType<String | String[]>;
            readonly validator: (prop: any) => boolean;
        };
        readonly detectRetina: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly url: {
            readonly type: StringConstructor;
            readonly required: true;
            readonly custom: true;
        };
        readonly opacity: {
            readonly type: NumberConstructor;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
        };
        readonly tileSize: {
            readonly type: import("vue").PropType<Number | L.PointExpression>;
        };
        readonly noWrap: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly minZoom: {
            readonly type: NumberConstructor;
        };
        readonly maxZoom: {
            readonly type: NumberConstructor;
        };
        readonly className: {
            readonly type: StringConstructor;
        };
        readonly pane: {
            readonly type: StringConstructor;
        };
        readonly attribution: {
            readonly type: StringConstructor;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly custom: true;
        };
        readonly layerType: {
            readonly type: import("vue").PropType<import("@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType.js").LayerType>;
            readonly custom: true;
        };
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly custom: true;
            readonly default: true;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }>>, {
        readonly visible: boolean;
        readonly options: Record<string, any>;
        readonly noWrap: boolean;
        readonly tms: boolean;
        readonly detectRetina: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    LMarker: import("vue").DefineComponent<{
        readonly draggable: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly icon: {
            readonly type: import("vue").PropType<L.Icon<L.IconOptions>>;
        };
        readonly zIndexOffset: {
            readonly type: NumberConstructor;
        };
        readonly latLng: {
            readonly type: import("vue").PropType<L.LatLngExpression>;
            readonly custom: true;
            readonly required: true;
        };
        readonly pane: {
            readonly type: StringConstructor;
        };
        readonly attribution: {
            readonly type: StringConstructor;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly custom: true;
        };
        readonly layerType: {
            readonly type: import("vue").PropType<import("@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType.js").LayerType>;
            readonly custom: true;
        };
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly custom: true;
            readonly default: true;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }, {
        ready: import("vue").Ref<boolean>;
        leafletObject: import("vue").Ref<L.Marker<any> | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly draggable: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly icon: {
            readonly type: import("vue").PropType<L.Icon<L.IconOptions>>;
        };
        readonly zIndexOffset: {
            readonly type: NumberConstructor;
        };
        readonly latLng: {
            readonly type: import("vue").PropType<L.LatLngExpression>;
            readonly custom: true;
            readonly required: true;
        };
        readonly pane: {
            readonly type: StringConstructor;
        };
        readonly attribution: {
            readonly type: StringConstructor;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly custom: true;
        };
        readonly layerType: {
            readonly type: import("vue").PropType<import("@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType.js").LayerType>;
            readonly custom: true;
        };
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly custom: true;
            readonly default: true;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }>>, {
        readonly visible: boolean;
        readonly options: Record<string, any>;
        readonly draggable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    LPopup: import("vue").DefineComponent<{
        readonly latLng: {
            readonly type: import("vue").PropType<L.LatLngExpression>;
            readonly default: () => never[];
        };
        readonly content: {
            readonly type: StringConstructor;
            readonly default: null;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }, {
        root: import("vue").Ref<null>;
        leafletObject: import("vue").Ref<L.Popup | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly latLng: {
            readonly type: import("vue").PropType<L.LatLngExpression>;
            readonly default: () => never[];
        };
        readonly content: {
            readonly type: StringConstructor;
            readonly default: null;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
            readonly custom: true;
        };
    }>>, {
        readonly latLng: L.LatLngExpression;
        readonly options: Record<string, any>;
        readonly content: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
