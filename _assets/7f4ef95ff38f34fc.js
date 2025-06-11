(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [70911], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var sg = __c.sg;
                var E = __c.E;
                var v = __c.v;
                var bac = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].TY.forEach((e, f) => c.set(f, e));
                        return {
                            TY: c,
                            apply: d => {
                                const e = new Map,
                                    f = {};
                                for (const g in d) {
                                    const h = a[g].apply(d[g]);
                                    h.Sxa.forEach((k, l) => e.set(l, k));
                                    f[g] = h.data
                                }
                                return {
                                    Sxa: e,
                                    data: f
                                }
                            }
                        }
                    },
                    cac = function(a) {
                        return () => a
                    },
                    dac = function(a) {
                        return a()
                    },
                    Z5 = function(a, b, c) {
                        return new Y5([a], b, c)
                    },
                    $5 = function(a, b, c, d) {
                        return new Y5([a, b], c, d)
                    },
                    a6 = function(a, b, c, d) {
                        return new eac(a, b, c, d)
                    },
                    fac = function(a, b) {
                        return b(a)
                    },
                    b6 = function(a,
                        b) {
                        return a === b || b.map(c => a.ssa(gac(c)))
                    },
                    iac = function(a, b) {
                        return a.nua(b).map(c => new hac(c, d => d.props[b]))
                    },
                    gac = function(a) {
                        v(a instanceof c6);
                        return a
                    },
                    d6 = function(a) {
                        const b = new WeakMap;
                        return function(c) {
                            let d = b.get(c);
                            d == null && (d = a.call(this, c), b.set(c, d));
                            return d
                        }
                    },
                    f6 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind ===
                                            "array" && e6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : e6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : e6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && jac(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    e6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!f6(a[c], b[c])) return !1;
                        return !0
                    },
                    jac = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!f6(a[f], b[f])) return !1;
                        return !0
                    },
                    g6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    lac = function(a, b) {
                        return a.map(c => b.map(d => kac[0](c, d)))
                    },
                    nac = function(a, b, c) {
                        return b.map(d => mac[a](d, c))
                    },
                    oac = function(a, b) {
                        return new h6(new i6(new Map(b),
                            a.vars), a.Q_)
                    },
                    qac = function(a, b, c) {
                        for (const [e, f] of c.Q_) {
                            var d = f.nb.map(([g, h]) => [g, a.types.evaluate(h)]);
                            d = pac(b, d, g => j6(a, g, f.body));
                            b = new h6(b.vars, b.Q_.define(e, d))
                        }
                        return j6(a, b, c.body)
                    },
                    j6 = function(a, b, c) {
                        switch (c.kind) {
                            case 1:
                                return rac(c.value);
                            case 2:
                                const f = c.args.map(q => j6(a, b, q));
                                c = c.name;
                                return typeof c === "string" ? b.Q_.resolve(c).map(q => sac(q, f)) : tac[c].map(q => k6(q, f));
                            case 3:
                                const g = c.args.map(q => q.kind !== 13 ? new uac(j6(a, b, q)) : new vac(j6(a, b, q.vIb)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d =
                                            g.map(q => q.gqa(r => r.type, r => r.type.tN()));
                                        return l6.union(...d).map(wac[c]).map(q => xac(q, g));
                                    default:
                                        return yac[c].map(q => xac(q, g))
                                }
                            case 4:
                                d = c.name;
                                var e = c.param;
                                const h = c.body,
                                    k = j6(a, b, c.QR);
                                c = k.type.tN();
                                const l = pac(b, [
                                    [e, c]
                                ], q => j6(a, q, h));
                                return nac(d, c, l.resultType).map(q => zac(q, k, l));
                            case 5:
                                const m = c.entries.map(([q, r]) => [j6(a, b, q), j6(a, b, r)]);
                                c = l6.union(...m.map(([q]) => q.type));
                                d = l6.union(...m.map(([, q]) => q.type));
                                if (!b6(c, l6.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return lac(c,
                                    d).map(q => Aac(q, m));
                            case 6:
                                const n = sg(c.fields, q => j6(a, b, q));
                                c = sg(n, q => q.type);
                                return (0, Bac[0])(c).map(q => Cac(q, n));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = j6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.gmb.map(q => k6(q, [p], {
                                    Fq: !0
                                }));
                            case 8:
                                return d = j6(a, b, c.base), Dac(d, c.FMb);
                            case 9:
                                return Eac(b, c.name);
                            case 10:
                                return d = __c.ud(c.defs, q => j6(a, b, q)), Fac(a, b, d, c.body);
                            case 11:
                                return d = j6(a, b, c.test).as(l6.Ih), e = j6(a, b, c.$Bb), c = j6(a, b, c.alternate),
                                    Gac(d, e, c);
                            case 12:
                                return j6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    rac = function(a) {
                        switch (typeof a) {
                            case "string":
                                return m6(l6.string, a);
                            case "number":
                                return m6(l6.number, a);
                            case "boolean":
                                return m6(l6.Ih, a);
                            case "undefined":
                                return m6(l6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    Dac = function(a, b) {
                        return a.map(c => iac(c, b).map(({
                            type: d,
                            get: e
                        }) => k6(new Y5([c], d, e), [a])))
                    },
                    Eac = function(a, b) {
                        return a.vars.resolve(b).map(c => n6.of(c, d => d.resolve(b)))
                    },
                    Fac = function(a, b, c, d) {
                        const e = __c.ud(c, g => g.type),
                            f = __c.ud(c, g => g.evaluate);
                        return Hac(j6(a, oac(b, e), d), g => {
                            const h = __c.ud(f, k => k(g));
                            return new i6(new Map(h), g)
                        })
                    },
                    Gac = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = l6.union(d, f);
                            return n6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    o6 = function(a) {
                        return b => b(a)
                    },
                    sac = function({
                        cfa: a,
                        resultType: b,
                        evaluate: c
                    }, d) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const e = Iac(a, (f, g) => d[g].as(f));
                        return n6.of(b, f => {
                            const g = e.map(o6(f));
                            return c(f)(...g)
                        })
                    },
                    k6 = function({
                        cfa: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const f = Iac(a, (g, h) => d[h].as(g));
                        return n6.of(b, g => {
                            g = f.map(o6(g));
                            return Jac((e === null || e === void 0 ? 0 : e.Fq) ? Kac(c) : c, g)
                        })
                    },
                    xac = function({
                        lpb: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.ima(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = l6.QR(a))));
                        return new n6(b, g => {
                            const h = o6(g),
                                k = f.map(l => l.ima(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.gqa(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    zac = function({
                        itemType: a,
                        Q7a: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as([a], b),
                            h = e.as(l6.QR(a));
                        return new n6(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = Kac(p => {
                                    p = p.map(cac);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    Aac = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new n6(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    Cac = function({
                        w7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = Lac(a, (g, h) => d[h].as(g));
                        return new n6(b, g => {
                            const h = sg(f, o6(g));
                            return () => {
                                var k = sg(h, dac);
                                return c(k)
                            }
                        })
                    },
                    m6 = function(a, b) {
                        const c = cac(b);
                        return new n6(a, () => c)
                    },
                    Hac = function(a, b) {
                        const c = a.evaluate;
                        return new n6(a.type, d => c(b(d)))
                    },
                    pac = function(a, b, c) {
                        const d = b.map(f => f[0]),
                            e = b.map(f => f[1]);
                        return fac(e, f => c(oac(a, new Map(b))).map((g, h) => new Mac(f,
                            g, k => (...l) => {
                                const m = new Map(d.map((n, p) => [n, l[p]]));
                                return h(new i6(new Map(m), k))
                            })))
                    },
                    Jac = function(a, b) {
                        switch (b.length) {
                            case 0:
                                return a;
                            case 1:
                                const [c] = b;
                                return () => a(c());
                            case 2:
                                const [d, e] = b;
                                return () => a(d(), e());
                            default:
                                return () => {
                                    var f = b.map(dac);
                                    return a(...f)
                                }
                        }
                    },
                    Kac = function(a) {
                        let b;
                        return (...c) => {
                            if (b && b.K2a.length === c.length && b.K2a.every((e, f) => p6.gh(e, c[f]))) return b.v;
                            const d = a(...c);
                            b = {
                                K2a: c,
                                v: d
                            };
                            return d
                        }
                    },
                    Lac = function(a, b) {
                        return sg(a, b)
                    },
                    Iac = function(a, b) {
                        return a.map(b)
                    },
                    q6 = function(a,
                        b, c, d) {
                        if (c !== d) throw a.error(b, `type error: expected ${c}, was ${d}`);
                    },
                    Tac = function(a) {
                        function b(p) {
                            return m[p.kind](p)
                        }
                        const c = a.types,
                            d = a.values;
                        class e {
                            static of (p, q, r, t, u, w) {
                                return new e(p, r, t, Nac(q, u), Oac(q, w))
                            }
                            map(p) {
                                return p(this)
                            }
                            validate(p) {
                                return p ? new e(this.dataType, this.tia, this.qAa, r6(this.decode, p), Pac(this.encode, p)) : this
                            }
                            kAa(p, q) {
                                switch (q) {
                                    case 0:
                                        return [p, this.tia];
                                    case 1:
                                        return [p, c.optional(this.tia)];
                                    default:
                                        throw new E(q);
                                }
                            }
                            pAa(p, q, r, t, u) {
                                t = t === 1;
                                const w = this.qAa,
                                    x = this.decode,
                                    y = this.encode;
                                switch (u) {
                                    case 0:
                                        const A = () => {
                                            var C = q.get(r);
                                            if (C == null) throw p.error(r, "not found");
                                            return x(C, p, r)
                                        };
                                        return {
                                            scope: [r, () => w(A())],
                                            get: A,
                                            set: t ? C => q.set(r, y(C, p, r)) : void 0
                                        };
                                    case 1:
                                        const z = () => {
                                            const C = q.get(r);
                                            return C != null ? x(C, p, r) : void 0
                                        };
                                        return {
                                            scope: [r, () => {
                                                const C = z();
                                                return C != null ? w(C) : void 0
                                            }],
                                            get: z,
                                            set: t ? C => C != null ? q.set(r, y(C, p, r)) : q.delete(r) : void 0
                                        };
                                    default:
                                        throw new E(u);
                                }
                            }
                            constructor(p, q, r, t, u) {
                                this.dataType = p;
                                this.tia = q;
                                this.qAa = r;
                                this.decode = t;
                                this.encode = u
                            }
                        }
                        const f = e.of({
                                    kind: 0
                                },
                                "string", c.string, p => p, p => p.value, p => ({
                                    type: "string",
                                    value: p
                                })),
                            g = e.of({
                                kind: 1
                            }, "boolean", c.Ih, p => p, p => p.value, p => ({
                                type: "boolean",
                                value: p
                            })),
                            h = e.of({
                                kind: 2
                            }, "double", c.number, p => p, p => p.value, p => ({
                                type: "double",
                                value: p
                            })).validate(p => Number.isFinite(p)),
                            k = e.of({
                                kind: 3
                            }, "int32", c.number, p => p, p => p.value, p => ({
                                type: "int32",
                                value: p
                            })).validate(p => Number.isFinite(p)),
                            l = {
                                Fill: e.of({
                                    kind: 5,
                                    name: "Fill"
                                }, "fill", c.instance("Fill"), p => d.instance("Fill", p), p => p.value, p => ({
                                    type: "fill",
                                    value: p
                                }))
                            },
                            m = {
                                [0]: p => f.validate(Qac(p.GJ)),
                                [1]: () => g,
                                [2]: p => h.validate(Rac(p.range)),
                                [3]: p => k.validate(Rac(p.range)),
                                [4]: p => b(p.itemType).map(q => {
                                    const r = q.qAa,
                                        t = q.decode,
                                        u = q.encode;
                                    return e.of({
                                        kind: 4,
                                        itemType: q.dataType
                                    }, "list", c.array(q.tia), w => d.array(w.map(r)), (w, x, y) => w.value.map((A, z) => t(A, x, `${y}[${z}]`)), (w, x, y) => ({
                                        type: "list",
                                        value: w.map((A, z) => u(A, x, `${y}[${z}]`))
                                    }))
                                }),
                                [5]: p => l[p.name]
                            };
                        class n {
                            kAa() {
                                return this.I1a.kAa(this.ob.key, this.ob.cWa)
                            }
                            pAa(p, q) {
                                return this.I1a.pAa(p, q, this.ob.key, this.ob.KZa, this.ob.cWa)
                            }
                            constructor(p) {
                                this.ob =
                                    p;
                                this.I1a = b(this.ob.type)
                            }
                        }
                        return (p, q) => {
                            const r = new Sac(p),
                                t = sg(q, u => new n(u));
                            return {
                                TY: new Map(Object.values(t).map(u => u.kAa())),
                                apply: u => {
                                    const w = sg(t, x => x.pAa(r, u));
                                    return {
                                        Sxa: new Map(Object.values(w).map(x => x.scope)),
                                        data: Object.create(null, w)
                                    }
                                }
                            }
                        }
                    },
                    Pac = function(a, b) {
                        return (c, d, e) => {
                            b(c, d, e);
                            return a(c, d, e)
                        }
                    },
                    r6 = function(a, b) {
                        return (c, d, e) => {
                            c = a(c, d, e);
                            b(c, d, e);
                            return c
                        }
                    },
                    Nac = function(a, b) {
                        return Pac(b, (c, d, e) => {
                            q6(d, e, a, c.type)
                        })
                    },
                    Oac = function(a, b) {
                        switch (a) {
                            case "string":
                                return r6(b, (c, d,
                                    e) => q6(d, e, "string", typeof c.value));
                            case "boolean":
                                return r6(b, (c, d, e) => q6(d, e, "boolean", typeof c.value));
                            case "double":
                            case "int32":
                                return r6(b, (c, d, e) => q6(d, e, "number", typeof c.value));
                            case "list":
                            case "dict":
                            case "text2":
                            case "fill":
                            case "stroke":
                                return b;
                            default:
                                throw new E(a);
                        }
                    },
                    Rac = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            v(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && d < b) throw e.error(f, `value below min ${b}: ${d}`);
                                if (c != null && d > c) throw e.error(f, `value above max ${b}: ${d}`);
                            }
                        }
                    },
                    Qac =
                    function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(b)) throw c.error(d, `value does not match regex ${a}: '${b}'`);
                        }
                    },
                    Vac = function() {
                        return (new Uac({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.IO.create({ ...__c.Fu,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                X: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.Du.create({ ...__c.Eu,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.Eu.rotation,
                                    fill: __c.Fu,
                                    X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.Eu.X
                                });
                                Object.defineProperties(g, {
                                    fill: {
                                        value: c.fill.instance
                                    }
                                });
                                return g
                            })
                        }))
                    },
                    s6 = function() {
                        throw Error("ref not found");
                    },
                    Xac = function(a, b) {
                        return class extends Wac {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? t6(__c.vx, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: t6(__c.sx, {
                                        size: "xsmall",
                                        alignment: "center",
                                        children: __c.N("Q6XSow")
                                    })
                                }) : t6(b, { ...this.props
                                })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    bbc = function(a, b, c) {
                        const d = f => ({
                            element: f.ha.fj
                        });
                        b = bac(b);
                        switch (c.type) {
                            case 0:
                                c = c.GD;
                                if (typeof c === "object") {
                                    var e = a.E1a.types;
                                    e = e.QR(e.instance("RectElement"));
                                    return Yac(a, d, b, e, c, f => new Zac(() => f().map(g => g.instance)))
                                }
                                return $ac(a,
                                    d, b, c);
                            case 1:
                                return abc(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    Yac = function(a, b, c, d, e, f) {
                        const g = a.Una(a.E1a, c, d).compile(e);
                        return {
                            type: 0,
                            GD: h => ({
                                Pa: f(g.apply(b(h)))
                            })
                        }
                    },
                    $ac = function(a, b, c, d) {
                        return {
                            type: 0,
                            GD: e => d(c.apply(b(e)).data, a.xh, a.zt)
                        }
                    },
                    abc = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: Xac(a.xh.F, cbc(({
                                model: e
                            }) => {
                                const [f] = dbc(() => c.apply(b(e)).data);
                                return t6(d, {
                                    data: f,
                                    Mz: a.Mz,
                                    xh: a.xh,
                                    Zk: a.zt
                                })
                            }))
                        }
                    },
                    fbc = function(a) {
                        return {
                            TY: a.TY,
                            apply: ebc(a.apply)
                        }
                    },
                    ebc = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    gbc = __webpack_require__(519427),
                    u6 = gbc.computed,
                    hbc = gbc.observable;
                var t6 = __webpack_require__(443763).jsx;
                var v6 = __webpack_require__(875604),
                    cbc = v6.memo,
                    Wac = v6.PureComponent,
                    dbc = v6.useState;
                var Y5 = class {
                        static of (a, b, c) {
                            return new Y5(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.cfa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    jbc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = ibc;
                            this.w7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    w6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.lpb = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    lbc = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = kbc;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    eac = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.Q7a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var hac = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var mbc = class {},
                    uac = class extends mbc {
                        ima(a) {
                            return new uac(a(this.value))
                        }
                        gqa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    vac = class extends mbc {
                        ima(a, b) {
                            return new vac(b(this.value))
                        }
                        gqa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var c6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    x6 = class extends c6 {
                        ssa(a) {
                            return this === a || a.eza(b => this.j1(b))
                        }
                        tN() {
                            throw Error(`${this} is not iterable`);
                        }
                        nua(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.hda();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        hda() {
                            throw Error(`${this} is not navigable`);
                        }
                        oqa(a) {
                            a(this)
                        }
                        eza(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    y6 = class extends x6 {
                        j1(a) {
                            return a instanceof y6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    z6 = class extends x6 {
                        j1(a) {
                            return a instanceof z6 && this.ID === a.ID
                        }
                        toString() {
                            return this.ID.name
                        }
                        constructor(a) {
                            super();
                            this.ID = a
                        }
                    },
                    A6 = class extends x6 {
                        j1(a) {
                            return a instanceof A6 && this.ID === a.ID && b6(this.lx, a.lx)
                        }
                        toString() {
                            return `${this.ID}<${this.lx}>`
                        }
                        constructor(a, b) {
                            super();
                            this.ID = a;
                            this.lx = b
                        }
                    },
                    nbc = class extends A6 {
                        tN() {
                            return this.lx
                        }
                        hda() {
                            const a =
                                this.lx;
                            return {
                                size: l6.number,
                                empty: l6.Ih,
                                get first() {
                                    return l6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    obc = class extends A6 {
                        tN() {
                            return this.lx
                        }
                        hda() {
                            const a = this.lx;
                            return {
                                size: l6.number,
                                empty: l6.Ih,
                                get first() {
                                    return l6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    pbc = class extends x6 {
                        j1(a) {
                            return a instanceof pbc && b6(this.key, a.key) && b6(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    qbc = class extends x6 {
                        j1(a) {
                            return a instanceof
                            qbc ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && b6(this.fields[b], c)) : !1
                        }
                        hda() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    B6 = class extends c6 {
                        ssa(a) {
                            return this === a || this.Og.every(b => b.ssa(a))
                        }
                        tN() {
                            return l6.union(...this.Og.map(a => a.tN()))
                        }
                        nua(a) {
                            return l6.union(...this.Og.map(b => b.nua(a)))
                        }
                        oqa(a) {
                            this.Og.forEach(b => b.oqa(a))
                        }
                        eza(a) {
                            return this.Og.some(b =>
                                b.eza(a))
                        }
                        toString() {
                            return this.Og.length ? this.Og.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Og = a;
                            this.kind = "disjunction";
                            v(a.length !== 1)
                        }
                    },
                    C6 = new B6([]),
                    rbc = new y6("string"),
                    sbc = new y6("number"),
                    tbc = new y6("boolean"),
                    ubc = new y6("undefined"),
                    vbc = new B6([rbc, sbc, tbc]),
                    wbc = class {
                        get never() {
                            return C6
                        }
                        get string() {
                            return rbc
                        }
                        get number() {
                            return sbc
                        }
                        get Ih() {
                            return tbc
                        }
                        get undefined() {
                            return ubc
                        }
                        get primitive() {
                            return vbc
                        }
                        optional(a) {
                            return l6.union(a, l6.undefined)
                        }
                        array(a) {
                            return new nbc(a)
                        }
                        set(a) {
                            return new obc(a)
                        }
                        QR(a) {
                            return new B6([new nbc(a),
                                new obc(a)
                            ])
                        }
                        map(a, b) {
                            return new pbc(a, b)
                        }
                        Oc(a) {
                            return new qbc({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) gac(d).oqa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return b6(d, e) ? e : b6(e, d) ? d : new B6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => b6(d, e)) || (c.forEach(e => b6(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new B6([...c])
                        }
                        constructor() {
                            this.optional = d6(this.optional);
                            this.array = d6(this.array);
                            this.set = d6(this.set);
                            this.QR = d6(this.QR)
                        }
                    },
                    xbc = class extends wbc {
                        instance(a) {
                            return new z6(a)
                        }
                    },
                    l6 = new xbc,
                    ybc = class extends wbc {
                        instance(a) {
                            return new z6(__c.D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var zbc, Abc, D6 = Symbol("value"),
                    E6 = class {
                        get props() {
                            var a;
                            return (a = this.L6a) !== null && a !== void 0 ? a : this.L6a = this.Kla()
                        }
                    },
                    Bbc = class {
                        get size() {
                            return this[D6].length
                        }
                        get empty() {
                            return this[D6].length === 0
                        }
                        get first() {
                            return this[D6][0]
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                zbc = Symbol.iterator;
                var Cbc = class extends E6 {
                        Kla() {
                            return new Bbc(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[zbc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,g6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    Dbc = class {
                        get size() {
                            return this[D6].size
                        }
                        get empty() {
                            return this[D6].size === 0
                        }
                        get first() {
                            return this[D6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                Abc = Symbol.iterator;
                var Ebc = class extends E6 {
                        Kla() {
                            return new Dbc(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[Abc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,g6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    Fbc = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${g6(a)}]: ${g6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    Gbc = class extends E6 {
                        Kla() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${g6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    Hbc = class {
                        toString() {
                            return `[instance ${this.ID.name}]`
                        }
                        constructor(a, b) {
                            this.ID = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    Ibc = class {
                        array(a) {
                            return new Cbc(a)
                        }
                        arrayOf(...a) {
                            return new Cbc(a)
                        }
                        set(a) {
                            return new Ebc(a)
                        }
                        map(a) {
                            return new Fbc(new Map(a))
                        }
                        Oc(a) {
                            return new Gbc({ ...a
                            })
                        }
                    },
                    Jbc = class extends Ibc {
                        instance(a, b) {
                            return new Hbc(a, b)
                        }
                        stringify(a) {
                            return g6(a)
                        }
                        constructor() {
                            super();
                            this.gh = f6
                        }
                    },
                    p6 = new Jbc,
                    Kbc = class extends Ibc {
                        instance(a, b) {
                            a = __c.D(this.classes[a]);
                            return new Hbc(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var tac = {
                        [0]: Z5(l6.number, l6.number, a => -a),
                        [1]: Z5(l6.string, l6.number, a => a.length),
                        [2]: Z5(l6.Ih, l6.Ih, a => !a),
                        [3]: $5(l6.number, l6.number, l6.number, (a, b) => a + b),
                        [4]: $5(l6.number, l6.number, l6.number, (a, b) => a - b),
                        [5]: $5(l6.number, l6.number, l6.number, (a, b) => a * b),
                        [6]: $5(l6.number, l6.number, l6.number, (a, b) => a / b),
                        [7]: $5(l6.number, l6.number, l6.number, (a, b) => a % b),
                        [8]: $5(l6.string, l6.string, l6.string, (a, b) => a + b),
                        [9]: $5(l6.number, l6.number, l6.Ih, (a, b) => a === b),
                        [10]: $5(l6.number, l6.number, l6.Ih, (a, b) => a !== b),
                        [11]: $5(l6.number,
                            l6.number, l6.Ih, (a, b) => a < b),
                        [12]: $5(l6.number, l6.number, l6.Ih, (a, b) => a <= b),
                        [13]: $5(l6.number, l6.number, l6.Ih, (a, b) => a > b),
                        [14]: $5(l6.number, l6.number, l6.Ih, (a, b) => a >= b),
                        [15]: $5(l6.Ih, l6.Ih, l6.Ih, (a, b) => a && b),
                        [16]: $5(l6.Ih, l6.Ih, l6.Ih, (a, b) => a || b)
                    },
                    yac = {
                        [2]: new w6(l6.number, l6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new w6(l6.number, l6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new w6(l6.number, l6.number, a => Math.max(...a)),
                        [5]: new w6(l6.number, l6.number, a => Math.min(...a)),
                        [6]: new w6(l6.string, l6.string, a =>
                            a.join(""))
                    },
                    Lbc = a => p6.array(a),
                    Mbc = a => p6.set(a),
                    wac = {
                        [0]: a => new w6(a, l6.array(a), Lbc),
                        [1]: a => new w6(a, l6.set(a), Mbc)
                    },
                    kbc = a => p6.map(a),
                    kac = {
                        [0]: (a, b) => new lbc(a, b, l6.map(a, b))
                    },
                    ibc = a => p6.Oc(a),
                    Bac = {
                        [0]: a => new jbc(a, l6.Oc(a))
                    },
                    Nbc = (a, b) => p6.array(b.map(c => c())),
                    Obc = (a, b) => p6.array(b.flatMap(c => c().items)),
                    Pbc = (a, b) => p6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    Qbc = (a, b) => b.some(c => c()),
                    Rbc = (a, b) => b.every(c => c()),
                    Sbc = (a, b) => {
                        var c;
                        return (c = a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    mac = {
                        [0]: (a, b) => b.map(c => a6(a, c, l6.array(c), Nbc)),
                        [1]: (a, b) => b.tN().map(c => a6(a, l6.array(c), l6.array(c), Obc)),
                        [2]: a => a6(a, l6.Ih, l6.array(a), Pbc),
                        [3]: a => a6(a, l6.Ih, l6.Ih, Qbc),
                        [4]: a => a6(a, l6.Ih, l6.Ih, Rbc),
                        [5]: a => a6(a, l6.Ih, l6.optional(a), Sbc)
                    };
                var i6 = class {
                    define(a, b) {
                        return new i6(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: "${a}"`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var Ubc = (a, b, c) => {
                        const d = h6.create(b.TY),
                            e = new Tbc(a);
                        return {
                            compile: f => {
                                const g = qac(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new i6(new Map(b.apply(h).Sxa));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    h6 = class {
                        static create(a) {
                            return new h6(new i6(new Map(a)), new i6(new Map))
                        }
                        constructor(a = new i6(new Map), b = new i6(new Map)) {
                            this.vars = a;
                            this.Q_ = b
                        }
                    },
                    Tbc = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    n6 = class {
                        static of (a, b) {
                            return new n6(a, b)
                        }
                        as(a) {
                            if (!b6(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new n6(this.type, b => {
                                const c = u6(a(b), {
                                    equals: p6.gh
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type, this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    Mac = class {
                        as(a, b) {
                            const c = this.cfa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!b6(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!b6(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.cfa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var Uac = class {
                        add(a) {
                            a = a(Vbc, this.types);
                            return new Uac({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        evaluate(a) {
                            const b = this.types;
                            switch (a.kind) {
                                case 0:
                                    switch (a.name) {
                                        case "string":
                                            return b.string;
                                        case "number":
                                            return b.number;
                                        case "boolean":
                                            return b.Ih;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new E(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.ZGa));
                                        case "set":
                                            return b.set(this.evaluate(a.ZGa));
                                        default:
                                            throw new E(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.ZGa);
                                            a = this.evaluate(a.AAb);
                                            if (!b6(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new E(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.Oc(sg(a.args, c => this.evaluate(c)));
                                default:
                                    throw new E(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new ybc(this.classes);
                            this.values = new Kbc(this.classes)
                        }
                    },
                    Vbc = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.gmb = new Y5([l6.Oc(b)],
                                l6.instance(this), d => p6.instance(this, c(d.fields)))
                        }
                    };
                var Sac = class {
                    error(a, b) {
                        return Error(`widget '${this.bxb}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.bxb = a
                    }
                };
                var Wbc = class {
                    get id() {
                        var a;
                        return (a = this.zt) === null || a === void 0 ? void 0 : a.id
                    }
                    get extension() {
                        var a;
                        return (a = this.zt) === null || a === void 0 ? void 0 : a.extension
                    }
                    get language() {
                        return this.document.language
                    }
                    constructor(a, b) {
                        this.zt = a;
                        this.document = b
                    }
                };
                var Xbc = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Fs() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        s6()
                    },
                    dc() {
                        s6()
                    },
                    Ke() {
                        s6()
                    },
                    aB() {
                        s6()
                    },
                    has() {
                        return !1
                    },
                    It() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var Ybc;
                Ybc = Symbol.iterator;
                var Zac = class {
                    static A(a) {
                        __c.O(a, {
                            De: u6,
                            hy: u6
                        })
                    }
                    get De() {
                        return this.B7a().map(a => {
                            let b = this.sOa.get(a);
                            b == null && (b = `${this.Tgb++}`, this.sOa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get hy() {
                        const a = new Map;
                        this.De.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Pl(a) {
                        return __c.D(this.hy.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.De.length
                    }
                    count() {
                        return this.De.length
                    }
                    toArray() {
                        return this.De.map(a => a.ref)
                    }
                    Fs() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get uaa() {
                        const a = this.De[0];
                        return a && a.ref
                    }
                    get Rca() {
                        const a =
                            this.De[this.De.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.uaa;
                        const b = this.De.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.Rca;
                        const b = this.De;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.De;
                        for (a = this.Pl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    dc(a, b) {
                        const c = this.De;
                        for (a = this.Pl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Ke(a, b) {
                        a = this.hy.get(a);
                        b = this.hy.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    aB(a) {
                        return this.De[this.Pl(a)].id
                    }
                    has(a) {
                        return this.hy.has(a)
                    }
                    It(a) {
                        return new __c.PM(this, a)
                    }
                    map(a) {
                        return this.De.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.De.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.De.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.De.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.De.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.De.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.De.every(b => a(b.ref, b.id))
                    }[Ybc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.B7a =
                            a;
                        this.Tgb = (Zac.A(this), 0);
                        this.sOa = new WeakMap
                    }
                };
                var Zbc = new Set,
                    $bc = {
                        GD: () => ({
                            Pa: Xbc
                        })
                    },
                    acc = class {
                        static A(a) {
                            __c.O(a, {
                                gga: hbc.shallow
                            })
                        }
                        Phb(a, b, {
                            element: c,
                            exports: d
                        }) {
                            const e = __c.D(this.Erb.tga.get(a));
                            v(e.element === b.element);
                            v(!this.gga.has(a));
                            b = {
                                element: bbc(this, b, c),
                                exports: d
                            };
                            this.gga.set(a, b);
                            Zbc.has(a) || (__c.KP.set(a, $bc), Zbc.add(a));
                            return b
                        }
                        Odb(a) {
                            var b;
                            return (b = this.gga.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e, f) {
                            this.Erb = a;
                            this.E1a = b;
                            this.Una = c;
                            this.zt = d;
                            this.Mz = e;
                            this.xh = f;
                            this.gga = (acc.A(this), new Map)
                        }
                    };
                var bcc = class {
                    static A(a) {
                        __c.O(a, {
                            tga: hbc.shallow
                        })
                    }
                    Qhb(a, b) {
                        v(!this.tga.has(a));
                        b = {
                            document: fbc(this.PJa(a, b.document)),
                            element: fbc(this.PJa(a, b.element))
                        };
                        this.tga.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.PJa = a;
                        this.tga = (bcc.A(this), new Map)
                    }
                };
                __c.KSa = {
                    Vhb: function(a) {
                        var b = a.cxb;
                        const c = a.dxb,
                            d = a.zt;
                        a = a.tb;
                        var e = {
                            fo: Vac(),
                            Una: Ubc
                        };
                        const {
                            fo: f,
                            Una: g
                        } = e;
                        e = new bcc(Tac(f));
                        b = new acc(e, f, g, new Wbc(d, a), c, b);
                        return {
                            JDa: e,
                            NQb: e,
                            Y6: b,
                            X6: b
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/7f4ef95ff38f34fc.js.map