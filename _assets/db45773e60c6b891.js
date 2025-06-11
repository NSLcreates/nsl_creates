(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var HG = __c.HG;
                var Sc = __c.Sc;
                var O = __c.O;
                var Et = __c.Et;
                var N = __c.N;
                var sw = __c.sw;
                var gt = __c.gt;
                var D = __c.D;
                var E = __c.E;
                var L4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.OR(b.reference.fi);
                                a = a.vV(b.reference.si);
                                return c != null && a != null;
                            case 1:
                                return a.OR(b.reference.fi) != null;
                            case 2:
                                return a.vV(b.reference.si) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    F6b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.ba.length > 0) return !1;
                                a = a.lF(c.DY.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.TC(new __c.WC, a.qH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return L4(b, d);
                                        case 1:
                                            return L4(b,
                                                d.start) && L4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    G6b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.na;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.$b === c : g.span.Yc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.pa : c === null || c === void 0 ? void 0 : c.Ga) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Epa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.TXa, h = h.na === k.na && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.qc === c.qc && g.qc === 0 ? g.Epa = f : e.push({
                                            TXa: k,
                                            Itb: l,
                                            Epa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            qc: c.qc
                                        })
                                    }
                            }
                        return e
                    },
                    H6b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.na,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Wb === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ra : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            na: g,
                                            boundary: "start"
                                        } : {
                                            na: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.IIa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Ipa, k = k.na === m.na && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.qc === d.qc && h.qc === 0 ? h.Ipa = g : f.push({
                                            IIa: l,
                                            Ttb: m,
                                            Ipa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            qc: d.qc
                                        })
                                    }
                            }
                        return f
                    },
                    I6b = function(a, b, c, d, e) {
                        const f =
                            a.OZa.C$a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.dc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.dc(d[0].na)) && e.push({
                            na: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].na)) && e.push({
                            na: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.dc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.na : void 0;
                                k = l ? b.layout.rows.dc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.ra;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ga : m === null || m === void 0 ?
                                    void 0 : m.pa;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.ra;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ga : l === null || l === void 0 ? void 0 : l.pa;
                                p = __c.TFa({
                                    pa: n,
                                    Ga: k,
                                    ra: l,
                                    La: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: w
                                } = (t === null || t === void 0 ? void 0 : t.qc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(M4(q, r), __c.uD(p, u / 2, w / 2))
                            }
                        }
                        return g
                    },
                    J6b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = G6b(b, c, d, e);
                        f = H6b(b, c, d, e, f);
                        const h = I6b(a, b, c, d, e),
                            k = a.Kfb(b),
                            l = a.cfb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.Itb,
                                t = n.Epa,
                                u = n.TXa;
                            const w = n.color,
                                x = n.weight;
                            n = n.qc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(M4(r, u))) === null || p === void 0 ?
                                void 0 : p.La;
                            p = (q = h.get(M4(t, u))) === null || q === void 0 ? void 0 : q.ra;
                            if (A != null && p != null) {
                                q = D(k.get(u.na));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                u = u.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: w,
                                    weight: x,
                                    qc: n,
                                    p1: new gt(q + A * y, u),
                                    p2: new gt(t + p * y, u),
                                    ...__c.zD((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.Hb);
                        return [...f.map(n => {
                            var p, q, r = n.IIa,
                                t = n.Ttb,
                                u = n.Ipa;
                            const w = n.color,
                                x = n.weight;
                            n = n.qc;
                            const y = (p = h.get(M4(r, t))) === null || p === void 0 ? void 0 : p.Ga;
                            p = (q = h.get(M4(r,
                                u))) === null || q === void 0 ? void 0 : q.pa;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.na));
                                t = D(k.get(u.na));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: w,
                                    weight: x,
                                    qc: n,
                                    p1: new gt(r, q + y),
                                    p2: new gt(r, u + p),
                                    ...__c.zD(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.Hb), ...a]
                    },
                    K6b = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.vd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.vd(d, e => `${e.nk}_${e.pk}`);
                            for (const [, e] of a) {
                                const {
                                    pk: f,
                                    nk: g
                                } = e[0];
                                a = __c.vd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    nk: g,
                                    pk: f
                                })
                            }
                        }
                        return b
                    },
                    L6b = function(a, b, c, d) {
                        var e = __c.rzb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                na: k,
                                boundary: "start"
                            }, {
                                na: k,
                                boundary: "end"
                            }] : [{
                                na: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.OZa.hrb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = J6b(e, a, h, f, g, d);
                        return K6b(c)
                    },
                    N4 = function() {
                        const [a] = (0, __c.wb)(() => sw());
                        return a
                    },
                    M6b = function(a) {
                        switch (a) {
                            case 2:
                                return N("ibdecg");
                            case 7:
                                return N("446quA");
                            case 5:
                                return N("j1fbqg");
                            case 1:
                                return N("O5i4AQ");
                            case 6:
                                return N("C0VHsg");
                            case 4:
                                return N("9ND0kg");
                            case -1:
                                return N("RWqnLA");
                            case 9:
                                return N("nQR/7w");
                            case -2:
                                return N("P23rtA");
                            case 3:
                                return N("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    N6b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    O6b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.uzb)(a) / 2 : -(0, __c.szb)(a) / 2,
                            c = -(0, __c.tzb)(a) / 2,
                            d = a.width + (0, __c.szb)(a) / 2 + (0, __c.uzb)(a) / 2;
                        a = a.height + (0, __c.tzb)(a) / 2 + (0, __c.vzb)(a) / 2;
                        return Et({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    P6b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.M)(a, { ...b
                            })
                        })
                    },
                    R6b = function(a) {
                        var b;
                        const c = a.jz;
                        var d = a.content;
                        const e = a.context;
                        a = a.mp;
                        __c.B((d === null || d === void 0 ? void 0 : (b = d.fg) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.vk;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.wka) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.He(__c.Ubb, { ...__c.xib,
                                        value: b.value
                                    }),
                                    context: e,
                                    mp: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = Q6b(c, e, d.bA, d.vk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: O4(__c.yR, {
                                        label: M6b(b.error),
                                        children: O4(__c.vx, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: O4(__c.yJb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    Q6b = function(a, b, c, d) {
                        var e;
                        return (e = a.zka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    U6b = function(a) {
                        const b = a.jz,
                            c = a.kf,
                            d = a.Fub,
                            e = a.Qa;
                        b.zka = f => __c.eNa({ ...f,
                            Qa: e
                        });
                        b.vFa = f => R6b({ ...f,
                            jz: b
                        });
                        b.wka = P6b(S6b({
                            kf: c,
                            DQ: void 0
                        }));
                        b.xFa = T6b(d, e);
                        b.yFa = P6b(f => O4(P4, { ...f,
                            Qa: e
                        }))
                    },
                    V6b = function({
                        label: a,
                        Ua: b,
                        width: c,
                        height: d,
                        scale: e,
                        RIa: f
                    }) {
                        return O4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: Q4(__c.sx, {
                                className: R4("ivlMMQ", S4(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && O4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    S4 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    X6b = function({
                        xd: a,
                        iOa: b,
                        scale: c,
                        Vo: d,
                        Wo: e,
                        y3a: f
                    }) {
                        const g = T4(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.kD(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return O4(__c.tx, {
                            fq: "light",
                            light: "light",
                            jt: "light",
                            dark: "light",
                            children: m => O4("div", {
                                className: R4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: O4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: R4("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.dm,
                                    children: O4(__c.CR, {
                                        className: R4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: N("ruWN9A"),
                                        children: O4(W6b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    Z6b = function() {
                        const a = new Y6b,
                            b = new __c.dS,
                            c = U4(f => {
                                const {
                                    scale: g = 1,
                                    dOa: h,
                                    size: k =
                                        "small",
                                    y3a: l = !0
                                } = f, m = V4(n => a.Wo({
                                    scale: n,
                                    size: k,
                                    aua: h
                                }), [k, h]);
                                return O4(X6b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    xd: f.sheet.direction === "rtl",
                                    iOa: f.selection != null && a.Zib(f.sheet, f.selection),
                                    Wo: m,
                                    y3a: l
                                })
                            }),
                            d = U4(f => {
                                const {
                                    scale: g = 1,
                                    dOa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Nrb: n
                                } = f, p = V4(w => a.Wo({
                                    scale: w,
                                    size: k,
                                    aua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = V4(w => m != null && a.fya(m).has(w), [m]), t = V4(w => m != null && a.Jgb(l, m).has(w), [l, m]), u = V4(w => {
                                    const x = n != null && l.layout.cols.Ke(w, n.Wb) >= 0 && l.layout.cols.Ke(w, n.Ic) <=
                                        0;
                                    return r(w) ? x ? "secondary-active" : "primary-active" : t(w) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return O4(W4, { ...f,
                                    md: g,
                                    Bd: q,
                                    Wo: p,
                                    lE: u,
                                    YE: b
                                })
                            }),
                            e = U4(f => {
                                const {
                                    scale: g = 1,
                                    dOa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Nrb: n
                                } = f, p = V4(w => a.Wo({
                                    scale: w,
                                    size: k,
                                    aua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = V4(w => m != null && a.hya(m).has(w), [m]), t = V4(w => m != null && a.Kgb(l, m).has(w), [l, m]), u = V4(w => {
                                    const x = n != null && l.layout.rows.Ke(w, n.$b) >= 0 && l.layout.rows.Ke(w, n.Yc) <= 0;
                                    return r(w) ?
                                        x ? "secondary-active" : "primary-active" : t(w) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return O4(X4, { ...f,
                                    md: q,
                                    Bd: g,
                                    Wo: p,
                                    lE: u,
                                    YE: b
                                })
                            });
                        return {
                            b4a: c,
                            a4a: d,
                            c4a: e
                        }
                    },
                    $6b = function(a) {
                        const b = a.Qp,
                            c = () => null;
                        return __c.Cw(d => O4(Y4, { ...d,
                            Qp: b,
                            Fh: c
                        }))
                    },
                    a7b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Gd: d
                    }) {
                        Z4(() => $4(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ra(c.Wb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.pa(c.$b) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    d7b = function({
                        onScroll: a
                    }) {
                        const b = new b7b(a);
                        return {
                            cC: b,
                            cka: U4(c => O4(c7b, {
                                sheet: c.sheet,
                                cC: b,
                                children: c.children
                            }))
                        }
                    },
                    g7b = function(a) {
                        const b = a.Qp,
                            c = a.pe,
                            d = a.QZa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                cC: f,
                                cka: g
                            } = d7b({
                                onScroll: a.onScroll
                            });
                        class h extends e7b {
                            get WK() {
                                const k = this.props.fa.xv;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.xZa(this.props.item, {
                                    zb: this.props.zb,
                                    fa: this.props.fa
                                })
                            }
                            componentWillUnmount() {
                                d.r9a(this.props.item, {
                                    zb: this.props.zb,
                                    fa: this.props.fa
                                })
                            }
                            render() {
                                d.xZa(this.props.item, {
                                    zb: this.props.zb,
                                    fa: this.props.fa
                                });
                                return O4(f7b, { ...this.props,
                                    Y: this.Y,
                                    Qp: b,
                                    WK: this.WK,
                                    Fh: this.Fh,
                                    QZa: d,
                                    cC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = a5(() => {
                                    const l = this.props.item;
                                    var m = this.props.fa,
                                        n = m.xv;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Ofb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.JD(l,
                                                n.zb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Fh = U4(l => O4("div", {
                                    className: "wKvivQ",
                                    children: O4(__c.mNa, { ...this.props,
                                        ...l,
                                        pe: c
                                    })
                                }))
                            }
                        }
                        return {
                            ika: h,
                            cC: f
                        }
                    },
                    h7b = function(a, b) {
                        if (b != null && b.Wb != null && b.$b != null && b.Ic != null && b.Yc != null) {
                            var c = a.ra(b.Wb),
                                d = a.pa(b.$b),
                                e = a.ra(b.Ic) + b.Ic.width - c;
                            a = a.pa(b.Yc) + b.Yc.height - d;
                            return Et({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    j7b = function(a) {
                        const b = a.Qp,
                            c = () => null;
                        return d => O4(i7b, { ...d,
                            Qp: b,
                            Fh: c
                        })
                    },
                    n7b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                fIa: b,
                                ov: b,
                                Ja: {},
                                wn: {}
                            },
                            d = b5(() => a.sz.style || c, h => {
                                var k;
                                Object.assign(a.c9.style, h.fIa);
                                Object.assign(a.sL.style, h.ov);
                                Object.assign(a.uD.style, h.Ja);
                                Object.assign(a.BD.style, h.wn);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ja) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.uD.classList.toggle("OQx3PQ", h === "underline");
                                a.uD.classList.toggle("_99ezUA", h === "line-through");
                                a.uD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: k7b
                            }),
                            e = b5(() => a.Usa, h => {
                                a.uD.classList.toggle("_84KvRA", !h);
                                a.c9.classList.toggle("_84KvRA", !h);
                                a.sL.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = b5(() => a.renderer, h => {
                                a.N9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.N9 = void 0, a.P3.remove()) : a.BD.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.N9 = l7b(h.node, a.P3);
                                        a.BD.appendChild(a.P3);
                                        break;
                                    case "dom":
                                        h.render(a.BD);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.Uua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = m7b ? b5(() => a.tra, h => {
                                a.uD.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    k7b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    p7b = function(a) {
                        const b = a.kz,
                            c = a.jC,
                            d = a.KC,
                            e = a.U2a,
                            f = a.Yx,
                            g = new o7b(c),
                            h = (k, l) => f ? F6b(f, k, l) : !1;
                        return k => O4(c5, { ...k,
                            lN: h,
                            KC: d,
                            jC: c,
                            kz: b,
                            psa: g,
                            U2a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    M4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
                    S6b = ({
                        kf: a,
                        DQ: b
                    }) => c => (0, __c.M)(__c.xzb, { ...c,
                        kf: a,
                        DQ: b
                    }),
                    d5 = __webpack_require__(443763),
                    q7b = d5.Fragment,
                    O4 = d5.jsx,
                    Q4 = d5.jsxs;
                var r7b = __webpack_require__,
                    s7b = r7b(993864),
                    R4 = r7b.n_x(s7b)();
                var U4 = __webpack_require__(446474).Pi;
                var e5 = __webpack_require__(875604),
                    f5 = e5.Component,
                    e7b = e5.PureComponent,
                    V4 = e5.useCallback,
                    Z4 = e5.useEffect,
                    t7b = e5.useLayoutEffect,
                    T4 = e5.useMemo,
                    g5 = e5.useRef;
                var h5 = __webpack_require__(519427),
                    i5 = h5.action,
                    $4 = h5.autorun,
                    j5 = h5.comparer,
                    a5 = h5.computed,
                    u7b = h5.createAtom,
                    k5 = h5.observable,
                    b5 = h5.reaction,
                    v7b = h5.untracked;
                var l5 = __webpack_require__(635872),
                    m5 = l5.Om,
                    w7b = l5.kq,
                    x7b = l5.YN;
                var n5 = __webpack_require__(937763)._;
                var o5 = __webpack_require__(161563)._;
                var y7b = __webpack_require__(358579).Z;
                var l7b = __webpack_require__(36281).createPortal;
                var z7b = class {
                        static A(a) {
                            O(a, {
                                viewBox: k5.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (z7b.A(this), Et({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Rsb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    A7b = U4(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = g5(new z7b),
                            f = i5(() => {
                                if (a.Tia) {
                                    var h = a.Tia.current;
                                    h && e.current.Rsb(Et({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        Z4(() => {
                            var h, k;
                            f();
                            (h = a.Tia.current) === null || h === void 0 || h.addEventListener("scroll",
                                f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.Tia.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.Tia, f]);
                        const g = T4(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return Q4("div", {
                            className: R4("nMvVqA", d),
                            children: [Q4("div", {
                                ref: a.Gd,
                                className: "_0YOFPg",
                                children: [O4(a.Qp, { ...a,
                                    viewport: g
                                }), O4("div", {
                                    className: R4("Gdl7fQ", d),
                                    children: (c = a.PEa) === null || c === void 0 ? void 0 : (b = c.get()) ===
                                        null || b === void 0 ? void 0 : b.map((h, k) => O4(h, {}, k))
                                })]
                            }), a.CHb === "visible" && Q4(q7b, {
                                children: [O4("div", {
                                    className: R4("_32sKQw", d),
                                    children: O4(a.Y5a, { ...a
                                    })
                                }), O4("div", {
                                    className: R4("xdIsTQ", d),
                                    children: O4(a.a6a, { ...a
                                    })
                                }), O4("div", {
                                    className: R4("rsTRSA", d),
                                    children: O4(a.$5a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    B7b = U4(a => {
                        a = a.content;
                        __c.v(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.Zp.ja(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var T6b = (a, b) => __c.RMa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Qg: c
                        } = __c.ah(__c.Kh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            pb: void 0,
                            writingMode: 1,
                            vd: "start",
                            Ef: C7b(e, c),
                            Qa: b
                        })
                    }),
                    C7b = m5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: j5.structural
                    });
                var D7b, E7b, F7b, P4;
                new(D7b = class extends n5 {
                    constructor() {
                        super(P4);
                        E7b()
                    }
                }, (() => {
                    class a extends(F7b = f5) {
                        static A(b) {
                            O(b, {
                                Qg: a5
                            })
                        }
                        get Qg() {
                            return __c.ah(__c.Kh, this.props.context.attrs).Qg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = O4(this.props.Fh, {
                                content: b,
                                na: c.container.na,
                                col: c.container.column,
                                Qg: this.Qg
                            });
                            return this.Qg === "wrap" ? O4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [P4, E7b]
                    } = o5(a, [], [Sc], F7b))
                })(), D7b);
                var Y6b = class {
                    Wo({
                        size: a,
                        scale: b,
                        aua: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.AV * b : __c.oIb * b
                    }
                    constructor() {
                        this.Zib = m5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.fya = w7b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Gq
                        });
                        this.hya = w7b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.Gq
                        });
                        this.Jgb = m5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.hya(b).size > 0) return new Set(a.layout.cols);
                            b = this.fya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of N6b(c ? c.span.Wb : e.column, c ? c.span.Ic : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Gq
                        });
                        this.Kgb = m5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.fya(b).size > 0) return new Set(a.layout.rows);
                            b = this.hya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of N6b(c ? c.span.$b : e.na, c ? c.span.Yc : e.na, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Gq
                        })
                    }
                };
                var G7b, H7b, I7b, J7b, K7b, L7b, M7b = parseInt("4px", 10) || 4,
                    N7b = parseInt("0.5px", 10) || .5,
                    O7b = parseInt("1px", 10) || 1,
                    P7b = parseInt("0.5px", 10) || .5,
                    Q7b = parseInt("0.5px", 10) || .5,
                    R7b = parseInt("1px", 10) || 1,
                    S7b = parseInt("0.5px", 10) || .5,
                    W4;
                new(G7b = class extends n5 {
                    constructor() {
                        super(W4);
                        I7b()
                    }
                }, (() => {
                    class a extends(J7b = f5) {
                        static A(b) {
                            O(b, {
                                xd: a5,
                                sq: a5,
                                q5: a5
                            })
                        }
                        get xd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.kD(c)
                        }
                        get q5() {
                            var b, c, d;
                            return (c = (d = this.props).Qqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return O4(__c.tx, {
                                fq: "light",
                                light: "light",
                                jt: "light",
                                dark: "light",
                                children: this.I9a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (W4.A(this), i5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    md: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = i5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.kXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    lE: h,
                                    MHb: k,
                                    md: l = 1,
                                    Bd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.xd,
                                    gtA7Dw: this.xd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.xd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.q5) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return Q4("div", {
                                    style: r,
                                    className: R4("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(u => {
                                        var w;
                                        t++;
                                        if (!(c && f.layout.cols.Ke(u, c) < 0 || d && f.layout.cols.Ke(u, d) > 0)) return O4(T7b, {
                                            col: u,
                                            label: __c.Kz(t),
                                            Ua: k === null || k === void 0 ? void 0 : (w = k.get()) === null || w === void 0 ? void 0 : w.get(u),
                                            Wo: g,
                                            lE: h,
                                            md: l,
                                            Bd: m
                                        }, u.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && O4("div", {
                                        style: {
                                            width: M7b * l
                                        },
                                        className: R4("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.I9a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.dH ? e.layout.Pd.get(e.view.freeze.dH) : void 0,
                                    g = {
                                        jNbTIg: !this.xd,
                                        gtA7Dw: this.xd
                                    };
                                return Q4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.dm,
                                    className: R4("xhBZaw", g, c.className),
                                    children: [f && this.kXa(void 0, f, {
                                        sticky: !0
                                    }), this.kXa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [W4, I7b]
                    } = o5(a, [], [Sc], J7b))
                })(), G7b);
                var X4;
                new(H7b = class extends n5 {
                    constructor() {
                        super(X4);
                        K7b()
                    }
                }, (() => {
                    class a extends(L7b = f5) {
                        static A(b) {
                            O(b, {
                                xd: a5,
                                sq: a5,
                                q5: a5
                            })
                        }
                        get xd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.kD(c)
                        }
                        get q5() {
                            var b, c, d;
                            return (c = (d = this.props).Qqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return O4(__c.tx, {
                                fq: "light",
                                light: "light",
                                jt: "light",
                                dark: "light",
                                children: this.xrb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (X4.A(this), i5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Bd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = i5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.qXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    lE: h,
                                    md: k = 1,
                                    Bd: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.xd,
                                    gtA7Dw: this.xd
                                };
                                var n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                        top: 0
                                    } : void 0,
                                    p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.q5) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1,
                                    t = 0;
                                n = f.rows.map(u => {
                                    r++;
                                    if (!(c && f.rows.Ke(u, c) < 0 || d && f.rows.Ke(u, d) > 0)) return t += u.height, O4(U7b, {
                                        na: u,
                                        label: `${r+1}`,
                                        lE: h,
                                        Wo: g,
                                        md: k,
                                        Bd: l,
                                        start: f.pa(u)
                                    }, u.id)
                                });
                                return Q4("div", {
                                    style: {
                                        height: t * l,
                                        width: g(k),
                                        ...q
                                    },
                                    className: R4("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [n, (e === null || e === void 0 ? void 0 : e.sticky) && O4("div", {
                                        style: {
                                            height: M7b * l
                                        },
                                        className: R4("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.xrb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.wV ?
                                    e.layout.de.get(e.view.freeze.wV) : void 0,
                                    g = {
                                        jNbTIg: !this.xd,
                                        gtA7Dw: this.xd
                                    };
                                return Q4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.dm,
                                    className: R4("An9VeA", g, c.className),
                                    children: [f && this.qXa(void 0, f, {
                                        sticky: !0
                                    }), this.qXa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [X4, K7b]
                    } = o5(a, [], [Sc], L7b))
                })(), H7b);
                var T7b = U4(a => {
                        const b = a.label,
                            c = a.Ua,
                            d = a.col,
                            e = a.lE,
                            f = a.Wo,
                            g = a.md;
                        a = a.Bd;
                        const h = f(a),
                            k = x7b(() => e(d));
                        return O4("div", {
                            className: R4("_83Rssw", "d2uLIA", S4(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${N7b*g}px`,
                                borderBlockStartWidth: `${O7b*g}px`,
                                borderBlockEndWidth: `${P7b*g}px`
                            },
                            children: O4(V6b, {
                                label: b,
                                Ua: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                RIa: k
                            })
                        })
                    }),
                    U7b = U4(a => {
                        const b = a.label,
                            c = a.na,
                            d = a.Wo,
                            e = a.lE,
                            f = a.md,
                            g = a.Bd,
                            h = d(f),
                            k = x7b(() => e(c));
                        return O4("div", {
                            className: R4("_83Rssw", "JhBzyw",
                                S4(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${Q7b*g}px`,
                                borderInlineStartWidth: `${R7b*g}px`,
                                borderInlineEndWidth: `${S7b*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: O4(V6b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                RIa: k
                            })
                        })
                    });
                var V7b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var W7b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var W6b = __c.rR({
                    oo: V7b,
                    medium: W7b
                });
                var X7b, Y7b, Z7b, Y4;
                new(X7b = class extends n5 {
                    constructor() {
                        super(Y4);
                        Y7b()
                    }
                }, (() => {
                    class a extends(Z7b = f5) {
                        static A(b) {
                            O(b, {
                                qe: a5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return O4(this.props.Qp, {
                                sheet: b.ha.config,
                                container: b,
                                G8: "visible",
                                Vo: this.props.Vo,
                                Jt: this.props.Jt,
                                Ot: this.props.Ot,
                                Y: this.props.Y,
                                qe: this.qe,
                                Fh: this.props.Fh,
                                BG: void 0
                            })
                        }
                        get qe() {
                            return __c.Sz(this.props.element.ha.Oa, this.props.Ie)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [Y4, Y7b]
                    } = o5(a, [], [Sc], Z7b))
                })(), X7b);
                var $7b = class {
                    constructor() {
                        this.Uga = new WeakMap;
                        this.Ofb = a => this.Uga.get(a);
                        this.xZa = (a, b) => {
                            this.Uga.set(a, b)
                        };
                        this.r9a = (a, b) => {
                            const c = this.Uga.get(a);
                            c && c.fa === b.fa && c.zb === b.zb && this.Uga.delete(a)
                        }
                    }
                };
                var p5 = parseInt("4px", 10) || 4,
                    a8b = U4(({
                        sheet: a,
                        Y: b,
                        range: c,
                        Ev: d,
                        Fv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.pa(c.Yc) + c.Yc.height, a = a.ra(c.Ic) + c.Ic.width, O4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: p5 * b
                                },
                                className: R4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ra(c.Ic) + c.Ic.width, O4("div", {
                                style: {
                                    width: p5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: R4("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.pa(c.Yc) + c.Yc.height, O4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: p5 * b
                                },
                                className: R4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var q5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = N4();
                        a7b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Gd: e
                        });
                        return O4("div", {
                            ref: e,
                            className: R4("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    b8b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = N4();
                        a7b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Gd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return O4("div", {
                            className: R4("nstn2A", a, "_9sodyg"),
                            children: O4("div", {
                                ref: e,
                                className: R4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var c7b = U4(({
                        sheet: a,
                        children: b,
                        cC: c
                    }) => {
                        const d = V4(f => {
                                c.Eya(a, f)
                            }, [c, a]),
                            e = V4(f => {
                                f != null ? c.dC.set(a, f) : c.dC.delete(a)
                            }, [c, a]);
                        return O4(__c.hDb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            wu: e,
                            children: b
                        })
                    }),
                    b7b = class {
                        Eya(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.z4.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.dC = new WeakMap;
                            this.z4 = k5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = i5((b, c) => {
                                b = this.dC.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var f7b = U4(a => {
                    const b = a.item,
                        c = a.Vo,
                        d = a.Mf,
                        e = a.measureRef,
                        f = a.Y,
                        g = a.gPa,
                        h = a.zb,
                        k = a.Jt,
                        l = a.Ot,
                        m = a.Qp,
                        n = a.WK,
                        p = a.Fh,
                        q = a.Ie,
                        r = a.cC;
                    a = T4(() => __c.Sz(b.Oa, q), [b, q]);
                    const t = T4(() => U4(({
                            sheet: y,
                            range: A,
                            Ev: z,
                            Fv: C
                        }) => O4(q5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: O4(a8b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                Ev: z,
                                Fv: C
                            })
                        })), [f]),
                        u = O6b(b.config),
                        w = f.get(),
                        x = Math.min(u.width * w, h.width);
                    Z4(() => $4(() => {
                        var y = b.config.view.freeze.dH ? b.config.layout.Pd.get(b.config.view.freeze.dH) : void 0;
                        if (y != null)
                            if (b.config.ra(y) + y.width > x) {
                                if (y = r.dC.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.dC.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, w, x]);
                    return O4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: O4(n, {
                            sheet: b,
                            children: O4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: u.width * w,
                                    height: u.height * w
                                },
                                children: O4("div", {
                                    className: "W1ir5A",
                                    children: O4(m, {
                                        container: d.Lj(b),
                                        sheet: b.config,
                                        G8: "visible",
                                        Vo: c,
                                        Y: f,
                                        Jt: k,
                                        Ot: l,
                                        qe: a,
                                        Fh: p,
                                        BG: t
                                    })
                                })
                            })
                        })
                    })
                });
                var c8b = U4(({
                    page: a,
                    range: b,
                    WB: c
                }) => {
                    const d = h7b(a.sheet, b);
                    return O4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.Ct(Et(e)).$o(d) && c(e, f))
                    })
                });
                var d8b = new __c.dS,
                    r5 = a => __c.AV * a,
                    e8b = () => "primary-default",
                    i7b = U4(({
                        container: a,
                        Vo: b,
                        Jt: c,
                        Ot: d,
                        f0: e,
                        Y: f,
                        viewport: g,
                        ktb: h,
                        Qp: k,
                        Fh: l,
                        WB: m,
                        ega: n,
                        Gzb: p,
                        ryb: q,
                        qyb: r
                    }) => {
                        const t = a.page,
                            u = T4(() => U4(({
                                sheet: w,
                                range: x,
                                Ev: y,
                                Fv: A
                            }) => Q4(q7b, {
                                children: [O4(q5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: O4(a8b, {
                                        sheet: w,
                                        Y: f,
                                        range: x,
                                        Ev: y,
                                        Fv: A
                                    })
                                }), Q4(b8b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && O4(p, {}), m && O4(c8b, {
                                        page: t,
                                        WB: m,
                                        range: x
                                    }), r && O4(r, {}), n && n()]
                                }), q && x && O4(q5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: O4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? O4(f8b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            Vo: b,
                            Jt: c,
                            Ot: d,
                            Qp: k,
                            Fh: l,
                            BG: u
                        }) : O4(k, {
                            sheet: t.sheet,
                            container: a,
                            G8: "hidden",
                            Vo: b,
                            Jt: c,
                            Ot: d,
                            f0: e,
                            Y: f,
                            viewport: g,
                            Fh: l,
                            BG: u
                        })
                    }),
                    f8b = U4(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.Vo,
                            f = a.Jt,
                            g = a.Ot,
                            h = a.Qp,
                            k = a.Fh;
                        a = a.BG;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = g5(null),
                            p = g5(null),
                            q = g5(null);
                        Z4(() => {
                            const y = s5({
                                sheet: l.sheet,
                                wha: !0,
                                xha: !0,
                                Y: c,
                                viewport: d
                            });
                            return b5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = n.current;
                                if (A && z) {
                                    var C =
                                        l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var J;
                                    z.style.top = (J = A.top) !== null && J !== void 0 ? J : "0px";
                                    var H, K;
                                    C ? z.style.right = (H = A.right) !== null && H !== void 0 ? H : "0px" : z.style.left = (K = A.left) !== null && K !== void 0 ? K : "0px";
                                    var P;
                                    z.style.transform = (P = A.transform) !== null && P !== void 0 ? P : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        Z4(() => {
                            const y = s5({
                                sheet: l.sheet,
                                wha: !1,
                                xha: !0,
                                Y: c,
                                viewport: d
                            });
                            return b5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = q.current;
                                if (A && z) {
                                    var C;
                                    z.style.position =
                                        (C = A.position) !== null && C !== void 0 ? C : "sticky";
                                    var G;
                                    z.style.top = (G = A.top) !== null && G !== void 0 ? G : "0px";
                                    var J;
                                    z.style.transform = (J = A.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        Z4(() => {
                            const y = s5({
                                sheet: l.sheet,
                                wha: !0,
                                xha: !1,
                                Y: c,
                                viewport: d
                            });
                            return b5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = p.current;
                                if (A && z) {
                                    var C = l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var J, H;
                                    C ? z.style.right = (J = A.right) !== null && J !== void 0 ? J : "0px" : z.style.left =
                                        (H = A.left) !== null && H !== void 0 ? H : "0px";
                                    var K;
                                    z.style.transform = (K = A.transform) !== null && K !== void 0 ? K : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = V4((y, A, z) => s5({
                                sheet: y,
                                wha: A,
                                xha: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = T4(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            u = T4(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var w;
                        const x = (w = c === null || c === void 0 ? void 0 : c.get()) !== null && w !== void 0 ? w : 1;
                        return Q4("div", {
                            className: R4("OsKKIQ", "cbOp6Q"),
                            children: [O4("div", {
                                className: "VDFv_A",
                                children: O4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    G8: "hidden",
                                    Vo: e,
                                    Jt: f,
                                    Ot: g,
                                    f0: r,
                                    Y: c,
                                    viewport: d,
                                    Fh: k,
                                    BG: a
                                })
                            }), O4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: O4(X6b, {
                                    xd: m,
                                    iOa: !1,
                                    Wo: r5,
                                    scale: x
                                })
                            }), O4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: O4(W4, {
                                    sheet: l.sheet,
                                    md: x,
                                    Bd: x,
                                    Wo: r5,
                                    lE: e8b,
                                    YE: d8b,
                                    Qqa: t
                                })
                            }), O4("div", {
                                ref: p,
                                className: "zm537g",
                                children: O4(X4, {
                                    sheet: l.sheet,
                                    md: x,
                                    Bd: x,
                                    Wo: r5,
                                    lE: e8b,
                                    YE: d8b,
                                    Qqa: u
                                })
                            })]
                        })
                    }),
                    s5 = ({
                        sheet: a,
                        wha: b,
                        xha: c,
                        Y: d,
                        viewport: e
                    }) => a5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Mt(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new gt(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var o7b = class {
                    constructor(a) {
                        this.jC = a;
                        this.c9a = __c.ST;
                        this.sfb = m5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.mfb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !HG(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !HG(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !HG(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !HG(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.c9a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ra(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ra(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ra(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || HG(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || HG(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ra(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = HG(b, c, l)) m = h, n = k, p = b.ra(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.mfb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Aa.ref) && g.span.$b === g.span.Yc && g.span.Wb === g.span.Ic) {
                                var h = this.jC.Gv(b, c, d);
                                b = this.jC.Jqa(b, c, d, __c.Lh({
                                    Qg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Qg: k,
                                    textAlign: l
                                } = __c.ah(__c.Kh, b);
                                if (k === "overflow") return __c.SMa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Aa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.vk.type : void 0)
                            }
                        }
                    }
                };
                var g8b = U4(function(a) {
                    const b = a.sheet;
                    var c = a.eh;
                    const d = a.Nwb,
                        e = a.Y,
                        f = a.psa,
                        g = a.afb;
                    a = a.overflow;
                    const h = N4();
                    t7b(() => $4(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = V4(p => f.sfb(b, p, d, g), [f, b, d, g]);
                    var l = V4((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = L6b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return O4("svg", {
                        ref: h,
                        role: "presentation",
                        className: R4("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            nk: t,
                            pk: u
                        }) => O4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: w,
                                p2: x
                            }) => `M ${w.x} ${w.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var h8b;
                h8b = Symbol.iterator;
                var i8b = class {
                    get size() {
                        return this.fha
                    }
                    get([a, b]) {
                        return (a = this.KE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.KE.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.KE.get(a);
                        d == null && (d = new Map, this.KE.set(a, d));
                        d.set(b, c);
                        this.fha++;
                        return this
                    }
                    clear() {
                        this.KE.clear();
                        this.fha = 0
                    }
                    delete([a, b]) {
                        const c = this.KE.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.fha--;
                        c.size === 0 && this.KE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.KE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[h8b]() {
                        for (const [a, b] of this.KE)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.fha = 0;
                        this.KE = new Map
                    }
                };
                var j8b, k8b, l8b, m8b, n8b, o8b, p8b, m7b = __c.Nv("285688d5", !1),
                    q8b, r8b = class extends f5 {
                        render() {
                            const {
                                Taa: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return Q4("div", {
                                ref: this.SZa,
                                className: R4("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.vHa) && O4(t5, { ...b,
                                    sheet: c,
                                    range: a.vHa.range,
                                    Ev: !0,
                                    Fv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.d3a) && O4(t5, { ...b,
                                    sheet: c,
                                    range: a.d3a.range,
                                    Ev: !1,
                                    Fv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.lOa) && O4(t5, { ...b,
                                    sheet: c,
                                    range: a.lOa.range,
                                    Ev: !0,
                                    Fv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.P1a) && O4(t5, { ...b,
                                    sheet: c,
                                    range: a.P1a.range,
                                    Ev: !1,
                                    Fv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = $4(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.SZa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.Dc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.SZa = sw()
                        }
                    };
                ({
                    c: [q8b, l8b]
                } = o5(r8b, [], [Sc], f5));
                l8b();
                var t5;
                new(j8b = class extends n5 {
                    constructor() {
                        super(t5);
                        m8b()
                    }
                }, (() => {
                    class a extends(n8b = f5) {
                        static A(b) {
                            O(b, {
                                Sya: a5,
                                bounds: a5
                            })
                        }
                        get Sya() {
                            const b = this.props.viewport,
                                c = this.props.Ev,
                                d = this.props.Fv;
                            return b == null || !c && !d ? b : a5(() => {
                                const e = __c.Mt(b.get());
                                return Et({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.lN,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.BG,
                                g = this.props.Ev,
                                h = this.props.Fv;
                            return Q4("div", {
                                ref: this.ewa,
                                className: R4("i0YQww",
                                    this.props.className),
                                children: [O4("div", {
                                    ref: this.rVa,
                                    className: "vUKoKg",
                                    children: O4("div", {
                                        ref: this.sVa,
                                        children: O4(u5, {
                                            lN: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            Vo: this.props.Vo,
                                            KC: this.props.KC,
                                            Fh: this.props.Fh,
                                            lZ: this.props.lZ,
                                            Y: this.props.Y,
                                            eh: this.eh,
                                            T6: this.T6,
                                            $R: this.$R
                                        })
                                    })
                                }), O4(this.gka, {}), f && O4(f, {
                                    sheet: c,
                                    range: e,
                                    Ev: g,
                                    Fv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = $4(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.ewa.current;
                                    const p = this.rVa.current;
                                    h = this.sVa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ra(m.Ic) + m.Ic.width - l.ra(m.Wb) : l.width,
                                        r = m ? l.pa(m.Yc) + m.Yc.height - l.pa(m.$b) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ra(m.Wb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.pa(m.$b) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.f0;
                            const e = this.props.Ev,
                                f = this.props.Fv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = $4(() => {
                                const h = this.ewa.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var u;
                                        h.style.right = p ? (u = x.right) !== null && u !== void 0 ? u : n : "unset";
                                        var w;
                                        h.style.transform = (w = x.transform) !== null &&
                                            w !== void 0 ? w : "unset"
                                    }
                                }
                            });
                            __c.Dc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Wb: void 0,
                                Ic: void 0,
                                $b: void 0,
                                Yc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Wb: (d = c === null || c === void 0 ? void 0 : c.Wb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Ic: (e = c === null || c === void 0 ? void 0 : c.Ic) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                $b: (f = c === null || c === void 0 ? void 0 : c.$b) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                Yc: (g = c === null || c === void 0 ? void 0 : c.Yc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.ewa = (t5.A(this), sw());
                            this.rVa = sw();
                            this.sVa = sw();
                            this.$R = new s8b;
                            this.Owb = a5(() => [...this.eh.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Ke(c, d)), {
                                equals: __c.Hq()
                            });
                            this.Mwb = a5(() => [...this.T6.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Ke(c, d)), {
                                equals: __c.Hq()
                            });
                            this.gka = U4(() => O4(this.props.X5a, {
                                eh: this.Owb,
                                Nwb: this.Mwb,
                                afb: this.$R.jfb,
                                range: this.props.range
                            }));
                            this.eh = a5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Sya) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.y - g : c.$b ? d.pa(c.$b) : 0;
                                f = f ? f.br.y + g : c.Yc ? d.pa(c.Yc) + c.Yc.height : 0;
                                g = new Map;
                                for (let k = c.$b; k != null && c.Yc != null && d.layout.rows.Ke(k, c.Yc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.pa(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: j5.shallow
                            });
                            this.T6 = a5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Sya) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.x - g : c.Wb ? d.ra(c.Wb) : 0;
                                f = f ? f.br.x + g : c.Ic ? d.ra(c.Ic) + c.Ic.width : 0;
                                g = new Map;
                                for (let k = c.Wb; k != null && c.Ic != null && d.layout.cols.Ke(k, c.Ic) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ra(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: j5.shallow
                            })
                        }
                    }({
                        c: [t5, m8b]
                    } = o5(a, [], [Sc], n8b))
                })(), j8b);
                var s8b = class {
                        constructor() {
                            this.cells = new i8b;
                            this.nxa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = k5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.jfb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = k5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.sJa
                            }
                        }
                    },
                    u5;
                new(k8b = class extends n5 {
                    constructor() {
                        super(u5);
                        o8b()
                    }
                }, (() => {
                    class a extends(p8b = f5) {
                        static A(b) {
                            O(b, {
                                HK: k5.shallow,
                                sq: a5,
                                $Ga: i5,
                                Y9: i5.bound
                            })
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.kD(c)
                        }
                        render() {
                            var b;
                            return Q4("div", {
                                ref: y7b(this.Gd, (b = this.sq) === null || b === void 0 ? void 0 : b.dm),
                                children: [O4("div", {
                                    ref: this.Vma,
                                    className: "_5YlOqQ"
                                }), O4("div", {
                                    ref: this.Xma,
                                    className: "_XCmKw"
                                }), this.HK.map(c => c.Gpb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                b5(() => [this.props.sheet, this.props.T6.get(), this.props.eh.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.s9a();
                                    this.$Ga(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = $4(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Gd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.HK.map(e => n7b(e));
                            __c.Dc(this, [c, b, ...d])
                        }
                        s9a() {
                            const b = D(this.Vma.current),
                                c = D(this.Xma.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.rDa.length = 0;
                            this.HK.length = 0
                        }
                        $Ga(b, c) {
                            const d = D(this.Vma.current),
                                e = D(this.Xma.current),
                                f = [],
                                g = new Map;
                            for (const h of this.rDa) c.has(h.na) ? g.set(h.na, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new t8b(this.Y9, h), d.appendChild(c.d9), e.appendChild(c.f9), this.rDa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        Y9(b, c) {
                            const d = this.props.lZ,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.$R;
                            b = new u8b(this.props.lN, this.props.KC, this.props.Fh, d(b, c), e, b, c, f, g.nxa, this.jba, this.iba);
                            __c.Dc(this, n7b(b));
                            this.HK.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Gd = (u5.A(this), sw());
                            this.Vma = sw();
                            this.Xma = sw();
                            this.rDa = [];
                            this.HK = [];
                            this.jba = m5(c => {
                                const d = this.props.eh.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.iba = m5(c => {
                                const d = this.props.T6.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [u5, o8b]
                    } = o5(a, [], [Sc], p8b))
                })(), k8b);
                var t8b = class {
                        static A(a) {
                            O(a, {
                                update: i5
                            })
                        }
                        update(a, b, c) {
                            [this.d9, this.f9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.na = b;
                            for (const [d] of c) c = this.HK.get(d), c || (c = this.Y9(d, b), this.HK.set(d, c), this.d9.appendChild(c.c9), this.f9.appendChild(c.sL)), c.update(b)
                        }
                        hide() {
                            [this.d9, this.f9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.Y9 = a;
                            this.na = b;
                            this.d9 = (t8b.A(this), document.createElement("div"));
                            this.f9 = document.createElement("div");
                            this.HK = new Map
                        }
                    },
                    u8b = class {
                        static A(a) {
                            O(a, {
                                N9: k5.ref,
                                na: k5.ref,
                                tra: a5,
                                update: i5,
                                gt: a5,
                                attrs: a5.struct,
                                Usa: a5,
                                ov: a5,
                                renderer: a5,
                                sJa: a5.struct
                            })
                        }
                        get tra() {
                            if (!m7b) return !1;
                            const a = this.gt;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.lN(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.na && (this.na = a, this.sz.na = a, this.Roa && this.Roa(), this.Roa = this.nxa(this.na, this.col, this))
                        }
                        get Gpb() {
                            return this.N9
                        }
                        get gt() {
                            const a = this.sheet.layout.cells.get(this.na, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.sz.attrs;
                            return {
                                Qg: a === null || a === void 0 ? void 0 : a.Qg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Usa() {
                            var a = this.sz.span;
                            if (!a) return !1;
                            if (a.$b === a.Yc && a.Wb === a.Ic) return !0;
                            var b = this.jba("first");
                            const c = this.jba("last"),
                                d = this.iba("first"),
                                e = this.iba("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Ke(a.$b, b) >= 0 && this.sheet.layout.rows.Ke(a.$b, c) <=
                                0 ? a.$b : b;
                            a = this.sheet.layout.cols.Ke(a.Wb, d) >= 0 && this.sheet.layout.cols.Ke(a.Wb, e) <= 0 ? a.Wb : d;
                            return b === this.na && a === this.col
                        }
                        get ov() {
                            const a = this.sheet,
                                b = this.na,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                na: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.Tob.Id(c, b);
                                case "sheet-item":
                                    return this.container.Rya.Id(c, b);
                                case "sheet-element":
                                    return this.container.$sb.Id(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.gt;
                            if (a && this.Usa &&
                                (a.content.ref || a.Aa.ref)) return this.KC({
                                context: {
                                    container: this.ov,
                                    attrs: this.attrs
                                },
                                mp: this.Uua,
                                Fh: this.Fh
                            })
                        }
                        get sJa() {
                            this.tJa.reportObserved();
                            var a = v7b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.P3 : this.BD, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, u;
                            this.lN = a;
                            this.KC = b;
                            this.sz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.nxa = k;
                            this.jba = l;
                            this.iba = m;
                            this.c9 =
                                (u8b.A(this), document.createElement("div"));
                            this.sL = document.createElement("div");
                            this.uD = document.createElement("div");
                            this.BD = document.createElement("div");
                            this.P3 = document.createElement("div");
                            this.tJa = u7b("content size atom");
                            this.Uua = i5(() => this.tJa.reportChanged());
                            this.na = g;
                            this.c9.className = "_2JFriw";
                            this.sL.className = "imy9ug";
                            this.uD.className = R4("pDMp7w", {
                                _0yZ6Qg: ((p = this.gt) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.gt) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((u = this.gt) === null || u === void 0 ? void 0 : (t = u.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.tra
                            });
                            this.BD.className = "_30B9pw";
                            this.uD.appendChild(this.BD);
                            this.sL.appendChild(this.uD);
                            this.P3.className = "G7zH2w";
                            this.Roa = k(this.na, this.col, this);
                            this.Fh = w => O4(c, { ...w,
                                mp: this.Uua
                            })
                        }
                    };
                var v8b, w8b, x8b, c5;
                new(v8b = class extends n5 {
                    constructor() {
                        super(c5);
                        w8b()
                    }
                }, (() => {
                    class a extends(x8b = f5) {
                        static A(b) {
                            O(b, {
                                Taa: a5
                            })
                        }
                        render() {
                            const {
                                lN: b,
                                sheet: c,
                                container: d,
                                Vo: e,
                                f0: f,
                                KC: g,
                                qe: h,
                                Fh: k,
                                viewport: l,
                                BG: m,
                                U2a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return O4("div", {
                                className: R4("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: O4(q8b, {
                                    lN: b,
                                    KC: g,
                                    Fh: k,
                                    X5a: this.gka,
                                    lZ: this.lZ,
                                    sheet: c,
                                    container: d,
                                    Vo: e,
                                    f0: f,
                                    Y: this.Y,
                                    viewport: l,
                                    BG: m,
                                    Taa: this.Taa
                                })
                            })
                        }
                        get Taa() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.wV ? b.layout.de.get(b.view.freeze.wV) : void 0,
                                e = b.view.freeze.dH ? b.layout.Pd.get(b.view.freeze.dH) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.vHa = {
                                    range: {
                                        Wb: h,
                                        $b: f,
                                        Ic: e,
                                        Yc: d
                                    }
                                });
                                d && l && (c.d3a = {
                                    range: {
                                        Wb: l,
                                        $b: f,
                                        Ic: k,
                                        Yc: d
                                    }
                                });
                                e && b && (c.lOa = {
                                    range: {
                                        Wb: h,
                                        $b: b,
                                        Ic: e,
                                        Yc: g
                                    }
                                });
                                b && l && (c.P1a = {
                                    range: {
                                        Wb: l,
                                        $b: b,
                                        Ic: k,
                                        Yc: g
                                    }
                                });
                                return c
                            }
                        }
                        get Y() {
                            return this.props.Y ?
                                this.props.Y : a5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.gka = (c5.A(this), U4(c => {
                                const {
                                    sheet: d,
                                    psa: e,
                                    Y: f,
                                    G8: g = "hidden"
                                } = this.props;
                                return O4(q5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: O4(g8b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        psa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.lZ = (c, d) => new __c.kNa(this.props.jC, this.props.kz, this.props.sheet, c, d, this.Y, this.Jt, this.Ot);
                            this.Jt = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Jt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.Ot = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Ot) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [c5, w8b]
                    } = o5(a, [], [Sc], x8b))
                })(), v8b);
                __c.rNa = {
                    Rhb: function(a) {
                        const b = a.Fn,
                            c = a.Hd,
                            d = a.kd,
                            e = a.Zl,
                            f = a.jC,
                            g = a.kz,
                            h = a.mX;
                        U6b({
                            jz: a.jz,
                            kf: a.kf,
                            Fub: a.SO,
                            Qa: a.Qa
                        });
                        const k = p7b({
                            KC: h,
                            jC: f,
                            kz: g,
                            Yx: void 0
                        });
                        b.Dka = j7b({
                            Qp: k
                        });
                        c.hka = $6b({
                            Qp: k
                        });
                        ({
                            ika: a
                        } = g7b({
                            Qp: k,
                            pe: e(),
                            QZa: new $7b
                        }));
                        d.Xp.Cka = a;
                        const {
                            b4a: l,
                            c4a: m,
                            a4a: n
                        } = Z6b();
                        return {
                            iFa: U4(p => O4(A7b, { ...p,
                                container: void 0,
                                Qp: k,
                                $5a: l,
                                a6a: m,
                                Y5a: n,
                                Fh: B7b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/db45773e60c6b891.js.map