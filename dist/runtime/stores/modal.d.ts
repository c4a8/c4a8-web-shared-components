export const useModalStore: import("pinia").StoreDefinition<"modal", {
    registeredModals: Map<any, any>;
}, {
    getModalByTitle: (state: {
        registeredModals: Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>;
    } & import("pinia").PiniaCustomStateProperties<{
        registeredModals: Map<any, any>;
    }>) => (title: any) => any;
    getAllModals: (state: {
        registeredModals: Map<any, any> & Omit<Map<any, any>, keyof Map<any, any>>;
    } & import("pinia").PiniaCustomStateProperties<{
        registeredModals: Map<any, any>;
    }>) => any[];
}, {
    registerModal(title: any, modalData: any): void;
    unregisterModal(title: any): void;
    openModal(title: any): void;
    closeModal(title: any): void;
    closeAllModals(): void;
}>;
