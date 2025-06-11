(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60060], {

        /***/
        82986: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var N = __c.N;
                var er = __c.er;
                var EL = __c.EL;
                var X = __c.X;
                var L = __c.L;
                var tl = __c.tl;
                var E = __c.E;
                var Ia = __c.Ia;
                var o9b, p9b, r9b, q9b, t9b, w9b, v9b, A9b, E9b, H9b, I9b, C9b, L9b, M9b, N9b, J5, K5, O9b, P9b, Q9b, S9b, U9b, V9b, $9b, a$b;
                __c.F5 = function(a) {
                    return {
                        type: 1,
                        Component: a
                    }
                };
                __c.G5 = function() {
                    return a => a
                };
                __c.H5 = function(a) {
                    return () => ({ ...m9b,
                        ...a
                    })
                };
                o9b = function({
                    element: a
                }) {
                    var b = n9b.get(a.kma);
                    if (!b) throw Error(`Blueprint ${a.kma} not found`);
                    b = b.variants.find(c => c.gDa === a.gDa);
                    if (!b) throw Error(`Variant ${a.gDa} not found for blueprint ${a.kma}`);
                    return {
                        Pa: b.Pa
                    }
                };
                p9b = function(a, b) {
                    return __c.G5()(() => ({
                        element: __c.F5(a),
                        exports: {
                            config: b
                        }
                    }))
                };
                r9b = async function(a, b) {
                    const c = b.requestId,
                        d = b.path;
                    b = b.payload;
                    const e = a.requestHandler.get(d);
                    if (e) {
                        a.G2.xY.send({
                            type: "ack",
                            requestId: c
                        });
                        var f = setInterval(() => a.G2.xY.send({
                            type: "ack",
                            requestId: c
                        }), 9E3);
                        try {
                            var g = await e(b);
                            clearInterval(f);
                            a.G2.xY.send({
                                type: "response",
                                requestId: c,
                                payload: g
                            })
                        } catch (k) {
                            clearInterval(f);
                            g = "internal_error";
                            b = "Something went wrong on our end, if this issue persists please contact us.";
                            if (k instanceof I5) {
                                var h = k;
                                k.code === "internal_error" ? a.F.Fb(k, {
                                    te: "Internal error in comms handler",
                                    tags: new Map([
                                        ["type", "request"],
                                        ["path", d]
                                    ])
                                }) : (g = k.code, b = k.nqb)
                            } else a.$qb ? a.F.Fb(k, {
                                te: "Unexpected error type thrown from comms handler",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            }) : a.fbb.error(k);
                            g = q9b(a.G2, c, g, b);
                            g.ok || a.F.RL(g.error, {
                                te: "unable to send error response",
                                tags: new Map([
                                    ["type", "request"],
                                    ["path", d]
                                ])
                            })
                        }
                        if (h != null)
                            for (const k of a.cdb) try {
                                k(h)
                            } catch (l) {
                                a.F.rG(l, {
                                    te: "Error executing errorObserver"
                                })
                            }
                    } else h = q9b(a.G2, c, "internal_error", `No request handler configured for path: "${d}".`),
                        h.ok || a.F.RL(h.error, {
                            te: "unable to send error response",
                            tags: new Map([
                                ["type", "request"],
                                ["path", d]
                            ])
                        })
                };
                q9b = function(a, b, c, d) {
                    return a.xY.send({
                        type: "error",
                        requestId: b,
                        code: c,
                        message: d
                    })
                };
                t9b = function({
                    src: a,
                    srcdoc: b,
                    sandbox: c
                }) {
                    if (b.length !== 0 || !c.contains("allow-same-origin")) return s9b;
                    a = (new URL(a)).origin;
                    return a === "null" ? s9b : {
                        dDa: a,
                        DYa: a
                    }
                };
                w9b = async function(a, b, c, {
                    addEventListener: d,
                    removeEventListener: e
                } = window) {
                    const f = new u9b(6E4),
                        g = t9b(c),
                        h = c.contentWindow;
                    if (!h) throw new I5({
                        code: "internal_error",
                        message: "contentWindow is missing from iFrame"
                    });
                    c = ({
                        data: k,
                        source: l,
                        origin: m
                    }) => {
                        var n;
                        (k === null || k === void 0 ? 0 : (n = k.source) === null || n === void 0 ? 0 : n.startsWith("react-")) || (m !== g.dDa ? v9b(m) || b.info("received message event from an unexpected origin", {
                            extra: new Map([
                                ["expected", g.dDa],
                                ["actual", m]
                            ])
                        }) : l !== h ? l !== window && b.info("source and content window do not match", {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        }) : (l = k ? k.source ? k.source !== "iframe" ? Ia("invalid source") : (0, __c.Ha)() : Ia("'source' is missing in MessageEvent data object") : Ia("missing 'data' field in MessageEvent"), l.ok ? (h.postMessage({
                            source: "parent"
                        }, g.DYa, [a]), f.resolve(void 0)) : b.LK(l.error, {
                            extra: new Map([
                                ["data.source", k === null || k === void 0 ? void 0 : k.source]
                            ])
                        })))
                    };
                    d("message", c);
                    try {
                        await f.promise()
                    } finally {
                        e("message", c)
                    }
                };
                v9b = function(a) {
                    return x9b.some(b => a.endsWith(b))
                };
                A9b = function(a, b) {
                    var c = y9b,
                        d = z9b;
                    a.handle("SET_CONFIG", async e => {
                        if (e === void 0) throw new I5({
                            code: "internal_error",
                            message: "SET_CONFIG: request cannot be undefined."
                        });
                        e = c.xb(e);
                        e = await b(e);
                        if (d) return d.Ib(e)
                    })
                };
                E9b = async function(a, b) {
                    a = await a.VIa.request("RENDER_ELEMENT", B9b.Ib(b));
                    a = C9b(a, "RENDER_ELEMENT");
                    return D9b.xb(a)
                };
                H9b = async function(a, b) {
                    a = await a.VIa.request("SET_CAPABILITY", F9b.Ib(b));
                    a = C9b(a, "SET_CAPABILITY");
                    return G9b.xb(a)
                };
                I9b = function(a, b) {
                    A9b(a, c => b.tgb(c))
                };
                C9b = function(a, b) {
                    if (!a.ok) throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                    if (a.value == null) throw Error(`${b}: Result cannot be empty`);
                    return a.value
                };
                L9b = async function(a, b, c) {
                    const {
                        port1: d,
                        port2: e
                    } = new MessageChannel, f = new J9b(d, b);
                    await w9b(e, b, a, window);
                    a = new K9b(f);
                    c && I9b(f, c);
                    return a
                };
                M9b = function(a) {
                    switch (a) {
                        case "l":
                            return "ltr";
                        case "r":
                            return "rtl";
                        default:
                            throw new E(a);
                    }
                };
                N9b = function(a) {
                    const b = a.color;
                    a = a.ab;
                    return b ? b : a.ref ? a.ref.Zi[0].color : "#ffffff"
                };
                J5 = function(a, b) {
                    __c.v(b.length > 0, "zero contrast candidates received");
                    const c = new Map;
                    return __c.Xq(b, d => {
                        var e;
                        const f = (e = c.get(d)) !== null && e !== void 0 ? e : __c.xs(d, a);
                        c.set(d, f);
                        return f
                    })
                };
                K5 = function(a, b) {
                    return {
                        type: "text2",
                        text: tl.create(tl.tc().attrs(b).Pb(a + "\n").build())
                    }
                };
                O9b = function(a, b) {
                    return {
                        "font-size": 25,
                        "font-weight": "bold",
                        "text-align": "start",
                        leading: 1200,
                        color: J5(a, L5),
                        "font-family": b,
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    }
                };
                P9b = function(a, b) {
                    return {
                        color: J5(a, L5),
                        "font-size": 16,
                        "font-family": b,
                        "font-kerning": "normal",
                        "font-feature-liga": "on",
                        "font-feature-clig": "on",
                        "font-feature-calt": "on"
                    }
                };
                Q9b = async function() {
                    var {
                        w6: a
                    } = await __webpack_require__.me(723859).then(() => ({
                        w6: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09bf\u09ac\u09be \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u2019\u09b2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09df\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09af\u09bc\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7 \u09a8\u09be",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09cb\u09a8\u09cb \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"El teu nom es compartir\u00e0",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No es compartir\u00e0 el teu nom",\n"d648001f72873b11f1495205043049417024f9cf":"Hi ha hagut un problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Adunay nahitabo nga problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e jm\u00e9no bude sd\u00edleno",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e jm\u00e9no nebude sd\u00edleno",\n"d648001f72873b11f1495205043049417024f9cf":"N\u011bco se pokazilo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dit navn deles",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dit navn deles ikke",\n"d648001f72873b11f1495205043049417024f9cf":"Der gik noget galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dein Name bleibt nicht anonym",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dein Name ist nicht sichtbar",\n"d648001f72873b11f1495205043049417024f9cf":"Da ist etwas schiefgelaufen.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"d648001f72873b11f1495205043049417024f9cf":"\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Vamos a compartir tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se va a compartir tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no funcion\u00f3.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Se produjo un error",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Huunde boni",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nimesi jaetaan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nime\u00e4si ei jaeta",\n"d648001f72873b11f1495205043049417024f9cf":"Jokin meni pieleen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera communiqu\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7 \u0aa8\u0ab9\u0ac0\u0a82",\n"d648001f72873b11f1495205043049417024f9cf":"\u0a95\u0a82\u0a88\u0a95 \u0a96\u0acb\u0a9f\u0ac1\u0a82 \u0aa5\u0aaf\u0ac1\u0a82",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u05e9\u05de\u05da \u05d9\u05e9\u05d5\u05ea\u05e3",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u05d4\u05e9\u05dd \u05e9\u05dc\u05da \u05dc\u05d0 \u05d9\u05e9\u05d5\u05ea\u05e3",\n"d648001f72873b11f1495205043049417024f9cf":"\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e ime se dijeli",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e se ime ne\u0107e dijeliti",\n"d648001f72873b11f1495205043049417024f9cf":"Do\u0161lo je do pogre\u0161ke",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"A neved meg lesz osztva",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"A neved nem lesz megosztva",\n"d648001f72873b11f1495205043049417024f9cf":"Hiba t\u00f6rt\u00e9nt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Il tuo nome verr\u00e0 condiviso",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Non condivideremo il tuo nome",\n"d648001f72873b11f1495205043049417024f9cf":"Abbiamo riscontrato un errore",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u3082\u3093\u3060\u3044\u304c\u306f\u3063\u305b\u3044\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u1798\u17b6\u1793\u17a2\u17d2\u179c\u17b8\u1798\u17bd\u1799\u1781\u17bb\u179f\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0cb5\u0cc1\u0ca6\u0cbf\u0cb2\u0ccd\u0cb2",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c8f\u0ca8\u0ccb \u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\uc774\ub984\uc774 \uacf5\uc720\ub429\ub2c8\ub2e4",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\ub0b4 \uc774\ub984\uc774 \uacf5\uc720\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",\n"d648001f72873b11f1495205043049417024f9cf":"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u015ea\u015f\u00eeyek r\u00fb da",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Nisy zavatra tsy nety",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d41\u0d02.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d3f\u0d32\u0d4d\u0d32",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d0e\u0d28\u0d4d\u0d24\u0d4b \u0d2a\u0d3f\u0d36\u0d15\u0d4d \u0d38\u0d02\u0d2d\u0d35\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u042f\u043c\u0430\u0440 \u043d\u044d\u0433 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0908\u0932",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0923\u093e\u0930 \u0928\u093e\u0939\u0940",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u093e\u0939\u0940\u0924\u0930\u0940 \u091a\u0942\u0915 \u091d\u093e\u0932\u0940",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama anda akan dikongsikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama anda tidak akan dikongsikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terdapat sedikit masalah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Navnet ditt blir delt",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Navnet ditt blir ikke delt",\n"d648001f72873b11f1495205043049417024f9cf":"Noe gikk galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Wanti tokko dogongoraan deemaa jira",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Twoje imi\u0119 i\u00a0nazwisko zostanie udost\u0119pnione",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Niepoprawnie",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpowied\u017a zapisana",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Twoje imi\u0119 i\u00a0nazwisko nie b\u0119d\u0105 udost\u0119pniane",\n"d648001f72873b11f1495205043049417024f9cf":"Co\u015b posz\u0142o nie tak",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Poprawnie",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Formularz aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Seu nome ser\u00e1 compartilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Seu nome n\u00e3o ser\u00e1 compartilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Algo deu errado",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"O seu nome ser\u00e1 partilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"O seu nome n\u00e3o ser\u00e1 partilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Ocorreu um problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Numele t\u0103u va fi distribuit",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Numele t\u0103u nu va fi distribuit",\n"d648001f72873b11f1495205043049417024f9cf":"Ceva nu a mers cum trebuie",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"d648001f72873b11f1495205043049417024f9cf":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d9a\u0dd4\u0db8\u0d9a\u0dca \u0dc4\u0ddd \u0dc0\u0dd0\u0dbb\u0daf\u0dd3 \u0d9c\u0ddc\u0dc3\u0dca \u0d87\u0dad.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e meno sa bude zdie\u013ea\u0165",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e meno sa nebude zdie\u013ea\u0165",\n"d648001f72873b11f1495205043049417024f9cf":"Vyskytla sa chyba",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Pane zvakanganisika",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Waxbaa khaldan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Ndodhi nj\u00eb gabim",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Aya nu salah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ditt namn kommer att delas",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ditt namn kommer inte att delas",\n"d648001f72873b11f1495205043049417024f9cf":"N\u00e5gonting gick fel",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bbe\u0ba4\u0bc1",\n"d648001f72873b11f1495205043049417024f9cf":"\u0b8f\u0ba4\u0bcb \u0ba4\u0bb5\u0bb1\u0bbe\u0b95\u0bbf\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c26\u0c41",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c0f\u0c26\u0c4b \u0c38\u0c2e\u0c38\u0c4d\u0c2f \u0c0f\u0c30\u0c4d\u0c2a\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e41\u0e0a\u0e23\u0e4c",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e41\u0e0a\u0e23\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",\n"d648001f72873b11f1495205043049417024f9cf":"\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ibabahagi ang iyong pangalan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Hindi ibabahagi ang iyong pangalan",\n"d648001f72873b11f1495205043049417024f9cf":"May maling nangyari",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ad\u0131n\u0131z payla\u015f\u0131lacak",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ad\u0131n\u0131z\u0131 payla\u015fmayaca\u011f\u0131z",\n"d648001f72873b11f1495205043049417024f9cf":"Bir sorunla kar\u015f\u0131la\u015ft\u0131k",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u043d\u0435 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f",\n"d648001f72873b11f1495205043049417024f9cf":"\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chia s\u1ebb",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c chia s\u1ebb",\n"d648001f72873b11f1495205043049417024f9cf":"\u0110\u00e3 x\u1ea3y ra l\u1ed7i",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Amna lu jaarul yoon",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u4f60\u7684\u540d\u79f0\u5c06\u88ab\u5206\u4eab",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u4f60\u7684\u540d\u79f0\u4e0d\u4f1a\u88ab\u5206\u4eab",\n"d648001f72873b11f1495205043049417024f9cf":"\u51fa\u73b0\u9519\u8bef",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u932f\u8aa4",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u554f\u984c\u4e86",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}'
                    }));
                    a =
                        JSON.parse(a);
                    const b = new Map;
                    for (const c in a) b.set(c, Object.values(a[c]));
                    return b
                };
                S9b = function(a) {
                    const b = a.Rqb,
                        c = a.Afb;
                    return M5("div", {
                        className: "LMc7Uw",
                        children: a.options.map(d => M5(R9b, {
                            children: b(d)
                        }, c(d)))
                    })
                };
                U9b = function(a) {
                    const b = a.mw,
                        c = a.xs,
                        d = a.Nn;
                    a = a.label;
                    const e = b !== c,
                        f = T9b(() => {
                            var g = J5(c, L5),
                                h = e ? b : g;
                            g = __c.ws("#000000", c) >= 20 ? "#000000" : J5(c, L5);
                            h = __c.ws(h, c) >= 20 ? h : J5(c, L5);
                            return d && e ? h : g
                        }, [e, d, b, c]);
                    return M5("div", {
                        className: "WYWuyA",
                        style: {
                            "--bETJ2A": d ? __c.ls(__c.fs(__c.gs(f), e ? .5 : .08)) : __c.ls(__c.fs(__c.gs(f), .08)),
                            "--yYV0bA": __c.ls(__c.fs(__c.gs(f), .12)),
                            "--mxkqAA": __c.ls(__c.fs(__c.gs(f), .26))
                        },
                        children: a
                    })
                };
                V9b = function(a) {
                    return M5("div", {
                        className: "B_d8Sg",
                        children: M5("div", {
                            children: a.cub
                        })
                    })
                };
                $9b = function(a) {
                    const b = a.status,
                        c = a.zm,
                        d = a.direction,
                        e = a.backgroundColor;
                    a = a.messages;
                    const f = J5(e, L5);
                    switch (b) {
                        case 0:
                            return N5(a.cda(), c, d, J5(e, W9b), f);
                        case 1:
                            return N5(a.loading(), c, d, J5(e, X9b), f);
                        case 2:
                            return N5(a.Kza(), c, d, J5(e, X9b), f);
                        case 3:
                            return N5(a.offline(), c, d, J5(e, Y9b), f);
                        case 4:
                            return N5(a.fza(), c, d, J5(e, Z9b), f);
                        default:
                            throw new E(b);
                    }
                };
                a$b = function(a) {
                    return M5("div", {
                        children: a.label
                    })
                };
                __c.rd.prototype.RL = __c.fa(3, function(a, b) {
                    this.console.error(...__c.qd(this, "critical", a, b))
                });
                __c.eL.prototype.RL = __c.fa(2, function(a, b) {
                    this.ot.RL(a, b);
                    __c.cL(this, a, "critical", b)
                });
                var O5 = __webpack_require__(519427),
                    b$b = O5.action,
                    c$b = O5.observable,
                    d$b = O5.ObservableMap,
                    e$b = O5.reaction,
                    f$b = O5.untracked;
                var g$b = __webpack_require__(443763),
                    M5 = g$b.jsx,
                    P5 = g$b.jsxs;
                var Q5 = __webpack_require__(875604),
                    R9b = Q5.Fragment,
                    h$b = Q5.useEffect,
                    T9b = Q5.useMemo,
                    R5 = Q5.useState;
                var i$b = __webpack_require__(635872).Om;
                var j$b = __webpack_require__(446474).Pi;
                var m9b = Object.freeze({
                    document: Object.freeze({}),
                    element: Object.freeze({})
                });
                var n9b = new d$b,
                    k$b = __c.H5({
                        element: __c.q_({
                            kma: (0, __c.r_)("blueprintId"),
                            gDa: (0, __c.r_)("variantId")
                        })
                    });
                var l$b = {
                    tH: __c.G5()(() => ({
                        element: {
                            type: 0,
                            GD: o9b
                        },
                        exports: {}
                    })),
                    uH: k$b
                };
                var m$b = __c.H5({
                    element: __c.q_({
                        url: (0, __c.r_)("url"),
                        config: (0, __c.NSb)("config")
                    })
                });
                var n$b = class {};
                var I5 = class extends Error {
                    constructor(a) {
                        a.code = a.code;
                        const b = a.message.endsWith(".") ? "" : ".";
                        super(`[${a.code}]:  ${a.message}${b}`.trim());
                        this.code = a.code;
                        this.name = "CanvaError";
                        this.nqb = a.message;
                        Object.setPrototypeOf(this, I5.prototype)
                    }
                };
                var o$b = class {
                    constructor(a, b, c) {
                        this.handler = a;
                        this.port = b;
                        this.F = c;
                        this.send = d => {
                            try {
                                return this.port.postMessage(d), (0, __c.Ha)()
                            } catch (e) {
                                return this.F.Fb(e), Ia(e)
                            }
                        };
                        this.Gnb = d => {
                            this.F.Fb(d)
                        };
                        this.fva = ({
                            data: d
                        }) => {
                            if (d) try {
                                this.handler.sqb(d)
                            } catch (e) {
                                this.F.Fb(e)
                            } else this.F.error(new I5({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                        };
                        this.port.onmessage = this.fva;
                        this.port.onmessageerror = this.Gnb
                    }
                };
                var p$b = class extends Error {
                        constructor() {
                            super("[internal_error] Comms promise timed out.")
                        }
                    },
                    u9b = class {
                        reset(a) {
                            a && (this.timeoutMs = a);
                            this.setTimeout()
                        }
                        resolve(a) {
                            clearTimeout(this.Nd);
                            this.irb(a)
                        }
                        reject(a) {
                            clearTimeout(this.Nd);
                            this.dXa(a)
                        }
                        promise() {
                            return this.p
                        }
                        setTimeout() {
                            clearTimeout(this.Nd);
                            this.Nd = setTimeout(() => {
                                this.dXa(new p$b)
                            }, this.timeoutMs)
                        }
                        constructor(a) {
                            this.timeoutMs = a;
                            this.p = new Promise((b, c) => {
                                this.irb = b;
                                this.dXa = c
                            });
                            this.setTimeout()
                        }
                    };
                var q$b = class {
                    request(a, b) {
                        const c = this.GVa,
                            d = new u9b(5E3),
                            e = this.brb(),
                            f = async function() {
                                c.set(e, d);
                                try {
                                    const g = await d.promise();
                                    return (0, __c.Ha)(g)
                                } catch (g) {
                                    return g instanceof p$b ? Ia(new I5({
                                        code: "internal_error",
                                        message: `Comms promise timed out (${a}).`
                                    })) : Ia(g)
                                } finally {
                                    c.delete(e)
                                }
                            }();
                        b = this.send(e, a, b);
                        b.ok || (this.F.Fb(b.error, {
                            te: "unable to send request",
                            tags: new Map([
                                ["type", "request"],
                                ["path", a]
                            ])
                        }), d.reject(b.error));
                        return f
                    }
                    constructor(a, b) {
                        this.send = a;
                        this.F = b;
                        this.brb = __c.er;
                        this.GVa =
                            new Map
                    }
                };
                var r$b = class {
                    handle(a, b) {
                        if (this.requestHandler.has(a)) throw new I5({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                        this.requestHandler.set(a, b)
                    }
                    constructor(a, b) {
                        var c = console;
                        this.G2 = a;
                        this.F = b;
                        this.$qb = !0;
                        this.fbb = c;
                        this.requestHandler = new Map;
                        this.cdb = new Set
                    }
                };
                var J9b = class {
                        constructor(a, b) {
                            this.request = (c, d) => this.client.request(c, d);
                            this.handle = (c, d) => this.requestHandler.handle(c, d);
                            a = new s$b(c => {
                                switch (c.type) {
                                    case "ack":
                                    case "error":
                                    case "response":
                                        var d = this.client;
                                        const e = c.requestId,
                                            f = c.type,
                                            g = d.GVa.get(e);
                                        if (g) switch (f) {
                                            case "response":
                                                g.resolve(c.payload);
                                                break;
                                            case "ack":
                                                g.reset(2E4);
                                                break;
                                            case "error":
                                                g.reject(new I5({
                                                    code: c.code,
                                                    message: c.message
                                                }));
                                                break;
                                            default:
                                                throw new E(c);
                                        } else f !== "ack" && d.F.error("request has already been handled and resolved or was not sent from this client", {
                                            tags: new Map([
                                                ["type", f],
                                                ["requestId", `${e}`]
                                            ])
                                        });
                                        break;
                                    case "request":
                                        r9b(this.requestHandler, c);
                                        break;
                                    default:
                                        throw new E(c);
                                }
                            }, a, b.Tf("bus"));
                            this.client = new q$b(a.iz, b.Tf("client"));
                            this.requestHandler = new r$b(a, b.Tf("requestHandler"))
                        }
                    },
                    s$b = class {
                        constructor(a, b, c) {
                            this.qba = a;
                            this.iz = (d, e, f) => this.xY.send({
                                type: "request",
                                requestId: d,
                                path: e,
                                payload: f
                            });
                            this.Snb = d => {
                                switch (d.type) {
                                    case "ack":
                                        this.qba({
                                            type: "ack",
                                            requestId: d.requestId
                                        });
                                        break;
                                    case "error":
                                        this.qba({
                                            type: "error",
                                            requestId: d.requestId,
                                            code: d.code,
                                            message: d.message
                                        });
                                        break;
                                    case "response":
                                        this.qba({
                                            type: "response",
                                            requestId: d.requestId,
                                            payload: d.payload
                                        });
                                        break;
                                    case "request":
                                        this.qba({
                                            type: "request",
                                            requestId: d.requestId,
                                            path: d.path,
                                            payload: d.payload
                                        });
                                        break;
                                    default:
                                        throw new E(d);
                                }
                            };
                            this.xY = new o$b({
                                sqb: this.Snb
                            }, b, c)
                        }
                    };
                var s9b = {
                    dDa: "null",
                    DYa: "*"
                };
                var x9b = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
                var B9b = L(() => ({
                    config: __c.Y(1)
                }));
                var S5 = L(() => ({
                    type: __c.F("A?", 1, "RECOLORABLE"),
                    id: X(1),
                    value: X(2)
                }));
                var t$b = L(() => ({
                    borderRadius: EL(1),
                    borderWidth: EL(2)
                }));
                var T5 = L(() => ({
                    type: __c.F("A?", 2, "BORDERABLE"),
                    id: X(1),
                    value: __c.Ta(2, t$b)
                }));
                var D9b = L(() => ({
                    config: X(1),
                    width: EL(2),
                    height: EL(3),
                    kV: __c.Ua(4, S5),
                    s8a: __c.Ua(5, T5)
                }));
                var F9b = __c.kb(() => ({
                    type: [1, S5, 2, T5]
                }), () => ({}));
                var G9b = L(() => ({
                    config: X(1),
                    width: EL(2),
                    height: EL(3)
                }));
                var y9b = L(() => ({
                    config: X(1),
                    width: EL(2),
                    height: EL(3),
                    kV: __c.Ua(4, S5),
                    s8a: __c.Ua(5, T5)
                }));
                var z9b = L(() => ({}));
                var K9b = class {
                    constructor(a) {
                        this.VIa = a
                    }
                };
                var u$b = class {
                    async EB(a, b, c) {
                        let d;
                        const e = h => H9b(g, new S5(h)),
                            f = this.config.gLa;
                        f && (d = {
                            tgb: h => {
                                f.C2a(h, b, e);
                                return new z9b
                            }
                        });
                        const g = await L9b(a, c, d);
                        c = e$b(() => b.config, async h => {
                            const k = await E9b(g, {
                                config: h
                            });
                            k.config && k.config !== h && (f === null || f === void 0 || f.C2a(k, b, e))
                        });
                        this.kh.set(a, c);
                        a = await E9b(g, {
                            config: b.config
                        });
                        f === null || f === void 0 || f.C2a(a, b, e)
                    }
                    BU(a) {
                        var b;
                        (b = this.kh.get(a)) === null || b === void 0 || b();
                        this.kh.delete(a)
                    }
                    constructor(a) {
                        this.config = a;
                        this.kh = new Map
                    }
                };
                var v$b = {
                    tH: function() {
                        const a = new n$b,
                            b = new u$b(a);
                        return p9b(({
                            data: {
                                element: c
                            },
                            Mz: {
                                e5a: d
                            },
                            xh: {
                                F: e
                            }
                        }) => M5(d, {
                            url: c.url,
                            EB: f => b.EB(f, c, e),
                            BU: f => b.BU(f)
                        }), a)()
                    },
                    uH: m$b
                };
                var L5 = ["#000000", "#ffffff"],
                    w$b = i$b((a, b) => {
                        const c = tl.create(tl.ja(a));
                        f$b(() => {
                            c.Zg({
                                direction: M9b(b)
                            })
                        });
                        return c
                    });
                er();
                er();
                (a => ({
                    type: "select",
                    id: er(),
                    label: K5(N("RHbyaA"), O9b("#05805f", a === null || a === void 0 ? void 0 : a.fontFamily)),
                    options: [N("ubIbsA"), N("Ic3T0Q"), N("gWITaA"), N("VqqAfQ")].map(b => ({
                        id: er(),
                        label: K5(b, P9b("#05805f", a === null || a === void 0 ? void 0 : a.fontFamily))
                    })),
                    X: 8,
                    R9: [],
                    jQa: "c",
                    ...a
                }))({
                    fontFamily: void 0
                });
                __c.dD.create({ ...__c.AQ,
                    weight: 0,
                    color: "#000000"
                });
                __c.IO.create({ ...__c.Fu,
                    color: "#05805f"
                });
                __c.IO.create({ ...__c.Fu,
                    color: "#05805f"
                });
                var x$b, y$b = er(),
                    z$b = er(),
                    A$b = [(a => {
                        const b = [{
                            id: er(),
                            label: N("yNxreA"),
                            t1: !1
                        }, {
                            id: er(),
                            label: N("1KKyZA"),
                            t1: !0
                        }, {
                            id: er(),
                            label: N("U+9/CQ"),
                            t1: !1
                        }];
                        return {
                            type: "select",
                            id: er(),
                            label: K5(N("4JB6gw"), O9b("#0079a9", a === null || a === void 0 ? void 0 : a.fontFamily)),
                            options: b.map(c => ({
                                id: c.id,
                                label: K5(c.label, P9b("#0079a9", a === null || a === void 0 ? void 0 : a.fontFamily))
                            })),
                            X: 8,
                            R9: b.filter(c => c.t1).map(c => c.id),
                            jQa: "c",
                            ...a
                        }
                    })({
                        fontFamily: void 0
                    })],
                    B$b = N("NFt4Cg");
                x$b = {
                    minWidth: 354,
                    minHeight: 480,
                    type: "quiz",
                    id: y$b,
                    uz: z$b,
                    dP: void 0,
                    fields: A$b,
                    footer: {
                        label: K5(B$b, {
                            "text-align": "center",
                            "font-weight": "bold",
                            color: "#0079a9",
                            "font-size": 18,
                            "font-family": void 0,
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        })
                    },
                    header: {},
                    F0: !1,
                    border: __c.dD.create({ ...__c.AQ,
                        weight: 0,
                        color: "#000000"
                    }),
                    X: 16,
                    qu: __c.IO.create({ ...__c.Fu,
                        color: "#0079a9"
                    }),
                    xu: __c.IO.create({ ...__c.Fu,
                        color: "#0079a9"
                    }),
                    zm: __c.Fh.Hc["font-family"],
                    direction: "l",
                    ...(void 0)
                };
                var C$b = __c.H5({
                    element: __c.s_
                });
                var D$b = {
                        resultsPercentage: 0,
                        yourNameWillBeShared: 1,
                        incorrectLabel: 2,
                        responseSaved: 3,
                        submitting: 4,
                        loading: 5,
                        numVotes: 6,
                        offline: 7,
                        yourNameWontBeShared: 8,
                        somethingWentWrong: 9,
                        correctLabel: 10,
                        live: 11
                    },
                    E$b = class {
                        static A(a) {
                            __c.O(a, {
                                yC: c$b.ref
                            })
                        }
                        ii(a) {
                            var b;
                            return (((b = this.yC) === null || b === void 0 ? void 0 : b.get(this.document.language || "en")) || [])[D$b[a]]
                        }
                        fza() {
                            return this.ii("somethingWentWrong") || N("Z3F9sQ")
                        }
                        cda() {
                            return this.ii("live") || N("2LB66w")
                        }
                        BJa() {
                            return this.ii("correctLabel") || N("uXYgEw")
                        }
                        JOa() {
                            return this.ii("incorrectLabel") ||
                                N("Pe58VA")
                        }
                        DXa() {
                            return this.ii("responseSaved") || N("JWFDXg")
                        }
                        vTa(a) {
                            const b = this.ii("numVotes");
                            return b ? __c.Sb(b, [a], this.document.language) : __c.Ob("WZ3eIA", [a])
                        }
                        EXa(a) {
                            const b = this.ii("resultsPercentage");
                            return b ? __c.Sb(b, [a], this.document.language) : __c.Ob("a8YHbA", [a])
                        }
                        offline() {
                            return this.ii("offline") || N("H7ta1A")
                        }
                        loading() {
                            return this.ii("loading") || N("/0w0UQ")
                        }
                        Kza() {
                            return this.ii("submitting") || N("+ecJQQ")
                        }
                        YDa() {
                            return this.ii("yourNameWontBeShared") || N("lC0Mpw")
                        }
                        XDa() {
                            return this.ii("yourNameWillBeShared") ||
                                N("rrumFQ")
                        }
                        constructor(a) {
                            this.document = a;
                            this.yC = (E$b.A(this), void 0);
                            Q9b().then(b$b(b => {
                                this.yC = b
                            }))
                        }
                    };
                var F$b = 16 / 12 * 9,
                    W9b = ["#00d200", "#00ed00"],
                    X9b = ["#ffae00", "#ffc654"],
                    Y9b = ["#545454", "#c8c8c8"],
                    Z9b = ["#e53935", "#ef5350"],
                    N5 = (a, b, c, d, e) => {
                        a = tl.tc().attrs({
                            "font-size": F$b,
                            leading: void 0,
                            "text-align": "center",
                            direction: M9b(c),
                            color: d
                        }).Pb("\u25cf ").attrs({
                            "font-family": b,
                            "font-size": F$b,
                            color: e,
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        }).Pb(a).Pb("\n").build();
                        return tl.create(a)
                    };
                var G$b = j$b(function(a) {
                    const b = a.state,
                        c = a.BA,
                        d = a.R5a,
                        e = a.fX,
                        f = b.direction,
                        g = b.F0;
                    a = b.fields;
                    const h = b.qu,
                        k = b.xu,
                        l = b.X,
                        m = b.border,
                        n = b.zm,
                        [p] = R5(() => c$b.box(c));
                    h$b(() => {
                        p.set(c)
                    }, [p, c]);
                    const [q] = R5(() => new E$b({
                        get language() {
                            return p.get()
                        }
                    })), r = T9b(() => i$b(x => M5(d, {
                        text: w$b(x, f)
                    })), [d, f]), t = N9b(h), u = N9b(k), [w] = R5(() => 1);
                    return P5("div", {
                        className: "_9sCIzQ",
                        style: {
                            borderRadius: l,
                            border: `${m.weight}px solid ${m.color}`
                        },
                        children: [M5("div", {
                            className: "wNGpBA",
                            children: M5(e, {
                                fill: k
                            })
                        }), a.map(x => P5("div", {
                            className: "_6i3kwQ",
                            children: [!g && P5("div", {
                                className: "_9DY1fg",
                                children: [M5("div", {
                                    className: "f_lCRg",
                                    children: M5(e, {
                                        fill: h
                                    })
                                }), M5(a$b, {
                                    label: r(x.label.text)
                                })]
                            }), M5("div", {
                                className: "CljvBQ",
                                children: M5(S9b, {
                                    options: x.options,
                                    Afb: y => y.id,
                                    Rqb: y => M5(U9b, {
                                        mw: t,
                                        xs: u,
                                        Nn: !1,
                                        label: r(y.label.text)
                                    })
                                })
                            }), M5("div", {
                                children: M5(V9b, {
                                    cub: r($9b({
                                        messages: q,
                                        zm: n,
                                        direction: f,
                                        backgroundColor: u,
                                        status: w
                                    }))
                                })
                            })]
                        }, x.id))]
                    })
                });
                var H$b = {
                    tH: function(a) {
                        return __c.G5()(() => ({
                            element: __c.F5(a),
                            exports: {}
                        }))
                    }(j$b(({
                        Mz: a,
                        Zk: b
                    }) => M5(G$b, {
                        R5a: a.fFa,
                        fX: a.fX,
                        state: x$b,
                        BA: b.language || "en"
                    }))),
                    uH: C$b
                };
                __c.LSa = {
                    Thb: function(a) {
                        function b(e, f) {
                            const g = c.Qhb(e, f.uH());
                            f = d.Phb(e, g, f.tH());
                            return {
                                id: e,
                                tw: g,
                                dNb: f
                            }
                        }
                        const c = a.JDa,
                            d = a.Y6;
                        return {
                            fBb: b("w:wnJF5T87v", l$b),
                            WCb: a.pcb ? Promise.all([__webpack_require__.me(697956).then(() => __c.I$b), __webpack_require__.me(411625).then(() => __c.J$b), __webpack_require__.me(305660).then(() => __c.K$b), __webpack_require__.me(696820).then(() => __c.L$b)]).then(([e, f, g, h]) => ({
                                SCb: b("w:cm9wgGptP", e),
                                TCb: b("w:yLMS4dWnl", f),
                                UCb: b("w:2flp30CGQ", g),
                                VCb: b("w:1Nv6K6Dtv", h)
                            })) : void 0,
                            JBb: b("w:JR4G8hDDg", v$b),
                            form: b("w:6JG6DxspF", H$b),
                            gPb: a.kcb ? __webpack_require__.me(852979).then(() => __c.M$b).then(e => b("w:2pbXJMtm1", e)) : void 0
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/ce5749c32c85bf65.js.map