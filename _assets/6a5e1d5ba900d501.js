(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(564722);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var O = __c.O;
                var c5b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : b5b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    i5b = function(a, b) {
                        class c {
                            static A(d) {
                                O(d, {
                                    Ge: w4,
                                    lla: w4
                                })
                            }
                            get Ge() {
                                switch (this.lla) {
                                    case "date":
                                        return new d5b(this.wn, b.language || "en-AU");
                                    case "select":
                                        return new e5b(this.wn);
                                    case "mention":
                                        return new f5b(this.wn);
                                    case "embed":
                                        return new g5b(this.wn);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.lla);
                                }
                            }
                            get lla() {
                                var d;
                                return (d = this.wn.Po) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.wn = (c.A(this), void 0);
                                this.wn = __c.D(a.Gv(d.sheet, d.na, d.column))
                            }
                        }
                        return h5b(d => (new c(d)).Ge)
                    },
                    k5b = function() {
                        const a = x4(() => new Map, []);
                        return {
                            Hfb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = j5b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    l5b = function(a, b) {
                        return x4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    s5b = function({
                        children: a,
                        keyFrame: b,
                        u_a: c,
                        ariaLive: d,
                        fQa: e = !1,
                        n7a: f,
                        Ina: g,
                        bcb: h,
                        $Db: k,
                        jJa: l,
                        mLa: m,
                        YDb: n,
                        xvb: p
                    }) {
                        const {
                            Hfb: q
                        } = k5b(), {
                            Heb: r,
                            Iqb: t
                        } = m5b(b, a), u = l5b(w => () => {
                            (e === !1 || typeof e === "function" && !e(w)) && t(w)
                        }, [t, e]);
                        return y4("div", {
                            className: z4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: y4("div", {
                                className: z4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: w,
                                    element: x
                                }) => y4(n5b, { in: w === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(w),
                                    onExited: u(w),
                                    children: y => y4(o5b.Provider, {
                                        value: y,
                                        children: y4("div", {
                                            className: z4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(w),
                                            "aria-hidden": y === p5b || y === q5b || y === r5b,
                                            children: w === b ? a : x
                                        })
                                    })
                                }, w)), r.every(w => w.key !== b) && y4(n5b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: w => y4(o5b.Provider, {
                                        value: w,
                                        children: y4("div", {
                                            className: z4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": w === p5b || w === q5b || w === r5b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    m5b = function(a,
                        b) {
                        const [c, d] = t5b(() => [{
                            key: a,
                            element: b
                        }]);
                        u5b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = A4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            Heb: c,
                            Iqb: e
                        }
                    },
                    v5b = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    z5b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return y4(w5b, {
                                    Lq: a.user ? b.U_(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Xeb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.qLa.$Z.get(a.url);
                                return y4(x5b, {
                                    icon: a,
                                    Rib: c
                                });
                            case "date":
                                return a.text ? void 0 : y4(y5b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    B5b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return y4(A5b, {
                                    selected: !!b.QXa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    B4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    C5b = function(a) {
                        __c.v(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    D5b = function(a, b, c) {
                        if (c) {
                            var d = c5b(c.images, "medium"),
                                e = c5b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = C4(() => a.G6.set(b, e));
                                f.onerror = C4(() => a.G6.set(b, void 0));
                                !f.complete && c.complete ? a.G6.set(b, d) : c.src = ""
                            }
                        } else a.G6.set(b, void 0)
                    },
                    F5b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Eg ? a.Eg.ZGb(new E5b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.yf.content.title;
                                        h ? (D4(() => a.I0a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        D4(() => a.I0a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    b5b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.wx * __c.eQb[a],
                    E4 = __webpack_require__(519427),
                    C4 = E4.action,
                    G5b = E4.comparer,
                    w4 = E4.computed,
                    H5b = E4.observable,
                    F4 = E4.ObservableMap,
                    D4 = E4.runInAction;
                var h5b = __webpack_require__(635872).Om;
                var G4 = __webpack_require__(875604),
                    I5b = G4.createContext,
                    j5b = G4.createRef,
                    J5b = G4.lazy,
                    H4 = G4.memo,
                    A4 = G4.useCallback,
                    u5b = G4.useEffect,
                    K5b = G4.useLayoutEffect,
                    x4 = G4.useMemo,
                    t5b = G4.useState;
                var L5b = __webpack_require__(443763),
                    y4 = L5b.jsx,
                    M5b = L5b.jsxs;
                var N5b = __webpack_require__,
                    O5b = N5b(993864),
                    z4 = N5b.n_x(O5b)();
                var n5b = __webpack_require__(460876).Z;
                var I4 = __webpack_require__(223826),
                    r5b = I4.Wj,
                    p5b = I4.Ix,
                    q5b = I4.$r;
                var J4 = __webpack_require__(446474).Pi;
                var P5b = class {
                        static A(a) {
                            O(a, {
                                text: w4,
                                user: w4,
                                brand: w4
                            })
                        }
                        get text() {
                            return this.Ge.text
                        }
                        get user() {
                            return this.Ge.user
                        }
                        get brand() {
                            return this.Ge.brand
                        }
                        constructor(a) {
                            this.Ge = a;
                            this.type = (P5b.A(this), "mention")
                        }
                    },
                    Q5b = class {
                        static A(a) {
                            O(a, {
                                text: w4,
                                url: w4
                            })
                        }
                        get text() {
                            return this.Ge.text
                        }
                        get url() {
                            return this.Ge.url
                        }
                        constructor(a) {
                            this.Ge = a;
                            this.type = (Q5b.A(this), "embed")
                        }
                    },
                    R5b = class {
                        static A(a) {
                            O(a, {
                                text: w4,
                                language: w4,
                                style: w4,
                                date: w4
                            })
                        }
                        get text() {
                            return this.Ge.text
                        }
                        get language() {
                            return this.Ge.language
                        }
                        get style() {
                            return this.Ge.style
                        }
                        get date() {
                            return this.Ge.date
                        }
                        constructor(a) {
                            this.Ge =
                                a;
                            this.type = (R5b.A(this), "date")
                        }
                    },
                    S5b = class {
                        static A(a) {
                            O(a, {
                                text: w4,
                                options: w4,
                                hf: w4,
                                SR: w4
                            })
                        }
                        get text() {
                            return this.Ge.text
                        }
                        get options() {
                            return this.Ge.options.map(a => a)
                        }
                        get hf() {
                            return this.Ge.hf
                        }
                        get SR() {
                            var a;
                            return (a = this.Ge.options.first(b => b.id === this.Ge.hf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ge = a;
                            this.type = (S5b.A(this), "select")
                        }
                    },
                    T5b = h5b(a => {
                        switch (a.type) {
                            case "mention":
                                return new P5b(a);
                            case "embed":
                                return new Q5b(a);
                            case "date":
                                return new R5b(a);
                            case "select":
                                return new S5b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var d5b = class {
                        static A(a) {
                            O(a, {
                                style: w4,
                                date: w4,
                                text: w4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.uo.vk.type === 2 ? this.uo.vk.date : void 0) || (a = new Date, a = __c.Ny(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Ngb: a.getHours(),
                                Mlb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.uo.bA
                        }
                        constructor(a, b) {
                            this.uo = a;
                            this.language = b;
                            this.type = (d5b.A(this), "date")
                        }
                    },
                    U5b = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    e5b = class {
                        static A(a) {
                            O(a, {
                                options: w4,
                                hf: w4,
                                SR: w4,
                                text: w4,
                                PMa: w4({
                                    equals: G5b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.PMa.map((a, b) => new U5b(a, b))
                        }
                        get hf() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get SR() {
                            var a;
                            return (a = this.options.find(b => b.id === this.hf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.uo.bA
                        }
                        get PMa() {
                            var a, b;
                            __c.B(((a = this.uo.Po) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.uo.Po) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (e5b.A(this), "select")
                        }
                    },
                    f5b = class {
                        static A(a) {
                            O(a, {
                                tM: w4
                            })
                        }
                        get text() {
                            return this.tM ? this.tM.text : ""
                        }
                        get user() {
                            return this.tM ? this.tM.user : ""
                        }
                        get brand() {
                            return this.tM ? this.tM.brand : ""
                        }
                        get tM() {
                            if (this.uo.vk.type !== 9) return __c.B(this.uo.vk.type === 7), this.uo.vk ? this.uo.vk.value[0] : void 0
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (f5b.A(this), "mention")
                        }
                    },
                    g5b = class {
                        static A(a) {
                            O(a, {
                                x_: w4
                            })
                        }
                        get text() {
                            return this.x_ ? this.x_.embed.text : ""
                        }
                        get url() {
                            return this.x_ ?
                                this.x_.embed.url : ""
                        }
                        get x_() {
                            if (this.uo.vk.type !== 9) return __c.B(this.uo.vk.type === 8), this.uo.vk ? this.uo.vk.value[0] : void 0
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (g5b.A(this), "embed")
                        }
                    };
                var V5b = class {
                    Wpa(a) {
                        this.$la.Wpa(a)
                    }
                    N4(a, b) {
                        this.$la.N4(a, b)
                    }
                    U_(a) {
                        return this.$la.U_(a)
                    }
                    Tpa(a) {
                        this.qLa.Tpa(a)
                    }
                    constructor(a, b, c, d) {
                        this.$la = a;
                        this.qLa = b;
                        this.Qa = c;
                        this.Et = d;
                        this.aDa = new __c.OBb;
                        this.Xeb = e => __c.kMa(this.aDa, e)
                    }
                };
                var o5b = I5b(void 0);
                var W5b = Number.parseInt("300ms", 10),
                    X5b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    Y5b = H4(function({
                        Fr: a = !1,
                        children: b,
                        keyFrame: c,
                        u_a: d,
                        jJa: e = "hidden",
                        mLa: f = "hidden",
                        ariaLive: g,
                        fQa: h,
                        DHb: k = "none"
                    }) {
                        a = __c.Eb() && !a;
                        return s5b({
                            children: b,
                            keyFrame: c,
                            u_a: d,
                            ariaLive: g,
                            jJa: e,
                            mLa: f,
                            fQa: h,
                            n7a: a ? W5b : 0,
                            bcb: z4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            xvb: X5b
                        })
                    });
                var Z5b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var $5b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var a6b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var b6b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var c6b = H4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.SR,
                            f = a.jbb,
                            g = a.H5a,
                            h = a.h6a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = z4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return M5b("span", {
                            className: z4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [y4("span", {
                                className: z4("_2Lr6pQ", p),
                                children: y4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), M5b("span", {
                                className: z4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, y4("span", {
                                    className: z4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? y4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    w5b = H4(a => {
                        const b = a.backgroundColor,
                            c = a.Lq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return y4(Y5b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? y4(__c.iQb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Lq: c,
                                borderColor: c ? void 0 : b
                            }) : y4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: b6b
                                }
                            })
                        })
                    }),
                    x5b = H4(a => {
                        const b = a.icon;
                        a = a.Rib;
                        return y4(Y5b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? y4("span", {
                                className: "_tFJqA",
                                children: y4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : y4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? a6b : $5b
                                }
                            })
                        })
                    }),
                    y5b = H4(() => y4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: Z5b
                        }
                    })),
                    A5b = H4(({
                        selected: a
                    }) => y4("div", {
                        className: z4("whph4A", {
                            zgzjww: a
                        }),
                        children: y4(__c.CK, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    d6b = J4(a => {
                        const {
                            Ge: b,
                            QXa: c,
                            swa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            mp: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Qa(b.url) : void 0,
                            [l, m] = t5b(!1),
                            n = A4(t => m(B4(t)), [m]),
                            p = A4(t => m(!B4(t)), [m]),
                            q = A4(t => {
                                m(B4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = A4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        u5b(() => {
                            D4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Wpa(b.user);
                                        break;
                                    case "embed":
                                        d.Tpa(b.url)
                                }
                            })
                        }, [b, d]);
                        K5b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return y4(c6b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            jbb: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: v5b(b),
                            SR: b.SR,
                            H5a: z5b(b, d),
                            h6a: B5b(b, {
                                QXa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var e6b = __c.L(() => ({
                    jIb: __c.ML(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    rwb: __c.LL(1)
                }));
                var f6b = class {
                        static A(a) {
                            O(a, {
                                XP: H5b.shallow,
                                dMa: C4
                            })
                        }
                        U_(a) {
                            return this.nHa.U_(a)
                        }
                        Wpa(a) {
                            this.$Ca.has(a) || this.XP.has(a) || (this.XP.add(a), this.Lab())
                        }
                        N4(a, b) {
                            this.$Ca.has(a) || (this.$Ca.set(a, b), this.XP.delete(a), D5b(this.nHa, a, b))
                        }
                        async dMa() {
                            if (this.XP.size !== 0) {
                                var a = [...this.XP.values()];
                                this.XP.clear();
                                if (this.oHa) {
                                    var b = await this.oHa;
                                    await Promise.all(C5b(a).map(async c => {
                                        const d = new e6b({
                                                rwb: c
                                            }),
                                            {
                                                YAb: e
                                            } = await b.yGb(d);
                                        D4(() => c.forEach(f => this.N4(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.N4(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.oHa = a;
                            this.$Ca = (f6b.A(this), new F4);
                            this.XP = new Set;
                            this.nHa = new g6b;
                            this.Lab = __c.Xc(() => this.dMa(), 200);
                            D4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.N4(d, c))
                            })
                        }
                    },
                    g6b = class {
                        U_(a) {
                            return this.G6.get(a)
                        }
                        constructor() {
                            this.G6 = new F4
                        }
                    };
                var E5b = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    IXa: __c.HL("revision", 5),
                    version: __c.HL("version", 2),
                    SHb: __c.HL("imagesetsLimit", 6)
                }));
                var h6b = class {
                    static A(a) {
                        O(a, {
                            Fdb: C4
                        })
                    }
                    async Fdb(a) {
                        if (this.Eg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await F5b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Eg = a;
                        this.I0a = (h6b.A(this), new F4);
                        this.promises = new Map
                    }
                };
                var i6b = class {
                    static A(a) {
                        O(a, {
                            $Z: H5b.shallow
                        })
                    }
                    async Tpa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.Et) === null || d === void 0 ? void 0 : d.c8(a));
                            c = e === null || e === void 0 ? void 0 : e.Edb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = C4(() => this.$Z.set(a, c)), b.onerror = C4(() => this.$Z.set(a, void 0))) : D4(() => this.$Z.set(a, void 0))
                    }
                    constructor(a) {
                        this.Et = a;
                        this.$Z = (i6b.A(this), new Map)
                    }
                };
                __c.TIa = {
                    Nhb: function(a) {
                        const b = a.document,
                            c = a.Eg,
                            d = a.Qa,
                            e = a.Et;
                        var f = a.v8;
                        const g = a.kd,
                            h = a.zf,
                            k = a.jz,
                            l = a.PW;
                        a = a.cIb;
                        f = new f6b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new i6b(e);
                        new h6b(c);
                        const m = new V5b(f, a, d, e),
                            n = i5b(l, b);
                        g.Xp.yka = J4(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = x4(() => T5b(q.Ge), [q.Ge]);
                            return y4(d6b, {
                                Ge: t,
                                swa: m,
                                measureRef: r
                            })
                        });
                        const p = J4(({
                            context: q,
                            mp: r
                        }) => {
                            const t = x4(() => __c.D(n(q.container)), [q]);
                            K5b(r, [r, q.container.column.width]);
                            return y4(d6b, {
                                Ge: t,
                                swa: m,
                                mp: r
                            })
                        });
                        k.wFa = ({
                                context: q,
                                mp: r
                            }) =>
                            ({
                                type: "react",
                                node: y4(p, {
                                    context: q,
                                    mp: r
                                })
                            });
                        h && (h.Xja = J5b(() => __webpack_require__.me(365475).then(() => __c.a5b).then(({
                            P$a: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            swa: m
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/6a5e1d5ba900d501.js.map