(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [86783], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var dcc = function(a) {
                        return ccc(function(b) {
                            return F6("div", {
                                className: "gcYy_A",
                                children: F6(__c.qH, {
                                    n_: "both",
                                    children: ({
                                        width: c,
                                        height: d
                                    }) => F6(a.ci, {
                                        fill: b.fill,
                                        Cb: c,
                                        Ub: d,
                                        Le: void 0,
                                        animation: void 0,
                                        kC: !1,
                                        Y: void 0,
                                        fa: void 0
                                    })
                                })
                            })
                        })
                    },
                    ecc = function(a) {
                        a.YK && (a.YK(), a.YK = null);
                        const b = a.props.Hbb;
                        b.forEach(c => {
                            window.addEventListener(c, a.MFa)
                        });
                        a.YK = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.MFa)
                            })
                        }
                    },
                    kcc = function(a) {
                        return fcc(function(b) {
                            const [{
                                store: c,
                                ya: d
                            }] = gcc(() => {
                                const e = new hcc,
                                    f = new icc(e);
                                return {
                                    store: e,
                                    ya: f
                                }
                            });
                            return F6(jcc, {
                                a3: d.reset,
                                children: F6(__c.Vub, {
                                    Xhb: d,
                                    Yhb: c,
                                    NPa: a.Bv.contains(b.url),
                                    children: ({
                                        Ao: e
                                    }) => F6(__c.eB, {
                                        url: b.url,
                                        store: a.Bv,
                                        fo: a.Et,
                                        Sx: a.Sx,
                                        Ym: a.Ym,
                                        Ao: e,
                                        EB: b.EB,
                                        BU: b.BU
                                    })
                                })
                            })
                        })
                    },
                    lcc = function(a) {
                        return ccc(function(b) {
                            return F6("div", {
                                className: "oUJNhQ",
                                children: F6(a.pe, {
                                    text: b.text,
                                    animation: void 0,
                                    vd: void 0,
                                    pb: void 0,
                                    Qa: void 0,
                                    Ef: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    F6 = __webpack_require__(443763).jsx;
                var G6 = __webpack_require__(875604),
                    mcc = G6.Component,
                    ccc = G6.memo,
                    gcc = G6.useState;
                var ncc = __webpack_require__(519427),
                    H6 = ncc.action,
                    occ = ncc.observable;
                var fcc = __webpack_require__(446474).Pi;
                var pcc = class extends mcc {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            oqb: c,
                            oea: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.C6a;
                            return f
                        }, {}));
                        return F6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.oea && ecc(this)
                    }
                    componentDidUpdate() {
                        this.props.oea && ecc(this)
                    }
                    componentWillUnmount() {
                        this.YK && (this.YK(), this.YK = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Ska = this.YK = null;
                        this.C6a = b => {
                            this.Ska = b.nativeEvent
                        };
                        this.MFa = b => {
                            const c = this.props.oea,
                                d = this.Ska === b;
                            c && !d &&
                                c(b);
                            this.Ska = null
                        }
                    }
                };
                var jcc = a => F6(pcc, {
                    oqb: ["onMouseDown", "onTouchStart"],
                    Hbb: ["mousedown", "touchstart"],
                    oea: a.a3,
                    children: a.children
                });
                var hcc = class {
                        static A(a) {
                            __c.O(a, {
                                Ao: occ.ref
                            })
                        }
                        constructor() {
                            this.Ao = (hcc.A(this), !0)
                        }
                    },
                    icc = class {
                        static A(a) {
                            __c.O(a, {
                                onDoubleClick: H6.bound,
                                onTouchEnd: H6.bound,
                                reset: H6.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Ao = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.AP ? (window.clearTimeout(this.AP), this.AP = void 0, this.store.Ao = !1) : this.AP = window.setTimeout(() => this.AP = void 0, 300))
                        }
                        reset() {
                            this.store.Ao = !0
                        }
                        JR() {
                            this.AP && window.clearTimeout(this.AP)
                        }
                        constructor(a) {
                            this.store = a;
                            this.AP = (icc.A(this), void 0)
                        }
                    };
                __c.JSa = {
                    Uhb: function(a) {
                        const b = kcc({
                                Sx: (e, f) => a.F.error(e, {
                                    te: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                Ym: a.Ym,
                                Bv: a.Bv,
                                Et: a.Et
                            }),
                            c = lcc({
                                pe: a.pe
                            }),
                            d = dcc({
                                ci: a.kf
                            });
                        return {
                            e5a: b,
                            fFa: c,
                            fX: d
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/42f73f00c89dba4a.js.map