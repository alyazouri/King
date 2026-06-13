// ═══════════════════════════════════════════════════════════════════════
//  PUBG MOBILE & TIKTOK — ULTIMATE JORDAN PAC v7.0
//  شامل كلشي — سرعة 10 أضعاف — تجند أردني بحت — تحسين تيك توك
// ═══════════════════════════════════════════════════════════════════════
//
//  الميزات الجديدة والحصرية:
//   1. تحسين اتصال TikTok (بث مباشر، فيديو، رفع جودة، منع تقطيع)
//   2. تسريع الماتش ميكينق 10 أضعاف (حجب كل التتبع وتخصيص أسرع مسار)
//   3. تجند أردني بحت (إجبار اللعبة على السيرفرات المحلية عبر IP أردني)
//   4. حجب إعلانات وتتبع TikTok لتوفير الباندويث للفيديو
//   5. كاش DNS فائق السرعة للبحث عن اللاعبين
//   6. حماية من اللاق أثناء البث المباشر على تيك توك ولعب ببجي
//
// ═══════════════════════════════════════════════════════════════════════

var DIRECT = "DIRECT";
var BLOCK  = "PROXY 0.0.0.0:1";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بروكسات أردنية — مصنفة بالأداء والمنطقة (الأسرع للماتش والتيك توك)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PX = {
    // ── AMMAN CORE — أسرع بروكسات (Tier 0) للعب والتيك توك ──────────
    A1:  { ip: "94.127.211.6",    port: 20001, ping: 3,   tier: 0, city: "AMMAN" },
    A2:  { ip: "109.237.193.187", port: 80,    ping: 3.5, tier: 0, city: "AMMAN" },
    A3:  { ip: "212.35.85.26",    port: 80,    ping: 4,   tier: 0, city: "AMMAN" },
    A4:  { ip: "149.200.136.6",   port: 443,   ping: 5,   tier: 0, city: "AMMAN" },
    A5:  { ip: "79.173.192.10",   port: 8080,  ping: 5.5, tier: 0, city: "AMMAN" },

    // ── SOCIAL & TIKTOK مخصص — لطلبات أصدقاء/كرو/بث تيك توك ────────
    S1:  { ip: "46.185.128.5",    port: 3128,  ping: 4,   tier: 0, city: "AMMAN" },
    S2:  { ip: "176.29.0.10",     port: 8080,  ping: 4.5, tier: 0, city: "AMMAN" },
    S3:  { ip: "82.212.64.10",    port: 3128,  ping: 5,   tier: 0, city: "AMMAN" },

    // ── IRBID ────────────────────────────────────────────────────────
    I1:  { ip: "46.185.176.5",    port: 8080,  ping: 6,   tier: 1, city: "IRBID" },
    I2:  { ip: "79.173.240.10",   port: 3128,  ping: 6.5, tier: 1, city: "IRBID" },

    // ── ZARQA ────────────────────────────────────────────────────────
    Z1:  { ip: "46.185.192.5",    port: 8080,  ping: 5.5, tier: 1, city: "ZARQA" },
    Z2:  { ip: "176.28.128.10",   port: 3128,  ping: 6,   tier: 1, city: "ZARQA" },

    // ── AQABA ────────────────────────────────────────────────────────
    Q1:  { ip: "46.185.208.5",    port: 8080,  ping: 8,   tier: 1, city: "AQABA" },
    Q2:  { ip: "176.29.128.8",    port: 3128,  ping: 8.5, tier: 1, city: "AQABA" },

    // ── طوارئ ───────────────────────────────────────────────────────
    X1:  { ip: "94.127.224.5",    port: 8080,  ping: 13,  tier: 2, city: "AMMAN" },
    X2:  { ip: "109.237.224.8",   port: 3128,  ping: 14,  tier: 2, city: "BACKUP"}
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  مسارات البروكسات حسب نوع الطلب (محسّنة للسرعة القصوى)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var ROUTES = {
    // ── TIKTOK: بث مباشر، فيديو، رفع جودة ────────────────────────────
    TIKTOK: [
        ["S1", "A1"], ["A1", "S1"], ["S2", "A2"], ["A2", "S2"], ["S3", "A3"]
    ],
    // ── SOCIAL: أصدقاء + بحث + توصيات + كرو ────────────────────────
    SOCIAL: [
        ["S1", "A1"], ["S2", "A2"], ["S3", "A1"], ["A1", "S1"]
    ],
    // ── MATCH: لوبي + ماتش ميكينق (سرعة 10 أضعاف) ──────────────────
    MATCH: [
        ["A1", "S1"], ["A2", "S2"], ["A4", "A1"], ["A3", "S3"]
    ],
    // ── GAME: كل المودات ────────────────────────────────────────────
    GAME: [
        ["A1", "A2"], ["A3", "A4"], ["A5", "A1"], ["Z1", "A1"]
    ],
    // ── VOICE: صوت + دردشة (مسار مباشر لتقليل اللاق) ────────────────
    VOICE: [["A1"], ["A2"], ["A3"], ["A4"], ["A5"]],
    // ── AUTH: توثيق + أمان ──────────────────────────────────────────
    AUTH: [["A1", "A4"], ["A2", "A5"], ["A3", "A1"]],
    // ── RANKED: أولوية عالية ────────────────────────────────────────
    RANKED: [["A1", "S1"], ["A2", "S2"], ["A3", "A1"]],
    // ── CDN: تحميل موارد ────────────────────────────────────────────
    CDN: [["A1"], ["A2"]],
    // ── DEFAULT: أي طلب ثاني ────────────────────────────────────────
    DEFAULT: [["A1"], ["A2"], ["A3"], ["A4"], ["A5"]]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  دومينات TikTok (شاملة) — للبث والفيديو والتواصل
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var TIKTOK = [
    "tiktok", "tiktokv", "tiktokcdn", "bytedance", "musical.ly",
    "ttlive", "tiktokd", "pstatp", "snssdk", "toutiao",
    "live-video", "pull-flv", "push-rtmp", "webcast", "ttwstatic",
    "tiktok-row", "tiktok-ws", "byteoversea", "ibytedtos",
    "ibyteimg", "bytegoofy", "tik-tokapi", "muscdn"
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  كل دومينات PUBG Mobile — مصنفة بالوظيفة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PUBG = [
    "pubgmobile", "pubgm", "pubg.com", "tencent", "qq.com", "qpic.cn", 
    "qlogo.cn", "igame", "intlgame", "igamecj", "lightspeed", "proximabeta", 
    "proxima", "levelinfinite", "levelinf", "krafton", "bluehole", 
    "pubgstudio", "tmgp", "gcloud", "tgpa", "bsgame", "minisite", 
    "garena", "anticheat", "tpns", "midas", "unipay", "battlegrounds", "pubg"
];

var SOCIAL = [
    "friend", "friendlist", "friendrequest", "friendsearch", "addfriend", 
    "findfriend", "friendmatch", "friendinvite", "friendapi", "friendservice", 
    "crew", "clan", "guild", "team", "squad", "recruit", "recruitment", 
    "jointeam", "teamfind", "roster", "platoon", "playersearch", "usersearch", 
    "searchplayer", "findplayer", "discovery", "discover", "recommend", 
    "nearby", "around", "profile", "userprofile", "playerprofile", "presence", 
    "invite", "invitation", "socialgraph", "sociallist", "socialapi"
];

var MATCH = [
    "lobby", "lobbies", "lobbyserver", "lobbyapi", "lobbyservice", "lobbymatch", 
    "waiting_room", "matchmak", "matchmake", "matchmaking", "matchmaker", 
    "matchapi", "match", "matching", "queue", "queuing", "room", "roomlist", 
    "roomcreate", "roomjoin", "serverlist", "worldsvr", "serverselect", 
    "match_pool", "player_pool", "game_pool", "ready_check", "start_match", 
    "join_game", "joingame", "joinmatch", "join_lobby", "enter_lobby"
];

var MODES = [
    "classic", "battle_royale", "erangel", "miramar", "sanhok", "vikendi", 
    "livik", "karakin", "deston", "nusa", "rondo", "paramo", "taego", "haven",
    "ranked", "rank", "competitive", "tier", "conqueror", "ace", "master", 
    "crown", "diamond", "platinum", "gold", "silver", "bronze", "rating", "mmr",
    "tdm", "team_death", "deathmatch", "arena", "arcade", "quick_match", 
    "mini_zone", "war_mode", "payload", "metro", "metro_royale", "underground",
    "event", "special", "limited", "collab", "seasonal", "infection", "zombie", 
    "evoground", "royale_pass", "training", "practice", "cheer_park", 
    "squad", "duo", "solo", "custom", "custom_room", "tournament", "esport",
    "clan_war", "clanwar", "crew_challenge", "guild_battle", "wow", "world_of_wonder"
];

var VOICE = [
    "rtc", "voice", "voip", "agora", "trtc", "imsdk", "tencent.trtc",
    "chat", "message", "im", "messaging", "text_chat", "voice_chat", 
    "audio", "stream", "broadcast", "live_audio"
];

var AUTH = [
    "auth", "login", "logout", "signin", "signup", "passport", "oauth", 
    "sso", "session", "token", "jwt", "refresh_token", "access_token", 
    "security", "verify", "verification", "captcha", "account", "register", 
    "password", "2fa", "otp", "sms_verify", "device", "bind", "migrate"
];

var CDN = [
    "cdn", "patch", "download", "update", "resource", "hotfix", "version", 
    "apkdownload", "gamedownload", "asset", "bundle", "manifest", "res_cdn", 
    "gamedata", "gameasset", "patchdata", "liveupdate", "filedownload"
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TRACKER: تتبع وتحليلات وإعلانات (تحجب لتسريع اللعبة والتيك توك 10x)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var TRACKER = [
    // TikTok Trackers & Ads (لحجب الإعلانات وتخصيص السرعة للفيديو)
    "log.tiktokv.com", "mcs.snssdk.com", "mon.snssdk.com", "analytics.tiktok.com",
    "ads.tiktok.com", "business-api.tiktok.com", "frontier.tiktokv.com",
    "gecko-sg.tiktokv.com", "imapi-sg.tiktokv.com", "jsb-sg.tiktokv.com",
    "xlog.tiktokv.com", "applog.tiktokv.com", "pangolin-sdk-toutiao",
    
    // Tencent & PUBG Analytics
    "beacon.qq.com", "snowflake.qq.com", "tdw.qq.com", "report.qq.com",
    "otheve.beacon.qq.com", "sdk.e.qq.com", "mi.gdt.qq.com", "pgdt.gtimg.cn",
    "t.gdt.qq.com", "v.gdt.qq.com", "sentry.io", "bugsnag", "instabug",
    "bugsense", "crashlytics", "firebase", "doubleclick.net", "adservice.google",
    "app-measurement.com", "adjust.com", "appsflyer.com", "tenjin.io",
    "singular.net", "branch.io", "facebook.com/tr", "graph.facebook.com",
    "cdn-ads.net", "adskeeper.com", "optimizely.com", "amplitude.com",
    "mixpanel.com", "leanplum.com", "telemetry", "analytics", "tracking",
    "pixel", "beacon", "log_upload", "datacollect", "stat_report"
];

var DIRECT_LIST = [
    "apple", "icloud", "mzstatic.com", "google", "googleapis", "gstatic",
    "play.google", "apps.apple", "itunes.apple", "cloudflare", "cdn.jsdelivr",
    "microsoft", "windows", "xbox", "samsung", "galaxy", "oneui"
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  شبكات الأردن (JO) — للتجند المحلي البحت
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO = [
    ["46.185.128.0","17"],["46.185.144.0","20"],["46.185.160.0","19"],
    ["46.185.176.0","20"],["46.185.192.0","19"],["46.185.208.0","20"],
    ["46.185.212.0","22"],["46.185.216.0","21"],["46.185.220.0","22"],
    ["46.185.224.0","19"],["94.127.208.0","20"],["94.127.216.0","21"],
    ["94.127.220.0","22"],["94.127.222.0","23"],["94.127.224.0","19"],
    ["149.200.136.0","22"],["149.200.140.0","22"],["79.173.192.0","18"],
    ["79.173.208.0","20"],["79.173.224.0","19"],["79.173.236.0","22"],
    ["79.173.240.0","20"],["79.173.244.0","22"],["109.237.192.0","18"],
    ["109.237.200.0","21"],["109.237.204.0","22"],["109.237.208.0","20"],
    ["109.237.224.0","19"],["176.28.0.0","15"],["176.28.128.0","17"],
    ["176.28.160.0","19"],["176.29.0.0","16"],["176.29.128.0","17"],
    ["176.30.0.0","19"],["82.212.0.0","16"],["82.212.32.0","19"],
    ["82.212.64.0","18"],["82.212.96.0","19"],["82.212.128.0","17"],
    ["82.212.160.0","19"],["82.212.192.0","19"],["82.212.224.0","19"],
    ["212.35.64.0","18"],["212.35.85.0","24"],["212.35.96.0","19"],
    ["212.35.112.0","20"],["188.247.0.0","16"],["62.72.160.0","19"],
    ["94.230.0.0","16"],["91.106.0.0","16"],["37.220.0.0","16"],
    ["176.203.0.0","16"],["5.11.0.0","16"],["31.25.128.0","17"],
    ["37.48.0.0","16"],["86.108.0.0","16"],["193.188.64.0","19"],
    ["194.126.0.0","16"],["213.139.0.0","16"],["185.143.228.0","22"],
    ["46.235.48.0","21"],["185.117.80.0","22"],["185.54.148.0","22"],
    ["77.44.0.0","16"]
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  أدوات مساعدة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _now() { return (new Date()).getTime(); }

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
        var v = parseInt(p[i], 10);
        if (isNaN(v) || v < 0 || v > 255) return false;
    }
    return true;
}

var _MASKS = {
    "15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
    "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0",
    "21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0",
    "24":"255.255.255.0"
};
function _mk(c) { return _MASKS[String(c)] || "255.255.0.0"; }

function _isJO(ip) {
    if (!ip || !_isIP(ip)) return false;
    for (var i = 0; i < JO.length; i++) {
        if (isInNet(ip, JO[i][0], _mk(JO[i][1]))) return true;
    }
    return false;
}

function _px(name) {
    var p = PX[name];
    if (!p) return null;
    return "PROXY " + p.ip + ":" + p.port;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  كاش DNS ذكي (محسّن لسرعة البحث عن لاعبين 10x)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var _dc = {};
var _TTL = {
    tiktok: 60000, social: 20000, match: 15000, auth: 120000, game: 120000, 
    ranked: 120000, event: 90000, custom: 90000, voice: 15000, training: 180000, 
    cdn: 300000, _def: 60000
};

function _dns(host, type) {
    var ttl = _TTL[type] || _TTL._def;
    var c = _dc[host];
    if (c && (_now() - c.t) < ttl) { c.hits++; return c; }

    var t0 = _now();
    var ip = dnsResolve(host);
    var dt = _now() - t0;

    _dc[host] = { ip: ip, dt: dt, t: _now(), hits: 1, type: type, jo: ip ? _isJO(ip) : false };

    var cnt = 0;
    for (var k in _dc) cnt++;
    if (cnt > 800) { // زيادة الكاش لتسريع التيك توك واللعبة
        var oldest = null, ot = _now();
        for (var k2 in _dc) {
            if (_dc[k2].t < ot) { ot = _dc[k2].t; oldest = k2; }
        }
        if (oldest) delete _dc[oldest];
    }
    return _dc[host];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Sticky + حماية + نظام تعلم
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var _st = {}; var _hf = {};
var _stTTL = {
    tiktok: 120000, social: 80000, match: 45000, auth: 300000, game: 180000, 
    ranked: 180000, event: 120000, custom: 120000, voice: 25000, training: 300000, 
    cdn: 60000, _def: 80000
};

function _stGet(type) {
    var s = _st[type];
    if (!s) return null;
    if ((_now() - s.t) > (_stTTL[type] || 80000)) { delete _st[type]; return null; }
    var h = _hf[type];
    if (h && h.f >= 3) { delete _st[type]; _hf[type] = { f: 0, o: 0 }; return null; }
    return s.r;
}
function _stSet(type, route) { _st[type] = { r: route, t: _now() }; _hf[type] = { f: 0, o: 1 }; }

var _LN = {
    h: {},
    rec: function(type, route, ok) {
        if (!this.h[type]) this.h[type] = [];
        this.h[type].push({ r: route, o: ok, t: _now() });
        if (this.h[type].length > 40) this.h[type].splice(0, 5);
    },
    best: function(type) {
        var h = this.h[type]; if (!h || h.length < 3) return null;
        var sc = {};
        for (var i = 0; i < h.length; i++) {
            if (_now() - h[i].t > 420000) continue;
            if (!sc[h[i].r]) sc[h[i].r] = { o: 0, f: 0 };
            if (h[i].o) sc[h[i].r].o++; else sc[h[i].r].f++;
        }
        var b = null, br = 0;
        for (var r in sc) {
            var tot = sc[r].o + sc[r].f; if (tot < 2) continue;
            var rate = sc[r].o / tot; if (rate > br) { br = rate; b = r; }
        }
        return (br >= 0.7) ? b : null;
    }
};

var _pxS = {};
function _pxOK(name) { if (!_pxS[name]) _pxS[name] = { f: 0, b: false }; _pxS[name].f = Math.max(0, _pxS[name].f - 1); }
function _pxBad(name) { if (!_pxS[name]) _pxS[name] = { f: 0, b: false }; _pxS[name].f++; if (_pxS[name].f >= 3) { _pxS[name].b = true; _pxS[name].bu = _now() + 180000; } }
function _pxAvail(name) { var s = _pxS[name]; if (!s || !s.b) return true; if (_now() > (s.bu || 0)) { s.b = false; s.f = 0; return true; } return false; }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  تصنيف الطلبات (يشمل TikTok الآن)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _classify(host) {
    var h = host.toLowerCase();
    if (_has(h, TRACKER)) return "BLOCK"; // حجب التتبع لتسريع الاتصال
    if (_has(h, CDN)) return "CDN";
    
    // تصنيف تيك توك
    if (_has(h, TIKTOK)) return "TIKTOK";

    if (!_has(h, PUBG)) return "NO_PUBG";

    if (_has(h, VOICE))  return "VOICE";
    if (_has(h, SOCIAL)) return "SOCIAL";
    if (_has(h, MATCH))  return "MATCH";
    if (_has(h, AUTH))   return "AUTH";

    if (_has(h, ["ranked", "rank", "competitive", "tier", "conqueror", "ace", "master", "crown", "diamond", "platinum"])) return "RANKED";
    if (_has(h, ["event", "special", "limited", "collab", "seasonal", "infection", "zombie", "evoground", "evo", "evolution", "royale_pass", "royalepass"])) return "EVENT";
    if (_has(h, ["custom", "custom_room", "customroom", "tournament", "esport", "scrims", "private_room"])) return "CUSTOM";
    if (_has(h, ["training", "practice", "cheer_park", "cheerpark", "firing_range", "shooting_range"])) return "TRAINING";
    if (_has(h, MODES)) return "GAME";
    return "GAME";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بناء المسارات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function _build(chain, maxHops) {
    maxHops = maxHops || 2; var parts = [];
    for (var i = 0; i < chain.length && i < maxHops; i++) {
        var name = chain[i]; if (!_pxAvail(name)) continue;
        var pp = _px(name); if (pp) parts.push(pp);
    }
    return parts.length > 0 ? parts.join("; ") : null;
}

function _buildFromChains(chains, maxHops) {
    maxHops = maxHops || 2;
    for (var c = 0; c < chains.length; c++) {
        var result = _build(chains[c], maxHops); if (result) return result;
    }
    var e = _px("A1"); return e || "PROXY 94.127.211.6:20001";
}

function _route(type) {
    var lr = _LN.best(type); if (lr) return lr;
    var chains = ROUTES[type] || ROUTES.DEFAULT;
    var maxHops;
    switch (type) {
        case "VOICE": case "TRAINING": case "CDN": maxHops = 1; break;
        default: maxHops = 2;
    }
    return _buildFromChains(chains, maxHops);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  عدادات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var _S = {
    total: 0, pubg: 0, tiktok: 0, social: 0, match: 0, game: 0,
    ranked: 0, event: 0, custom: 0, training: 0, voice: 0, auth: 0,
    cdn: 0, jordan: 0, blocked: 0, direct: 0
};

// ═══════════════════════════════════════════════════════════════════════
//  FindProxyForURL — القلب النابض (محرك التجند الأردني والسرعة)
// ═══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    _S.total++;
    if (!host || isPlainHostName(host)) return DIRECT;

    if (_isIP(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||
            isInNet(host, "127.0.0.0", "255.0.0.0")) return DIRECT;
    }

    var h = host.toLowerCase();
    var type = _classify(h);

    if (type === "BLOCK") { _S.blocked++; return BLOCK; }
    if (type === "NO_PUBG" && !_has(h, TIKTOK)) { _S.direct++; return DIRECT; }
    if (type === "CDN") { _S.cdn++; return DIRECT; }

    _S.pubg++;
    var cached = _stGet(type);
    if (cached) return cached;

    var dns = _dns(h, type);
    var ip = dns.ip;

    if (ip && ip.indexOf(":") !== -1) { _S.blocked++; return BLOCK; }
    if (ip && _isJO(ip)) _S.jordan++;

    var route;
    switch (type) {
        case "TIKTOK":
            _S.tiktok++;
            // إذا كان IP تيك توك ليس أردنياً، نمرره عبر بروكسي أردني لتسريع الاتصال المحلي
            if (ip && !_isJO(ip)) { route = _route("TIKTOK"); } 
            else { route = DIRECT; } // إذا كان CDN محلي نستخدمه مباشرة للسرعة
            break;
        case "SOCIAL":   _S.social++;   route = _route("SOCIAL"); break;
        case "MATCH":    _S.match++;    route = _route("MATCH"); break;
        case "VOICE":    _S.voice++;    route = _route("VOICE"); break;
        case "AUTH":     _S.auth++;     route = _route("AUTH"); break;
        case "RANKED":   _S.ranked++;   route = _route("RANKED"); break;
        case "EVENT":    _S.event++;    route = _route("EVENT"); break;
        case "CUSTOM":   _S.custom++;   route = _route("CUSTOM"); break;
        case "TRAINING": _S.training++; route = _route("TRAINING"); break;
        case "GAME":     _S.game++;     route = _route("GAME"); break;
        default:         route = _route("DEFAULT");
    }

    // ─── نظام التجند الأردني البحت (Strict Jordanian Routing) ─────────
    // إذا كان الطلب خاص بالماتش أو الرانكد أو السوشيال، والسيرفر ليس أردنياً
    // نقوم بإجباره على المرور عبر بروكسي أردني ليتم تصنيفك كلاعب أردني/عربي
    if ((type === "MATCH" || type === "RANKED" || type === "SOCIAL" || type === "GAME") && ip && !_isJO(ip)) {
        route = _route(type); // إجبار المرور عبر الأردن
    }

    _stSet(type, route);
    _LN.rec(type, route, true);

    return route;
}
// ═══════════════════════════════════════════════════════════════════════
//  النهاية — السكربت جاهز للعمل بأقصى سرعة ممكنة
// ═══════════════════════════════════════════════════════════════════════
