// Функция прокрутки
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Находим все ссылки с href="javascript:void(0)" и нужным onclick
document.querySelectorAll('a[href="javascript:void(0)"][onclick="scrollToElement(\'regForm\')"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();  // Отменяем стандартное поведение ссылки
        scrollToElement('regForm'); // Прокручиваем к элементу с id "regForm"
    });
});

var t;

function i(t, i, e) {
    const a = document.querySelector(".phone-error");
    if (!i.value.trim()) return i.classList.remove("valid", "invalid"), a && (a.textContent = ""), void n(t);
    e && e.isValidNumber() ? (i.classList.add("valid"), i.classList.remove("invalid"), a && (a.textContent = "")) : (i.classList.remove("valid"), i.classList.add("invalid"), a && (a.textContent = "Invalid phone number.")), n(t)
}

function e(t, i, e, a = "Name") {
    const s = i.value.trim(),
        o = t.querySelector(e);
    /^[A-Za-zА-Яа-яЁё\s'-]{3,}$/.test(s) ? (i.classList.add("valid"), i.classList.remove("invalid"), o.textContent = "") : (i.classList.add("invalid"), i.classList.remove("valid"), o.textContent = `Invalid ${a}.`), n(t)
}

function n(t) {
    const i = t.querySelectorAll("input[required]"),
        e = t.querySelector("button[type='submit']");
    let n = !0;
    i.forEach((t => {
        t.classList.contains("valid") || (n = !1)
    })), e && (e.disabled = !n)
}
t = function(t) {
    return function() {
        function i(t, i) {
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function e(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        }
        for (var n = [
                ["Afghanistan (افغانستان‎)", "af", "93"],
                ["Albania (Shqipëri)", "al", "355"],
                ["Algeria (الجزائر‎)", "dz", "213"],
                ["American Samoa", "as", "1", 5, ["684"]],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1", 6, ["264"]],
                ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                ["Argentina", "ar", "54"],
                ["Armenia (Հայաստան)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Ascension Island", "ac", "247"],
                ["Australia", "au", "61", 0],
                ["Austria (Österreich)", "at", "43"],
                ["Azerbaijan (Azərbaycan)", "az", "994"],
                ["Bahamas", "bs", "1", 8, ["242"]],
                ["Bahrain (البحرين‎)", "bh", "973"],
                ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                ["Barbados", "bb", "1", 9, ["246"]],
                ["Belarus (Беларусь)", "by", "375"],
                ["Belgium (België)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (Bénin)", "bj", "229"],
                ["Bermuda", "bm", "1", 10, ["441"]],
                ["Bhutan (འབྲུག)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1", 11, ["284"]],
                ["Brunei", "bn", "673"],
                ["Bulgaria (България)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (កម្ពុជា)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                ["Cayman Islands", "ky", "1", 12, ["345"]],
                ["Central African Republic (République centrafricaine)", "cf", "236"],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (中国)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2, ["89164"]],
                ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                ["Colombia", "co", "57"],
                ["Comoros (جزر القمر‎)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["Côte d’Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["Curaçao", "cw", "599", 0],
                ["Cyprus (Κύπρος)", "cy", "357"],
                ["Czech Republic (Česká republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1", 13, ["767"]],
                ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                ["Ecuador", "ec", "593"],
                ["Egypt (مصر‎)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Eswatini", "sz", "268"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (Føroyar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane française)", "gf", "594"],
                ["French Polynesia (Polynésie française)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (საქართველო)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Ελλάδα)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1", 14, ["473"]],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1", 15, ["671"]],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                ["Guinea (Guinée)", "gn", "224"],
                ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (香港)", "hk", "852"],
                ["Hungary (Magyarország)", "hu", "36"],
                ["Iceland (Ísland)", "is", "354"],
                ["India (भारत)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (ایران‎)", "ir", "98"],
                ["Iraq (العراق‎)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                ["Israel (ישראל‎)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (日本)", "jp", "81"],
                ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                ["Jordan (الأردن‎)", "jo", "962"],
                ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (الكويت‎)", "kw", "965"],
                ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                ["Laos (ລາວ)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (لبنان‎)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (ليبيا‎)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (澳門)", "mo", "853"],
                ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (موريتانيا‎)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1, ["269", "639"]],
                ["Mexico (México)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (Монгол)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1", 16, ["664"]],
                ["Morocco (المغرب‎)", "ma", "212", 0],
                ["Mozambique (Moçambique)", "mz", "258"],
                ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                ["Namibia (Namibië)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (नेपाल)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (عُمان‎)", "om", "968"],
                ["Pakistan (پاکستان‎)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (فلسطين‎)", "ps", "970"],
                ["Panama (Panamá)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (Perú)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (قطر‎)", "qa", "974"],
                ["Réunion (La Réunion)", "re", "262", 0],
                ["Romania (România)", "ro", "40"],
                ["Russia (Россия)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint Barthélemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                ["Saint Lucia", "lc", "1", 19, ["758"]],
                ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                ["Saudi Arabia (المملكة العربية السعودية‎)", "sa", "966"],
                ["Senegal (Sénégal)", "sn", "221"],
                ["Serbia (Србија)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1", 21, ["721"]],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (대한민국)", "kr", "82"],
                ["South Sudan (جنوب السودان‎)", "ss", "211"],
                ["Spain (España)", "es", "34"],
                ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                ["Sudan (السودان‎)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (سوريا‎)", "sy", "963"],
                ["Taiwan (台灣)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (ไทย)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                ["Tunisia (تونس‎)", "tn", "216"],
                ["Turkey (Türkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                ["Uganda", "ug", "256"],
                ["Ukraine (Україна)", "ua", "380"],
                ["United Arab Emirates (الإمارات العربية المتحدة‎)", "ae", "971"],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Việt Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (الصحراء الغربية‎)", "eh", "212", 1, ["5288", "5289"]],
                ["Yemen (اليمن‎)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Åland Islands", "ax", "358", 1, ["18"]]
            ], a = 0; a < n.length; a++) {
            var s = n[a];
            n[a] = {
                name: s[0],
                iso2: s[1],
                dialCode: s[2],
                priority: s[3] || 0,
                areaCodes: s[4] || null
            }
        }
        var o = {
            getInstance: function(t) {
                var i = t.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[i]
            },
            instances: {},
            documentReady: function() {
                return "complete" === document.readyState
            }
        };
        "object" == typeof window && (window.intlTelInputGlobals = o);
        var r = 0,
            l = {
                allowDropdown: !0,
                autoHideDialCode: !0,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                utilsScript: ""
            },
            d = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
            u = function(t, i) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) i(e[n], t[e[n]])
            },
            h = function(t) {
                u(window.intlTelInputGlobals.instances, (function(i) {
                    window.intlTelInputGlobals.instances[i][t]()
                }))
            },
            c = function() {
                function i(t, e) {
                    var n = this;
                    (function(t, i) {
                        if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
                    })(this, i), this.id = r++, this.a = t, this.b = null, this.c = null;
                    var a = e || {};
                    this.d = {}, u(l, (function(t, i) {
                        n.d[t] = a.hasOwnProperty(t) ? a[t] : i
                    })), this.e = Boolean(t.getAttribute("placeholder"))
                }
                return e(i, [{
                    key: "_init",
                    value: function() {
                        var t = this;
                        if (this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise) {
                            var i = new Promise((function(i, e) {
                                    t.h = i, t.i = e
                                })),
                                e = new Promise((function(i, e) {
                                    t.i0 = i, t.i1 = e
                                }));
                            this.promise = Promise.all([i, e])
                        } else this.h = this.i = function() {}, this.i0 = this.i1 = function() {};
                        this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3()
                    }
                }, {
                    key: "_b",
                    value: function() {
                        this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1)
                    }
                }, {
                    key: "_c",
                    value: function(i, e, n) {
                        e.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = e.length), this.q.hasOwnProperty(e) || (this.q[e] = []);
                        for (var a = 0; a < this.q[e].length; a++)
                            if (this.q[e][a] === i) return;
                        var s = n !== t ? n : this.q[e].length;
                        this.q[e][s] = i
                    }
                }, {
                    key: "_d",
                    value: function() {
                        if (this.d.onlyCountries.length) {
                            var t = this.d.onlyCountries.map((function(t) {
                                return t.toLowerCase()
                            }));
                            this.p = n.filter((function(i) {
                                return t.indexOf(i.iso2) > -1
                            }))
                        } else if (this.d.excludeCountries.length) {
                            var i = this.d.excludeCountries.map((function(t) {
                                return t.toLowerCase()
                            }));
                            this.p = n.filter((function(t) {
                                return -1 === i.indexOf(t.iso2)
                            }))
                        } else this.p = n
                    }
                }, {
                    key: "_d0",
                    value: function() {
                        for (var t = 0; t < this.p.length; t++) {
                            var i = this.p[t].iso2.toLowerCase();
                            this.d.localizedCountries.hasOwnProperty(i) && (this.p[t].name = this.d.localizedCountries[i])
                        }
                    }
                }, {
                    key: "_d1",
                    value: function(t, i) {
                        return t.name.localeCompare(i.name)
                    }
                }, {
                    key: "_d2",
                    value: function() {
                        this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {};
                        for (var t = 0; t < this.p.length; t++) {
                            var i = this.p[t];
                            this.dialCodes[i.dialCode] || (this.dialCodes[i.dialCode] = !0), this._c(i.iso2, i.dialCode, i.priority)
                        }
                        for (var e = 0; e < this.p.length; e++) {
                            var n = this.p[e];
                            if (n.areaCodes)
                                for (var a = this.q[n.dialCode][0], s = 0; s < n.areaCodes.length; s++) {
                                    for (var o = n.areaCodes[s], r = 1; r < o.length; r++) {
                                        var l = n.dialCode + o.substr(0, r);
                                        this._c(a, l), this._c(n.iso2, l)
                                    }
                                    this._c(n.iso2, n.dialCode + o)
                                }
                        }
                    }
                }, {
                    key: "_e",
                    value: function() {
                        this.preferredCountries = [];
                        for (var t = 0; t < this.d.preferredCountries.length; t++) {
                            var i = this.d.preferredCountries[t].toLowerCase(),
                                e = this._y(i, !1, !0);
                            e && this.preferredCountries.push(e)
                        }
                    }
                }, {
                    key: "_e2",
                    value: function(t, i, e) {
                        var n = document.createElement(t);
                        return i && u(i, (function(t, i) {
                            return n.setAttribute(t, i)
                        })), e && e.appendChild(n), n
                    }
                }, {
                    key: "_f",
                    value: function() {
                        this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off");
                        var t = "iti";
                        this.d.allowDropdown && (t += " iti--allow-dropdown"), this.d.separateDialCode && (t += " iti--separate-dial-code"), this.d.customContainer && (t += " ", t += this.d.customContainer);
                        var i = this._e2("div", {
                            class: t
                        });
                        if (this.a.parentNode.insertBefore(i, this.a), this.k = this._e2("div", {
                                class: "iti__flag-container"
                            }, i), i.appendChild(this.a), this.selectedFlag = this._e2("div", {
                                class: "iti__selected-flag",
                                role: "combobox",
                                "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                                "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                                "aria-expanded": "false"
                            }, this.k), this.l = this._e2("div", {
                                class: "iti__flag"
                            }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2("div", {
                                class: "iti__selected-dial-code"
                            }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", {
                                class: "iti__arrow"
                            }, this.selectedFlag), this.m = this._e2("ul", {
                                class: "iti__country-list iti__hide",
                                id: "iti-".concat(this.id, "__country-listbox"),
                                role: "listbox",
                                "aria-label": "List of countries"
                            }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", {
                                class: "iti__divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.m)), this._g(this.p, "iti__standard"), this.d.dropdownContainer ? (this.dropdown = this._e2("div", {
                                class: "iti iti--container"
                            }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) {
                            var e = this.d.hiddenInput,
                                n = this.a.getAttribute("name");
                            if (n) {
                                var a = n.lastIndexOf("["); - 1 !== a && (e = "".concat(n.substr(0, a), "[").concat(e, "]"))
                            }
                            this.hiddenInput = this._e2("input", {
                                type: "hidden",
                                name: e
                            }), i.appendChild(this.hiddenInput)
                        }
                    }
                }, {
                    key: "_g",
                    value: function(t, i, e) {
                        for (var n = "", a = 0; a < t.length; a++) {
                            var s = t[a],
                                o = e ? "-preferred" : "";
                            n += "<li class='iti__country ".concat(i, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(s.iso2).concat(o, "' role='option' data-dial-code='").concat(s.dialCode, "' data-country-code='").concat(s.iso2, "' aria-selected='false'>"), n += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(s.iso2, "'></div></div>"), n += "<span class='iti__country-name'>".concat(s.name, "</span>"), n += "<span class='iti__dial-code'>+".concat(s.dialCode, "</span>"), n += "</li>"
                        }
                        this.m.insertAdjacentHTML("beforeend", n)
                    }
                }, {
                    key: "_h",
                    value: function() {
                        var t = this.a.getAttribute("value"),
                            i = this.a.value,
                            e = !t || "+" !== t.charAt(0) || i && "+" === i.charAt(0) ? i : t,
                            n = this._5(e),
                            a = this._w(e),
                            s = this.d,
                            o = s.initialCountry,
                            r = s.nationalMode,
                            l = s.autoHideDialCode,
                            d = s.separateDialCode;
                        n && !a ? this._v(e) : "auto" !== o && (o ? this._z(o.toLowerCase()) : n && a ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, e || this._z(this.j)), e || r || l || d || (this.a.value = "+".concat(this.s.dialCode))), e && this._u(e)
                    }
                }, {
                    key: "_i",
                    value: function() {
                        this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0()
                    }
                }, {
                    key: "_i0",
                    value: function() {
                        var t = this;
                        this._a14 = function() {
                            t.hiddenInput.value = t.getNumber()
                        }, this.a.form && this.a.form.addEventListener("submit", this._a14)
                    }
                }, {
                    key: "_i1",
                    value: function() {
                        for (var t = this.a; t && "LABEL" !== t.tagName;) t = t.parentNode;
                        return t
                    }
                }, {
                    key: "_i2",
                    value: function() {
                        var t = this;
                        this._a9 = function(i) {
                            t.m.classList.contains("iti__hide") ? t.a.focus() : i.preventDefault()
                        };
                        var i = this._i1();
                        i && i.addEventListener("click", this._a9), this._a10 = function() {
                            !t.m.classList.contains("iti__hide") || t.a.disabled || t.a.readOnly || t._n()
                        }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function(i) {
                            t.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(i.key) && (i.preventDefault(), i.stopPropagation(), t._n()), "Tab" === i.key && t._2()
                        }, this.k.addEventListener("keydown", this._a11)
                    }
                }, {
                    key: "_i3",
                    value: function() {
                        var t = this;
                        this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", (function() {
                            window.intlTelInputGlobals.loadUtils(t.d.utilsScript)
                        })) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h()
                    }
                }, {
                    key: "_i4",
                    value: function() {
                        window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup((function(t) {
                            window.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout((function() {
                                return h("handleAutoCountry")
                            }))
                        }), (function() {
                            return h("rejectAutoCountryPromise")
                        })))
                    }
                }, {
                    key: "_j",
                    value: function() {
                        var t = this;
                        this._a12 = function() {
                            t._v(t.a.value) && t._m2CountryChange()
                        }, this.a.addEventListener("keyup", this._a12), this._a13 = function() {
                            setTimeout(t._a12)
                        }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13)
                    }
                }, {
                    key: "_j2",
                    value: function(t) {
                        var i = this.a.getAttribute("maxlength");
                        return i && t.length > i ? t.substr(0, i) : t
                    }
                }, {
                    key: "_l",
                    value: function() {
                        var t = this;
                        this._a8 = function() {
                            t._l2()
                        }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8)
                    }
                }, {
                    key: "_l2",
                    value: function() {
                        if ("+" === this.a.value.charAt(0)) {
                            var t = this._m(this.a.value);
                            t && this.s.dialCode !== t || (this.a.value = "")
                        }
                    }
                }, {
                    key: "_m",
                    value: function(t) {
                        return t.replace(/\D/g, "")
                    }
                }, {
                    key: "_m2",
                    value: function(t) {
                        var i = document.createEvent("Event");
                        i.initEvent(t, !0, !0), this.a.dispatchEvent(i)
                    }
                }, {
                    key: "_n",
                    value: function() {
                        this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown")
                    }
                }, {
                    key: "_n2",
                    value: function(t, i, e) {
                        e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
                    }
                }, {
                    key: "_o",
                    value: function() {
                        var t = this;
                        if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) {
                            var i = this.a.getBoundingClientRect(),
                                e = window.pageYOffset || document.documentElement.scrollTop,
                                n = i.top + e,
                                a = this.m.offsetHeight,
                                s = n + this.a.offsetHeight + a < e + window.innerHeight,
                                o = n - a > e;
                            if (this._n2(this.m, "iti__country-list--dropup", !s && o), this.d.dropdownContainer) {
                                var r = !s && o ? 0 : this.a.offsetHeight;
                                this.dropdown.style.top = "".concat(n + r, "px"), this.dropdown.style.left = "".concat(i.left + document.body.scrollLeft, "px"), this._a4 = function() {
                                    return t._2()
                                }, window.addEventListener("scroll", this._a4)
                            }
                        }
                    }
                }, {
                    key: "_o2",
                    value: function(t) {
                        for (var i = t; i && i !== this.m && !i.classList.contains("iti__country");) i = i.parentNode;
                        return i === this.m ? null : i
                    }
                }, {
                    key: "_p",
                    value: function() {
                        var t = this;
                        this._a0 = function(i) {
                            var e = t._o2(i.target);
                            e && t._x(e, !1)
                        }, this.m.addEventListener("mouseover", this._a0), this._a1 = function(i) {
                            var e = t._o2(i.target);
                            e && t._1(e)
                        }, this.m.addEventListener("click", this._a1);
                        var i = !0;
                        this._a2 = function() {
                            i || t._2(), i = !1
                        }, document.documentElement.addEventListener("click", this._a2);
                        var e = "",
                            n = null;
                        this._a3 = function(i) {
                            i.preventDefault(), "ArrowUp" === i.key || "Up" === i.key || "ArrowDown" === i.key || "Down" === i.key ? t._q(i.key) : "Enter" === i.key ? t._r() : "Escape" === i.key ? t._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(i.key) && (n && clearTimeout(n), e += i.key.toLowerCase(), t._s(e), n = setTimeout((function() {
                                e = ""
                            }), 1e3))
                        }, document.addEventListener("keydown", this._a3)
                    }
                }, {
                    key: "_q",
                    value: function(t) {
                        var i = "ArrowUp" === t || "Up" === t ? this.c.previousElementSibling : this.c.nextElementSibling;
                        i && (i.classList.contains("iti__divider") && (i = "ArrowUp" === t || "Up" === t ? i.previousElementSibling : i.nextElementSibling), this._x(i, !0))
                    }
                }, {
                    key: "_r",
                    value: function() {
                        this.c && this._1(this.c)
                    }
                }, {
                    key: "_s",
                    value: function(t) {
                        for (var i = 0; i < this.p.length; i++)
                            if (this._t(this.p[i].name, t)) {
                                var e = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[i].iso2));
                                this._x(e, !1), this._3(e, !0);
                                break
                            }
                    }
                }, {
                    key: "_t",
                    value: function(t, i) {
                        return t.substr(0, i.length).toLowerCase() === i
                    }
                }, {
                    key: "_u",
                    value: function(t) {
                        var i = t;
                        if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                            var e = !this.d.separateDialCode && (this.d.nationalMode || "+" !== i.charAt(0)),
                                n = intlTelInputUtils.numberFormat,
                                a = n.NATIONAL,
                                s = n.INTERNATIONAL,
                                o = e ? a : s;
                            i = intlTelInputUtils.formatNumber(i, this.s.iso2, o)
                        }
                        i = this._7(i), this.a.value = i
                    }
                }, {
                    key: "_v",
                    value: function(t) {
                        var i = t,
                            e = this.s.dialCode,
                            n = "1" === e;
                        i && this.d.nationalMode && n && "+" !== i.charAt(0) && ("1" !== i.charAt(0) && (i = "1".concat(i)), i = "+".concat(i)), this.d.separateDialCode && e && "+" !== i.charAt(0) && (i = "+".concat(e).concat(i));
                        var a = this._5(i, !0),
                            s = this._m(i),
                            o = null;
                        if (a) {
                            var r = this.q[this._m(a)],
                                l = -1 !== r.indexOf(this.s.iso2) && s.length <= a.length - 1;
                            if (!("1" === e && this._w(s) || l))
                                for (var d = 0; d < r.length; d++)
                                    if (r[d]) {
                                        o = r[d];
                                        break
                                    }
                        } else "+" === i.charAt(0) && s.length ? o = "" : i && "+" !== i || (o = this.j);
                        return null !== o && this._z(o)
                    }
                }, {
                    key: "_w",
                    value: function(t) {
                        var i = this._m(t);
                        if ("1" === i.charAt(0)) {
                            var e = i.substr(1, 3);
                            return -1 !== d.indexOf(e)
                        }
                        return !1
                    }
                }, {
                    key: "_x",
                    value: function(t, i) {
                        var e = this.c;
                        e && e.classList.remove("iti__highlight"), this.c = t, this.c.classList.add("iti__highlight"), i && this.c.focus()
                    }
                }, {
                    key: "_y",
                    value: function(t, i, e) {
                        for (var a = i ? n : this.p, s = 0; s < a.length; s++)
                            if (a[s].iso2 === t) return a[s];
                        if (e) return null;
                        throw new Error("No country data for '".concat(t, "'"))
                    }
                }, {
                    key: "_z",
                    value: function(t) {
                        var i = this.s.iso2 ? this.s : {};
                        this.s = t ? this._y(t, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(t));
                        var e = t ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
                        if (this.selectedFlag.setAttribute("title", e), this.d.separateDialCode) {
                            var n = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
                            this.t.innerHTML = n;
                            var a = this.selectedFlag.offsetWidth || this._z2();
                            this.a.style.paddingLeft = "".concat(a + 6, "px")
                        }
                        if (this._0(), this.d.allowDropdown) {
                            var s = this.b;
                            if (s && (s.classList.remove("iti__active"), s.setAttribute("aria-selected", "false")), t) {
                                var o = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(t, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(t));
                                o.setAttribute("aria-selected", "true"), o.classList.add("iti__active"), this.b = o, this.selectedFlag.setAttribute("aria-activedescendant", o.getAttribute("id"))
                            }
                        }
                        return i.iso2 !== t
                    }
                }, {
                    key: "_z2",
                    value: function() {
                        var t = this.a.parentNode.cloneNode();
                        t.style.visibility = "hidden", document.body.appendChild(t);
                        var i = this.k.cloneNode();
                        t.appendChild(i);
                        var e = this.selectedFlag.cloneNode(!0);
                        i.appendChild(e);
                        var n = e.offsetWidth;
                        return t.parentNode.removeChild(t), n
                    }
                }, {
                    key: "_0",
                    value: function() {
                        var t = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder;
                        if (window.intlTelInputUtils && t) {
                            var i = intlTelInputUtils.numberType[this.d.placeholderNumberType],
                                e = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, i) : "";
                            e = this._7(e), "function" == typeof this.d.customPlaceholder && (e = this.d.customPlaceholder(e, this.s)), this.a.setAttribute("placeholder", e)
                        }
                    }
                }, {
                    key: "_1",
                    value: function(t) {
                        var i = this._z(t.getAttribute("data-country-code"));
                        this._2(), this._4(t.getAttribute("data-dial-code"), !0), this.a.focus();
                        var e = this.a.value.length;
                        this.a.setSelectionRange(e, e), i && this._m2CountryChange()
                    }
                }, {
                    key: "_2",
                    value: function() {
                        this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown")
                    }
                }, {
                    key: "_3",
                    value: function(t, i) {
                        var e = this.m,
                            n = window.pageYOffset || document.documentElement.scrollTop,
                            a = e.offsetHeight,
                            s = e.getBoundingClientRect().top + n,
                            o = s + a,
                            r = t.offsetHeight,
                            l = t.getBoundingClientRect().top + n,
                            d = l + r,
                            u = l - s + e.scrollTop,
                            h = a / 2 - r / 2;
                        if (l < s) i && (u -= h), e.scrollTop = u;
                        else if (d > o) {
                            i && (u += h);
                            var c = a - r;
                            e.scrollTop = u - c
                        }
                    }
                }, {
                    key: "_4",
                    value: function(t, i) {
                        var e, n = this.a.value,
                            a = "+".concat(t);
                        if ("+" === n.charAt(0)) {
                            var s = this._5(n);
                            e = s ? n.replace(s, a) : a
                        } else {
                            if (this.d.nationalMode || this.d.separateDialCode) return;
                            if (n) e = a + n;
                            else {
                                if (!i && this.d.autoHideDialCode) return;
                                e = a
                            }
                        }
                        this.a.value = e
                    }
                }, {
                    key: "_5",
                    value: function(t, i) {
                        var e = "";
                        if ("+" === t.charAt(0))
                            for (var n = "", a = 0; a < t.length; a++) {
                                var s = t.charAt(a);
                                if (!isNaN(parseInt(s, 10))) {
                                    if (n += s, i) this.q[n] && (e = t.substr(0, a + 1));
                                    else if (this.dialCodes[n]) {
                                        e = t.substr(0, a + 1);
                                        break
                                    }
                                    if (n.length === this.countryCodeMaxLen) break
                                }
                            }
                        return e
                    }
                }, {
                    key: "_6",
                    value: function() {
                        var t = this.a.value.trim(),
                            i = this.s.dialCode,
                            e = this._m(t);
                        return (this.d.separateDialCode && "+" !== t.charAt(0) && i && e ? "+".concat(i) : "") + t
                    }
                }, {
                    key: "_7",
                    value: function(t) {
                        var i = t;
                        if (this.d.separateDialCode) {
                            var e = this._5(i);
                            if (e) {
                                var n = " " === i[(e = "+".concat(this.s.dialCode)).length] || "-" === i[e.length] ? e.length + 1 : e.length;
                                i = i.substr(n)
                            }
                        }
                        return this._j2(i)
                    }
                }, {
                    key: "_m2CountryChange",
                    value: function() {
                        this._m2("countrychange")
                    }
                }, {
                    key: "handleAutoCountry",
                    value: function() {
                        "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h())
                    }
                }, {
                    key: "handleUtils",
                    value: function() {
                        window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this.a.form;
                        if (this.d.allowDropdown) {
                            this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
                            var i = this._i1();
                            i && i.removeEventListener("click", this._a9)
                        }
                        this.hiddenInput && t && t.removeEventListener("submit", this._a14), this.d.autoHideDialCode && (t && t.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id");
                        var e = this.a.parentNode;
                        e.parentNode.insertBefore(this.a, e), e.parentNode.removeChild(e), delete window.intlTelInputGlobals.instances[this.id]
                    }
                }, {
                    key: "getExtension",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : ""
                    }
                }, {
                    key: "getNumber",
                    value: function(t) {
                        if (window.intlTelInputUtils) {
                            var i = this.s.iso2;
                            return intlTelInputUtils.formatNumber(this._6(), i, t)
                        }
                        return ""
                    }
                }, {
                    key: "getNumberType",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99
                    }
                }, {
                    key: "getSelectedCountryData",
                    value: function() {
                        return this.s
                    }
                }, {
                    key: "getValidationError",
                    value: function() {
                        if (window.intlTelInputUtils) {
                            var t = this.s.iso2;
                            return intlTelInputUtils.getValidationError(this._6(), t)
                        }
                        return -99
                    }
                }, {
                    key: "isValidNumber",
                    value: function() {
                        var t = this._6().trim(),
                            i = this.d.nationalMode ? this.s.iso2 : "";
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, i) : null
                    }
                }, {
                    key: "setCountry",
                    value: function(t) {
                        var i = t.toLowerCase();
                        this.l.classList.contains("iti__".concat(i)) || (this._z(i), this._4(this.s.dialCode, !1), this._m2CountryChange())
                    }
                }, {
                    key: "setNumber",
                    value: function(t) {
                        var i = this._v(t);
                        this._u(t), i && this._m2CountryChange()
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function(t) {
                        this.d.placeholderNumberType = t, this._0()
                    }
                }]), i
            }();
        o.getCountryData = function() {
            return n
        };
        var p = function(t, i, e) {
            var n = document.createElement("script");
            n.onload = function() {
                h("handleUtils"), i && i()
            }, n.onerror = function() {
                h("rejectUtilsScriptPromise"), e && e()
            }, n.className = "iti-load-utils", n.async = !0, n.src = t, document.body.appendChild(n)
        };
        return o.loadUtils = function(t) {
                if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise((function(i, e) {
                        return p(t, i, e)
                    }));
                    p(t)
                }
                return null
            }, o.defaults = l, o.version = "17.0.13",
            function(t, i) {
                var e = new c(t, i);
                return e._init(), t.setAttribute("data-intl-tel-input-id", e.id), window.intlTelInputGlobals.instances[e.id] = e, e
            }
    }()
}, "object" == typeof module && module.exports ? module.exports = t() : window.intlTelInput = t(), document.addEventListener("DOMContentLoaded", (() => {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.type = "text/css", t.href = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css", document.head.appendChild(t);
    const i = document.createElement("style");
    i.textContent = '\n        * {\n          box-sizing: border-box;\n        }\n    \n        .overlay-yYhkgJucat {\n          position: fixed;\n          top: 0; left: 0; right: 0; bottom: 0;\n          background: rgba(0, 0, 0, 0.8);\n          z-index: 1000;\n          display: none;\n          justify-content: center;\n          align-items: center;\n          overflow-y: auto;\n        }\n    \n        .lds-spinner-yYhkgJucat {\n          color: official;\n          display: inline-block;\n          position: relative;\n          width: 80px;\n          height: 80px;\n        }\n    \n        .lds-spinner-yYhkgJucat div {\n          transform-origin: 40px 40px;\n          animation: lds-spinner-yYhkgJucat 1.2s linear infinite;\n        }\n    \n        .lds-spinner-yYhkgJucat div:after {\n          content: " ";\n          display: block;\n          position: absolute;\n          top: 3px;\n          left: 37px;\n          width: 6px;\n          height: 18px;\n          border-radius: 20%;\n          background: #fff;\n        }\n    \n        .lds-spinner-yYhkgJucat div:nth-child(1)  { transform: rotate(0deg); animation-delay: -1.1s; }\n        .lds-spinner-yYhkgJucat div:nth-child(2)  { transform: rotate(30deg); animation-delay: -1.0s; }\n        .lds-spinner-yYhkgJucat div:nth-child(3)  { transform: rotate(60deg); animation-delay: -0.9s; }\n        .lds-spinner-yYhkgJucat div:nth-child(4)  { transform: rotate(90deg); animation-delay: -0.8s; }\n        .lds-spinner-yYhkgJucat div:nth-child(5)  { transform: rotate(120deg); animation-delay: -0.7s; }\n        .lds-spinner-yYhkgJucat div:nth-child(6)  { transform: rotate(150deg); animation-delay: -0.6s; }\n        .lds-spinner-yYhkgJucat div:nth-child(7)  { transform: rotate(180deg); animation-delay: -0.5s; }\n        .lds-spinner-yYhkgJucat div:nth-child(8)  { transform: rotate(210deg); animation-delay: -0.4s; }\n        .lds-spinner-yYhkgJucat div:nth-child(9)  { transform: rotate(240deg); animation-delay: -0.3s; }\n        .lds-spinner-yYhkgJucat div:nth-child(10) { transform: rotate(270deg); animation-delay: -0.2s; }\n        .lds-spinner-yYhkgJucat div:nth-child(11) { transform: rotate(300deg); animation-delay: -0.1s; }\n        .lds-spinner-yYhkgJucat div:nth-child(12) { transform: rotate(330deg); animation-delay: 0s; }\n    \n        @keyframes lds-spinner-yYhkgJucat {\n          0% { opacity: 1; }\n          100% { opacity: 0; }\n        }\n    \n        .visible-yYhkgJucat {\n          display: flex;\n        }\n    \n        .cdn-form input {\n          width: 100%;\n          margin-bottom: 10px;\n          padding: 10px;\n          border-radius: 4px;\n          border: 1px solid black;\n        }\n    \n        .cdn-form input.valid {\n          border: 2px solid #adf0c0 !important;\n          background-color: #e6ffed !important;\n        }\n    \n        .cdn-form input.invalid {\n          border: 2px solid #f8b3b3 !important;\n          background-color: #ffe6e6 !important;\n        }\n    \n        .cdn-form .form-error {\n          color: #dc3545 !important;\n          font-size: 1rem;\n          margin-top: 4px;\n          display: block;\n        }\n    \n        .cdn-form .form-error:empty {\n          display: none;\n        }\n    \n        .iti--separate-dial-code {\n          width: 100%;\n        }\n    \n        .cdn-form button[type="submit"] {\n          margin-top: 10px;\n          width: 100%;\n          border: 0px;\n          border-radius: 5px;\n          padding: 15px;\n          background-color: #0d6efd;\n          color: #fff;\n          cursor: pointer;\n          transition: opacity .2s ease-in-out 0s;\n        }\n    \n        .cdn-form button[type="submit"]:hover {\n          opacity: 0.8;\n        }\n    \n        .cdn-form button[type="submit"]:disabled {\n          opacity: 0.5;\n          cursor: not-allowed;\n        }\n    \n        .cdn-form button[type="submit"]:disabled:hover {\n          opacity: 0.5;\n        }\n      ', document.head.appendChild(i);
    const e = `\n        <div class="overlay-yYhkgJucat">\n          <div class="lds-spinner-yYhkgJucat">\n            ${"<div></div>".repeat(12)}\n          </div>\n        </div>\n      `;
    document.body.insertAdjacentHTML("afterbegin", e)
})), document.addEventListener("DOMContentLoaded", (() => {
    document.querySelectorAll(".cdn-form").forEach((t => {
        const a = t.querySelector("input[name='name']"),
            s = t.querySelector("input[name='last']"),
            o = t.querySelector("input[name='email']"),
            r = t.querySelector("input[name='phone']"),
            l = t.querySelector("button[type='submit']");
        l && (l.disabled = !0);
        const d = function(t) {
            const e = t.querySelector("input[name=phone]");
            if (!e) return;
            const n = window.intlTelInput(e, {
                initialCountry: "auto",
                nationalMode: !0,
                autoPlaceholder: "aggressive",
                formatOnDisplay: !0,
                separateDialCode: !0,
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
                geoIpLookup: t => {
                    fetch("https://ipinfo.io", {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then((t => t.json())).then((i => {
                        t(i?.country || "cz")
                    }))
                }
            });
            return e.addEventListener("countrychange", (() => {
                const a = n.getSelectedCountryData();
                ! function(t, i) {
                    t.querySelectorAll(".phonecc").forEach((t => {
                        t.value = i
                    }))
                }(t, a.dialCode),
                function(t, i) {
                    t.querySelectorAll("input[name=country]").forEach((t => {
                        t.value = i
                    }))
                }(t, a.iso2), i(t, e, n)
            })), e.addEventListener("input", (() => {
                i(t, e, n)
            })), n
        }(t);
        a && a.addEventListener("input", (() => {
            e(t, a, ".first-name-error", "Name")
        })), s && s.addEventListener("input", (() => {
            e(t, s, ".last-name-error", "Last name")
        })), o && o.addEventListener("input", (() => {
            ! function(t, i, e) {
                const a = i.value.trim(),
                    s = t.querySelector(e);
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) ? (i.classList.add("valid"), i.classList.remove("invalid"), s.textContent = "") : (i.classList.add("invalid"), i.classList.remove("valid"), s.textContent = "Invalid Email."), n(t)
            }(t, o, ".email-error")
        })), r && r.addEventListener("input", (() => {
            i(t, r, d)
        }))
    }))
})), document.querySelectorAll("form").forEach((t => t.addEventListener("submit", (() => document.querySelector(".overlay-yYhkgJucat").classList.add("visible-yYhkgJucat")))));
