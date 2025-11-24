declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace modal {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace iconColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace text {
            let type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace textMobile {
            let type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace cta {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace light {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
    }
    namespace computed {
        function classList(): (string | {
            [x: number]: any;
        })[];
        function contrastColor(): any;
        function bannerStyle(): any;
        function modalStyle(): any;
        function lottieSize(): any;
        function lottieAnimation(): any;
    }
    function data(): {
        isMobile: boolean;
        isExpanded: boolean;
        expandedClass: string;
        offScreenClass: string;
        success: boolean;
        idle: boolean;
        lottieFiles: null;
        observer: null;
        birdieFlap: {
            nm: string;
            h: number;
            w: number;
            meta: {
                g: string;
            };
            layers: {
                ty: number;
                nm: string;
                sr: number;
                st: number;
                op: number;
                ip: number;
                ln: string;
                hasMask: boolean;
                ao: number;
                ks: {
                    a: {
                        a: number;
                        k: number[];
                    };
                    s: {
                        a: number;
                        k: number[];
                    };
                    sk: {
                        a: number;
                        k: number;
                    };
                    p: {
                        a: number;
                        k: ({
                            o: {
                                x: number;
                                y: number;
                            };
                            i: {
                                x: number;
                                y: number;
                            };
                            s: number[];
                            t: number;
                        } | {
                            s: number[];
                            t: number;
                            o?: undefined;
                            i?: undefined;
                        })[];
                    };
                    r: {
                        a: number;
                        k: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                    };
                    o: {
                        a: number;
                        k: number;
                    };
                };
                w: number;
                h: number;
                refId: string;
                ind: number;
            }[];
            v: string;
            fr: number;
            op: number;
            ip: number;
            assets: ({
                nm: string;
                id: string;
                layers: {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    w: number;
                    h: number;
                    refId: string;
                    ind: number;
                }[];
            } | {
                nm: string;
                id: string;
                layers: ({
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: ({
                                    o: {
                                        x: number;
                                        y: number;
                                    };
                                    i: {
                                        x: number;
                                        y: number;
                                    };
                                    s: {
                                        c: boolean;
                                        i: number[][];
                                        o: number[][];
                                        v: number[][];
                                    }[];
                                    t: number;
                                } | {
                                    s: {
                                        c: boolean;
                                        i: number[][];
                                        o: number[][];
                                        v: number[][];
                                    }[];
                                    t: number;
                                    o?: undefined;
                                    i?: undefined;
                                })[];
                            };
                            r?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            o?: undefined;
                            w?: undefined;
                            c?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            r: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            o?: undefined;
                            w?: undefined;
                            c?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            id: string;
                            ty: string;
                            nm: string;
                            lc: number;
                            lj: number;
                            ml: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            w: {
                                a: number;
                                k: number;
                            };
                            c: {
                                a: number;
                                k: number[];
                            };
                            d?: undefined;
                            ks?: undefined;
                            r?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            w?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                } | {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: {
                                    c: boolean;
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                };
                            };
                            mm?: undefined;
                            id?: undefined;
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            mm: number;
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            id: string;
                            ty: string;
                            nm: string;
                            c: {
                                a: number;
                                k: number[];
                            };
                            r: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            mm?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            mm?: undefined;
                            id?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                } | {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: ({
                                    o: {
                                        x: number;
                                        y: number;
                                    };
                                    i: {
                                        x: number;
                                        y: number;
                                    };
                                    s: {
                                        c: boolean;
                                        i: number[][];
                                        o: number[][];
                                        v: number[][];
                                    }[];
                                    t: number;
                                } | {
                                    s: {
                                        c: boolean;
                                        i: number[][];
                                        o: number[][];
                                        v: number[][];
                                    }[];
                                    t: number;
                                    o?: undefined;
                                    i?: undefined;
                                })[];
                            };
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            c: {
                                a: number;
                                k: number[];
                            };
                            r: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                })[];
            })[];
        };
        birdieNoflap: {
            nm: string;
            h: number;
            w: number;
            meta: {
                g: string;
            };
            layers: {
                ty: number;
                nm: string;
                sr: number;
                st: number;
                op: number;
                ip: number;
                ln: string;
                hasMask: boolean;
                ao: number;
                ks: {
                    a: {
                        a: number;
                        k: number[];
                    };
                    s: {
                        a: number;
                        k: number[];
                    };
                    sk: {
                        a: number;
                        k: number;
                    };
                    p: {
                        a: number;
                        k: ({
                            o: {
                                x: number;
                                y: number;
                            };
                            i: {
                                x: number;
                                y: number;
                            };
                            s: number[];
                            t: number;
                        } | {
                            s: number[];
                            t: number;
                            o?: undefined;
                            i?: undefined;
                        })[];
                    };
                    r: {
                        a: number;
                        k: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                    };
                    o: {
                        a: number;
                        k: number;
                    };
                };
                w: number;
                h: number;
                refId: string;
                ind: number;
            }[];
            v: string;
            fr: number;
            op: number;
            ip: number;
            assets: ({
                nm: string;
                id: string;
                layers: {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    w: number;
                    h: number;
                    refId: string;
                    ind: number;
                }[];
            } | {
                nm: string;
                id: string;
                layers: ({
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: {
                                    c: boolean;
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                };
                            };
                            r?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            o?: undefined;
                            w?: undefined;
                            c?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            r: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            o?: undefined;
                            w?: undefined;
                            c?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            id: string;
                            ty: string;
                            nm: string;
                            lc: number;
                            lj: number;
                            ml: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            w: {
                                a: number;
                                k: number;
                            };
                            c: {
                                a: number;
                                k: number[];
                            };
                            d?: undefined;
                            ks?: undefined;
                            r?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            lc?: undefined;
                            lj?: undefined;
                            ml?: undefined;
                            w?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                } | {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: {
                                    c: boolean;
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                };
                            };
                            mm?: undefined;
                            id?: undefined;
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            mm: number;
                            d?: undefined;
                            ks?: undefined;
                            id?: undefined;
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            id: string;
                            ty: string;
                            nm: string;
                            c: {
                                a: number;
                                k: number[];
                            };
                            r: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            mm?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            mm?: undefined;
                            id?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                } | {
                    ty: number;
                    nm: string;
                    sr: number;
                    st: number;
                    op: number;
                    ip: number;
                    ln: string;
                    hasMask: boolean;
                    ao: number;
                    ks: {
                        a: {
                            a: number;
                            k: number[];
                        };
                        s: {
                            a: number;
                            k: number[];
                        };
                        sk: {
                            a: number;
                            k: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                        };
                        r: {
                            a: number;
                            k: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                        };
                        o: {
                            a: number;
                            k: number;
                        };
                    };
                    shapes: {
                        ty: string;
                        nm: string;
                        it: ({
                            ty: string;
                            nm: string;
                            d: number;
                            ks: {
                                a: number;
                                k: {
                                    c: boolean;
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                };
                            };
                            c?: undefined;
                            r?: undefined;
                            o?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            nm: string;
                            c: {
                                a: number;
                                k: number[];
                            };
                            r: number;
                            o: {
                                a: number;
                                k: number;
                            };
                            d?: undefined;
                            ks?: undefined;
                            a?: undefined;
                            s?: undefined;
                            sk?: undefined;
                            p?: undefined;
                            sa?: undefined;
                        } | {
                            ty: string;
                            a: {
                                a: number;
                                k: number[];
                            };
                            s: {
                                a: number;
                                k: number[];
                            };
                            sk: {
                                a: number;
                                k: number;
                            };
                            p: {
                                a: number;
                                k: number[];
                            };
                            r: {
                                a: number;
                                k: number;
                            };
                            sa: {
                                a: number;
                                k: number;
                            };
                            o: {
                                a: number;
                                k: number;
                            };
                            nm?: undefined;
                            d?: undefined;
                            ks?: undefined;
                            c?: undefined;
                        })[];
                    }[];
                    ind: number;
                })[];
            })[];
        };
    };
    function created(): void;
    function mounted(): void;
    namespace methods {
        function init(): void;
        function bindEvents(): void;
        function checkBreakpoint(): void;
        function animateBanner(): void;
        function handleTriggerClick(e: any): void;
        function handleOutsideClick(e: any): void;
        function handleClick(): void;
        function setLottieColors(): void;
        function onComplete(): void;
    }
    function beforeDestroy(): void;
    function beforeUnmount(): void;
}
export default _default;
