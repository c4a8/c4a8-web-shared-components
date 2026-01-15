export default Anchor;
declare class Anchor {
    static rootSelector: string;
    static instances: any[];
    static init(): void;
    idSelector: string;
    idTarget: Element | null;
    targetSelector: string;
    productStageSelector: string;
    target: Element | null;
    links: NodeListOf<Element>;
    isAccordionContent(element: any): any;
    openAccordionTab(element: any): void;
    hasProductStage(): boolean;
    bindEvents(): void;
    handleTargetClick(): void;
    handleClick(e: any): void;
    handleAfterClick(target: any, smooth: any): void;
    getHash(): string;
}
