! function(t) {
  function e(e) {
    for (var i, r, s = e[0], l = e[1], c = e[2], u = 0, p = []; u < s.length; u++) r = s[u], o[r] && p.push(o[r][0]), o[r] = 0;
      for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        for (d && d(e); p.length;) p.shift()();
          return a.push.apply(a, c || []), n()
      }

      function n() {
        for (var t, e = 0; e < a.length; e++) {
          for (var n = a[e], i = !0, s = 1; s < n.length; s++) {
            var l = n[s];
            0 !== o[l] && (i = !1)
          }
          i && (a.splice(e--, 1), t = r(r.s = n[0]))
        }
        return t
      }
      var i = {},
      o = {
        0: 0
      },
      a = [];

      function r(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
      }
      r.m = t, r.c = i, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: n
        })
      }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
          for (var i in t) r.d(n, i, function(e) {
            return t[e]
          }.bind(null, i));
            return n
          }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
              return t.default
            } : function() {
              return t
            };
            return r.d(e, "a", e), e
          }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }, r.p = "";
          var s = window.webpackJsonp = window.webpackJsonp || [],
          l = s.push.bind(s);
          s.push = e, s = s.slice();
          for (var c = 0; c < s.length; c++) e(s[c]);
            var d = l;
          a.push([20, 1]), n()
        }({
          11: function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
              return o
            }), n.d(e, "d", function() {
              return a
            }), n.d(e, "a", function() {
              return r
            }), n.d(e, "b", function() {
              return l
            });
            var i = n(3);
            n(15);

            function o(t) {
              let e = {};
              return {
                init(t) {
                  let {
                    isOpen: n
                  } = t;
                  e = {
                    ...e,
                    isOpen: n
                  }
                },
                update(t) {
                  return e = {
                    ...e,
                    ...t
                  }, this
                },
                openOrClose() {
                  let {
                    isOpen: t
                  } = e;
                  return this
                },
                setElement(e) {
                  return t = e, this
                },
                getElement: () => t
              }
            }

            function a(t) {
              let e = {};
              return {
                init() {},
                update(t) {
                  e = {
                    ...e,
                    ...t
                  }
                },
                create({
                  className: e,
                  text: n
                }) {
                  let i = document.createElement("button");
                  return i.className = e, i.textContent = n, t = i, i
                },
                getElement: () => t,
                getSize() {
                  let {
                    width: e,
                    height: n
                  } = t.getBoundingClientRect();
                  return {
                    width: e,
                    height: n
                  }
                },
                getPosition() {
                  let {
                    top: e,
                    left: n
                  } = t.getBoundingClientRect();
                  return {
                    top: e,
                    left: n
                  }
                }
              }
            }

            function r(t) {
              let e = {};
              return {
                getElement: () => t,
                create({
                  className: e,
                  text: n
                }) {
                  let i = document.createElement("button");
                  return i.className = e, i.textContent = n, t = i, i
                },
                update(t) {
                  e = {
                    ...e,
                    ...t
                  }
                }
              }
            }

            function s(t, e, ...n) {
              return t && e in t && "function" == typeof e ? t[e].apply(null, n) : null
            }

            function l(t, e) {
              let n, o, a, r, l, c, d, u, p = {};
              return {
                init(t) {
                  let {
                    isOpen: e
                  } = t;
                  return d = t.toggleHandler.bind(this, p), o.create({
                    className: "navigation__toggler",
                    text: "меню"
                  }), a.create({
                    className: "navigation__closer",
                    text: "×"
                  }), p = {
                    ...p,
                    isOpen: e
                  }, this
                },
                initEvents() {
                  o.getElement().addEventListener("click", d), a.getElement().addEventListener("click", d);
                  const e = function() {
                    let e = t.getBoundingClientRect().top,
                    {
                      isSticky: n
                    } = p;
                    e <= 0 && !n ? n = !0 : e > 0 && n && (n = !1), this.update({
                      isSticky: n
                    })
                  }.bind(this);
                  return window.addEventListener("scroll", e), this
                },
                initAnimation() {
                  return this.initAnimationSticky(), this.initAnimationOpen(), this
                },
                initAnimationSticky() {
                  var t, e;
                  return t = u, e = n, c = {
                    forward: function() {
                      let n = e.getBoundingClientRect(),
                      o = n.width,
                      a = n.left;
                      return n.top, n.height, new i.a({
                        onStart: function() {
                          i.b.set(t, {
                            height: n.height
                          }), t.classList.add("is-sticky")
                        }
                      }).set(e, {
                        position: "fixed",
                        width: o,
                        left: a,
                        top: 0
                      }).to(e, .33, {
                        width: "100%",
                        left: 0
                      })
                    },
                    reversed: function() {
                      let n = t.getBoundingClientRect();
                      return new i.a({
                        onUpdate: function() {
                          let n = t.getBoundingClientRect().top;
                          i.b.set(e, {
                            top: n
                          })
                        },
                        onComplete: function() {
                          i.b.set(e, {
                            position: "relative",
                            left: "auto",
                            top: 0
                          })
                        },
                        onStart: function() {
                          t.classList.remove("is-sticky")
                        }
                      }).set(e, {
                        position: "fixed"
                      }).to(e, .33, {
                        width: n.width,
                        left: n.left
                      })
                    }
                  }, this
                },
                initAnimationOpen() {
                  l = new i.a({
                    paused: !0
                  });
                  let t = (e = o.getElement(), (new i.a).fromTo(e, .33, {
                    opacity: 1,
                    scale: 1
                  }, {
                    opacity: 0,
                    scale: 0
                  }).set(e, {
                    display: "none"
                  }));
                  var e;
                  let s = function(t) {
                    return (new i.a).set(t, {
                      display: "block"
                    }).fromTo(t, .33, {
                      opacity: 0,
                      y: -50
                    }, {
                      opacity: 1,
                      y: 0
                    })
                  }(a.getElement()),
                  c = function(t, e, n) {
                    let {
                      top: o,
                      left: a,
                      width: r,
                      height: s
                    } = t.getBoundingClientRect(), l = 0, c = !0;
                    return new i.a({
                      onStart: function() {
                        e.style.height = s + "px", t.style.overflowY = "hidden"
                      },
                      onComplete: function() {
                        t.style.overflowY = "auto"
                      },
                      onReverseComplete: function() {
                        let {
                          isSticky: i
                        } = n;
                        e.style.height = i ? s : "auto", t.style.width = i ? "100%" : "auto", t.style.height = "auto"
                      },
                      onUpdate: function() {
                        var e = this.time();
                        (c && e < l || !c && e > l) && ((c = !c) || (t.style.overflowY = "hidden")), l = e
                      }
                    }).set(t, {
                      position: "fixed",
                      height: s,
                      width: r,
                      top: o,
                      left: a
                    }).to(t, .33, {
                      height: "100%",
                      width: n.isSticky ? document.body.clientWidth : "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#fff",
                      onComplete: function() {
                        i.b.set(t, {
                          padding: "3em 0"
                        })
                      },
                      onReverseComplete: function() {
                        i.b.set(t, {
                          padding: "0"
                        })
                      }
                    })
                  }(n, u, p),
                  d = function(t) {
                    return (new i.a).set(t, {
                      display: "block"
                    }).fromTo(t, .33, {
                      opacity: 0,
                      scale: 0
                    }, {
                      opacity: 1,
                      scale: 1
                    })
                  }(r.getElement());
                  return l.add(t).add(c, "-=0.2").add(d, "-=0.2").add(s), this
                },
                mount(e, i) {
                  let s = document.createElement("div");
                  s.className = i && i.wrapperClass || "navigation__wrapper", s.appendChild(t);
                  let l = document.createElement("div");
                  l.className = i && i.wrapperClass || "navigation__wrapper2", n = l.appendChild(s), e.innerHTML = "";
                  let c = o.getElement(),
                  d = a.getElement();
                  return c instanceof HTMLElement ? s.appendChild(c) : console.error("Определите тогглер!"), d instanceof HTMLElement ? s.appendChild(d) : console.error("Определите клозер!"), u = e.appendChild(l), r.setElement(t), t = e, this
                },
                setToggler(t) {
                  return o = t, this
                },
                setCloser(t) {
                  return a = t, this
                },
                setNavigation(t) {
                  return r = t, this
                },
                update(t) {
                  let {
                    isOpen: n,
                    isSticky: i
                  } = t;
                  void 0 !== n && p.isOpen !== n && (p = {
                    ...p,
                    isOpen: n
                  }, !0 === n && this.initAnimationOpen(), o.update(p), a.update(p), r.update(p), this.animatedOpen(n), s(e, "open", n)), void 0 !== i && p.isSticky !== i && (this.animatedSticky(i), p = {
                    ...p,
                    isSticky: i
                  }, s(e, "sticky", i))
                },
                animatedOpen(t) {
                  t ? l.play() : l.reversed(!0)
                },
                animatedSticky(t) {
                  t ? c.forward() : c.reversed()
                },
                getContainerRect: () => u.getBoundingClientRect(),
                getWrapper: () => u,
                getTarget: () => n
              }
            }
          },
          15: function(t, e, n) {
            "use strict"
          },
          19: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
              return o
            });
            class i {
              constructor(t) {
                this.name = t, this.handlers = []
              }
              addHandler(t) {
                "function" == typeof t && this.handlers.push(t)
              }
              fire(t) {
                this.handlers.forEach(e => e(t))
              }
            }

            function o() {
              let t = [];

              function e(e) {
                return t.find(t => t.name === e)
              }
              return {
                subscribe(n, o) {
                  let a = e(n);
                  a || (a = new i(n)), a.addHandler(o), t.push(a)
                },
                dispatch(t, n) {
                  let o = e(t);
                  o || (o = new i(t)), o.fire(n)
                }
              }
            }
          },
          20: function(t, e, n) {
            "use strict";
            n.r(e),
            function(t) {
              var e = n(16),
              i = n.n(e),
              o = (n(25), n(17)),
              a = n.n(o),
              r = n(18),
              s = n(10),
              l = n(19),
              c = (n(15), n(11));
              document.documentElement.classList.remove("no-js"), Object(r.ScrollMagicPluginGsap)(a.a, s.a);
              d = navigator.userAgent || navigator.vendor || window.opera, /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(d) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(d.substr(0, 4));
              var d;
              i()({
                mask: "+7 (999) 999-99-99",
                clearMaskOnLostFocus: !1
              }).mask(document.querySelectorAll("input[type=tel]"));
              class u {
                constructor() {
                  this.topic = []
                }
                add(t, e) {
                  this.topic.push([t, e])
                }
                analyze(t) {
                  let e = this.topic,
                  n = null;
                  for (let i = 0, o = e.length; i < o; i++) {
                    let o = e[i][0],
                    a = e[i][1];
                    if (t >= o && t < a) {
                      n = i;
                      break
                    }
                  }
                  return n
                }
              }
              let p = document.getElementsByClassName("is-slide");
              if (p) {
                let t = new u;
                Array.from(p).forEach(e => {
                  let n = e.offsetTop,
                  i = n + e.clientHeight;
                  t.add(n, i)
                }), window.addEventListener("scroll", e => {
                  let n = window.pageYOffset + 2 * window.innerHeight / 3,
                  i = t.analyze(n);
                  null !== i && function(t, e) {
                    t.classList.contains(e) || t.classList.add(e)
                  }(p[i], "animated")
                })
              }
              const m = function(t) {
                const e = document.body;
                let n = document.createElement("div");
                n.className = "modal";
                let i = '\n    <button class="modal__close" type="button">×</button>\n    <div class="modal__inner">\n      {{content}}\n    </div>\n  ',
                o = !1,
                a = !1,
                r = null,
                s = null,
                l = null,
                c = null,
                d = null;

                function u(t, e) {
                  n.style.top = e + "px", n.style.left = t + "px"
                }

                function p(t, e) {
                  n.style.width = t + "px", n.style.height = e + "px"
                }

                function m() {
                  u(d, c), p(s, l), a = !1, e.classList.remove("st-modal-open"), n.addEventListener("transitionend", h)
                }

                function f() {
                  e.addEventListener("click", m), e.classList.add("st-modal-open"), n.removeEventListener("transitionend", f)
                }

                function h() {
                  e.classList.remove("st-modal-open-pre"), e.removeEventListener("click", m), n.removeEventListener("transitionend", h)
                }
                return {
                  get element() {
                    return n
                  },
                  _setContent: function(t) {
                    n.innerHTML = i.replace("{{content}}", t)
                  },
                  append: function(t, e) {
                    o = !0, this._setContent(e);
                    const i = (r = t).getBoundingClientRect();
                    let a = i.width,
                    c = i.height;
                    p(a, c),
                    function(t, e) {
                      s = t, l = e
                    }(a, c), r.parentNode.insertBefore(n, r)
                  },
                  open: function(t) {
                    this._setContent(t), e.classList.add("st-modal-open-pre");
                    let i = (window.innerHeight - 200) / 2;
                    u((window.innerWidth - 300) / 2, i), p(300, 200), a = !0, n.addEventListener("transitionend", f)
                  },
                  setTop: function() {
                    if (!o) return;
                    const t = r.getBoundingClientRect();
                    let e = t.left,
                    n = t.top;
                    ! function(t, e) {
                      c = e, d = t
                    }(e, n), !a && u(e, n)
                  },
                  close: m
                }
              }(),
              f = "Ошибка!",
              h = "Мы получили Ваш телефон. Наш менеджер свяжется с вами в ближайшее время!",
              g = "Ошибка!",
              v = document.querySelector("button[type=submit]");
              let y;
              v && (setTimeout(function() {
                m.append(v, h), m.setTop()
              }, 10), window.addEventListener("scroll", t => {
                m.setTop()
              }), window.addEventListener("resize", t => {
                m.setTop()
              }), v.addEventListener("click", t => {
                let e;
                t.preventDefault(), t.stopPropagation(), e = k(w.value) ? "valid" : "novalid", L[e]()
              }));
              const w = document.getElementById("tel-input"),
              b = document.createElement("p");

              function k(t) {
                return /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/.test(t)
              }

              function E(t) {
                k(t.target.value) && (w.classList.remove("is-error"), b.innerHTML = "", w.removeEventListener("input", E))
              }
              b.className = "is-error", w && w.parentNode.parentNode.appendChild(b);
              const L = {
                valid: function() {
                  y = v.innerHTML, v.classList.add("is-loading"), v.innerHTML = "Отправляем...";
                  var t = new FormData;
                  t.append("tel-input", w.value), fetch("https://bzcekh.ru/call.php", {
                    method: "post",
                    body: t
                  }).then(t => {
                    m.open(h), v.innerHTML = y, v.classList.remove("is-loading")
                  }).catch(t => {
                    m.open(f), v.innerHTML = y, v.classList.remove("is-loading")
                  })
                },
                novalid: function() {
                  w.classList.add("is-error"), b.innerHTML = g, w.addEventListener("input", E)
                }
              };
              let S = document.querySelectorAll(".contact a");
              window.matchMedia("(max-width: 800px)").addListener(function(t) {
                var e;
                e = t.matches ? "mobile" : "comp", Array.from(S).forEach(t => {
                  t.setAttribute("href", t.getAttribute("data-messenger-" + e + "-href"))
                })
              }),
              function(t) {
                t.loadCSS || (t.loadCSS = function() {});
                var e = loadCSS.relpreload = {};
                if (e.support = function() {
                  var e;
                  try {
                    e = t.document.createElement("link").relList.supports("preload")
                  } catch (t) {
                    e = !1
                  }
                  return function() {
                    return e
                  }
                }(), e.bindMediaToggle = function(t) {
                  var e = t.media || "all";

                  function n() {
                    t.media = e
                  }
                  t.addEventListener ? t.addEventListener("load", n) : t.attachEvent && t.attachEvent("onload", n), setTimeout(function() {
                    t.rel = "stylesheet", t.media = "only x"
                  }), setTimeout(n, 3e3)
                }, e.poly = function() {
                  if (!e.support())
                    for (var n = t.document.getElementsByTagName("link"), i = 0; i < n.length; i++) {
                      var o = n[i];
                      "preload" !== o.rel || "style" !== o.getAttribute("as") || o.getAttribute("data-loadcss") || (o.setAttribute("data-loadcss", !0), e.bindMediaToggle(o))
                    }
                  }, !e.support()) {
                  e.poly();
                  var n = t.setInterval(e.poly, 500);
                  t.addEventListener ? t.addEventListener("load", function() {
                    e.poly(), t.clearInterval(n)
                  }) : t.attachEvent && t.attachEvent("onload", function() {
                    e.poly(), t.clearInterval(n)
                  })
                }
                "undefined" != typeof exports ? exports.loadCSS = loadCSS : t.loadCSS = loadCSS
              }(void 0 !== t ? t : void 0);
              Object(l.a)();
              (function() {
                let t, e = !1;
                return {
                  init() {
                    t = Object(c.b)(document.querySelector(".navigation")).setNavigation(Object(c.c)(document.querySelector(".navigation"))).setToggler(Object(c.d)(document.querySelector(".navigation__toggler"))).setCloser(Object(c.a)(document.querySelector(".navigation__closer"))).init({
                      isOpen: e,
                      toggleHandler: function(t) {
                        let n = {
                          ...t,
                          isOpen: e = !e
                        };
                        this.update(n)
                      }
                    }).mount(document.querySelector(".page-section.is-main-nav .page-section__inner")).initEvents().initAnimation()
                  }
                }
              })().init()
            }.call(this, n(13))
          }
        });
