declare class BrokenLinks {
    errors: any[];
    blockedLinks: {};
    links: {};
    fetchedLinks: {};
    prevLink: {};
    options: {
        mode: string;
        redirect: string;
    };
    isEnded: boolean;
    hasEnded: boolean;
    duration: number;
    fallbackDuration: number;
    initialize(): void;
    rootUrl: string | undefined;
    input: HTMLElement | null | undefined;
    button: HTMLElement | null | undefined;
    loader: HTMLElement | null | undefined;
    startFallbackTimer(): void;
    fallbackTimeout: NodeJS.Timeout | undefined;
    handleClick(): void;
    startSearch(url: any): Promise<void>;
    id: NodeJS.Timeout | undefined;
    end(): void;
    handleIntervall(): void;
    displayResult(): void;
    hasDuplicates(url: any): boolean;
    getUrl(url: any, previousUrl: any): true | Promise<any>;
    isInvalidHref(href: any): boolean;
    toValidURL(href: any, currentLink: any): string;
    isExternal(url: any): boolean;
    handleResponse(response: any, external: any): Promise<void>;
    handleContentSecurityPolicy(e: any): void;
    handleError(data: any): void;
    checkLinks(): Promise<void>;
    getLinksOnSite(site: any, url: any): Promise<void>;
    isValidLink(url: any): boolean;
}
