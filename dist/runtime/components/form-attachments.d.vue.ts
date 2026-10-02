declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    hasError: {
        default: null;
    };
    maxSize: NumberConstructor;
    description: StringConstructor;
    text: StringConstructor;
    requiredMsg: {
        default: null;
    };
    required: {
        default: null;
    };
    extensions: ArrayConstructor;
    id: StringConstructor;
    name: StringConstructor;
    maxFiles: NumberConstructor;
}>, {}, {
    isDragging: boolean;
    hasError: boolean;
    filesLength: number;
    files: null;
}, {
    filesList(): any[] | null;
    classList(): string[];
    interactableClassList(): string[];
    requiredValue(): "required" | null;
    maxSizeMb(): number;
    maxFilesValue(): any;
    extensionList(): any;
    extensionListText(): string;
    acceptList(): any;
}, {
    bindEvents(): void;
    handleFormAttachmentError(e: any): void;
    handleDragStart(e: any): void;
    handleDragOver(e: any): void;
    handleDrop(e: any): void;
    isAllowedFileExtension(file: any): any;
    isUnderMaxSize(file: any): boolean | undefined;
    handleDroppedFiles(files: any): any;
    handleAddAttachment(): void;
    restoreDataTransfer(): void;
    showError(text: any): void;
    setErrorText(text: any): void;
    reset(): void;
    resetError(): void;
    appendDroppedFiles(droppedFiles: any): void;
    areFilesAllowed(files: any): boolean;
    getErrors(files: any): any;
    appendFiles(files: any): any;
    syncFiles(): void;
    handleChange(event: any): any;
    handleClick(index: any): void;
    toSize(size: any): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    hasError: {
        default: null;
    };
    maxSize: NumberConstructor;
    description: StringConstructor;
    text: StringConstructor;
    requiredMsg: {
        default: null;
    };
    required: {
        default: null;
    };
    extensions: ArrayConstructor;
    id: StringConstructor;
    name: StringConstructor;
    maxFiles: NumberConstructor;
}>> & Readonly<{}>, {
    required: null;
    hasError: null;
    requiredMsg: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
