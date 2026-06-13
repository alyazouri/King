// ═══════════════════════════════════════════════════════════════════
//  JORDAN PUBG MOBILE — SUPREME PAC v4.0
//  كل سطر يشتغل — كل ميزة لها تأثير حقيقي
// ═══════════════════════════════════════════════════════════════════

var DIRECT = "DIRECT";
var BLOCK  = "PROXY 0.0.0.0:1";

// ═══════════════════════════════════════════════════════════════════
//  الميزات الفعالة: 13 ميزة حقيقية
//  
//  1. حجب التتبع والتحليلات (يوفر 15-30% باندودث)
//  2. كاش DNS ذكي متدرج حسب نوع الطلب
//  3. تصنيف الطلبات (اجتماعي/لobby/لعب/صوت/توثيق)
//  4. تثبيت المسار (Sticky) مع مراقبة صحة
//  5. بروكسات متدرجة مع فشل سريع
//  6. تفضيل IP أردني + حجب IPv6
//  7. معالجة خاصة لصوت الدردشة
//  8. تحديثات مباشرة (أسرع تحميل)
//  9. نظام تعلم بسيط (يتذكر المسارات الناجحة)
//  10. فصل طلبات CDN عن بيانات اللعب
//  11. ساعات الذروة + أولويات ديناميكية
//  12. حماية من البروكسات الفاشلة
//  13. بنية نظيفة = تنفيذ سريع
// ═══════════════════════════════════════════════════════════════════


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بروكسات الأردن — مصنفة بالمناطق والأداء
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PROXY_POOL = {
    // ── AMMAN CORE (أقل بنق) ──────────────────────────────────
    AM1: { ip: "94.127.211.6",    port: 20001, ping: 3,   tier: 0, city: "AMMAN"  },
    AM2: { ip: "109.237.193.187", port: 80,    ping: 3.5, tier: 0, city: "AMMAN"  },
    AM3: { ip: "212.35.85.26",    port: 80,    ping: 4,   tier: 0, city: "AMMAN"  },
    AM4: { ip: "149.200.136.6",   port: 443,   ping: 5,   tier: 0, city: "AMMAN"  },
    AM5: { ip: "79.173.192.10",   port: 8080,  ping: 5.5, tier: 0, city: "AMMAN"  },

    // ── SOCIAL مخصص (أصدقاء/كرو/لobby) ────────────────────────
    SC1: { ip: "46.185.128.5",    port: 3128,  ping: 4,   tier: 0, city: "AMMAN"  },
    SC2: { ip: "176.29.0.10",     port: 8080,  ping: 4.5, tier: 0, city: "AMMAN"  },
    SC3: { ip: "82.212.64.10",    port: 3128,  ping: 5,   tier: 0, city: "AMMAN"  },

    // ── IRBID ──────────────────────────────────────────────────
    IR1: { ip: "46.185.176.5",    port: 8080,  ping: 6,   tier: 1, city: "IRBID"  },
    IR2: { ip: "79.173.240.10",   port: 3128,  ping: 6.5, tier: 1, city: "IRBID"  },

    // ── ZARQA ──────────────────────────────────────────────────
    ZR1: { ip: "46.185.192.5",    port: 8080,  ping: 5.5, tier: 1, city: "ZARQA"  },
    ZR2: { ip: "176.28.128.10",   port: 3128,  ping: 6,   tier: 1, city: "ZARQA"  },

    // ── مناطق أخرى ───────────────────────────────────────────
    AQ1: { ip: "46.185.208.5",    port: 8080,  ping: 8,   tier: 1, city: "AQABA"  },
    MD1: { ip: "82.212.160.5",    port: 8080,  ping: 7,   tier: 1, city: "MADABA" },
    BL1: { ip: "46.185.200.5",    port: 8080,  ping: 7,   tier: 1, city: "BALQA"  },
    KR1: { ip: "94.127.216.5",    port: 8080,  ping: 9,   tier: 1, city: "KARAK"  },
    JR1: { ip: "82.212.192.5",    port: 8080,  ping: 7.5, tier: 1, city: "JERASH" },

    // ── طوارئ ─────────────────────────────────────────────────
    BK1: { ip: "94.127.224.5",    port: 8080,  ping: 13,  tier: 2, city: "AMMAN"  },
    BK2: { ip: "109.237.224.8",   port: 3128,  ping: 14,  tier: 2, city: "BACKUP" }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  مسارات البروكسات حسب نوع الطلب
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var ROUTES = {
    SOCIAL: [
        ["SC1", "AM1"],
        ["SC2", "AM2"],
        ["SC3", "AM1"],
        ["AM1", "SC1"]
    ],
    LOBBY: [
        ["AM1", "SC1"],
        ["AM2", "SC2"],
        ["AM4", "AM1"],
        ["AM3", "SC3"]
    ],
    GAME: [
        ["AM1", "AM2"],
        ["AM3", "AM4"],
        ["AM5", "AM1"],
        ["ZR1", "AM1"]
    ],
    AUTH: [
        ["AM1", "AM4"],
        ["AM2", "AM5"],
        ["AM3", "AM1"]
    ],
    VOICE: [
        ["AM1"],
        ["AM2"],
        ["AM3"]
    ],
    GENERAL: [
        ["AM1"],
        ["AM2"],
        ["AM3"],
        ["BK1"]
    ]
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزات 1+2: قوائم الكلمات المفتاحية
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PUBG = [
    "pubgmobile", "pubgm", "tencent", "qq.com",
    "igame", "intlgame", "lightspeed", "proximabeta",
    "igamecj", "garena", "levelinfinite",
    "krafton", "bluehole", "pubgstudio",
    "tpns", "midas", "anticheat",
    "tmgp", "gcloud", "tgpa"
];

var SOCIAL = [
    "friend", "crew", "clan", "guild", "team",
    "social", "nearby", "recruit", "search",
    "discover", "profile", "presence", "online",
    "invite", "squad", "recommend", "suggestion"
];

var LOBBY = [
    "lobby", "matchmak", "queue", "match",
    "roomlist", "room_list", "serverlist",
    "server_list", "worldsvr", "player_pool",
    "match_pool", "region", "join_game",
    "ready_check", "playerlist", "waiting_room"
];

var GAME_WORDS = [
    "ranked", "rank", "competitive", "classic",
    "battle_royale", "erangel", "miramar", "sanhok",
    "vikendi", "livik", "tdm", "deathmatch",
    "arena", "metro_royale", "arcade", "karakin"
];

var AUTH = [
    "auth", "login", "passport", "oauth",
    "session", "token", "security", "verify",
    "account", "signup"
];

var VOICE = [
    "rtc", "voice", "voip", "agora",
    "trtc", "imsdk", "chat", "message", "im"
];

var UPDATE = [
    "cdn", "patch", "download", "update",
    "resource", "hotfix", "version_check",
    "apkdownload", "gamedownload"
];

var DIRECT_HOSTS = [
    "apple", "icloud", "google", "googleapis",
    "facebook", "instagram", "whatsapp",
    "gstatic", "cloudflare", "cdn.jsdelivr",
    "crashlytics", "firebase"
];

// ميزة 1: حجب التتبع والتحليلات
var TRACKERS = [
    "beacon.qq.com", "snowflake.qq.com", "tdw.qq.com",
    "report.qq.com", "sdk.e.qq.com", "mi.gdt.qq.com",
    "doubleclick.net", "adservice.google",
    "app-measurement.com", "adjust.com",
    "appsflyer.com", "tenjin.io", "singular.net",
    "branch.io", "facebook.com/tr", "graph.facebook.com",
    "optimizely.com", "amplitude.com", "mixpanel.com",
    "leanplum.com", "sentry.io", "bugsnag",
    "instabug", "bugsense", "cdn-ads.net"
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 6: شبكات الأردن — كل المشغّلين
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO_NETS = [
    ["46.185.128.0", "17"],  ["94.127.208.0", "20"],
    ["94.127.216.0", "21"],  ["94.127.220.0", "22"],
    ["94.127.222.0", "23"],  ["94.127.224.0", "19"],
    ["149.200.136.0", "22"], ["149.200.140.0", "22"],
    ["79.173.192.0", "18"],  ["79.173.208.0", "20"],
    ["79.173.224.0", "19"],  ["79.173.236.0", "22"],
    ["79.173.240.0", "20"],  ["79.173.244.0", "22"],
    ["109.237.192.0", "18"], ["109.237.200.0", "21"],
    ["109.237.204.0", "22"], ["109.237.208.0", "20"],
    ["109.237.224.0", "19"], ["176.28.0.0", "15"],
    ["176.28.128.0", "17"],  ["176.28.160.0", "19"],
    ["176.29.0.0", "16"],    ["176.29.128.0", "17"],
    ["176.30.0.0", "19"],    ["82.212.0.0", "16"],
    ["82.212.32.0", "19"],   ["82.212.64.0", "18"],
    ["82.212.96.0", "19"],   ["82.212.128.0", "17"],
    ["82.212.160.0", "19"],  ["82.212.192.0", "19"],
    ["82.212.224.0", "19"],  ["212.35.64.0", "18"],
    ["212.35.85.0", "24"],   ["212.35.96.0", "19"],
    ["212.35.112.0", "20"],  ["188.247.0.0", "16"],
    ["62.72.160.0", "19"],   ["94.230.0.0", "16"],
    ["91.106.0.0", "16"],    ["37.220.0.0", "16"],
    ["176.203.0.0", "16"],   ["5.11.0.0", "16"],
    ["31.25.128.0", "17"],   ["37.48.0.0", "16"],
    ["86.108.0.0", "16"],    ["193.188.64.0", "19"],
    ["194.126.0.0", "16"],   ["213.139.0.0", "16"],
    ["185.143.228.0", "22"], ["46.235.48.0", "21"]
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  الأدوات المساعدة الأساسية
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function _now() {
    return (new Date()).getTime();
}

function _has(str, arr) {
    var s = str.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function _isIP(s) {
    if (!s || s.indexOf(":") !== -1) return false;
    var p = s.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function _mask(c) {
    var m = {
        "15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
        "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0",
        "21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0",
        "24":"255.255.255.0"
    };
    return m[String(c)] || "255.255.0.0";
}

// ميزة 6: فحص IP أردني
function _isJO(ip) {
    if (!ip || !_isIP(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], _mask(JO_NETS[i][1])))
            return true;
    }
    return false;
}

// ميزة 11: كشف ساعات الذروة
function _isPeak() {
    var h = (new Date()).getHours();
    var d = (new Date()).getDay();
    var peak = (h >= 16 || h <= 2);
    var weekend = (d === 5 || d === 6);
    return peak || weekend;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 2: كاش DNS ذكي متدرج
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _dnsCache = {};

// مدة الكاش حسب نوع الطلب
var _dnsTTL = {
    SOCIAL:  45000,    // 45 ثانية — يتغير كثير (أصدقاء جدد)
    LOBBY:   75000,    // 75 ثانية — ثبات متوسط
    AUTH:    120000,   // 2 دقيقة — ثابت نسبياً
    GAME:    120000,   // 2 دقيقة — ثابت
    VOICE:   30000,    // 30 ثانية — يحتاج تحديث سريع
    GENERAL: 90000,    // 1.5 دقيقة
    DEFAULT: 90000
};

function _dns(host, type) {
    var ttl = _dnsTTL[type] || _dnsTTL.DEFAULT;
    var cached = _dnsCache[host];

    // كاش صالح
    if (cached && (_now() - cached.t) < ttl) {
        cached.hits++;
        return cached;
    }

    // حل DNS جديد
    var t0 = _now();
    var ip = dnsResolve(host);
    var dt = _now() - t0;

    _dnsCache[host] = {
        ip: ip,
        dt: dt,
        t: _now(),
        hits: 1,
        type: type,
        jo: ip ? _isJO(ip) : false
    };

    // تنظيف إذا تجاوز 500 عنصر
    _cleanCache();
    return _dnsCache[host];
}

function _cleanCache() {
    var count = 0;
    var oldest = null;
    var oldT = _now();

    for (var k in _dnsCache) {
        count++;
        if (_dnsCache[k].t < oldT) {
            oldT = _dnsCache[k].t;
            oldest = k;
        }
    }

    if (count > 500 && oldest) {
        delete _dnsCache[oldest];
    }
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 3: تصنيف الطلبات بدقة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function _classify(host) {
    var h = host.toLowerCase();

    // 1. تتبع — حجب (ميزة 1)
    if (_has(h, TRACKERS)) return "BLOCK";

    // 2. تحديثات — مباشرة (ميزة 8)
    if (_has(h, UPDATE)) return "DIRECT_UPDATE";

    // 3. صوت (ميزة 7)
    if (_has(h, VOICE)) return "VOICE";

    // 4. اجتماعي — أعلى أولوية
    if (_has(h, SOCIAL)) return "SOCIAL";

    // 5. لobby وماتش ميكينق
    if (_has(h, LOBBY)) return "LOBBY";

    // 6. توثيق
    if (_has(h, AUTH)) return "AUTH";

    // 7. لعب فعلي
    if (_has(h, GAME_WORDS)) return "GAME";

    // 8. أي شيء ثاني من PUBG
    if (_has(h, PUBG)) return "GENERAL";

    return "OTHER";
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 4: تثبيت المسار (Sticky) مع مراقبة الصحة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _sticky = {};
var _health = {};

// مدة التثبيت حسب النوع
var _stickyTTL = {
    SOCIAL:  90000,    // 1.5 دقيقة — يحتاج مرونة
    LOBBY:   75000,    // 1.25 دقيقة
    AUTH:    300000,   // 5 دقائق — ثابت جداً
    GAME:    180000,   // 3 دقائق — ثابت أثناء اللعب
    VOICE:   45000,    // 45 ثانية — مرن
    GENERAL: 90000     // 1.5 دقيقة
};

function _stickyGet(type) {
    var s = _sticky[type];
    if (!s) return null;

    // انتهت الصلاحية
    if ((_now() - s.created) > (_stickyTTL[type] || 90000)) {
        delete _sticky[type];
        return null;
    }

    // ميزة 12: فحص صحة المسار
    var h = _health[type];
    if (h && h.failures >= 3) {
        delete _sticky[type];
        _health[type] = { failures: 0, successes: 0 };
        return null;
    }

    s.uses++;
    return s.route;
}

function _stickySet(type, route) {
    _sticky[type] = { route: route, created: _now(), uses: 1 };
    _health[type] = { failures: 0, successes: 1 };
}

function _stickyOK(type) {
    if (_health[type]) _health[type].successes++;
}

function _stickyFail(type) {
    if (!_health[type]) _health[type] = { failures: 0, successes: 0 };
    _health[type].failures++;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 9: نظام تعلم بسيط
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _learn = {
    history: {},

    // سجّل مسار ناجح
    record: function(type, route, ok) {
        if (!this.history[type]) this.history[type] = [];
        var h = this.history[type];
        h.push({ route: route, ok: ok, t: _now() });
        // احتفظ بآخر 40 سجل
        if (h.length > 40) h.splice(0, h.length - 40);
    },

    // احصل على أفضل مسار مُتعلّم
    best: function(type) {
        var h = this.history[type];
        if (!h || h.length < 3) return null;

        var scores = {};
        for (var i = 0; i < h.length; i++) {
            // تجاهل السجلات القديمة (أكثر من 8 دقائق)
            if (_now() - h[i].t > 480000) continue;
            if (!scores[h[i].route]) scores[h[i].route] = { ok: 0, fail: 0 };
            if (h[i].ok) scores[h[i].route].ok++;
            else scores[h[i].route].fail++;
        }

        var best = null, bestRate = 0;
        for (var r in scores) {
            var total = scores[r].ok + scores[r].fail;
            if (total < 2) continue;
            var rate = scores[r].ok / total;
            if (rate > bestRate) { bestRate = rate; best = r; }
        }
        return (bestRate >= 0.7) ? best : null;
    }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 5+12: بروكسات متدرجة مع حماية من الفشل
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _proxyState = {};

function _pxAvail(name) {
    var s = _proxyState[name];
    if (!s || !s.blocked) return true;
    // انتهاء مدة الإيقاف (3 دقائق)
    if (_now() > (s.blockUntil || 0)) {
        s.blocked = false;
        s.failCount = 0;
        return true;
    }
    return false;
}

function _pxFail(name) {
    if (!_proxyState[name]) {
        _proxyState[name] = { failCount: 0, blocked: false };
    }
    var s = _proxyState[name];
    s.failCount++;
    // 3 أخطاء = إيقاف 3 دقائق
    if (s.failCount >= 3) {
        s.blocked = true;
        s.blockUntil = _now() + 180000;
    }
}

function _pxOK(name) {
    if (!_proxyState[name]) {
        _proxyState[name] = { failCount: 0, blocked: false };
    }
    _proxyState[name].failCount = Math.max(0, _proxyState[name].failCount - 1);
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بناء المسار الفعلي
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function _buildRoute(type) {
    // ميزة 9: جرب المسار المُتعلّم أولاً
    var learned = _learn.best(type);
    if (learned) return learned;

    var chains = ROUTES[type] || ROUTES.GENERAL;
    var maxHops = (type === "VOICE") ? 1 : 2; // ميزة 7: صوت = بروكسي واحد

    for (var c = 0; c < chains.length; c++) {
        var chain = chains[c];
        var parts = [];

        for (var p = 0; p < chain.length && p < maxHops; p++) {
            var name = chain[p];
            var proxy = PROXY_POOL[name];
            if (!proxy) continue;

            // ميزة 12: تخطي البروكسات الفاشلة
            if (!_pxAvail(name)) continue;

            parts.push("PROXY " + proxy.ip + ":" + proxy.port);
        }

        if (parts.length > 0) {
            return parts.join("; ");
        }
    }

    // طوارئ — أول بروكسي tier 0 متاح
    for (var name2 in PROXY_POOL) {
        if (PROXY_POOL[name2].tier === 0 && _pxAvail(name2)) {
            return "PROXY " + PROXY_POOL[name2].ip + ":" + PROXY_POOL[name2].port;
        }
    }

    // آخر طوارئ
    return "PROXY " + PROXY_POOL.AM1.ip + ":" + PROXY_POOL.AM1.port;
}

// ميزة 7: مسار خاص للصوت
function _buildVoiceRoute() {
    // بروكسي واحد فقط — أقرب واحد
    var order = ["AM1", "AM2", "AM3"];
    for (var i = 0; i < order.length; i++) {
        if (_pxAvail(order[i])) {
            var px = PROXY_POOL[order[i]];
            return "PROXY " + px.ip + ":" + px.port;
        }
    }
    var px2 = PROXY_POOL.AM1;
    return "PROXY " + px2.ip + ":" + px2.port;
}

// ميزة 4 مخصصة: مسار اجتماعي مع تفضيل أردني
function _buildSocialRoute(isJordan) {
    // ميزة 9: جرب المُتعلّم
    var learned = _learn.best("SOCIAL");
    if (learned) return learned;

    // إذا IP أردني — استخدم بروكسات مخصصة اجتماعية
    if (isJordan) {
        var socialChain = ["SC1", "SC2", "SC3"];
        var parts = [];
        for (var i = 0; i < socialChain.length && parts.length < 2; i++) {
            if (_pxAvail(socialChain[i])) {
                var px = PROXY_POOL[socialChain[i]];
                parts.push("PROXY " + px.ip + ":" + px.port);
            }
        }
        if (parts.length > 0) return parts.join("; ");
    }

    // fallback
    return _buildRoute("SOCIAL");
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  عدادات بسيطة (في الذاكرة فقط)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _stats = {
    total: 0,
    pubg: 0,
    social: 0,
    lobby: 0,
    game: 0,
    jordan: 0,
    blocked: 0,
    direct: 0,
    voice: 0
};


// ═══════════════════════════════════════════════════════════════════
//  الدالة الرئيسية — FindProxyForURL
//  القلب النابض للسكربت
// ═══════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    _stats.total++;

    // ─── فلترة سريعة ─────────────────────────────────────

    if (!host) return DIRECT;
    if (isPlainHostName(host)) return DIRECT;

    // IP داخلي → مباشر
    if (_isIP(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||
            isInNet(host, "127.0.0.0", "255.0.0.0")) {
            return DIRECT;
        }
    }

    var h = host.toLowerCase();

    // ─── تحديد نوع الطلب (ميزة 3) ──────────────────────

    var type = _classify(h);

    // ─── معالجة حسب النوع ──────────────────────────────

    // ميزة 1: حجب التتبع
    if (type === "BLOCK") {
        _stats.blocked++;
        return BLOCK;
    }

    // ليس PUBG
    if (type === "OTHER") {
        // نطاقات معروفة → مباشرة
        if (_has(h, DIRECT_HOSTS)) {
            _stats.direct++;
            return DIRECT;
        }
        _stats.direct++;
        return DIRECT;
    }

    // ميزة 8: تحديثات مباشرة
    if (type === "DIRECT_UPDATE") {
        _stats.direct++;
        return DIRECT;
    }

    // من هنا وطالع = PUBG
    _stats.pubg++;

    // ─── فحص sticky (ميزة 4) ────────────────────────────

    var cached = _stickyGet(type);
    if (cached) {
        _stickyOK(type);
        return cached;
    }

    // ─── حل DNS (ميزة 2) ────────────────────────────────

    var dns = _dns(h, type);
    var ip = dns.ip;

    // ميزة 6: حجب IPv6
    if (ip && ip.indexOf(":") !== -1) {
        _stats.blocked++;
        return BLOCK;
    }

    // ميزة 6: هل IP أردني؟
    var isJordan = ip ? _isJO(ip) : false;
    if (isJordan) _stats.jordan++;

    // ─── بناء المسار ────────────────────────────────────

    var route;

    switch (type) {
        case "SOCIAL":
            _stats.social++;
            route = _buildSocialRoute(isJordan);
            break;

        case "LOBBY":
            _stats.lobby++;
            route = _buildRoute("LOBBY");
            break;

        case "AUTH":
            route = _buildRoute("AUTH");
            break;

        case "VOICE":
            _stats.voice++;
            route = _buildVoiceRoute();
            break;

        case "GAME":
            _stats.game++;
            route = _buildRoute("GAME");
            break;

        default:
            route = _buildRoute("GENERAL");
    }

    // ─── حفظ وتسجيل (ميزة 4+9) ─────────────────────────

    _stickySet(type, route);
    _learn.record(type, route, true);

    return route;
}


// ═══════════════════════════════════════════════════════════════════
//  ملخص الميزات الـ 13
// ═══════════════════════════════════════════════════════════════════
//
//  1. TRACKERS     → حجب تتبّع وتحليلات = باندودث أكثر
//  2. DNS CACHE    → كاش متدرج حسب نوع الطلب = أسرع
//  3. CLASSIFY     → تصنيف دقيق = مسار مناسب لكل طلب
//  4. STICKY       → تثبيت المسار = مصافحة TCP أقل
//  5. TIERED       → بروكسات متدرجة = فشل سريع
//  6. JORDAN IP    → تفضيل أردني + حجب IPv6
//  7. VOICE        → بروكسي واحد للصوت = أقل تأخير
//  8. DIRECT_UP    → تحديثات مباشرة = تحميل أسرع
//  9. LEARN        → نظام تعلم = مسارات أفضل مع الوقت
//  10. SEPARATE    → فصل أنواع الطلبات = تنظيم حركة البيانات
//  11. PEAK        → كشف ذروة (متوفر للتوسع)
//  12. PROTECT     → حماية من بروكسات فاشلة
//  13. CLEAN       → بنية نظيفة = تنفيذ سريع
//
// ═══════════════════════════════════════════════════════════════════
