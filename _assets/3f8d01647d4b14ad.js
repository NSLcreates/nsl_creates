(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var B = __c.B;
                var E8b = function(a, b, c, d) {
                        c = new D8b(c, d);
                        B(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        B(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Yia(a, b)
                    },
                    G8b = function(a) {
                        return { ...__c.Kib,
                            ...v5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.Sia.width,
                                height: a.Sia.height
                            },
                            lb: a.lb.map(F8b)
                        }
                    },
                    H8b = function(a) {
                        switch (a.uC) {
                            case 0:
                                var b = __c.tl.tc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.eg("color", a.color);
                                b = b.Pb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.RJ,
                                    ...w5,
                                    ...v5,
                                    Ha: (c = a.Ha) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    zg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.RJ,
                                    ...w5,
                                    ...v5,
                                    text: b,
                                    zg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    A5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.vib,
                            fill: x5(b),
                            border: y5(c),
                            X: z5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: G8b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: H8b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: I8b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    I8b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.wib,
                            ...w5,
                            ...v5,
                            J: w5.width,
                            W: w5.height,
                            fill: x5(c),
                            border: y5(b),
                            direction: 1,
                            X: z5(d),
                            cells: new Map(a.map(k => [k.id, A5(k)])),
                            behavior: {
                                rules: [{
                                    Ng: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        hh: J8b(a)
                                    }
                                }]
                            },
                            Ve: void 0
                        }
                    },
                    J8b = function(a) {
                        return new Map(a.map(b => [b.id, K8b(b)]))
                    },
                    K8b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.KEa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.LQ,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    y5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.cD,
                            all: a ? { ...__c.AQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Jf: !0
                            } : void 0
                        }
                    },
                    z5 = function(a) {
                        return { ...__c.KQ,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    F8b = function(a) {
                        return { ...__c.Lib,
                            ...a,
                            fill: x5(a.fill),
                            stroke: L8b(a.stroke)
                        }
                    },
                    L8b = function(a) {
                        return a ? { ...__c.AQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    x5 = function(a) {
                        var b;
                        const c = { ...__c.Fu,
                            Ha: (b = a === null || a === void 0 ? void 0 : a.Ha) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    ab: a.ab
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    R8b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        M8b(a.cells, c, (e, f) => {
                            let g = !1;
                            N8b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, A5(f));
                                g = !0
                            });
                            g || (B5(e.fill, f.fill), O8b(e.border, f.border), P8b(e.X, f.X))
                        }, e => A5(e));
                        Q8b(a.behavior, b, c);
                        B5(a.fill, b.fill);
                        P8b(a.X, b.X);
                        O8b(a.border, b.border);
                        var d;
                        a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0
                    },
                    Q8b = function(a, b, c) {
                        C5(a.rules, [b], d => {
                            S8b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            S8b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            M8b(d.grid.hh, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.pa = k === null || k === void 0 ? void 0 : k.pa, g.padding.Ga = k === null || k === void 0 ? void 0 : k.Ga, g.padding.ra = k === null || k === void 0 ? void 0 : k.ra, g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                                g.alignSelf = p
                            }, g => K8b(g))
                        }, d => {
                            var e, f;
                            return {
                                Ng: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    hh: J8b(d.cells)
                                }
                            }
                        })
                    },
                    T8b = function(a, b) {
                        C5(a.lb, b.lb, (e, f) => {
                            e.d = f.d;
                            B5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(L8b(f.stroke))
                        }, e => F8b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = G8b(b);
                        a.width = d;
                        __c.Et(a.viewBox).equals(__c.Et(c)) || (a.viewBox = c)
                    },
                    N8b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? T8b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.tl.domain.Qb(__c.tl.ja(a.text), H8b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? R8b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    M8b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    C5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    B5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.ab.set(void 0);
                                var c;
                                a.Ha = (c = b.Ha) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.ab.ref && __c.s9a.domain.Qb(a.ab.ref, b.ab)) break;
                                a.color = void 0;
                                a.ab.set(b.ab);
                                var d;
                                a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.ab.set(void 0)
                        }
                    },
                    P8b = function(a, b) {
                        b = z5(b);
                        a.all = b.all;
                        a.nD = b.nD;
                        a.lD = b.lD;
                        a.mD = b.mD;
                        a.kD = b.kD
                    },
                    O8b = function(a, b) {
                        b = y5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.dD.domain.Qb(__c.dD.ja(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    S8b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    V8b = function(a, b, c, d) {
                        let e = a.mXa.get(b);
                        if (e) return e;
                        e = {
                            Fx: new U8b(c.tw, b, d, c.Yra),
                            SGa: void 0,
                            VQa: void 0,
                            VSa: __c.uV.mode
                        };
                        a.mXa.set(b, e);
                        return e
                    },
                    X8b = function(a, b, c, d, e) {
                        var f, g;
                        e = V8b(a, c, b, e);
                        const h = e.Fx,
                            k = e.VQa,
                            l = e.SGa,
                            m = e.VSa;
                        c = __c.JP.ja(c);
                        const n = ((f = (g = a.Nz).hra) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.uV;
                        h.Sj === k && W8b.structural(c, l) && n.mode === m || (e.SGa = c, e.VQa = h.Sj, e.VSa = n.mode, b = b.render(h, n), a.Qlb.update(d, b), E8b(d, b, (p, q) => a.bQ.msa.set(p, q), (p, q, r) => a.bQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    $8b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.Fmb());
                        c.push(Y8b(() => {
                            a: {
                                var e = new Z8b;
                                for (const f of b)
                                    if (e.fQ(f), e.dqa) {
                                        e = e.dqa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Zb.isLoaded(e) || a.ita.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B(f.type === "layout"), a.Gk.Ufa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    a9b = function(a, b) {
                        return {
                            GD: ({
                                fj: c
                            }) => {
                                var d;
                                const {
                                    Fx: e
                                } = V8b(a.renderer, c, b, a.j2), f = __c.LP.create([]), g = [];
                                g.push($8b(a.keb, f));
                                g.push(Y8b(() => {
                                    var k, l;
                                    return [(k = (l = a.Nz).hra) === null || k === void 0 ? void 0 : k.call(l, f), __c.JP.ja(c),
                                        e.Sj
                                    ]
                                }, () => {
                                    X8b(a.renderer, b, c, f, a.j2)
                                }, {
                                    fireImmediately: !0,
                                    equals: W8b.structural
                                }));
                                const h = (d = b.Mua) === null || d === void 0 ? void 0 : d.call(b, {
                                    Fx: e
                                });
                                h && g.push(h);
                                return {
                                    Pa: f,
                                    hu: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    D5 = __webpack_require__(519427),
                    W8b = D5.comparer,
                    b9b = D5.computed,
                    E5 = D5.observable,
                    Y8b = D5.reaction,
                    c9b = D5.runInAction;
                var d9b = class {
                    static A(a) {
                        __c.O(a, {
                            sob: E5.ref,
                            zfb: E5.ref
                        })
                    }
                    constructor() {
                        this.hra = (d9b.A(this), void 0)
                    }
                };
                var e9b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    U8b = class {
                        static A(a) {
                            __c.O(a, {
                                Je: b9b
                            })
                        }
                        get WQa() {
                            var a = this.j2,
                                b = this.fj,
                                c = this.Yra;
                            let d = a.sources.get(b);
                            d || (d = E5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Sj() {
                            return this.WQa.get()
                        }
                        get Je() {
                            return this.tw.Mu({
                                type: "dict",
                                value: this.fj
                            })
                        }
                        $l(a) {
                            this.WQa.set(a instanceof Function ? { ...this.Sj,
                                ...a()
                            } : { ...this.Sj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.tw = a;
                            this.fj = b;
                            this.j2 = c;
                            this.Yra = d;
                            U8b.A(this)
                        }
                    };
                var D8b = class {
                    V6(a, b) {
                        this.aXa(a, b);
                        b.ref && this.oxa(a, b.ref, b.key)
                    }
                    iQ(a, b) {
                        b.ref && this.oxa(a.text, b.ref, b.key)
                    }
                    DDa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B(a.element.type === "shape");
                                this.V6(a.element, b.content);
                                break;
                            case "text":
                                B(a.element.type === "text");
                                this.iQ(a.element, b.content);
                                break;
                            case "layout":
                                B(a.element.type === "layout");
                                this.Yia(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Yia(a, b) {
                        this.aXa(a, b);
                        b.ref && this.oxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.DDa(d, a)
                    }
                    constructor(a, b) {
                        this.aXa = a;
                        this.oxa = b
                    }
                };
                var v5 = {
                        locked: !0,
                        dk: {
                            eZ: !1,
                            gW: !1
                        },
                        Th: !0
                    },
                    w5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var f9b = class {
                    constructor(a) {
                        this.Gk = a;
                        this.update = (b, c) => {
                            C5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        R8b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...I8b(d),
                                            ...v5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            J: d.minWidth,
                                            W: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) B(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.J = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.Gk.Ufa(d)
                        }
                    }
                };
                var g9b = class {
                    constructor(a, b, c) {
                        this.Qlb = a;
                        this.bQ = b;
                        this.Nz = c;
                        this.mXa = new WeakMap
                    }
                };
                var h9b = class {
                        static A(a) {
                            __c.O(a, {
                                ita: E5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.Zb = a;
                            this.Gk = b;
                            this.ita = (h9b.A(this), new Set);
                            this.nqa = new Set;
                            this.Fmb = () => {
                                this.Iaa || (this.Iaa = __c.aja(this.Zb).subscribe(d => {
                                    c9b(() => {
                                        this.ita.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.nqa.add(c);
                                return () => {
                                    this.nqa.delete(c);
                                    this.nqa.size <= 0 && this.Iaa && (this.Iaa.unsubscribe(), this.Iaa = void 0)
                                }
                            }
                        }
                    },
                    Z8b = class extends __c.BB {
                        fQ(a, b) {
                            this.dqa || super.fQ(a, b)
                        }
                        iQ(a) {
                            this.dqa = (a = a.text.Kt("font-family")["font-family"].values().next().value) &&
                                __c.ar(a).id
                        }
                    };
                var i9b = !1,
                    j9b = class {
                        register(a, b) {
                            this.zD.has(a) || (this.zD.set(a, b), i9b || (__c.KP.set(a, a9b(this, b)), i9b = !0))
                        }
                        get(a) {
                            return this.zD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.j2 = b;
                            this.Nz = c;
                            this.Zb = d;
                            this.Gk = e;
                            this.zD = new Map;
                            this.keb = new h9b(this.Zb, this.Gk)
                        }
                    };
                var k9b = class {
                        constructor() {
                            this.msa = new __c.YE;
                            this.refs = new __c.YE
                        }
                    },
                    l9b = class {
                        getContext(a) {
                            return this.bQ.refs.get(a)
                        }
                        EM(a) {
                            return this.bQ.msa.get(a)
                        }
                        constructor(a, b, c) {
                            this.bQ = a;
                            this.j2 = b;
                            this.renderer = c
                        }
                    };
                __c.GSa = {
                    Whb: function(a) {
                        const b = new d9b,
                            c = new k9b,
                            d = new g9b(new f9b(a.Gk), c, b),
                            e = new e9b;
                        a = new j9b(d, e, b, a.Zb, a.Gk);
                        return {
                            Nz: b,
                            MQb: new l9b(c, e, d),
                            Y6: a,
                            bQ: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/3f8d01647d4b14ad.js.map