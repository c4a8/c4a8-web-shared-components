declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    application: BooleanConstructor;
    form: ObjectConstructor;
    success: ObjectConstructor;
    clientName: StringConstructor;
    apiUrl: StringConstructor;
    jobId: StringConstructor;
    modalId: StringConstructor;
    slim: {
        default: null;
    };
    show: {
        default: null;
    };
    center: {
        default: null;
    };
    notification: {
        default: null;
    };
    apiKey: StringConstructor;
    mockApplyUrl: StringConstructor;
    mockDocumentsUrl: StringConstructor;
    modalError: ObjectConstructor;
    content: StringConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    observer: null;
    loading: boolean;
}, {
    modalErrorValue(): any;
    classList(): string[];
    dialogClassList(): string[];
    settings(): {
        'data-client-name': string | null;
        'data-api-url': string | null;
        'data-job-id': string | null;
        'data-modal-id': string | null;
        'data-api-key': string | null;
        'data-mock-apply-url': string | null;
        'data-mock-documents-url': string | null;
    };
    isCenterSlim(): boolean;
    modal(): unknown;
    centerValue(): boolean;
    slimValue(): boolean;
    loadingValue(): true | null;
    notificationValue(): boolean;
    size(): "small" | null;
    hasCircleAndHover(): boolean;
    circle(): boolean;
    hover(): boolean;
    bodyClasses(): (string | null)[];
}, {
    isModalOpen(): boolean;
    setModalMode(mode: any): void;
    handleClose(): void;
    bindEvents(): void;
    handleMutation(): void;
    handleLoading(e: any): void;
    openModal(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    application: BooleanConstructor;
    form: ObjectConstructor;
    success: ObjectConstructor;
    clientName: StringConstructor;
    apiUrl: StringConstructor;
    jobId: StringConstructor;
    modalId: StringConstructor;
    slim: {
        default: null;
    };
    show: {
        default: null;
    };
    center: {
        default: null;
    };
    notification: {
        default: null;
    };
    apiKey: StringConstructor;
    mockApplyUrl: StringConstructor;
    mockDocumentsUrl: StringConstructor;
    modalError: ObjectConstructor;
    content: StringConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    show: null;
    center: null;
    light: boolean;
    application: boolean;
    slim: null;
    notification: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
