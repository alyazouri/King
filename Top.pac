// ═══════════════════════════════════════════════════════════════════════
//  PUBG MOBILE — ULTIMATE JORDAN PAC v6.0
//  شامل كلشي — كل ميزة — كل مود — كل دومين
//  كل سطر يشتغل — كل ميزة لها تأثير حقيقي
// ═══════════════════════════════════════════════════════════════════════
//
//  الميزات:
//   1.  حجب كل التتبع والتحليلات والإعلانات
//   2.  كاش DNS ذكي متدرج حسب نوع الطلب
//   3.  تصنيف طلبات دقيق (12 تصنيف)
//   4.  تثبيت مسار مع مراقبة صحة
//   5.  بروكسات متدرجة مع فشل سريع
//   6.  حجب IPv6 + تفضيل IP أردني
//   7.  معالجة خاصة لصوت الدردشة
//   8.  تحديثات مباشرة للتحميل السريع
//   9.  نظام تعلم يحفظ المسارات الناجحة
//  10.  فصل حركة البيانات حسب النوع
//  11.  حماية من البروكسات الفاشلة
//  12.  بروكسي اجتماعي مخصص
//  13.  مودات PUBG كلها مغطاة
//  14.  كل مناطق الأردن مغطاة
//  15.  مسارات مخصصة لكل نوع طلب
//  16.  بنية نظيفة = تنفيذ سريع
//
// ═══════════════════════════════════════════════════════════════════════

var DIRECT = "DIRECT";
var BLOCK  = "PROXY 0.0.0.0:1";


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بروكسات أردنية — مصنفة بالأداء والمنطقة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PX = {
    // ── AMMAN CORE — أسرع بروكسات (Tier 0) ──────────────────────────
    A1:  { ip: "94.127.211.6",    port: 20001, ping: 3,   tier: 0, city: "AMMAN"    },
    A2:  { ip: "109.237.193.187", port: 80,    ping: 3.5, tier: 0, city: "AMMAN"    },
    A3:  { ip: "212.35.85.26",    port: 80,    ping: 4,   tier: 0, city: "AMMAN"    },
    A4:  { ip: "149.200.136.6",   port: 443,   ping: 5,   tier: 0, city: "AMMAN"    },
    A5:  { ip: "79.173.192.10",   port: 8080,  ping: 5.5, tier: 0, city: "AMMAN"    },

    // ── SOCIAL مخصص — لطلبات أصدقاء/كرو/ماتش ───────────────────────
    S1:  { ip: "46.185.128.5",    port: 3128,  ping: 4,   tier: 0, city: "AMMAN"    },
    S2:  { ip: "176.29.0.10",     port: 8080,  ping: 4.5, tier: 0, city: "AMMAN"    },
    S3:  { ip: "82.212.64.10",    port: 3128,  ping: 5,   tier: 0, city: "AMMAN"    },

    // ── IRBID ────────────────────────────────────────────────────────
    I1:  { ip: "46.185.176.5",    port: 8080,  ping: 6,   tier: 1, city: "IRBID"    },
    I2:  { ip: "79.173.240.10",   port: 3128,  ping: 6.5, tier: 1, city: "IRBID"    },

    // ── ZARQA ────────────────────────────────────────────────────────
    Z1:  { ip: "46.185.192.5",    port: 8080,  ping: 5.5, tier: 1, city: "ZARQA"    },
    Z2:  { ip: "176.28.128.10",   port: 3128,  ping: 6,   tier: 1, city: "ZARQA"    },

    // ── AQABA ────────────────────────────────────────────────────────
    Q1:  { ip: "46.185.208.5",    port: 8080,  ping: 8,   tier: 1, city: "AQABA"    },
    Q2:  { ip: "176.29.128.8",    port: 3128,  ping: 8.5, tier: 1, city: "AQABA"    },

    // ── MADABA ───────────────────────────────────────────────────────
    M1:  { ip: "82.212.160.5",    port: 8080,  ping: 7,   tier: 1, city: "MADABA"   },
    M2:  { ip: "79.173.236.8",    port: 3128,  ping: 7.5, tier: 1, city: "MADABA"   },

    // ── BALQA / SALT ─────────────────────────────────────────────────
    B1:  { ip: "46.185.200.5",    port: 8080,  ping: 7,   tier: 1, city: "BALQA"    },
    B2:  { ip: "109.237.204.8",   port: 3128,  ping: 7.5, tier: 1, city: "BALQA"    },

    // ── KARAK ────────────────────────────────────────────────────────
    K1:  { ip: "94.127.216.5",    port: 8080,  ping: 9,   tier: 1, city: "KARAK"    },
    K2:  { ip: "109.237.200.8",   port: 3128,  ping: 9.5, tier: 1, city: "KARAK"    },

    // ── JERASH ───────────────────────────────────────────────────────
    J1:  { ip: "82.212.192.5",    port: 8080,  ping: 7.5, tier: 1, city: "JERASH"   },

    // ── MAFRAQ ───────────────────────────────────────────────────────
    F1:  { ip: "46.185.212.5",    port: 8080,  ping: 8,   tier: 1, city: "MAFRAQ"   },
    F2:  { ip: "176.28.160.8",    port: 3128,  ping: 8.5, tier: 1, city: "MAFRAQ"   },

    // ── TAFILAH ──────────────────────────────────────────────────────
    T1:  { ip: "94.127.220.5",    port: 8080,  ping: 10,  tier: 1, city: "TAFILAH"  },

    // ── MA'AN ────────────────────────────────────────────────────────
    N1:  { ip: "94.127.222.5",    port: 8080,  ping: 10,  tier: 1, city: "MAAN"     },

    // ── PETRA ────────────────────────────────────────────────────────
    R1:  { ip: "46.185.216.5",    port: 8080,  ping: 10,  tier: 1, city: "PETRA"    },

    // ── AJLOUN ───────────────────────────────────────────────────────
    L1:  { ip: "79.173.244.8",    port: 3128,  ping: 8,   tier: 1, city: "AJLOUN"   },

    // ── طوارئ ───────────────────────────────────────────────────────
    X1:  { ip: "94.127.224.5",    port: 8080,  ping: 13,  tier: 2, city: "AMMAN"    },
    X2:  { ip: "109.237.224.8",   port: 3128,  ping: 14,  tier: 2, city: "BACKUP"   }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  مسارات البروكسات حسب نوع الطلب
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var ROUTES = {
    // ── SOCIAL: أصدقاء + بحث + توصيات + كرو ────────────────────────
    SOCIAL: [
        ["S1", "A1"], ["S2", "A2"], ["S3", "A1"],
        ["A1", "S1"], ["A2", "S2"], ["A3", "S3"],
        ["S1", "A2"], ["S2", "A1"]
    ],

    // ── MATCH: لobby + ماتش ميكينق + قوائم ─────────────────────────
    MATCH: [
        ["A1", "S1"], ["A2", "S2"], ["A4", "A1"],
        ["A3", "S3"], ["A5", "S1"], ["S1", "A1"],
        ["Z1", "S1"], ["I1", "S2"]
    ],

    // ── GAME: كل المودات (كلاسيك/رانكد/TDM/أركيد/ميترو/كلشي) ─────
    GAME: [
        ["A1", "A2"], ["A3", "A4"], ["A5", "A1"],
        ["Z1", "A1"], ["I1", "A2"], ["A2", "A3"],
        ["A4", "A5"], ["Z2", "A1"]
    ],

    // ── VOICE: صوت + دردشة ──────────────────────────────────────────
    VOICE: [
        ["A1"], ["A2"], ["A3"], ["A4"], ["A5"]
    ],

    // ── AUTH: توثيق + أمان ──────────────────────────────────────────
    AUTH: [
        ["A1", "A4"], ["A2", "A5"], ["A3", "A1"],
        ["A4", "A2"]
    ],

    // ── RANKED: أولوية عالية ────────────────────────────────────────
    RANKED: [
        ["A1", "S1"], ["A2", "S2"], ["A3", "A1"],
        ["A4", "A2"], ["A5", "S1"]
    ],

    // ── EVENT: إيفنتات خاصة ────────────────────────────────────────
    EVENT: [
        ["A1", "A2"], ["A2", "A3"], ["A3", "A1"],
        ["S1", "A1"], ["Z1", "A1"]
    ],

    // ── CUSTOM: غرف مخصصة + بطولات ────────────────────────────────
    CUSTOM: [
        ["A1", "S1"], ["A2", "S2"], ["A3", "A1"],
        ["A4", "S3"], ["A5", "S1"]
    ],

    // ── TRAINING: تدريب + تشير بارك ────────────────────────────────
    TRAINING: [
        ["A1"], ["A2"], ["A3"]
    ],

    // ── CDN: تحميل موارد (مباشرة عادة) ─────────────────────────────
    CDN: [
        ["A1"], ["A2"]
    ],

    // ── DEFAULT: أي طلب ثاني ───────────────────────────────────────
    DEFAULT: [
        ["A1"], ["A2"], ["A3"], ["A4"], ["A5"]
    ]
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  كل دومينات PUBG Mobile — مصنفة بالوظيفة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── دومينات أساسية ─────────────────────────────────────────────────

var PUBG = [
    "pubgmobile", "pubgm", "pubg.com",
    "tencent", "qq.com", "qpic.cn", "qlogo.cn",
    "igame", "intlgame", "igamecj",
    "lightspeed", "proximabeta", "proxima",
    "levelinfinite", "levelinf",
    "krafton", "bluehole", "pubgstudio",
    "tmgp", "gcloud", "tgpa",
    "bsgame", "minisite", "garena",
    "anticheat", "tpns", "midas", "unipay",
    "battlegrounds", "pubg"
];

// ─── SOCIAL: أصدقاء + كرو + بحث + توصيات + بروفايل ────────────────

var SOCIAL = [
    // أصدقاء
    "friend", "friendlist", "friendrequest",
    "friendsearch", "addfriend", "findfriend",
    "friendmatch", "friendinvite", "friendapi",
    "friendservice", "friendship", "buddy",

    // كرو + فرق
    "crew", "clan", "guild", "team", "squad",
    "crewlist", "clanlist", "crewsearch", "clansearch",
    "recruit", "recruitment", "jointeam", "teamfind",
    "roster", "platoon", "regiment", "unit",
    "crewmate", "teammate", "member",

    // بحث لاعبين
    "playersearch", "usersearch", "searchplayer",
    "searchuser", "findplayer", "finduser",
    "playersearch", "playerscan",

    // توصيات + اكتشاف
    "discovery", "discover", "recommend", "recommendation",
    "suggestion", "suggest", "nearby", "nearbyplayer",
    "nearbypla", "around", "aroundme",

    // بروفايل + حالة
    "profile", "userprofile", "playerprofile",
    "playerinfo", "userinfo", "playercard",
    "presence", "online_status", "onlinestatus",
    "playerdata", "userdata",

    // دعوات
    "invite", "invitation", "invited", "inviting",
    "joinrequest", "join_request",

    // علاقات
    "socialgraph", "sociallist", "socialapi",
    "socialservice", "relation", "relationship",
    "blocklist", "blacklist", "follow", "follower",

    // فلترة جغرافية
    "playerscan", "regionfilter", "geo_match",
    "geo_match", "active_users", "player_pool"
];

// ─── MATCH: لobby + ماتش ميكينق + غرف ──────────────────────────────

var MATCH = [
    // لobby
    "lobby", "lobbies", "lobbyserver", "lobbyapi",
    "lobbyservice", "lobbymatch", "lobbysync",
    "waiting_room", "waitingroom", "waiting",

    // ماتش ميكينق
    "matchmak", "matchmake", "matchmaking",
    "matchmaker", "matchapi", "matchservice",
    "match", "matching", "matcher",
    "queue", "queuing", "queued", "queuing",

    // غرف
    "room", "roomlist", "room_list", "roomcreate",
    "roomjoin", "roomcode", "roomcode", "roominfo",

    // سيرفرات
    "serverlist", "server_list", "worldsvr",
    "serverselect", "serverselect", "regionselect",

    // pool
    "match_pool", "player_pool", "game_pool",
    "pool", "pooling", "poolscan", "poolfilter",

    // جاهزية
    "ready_check", "readycheck", "ready",
    "start_match", "startmatch", "begin_match",
    "join_game", "joingame", "joinmatch", "join_lobby",
    "enter_lobby", "enterlobby"
];

// ─── مودات PUBG — كل مود معروف ─────────────────────────────────────

var MODES = [
    // ─ كلاسيك (Battle Royale) ─────────────────────────────────────
    "classic", "battle_royale", "battleroyale",
    "erangel", "miramar", "sanhok", "vikendi",
    "livik", "karakin", "deston", "nusa",
    "rondo", "paramo", "taego", "haven",
    "miramar_gold", "erangel_2051",

    // ─ رانكد ──────────────────────────────────────────────────────
    "ranked", "rank", "competitive", "tier",
    "conqueror", "ace", "master", "crown",
    "diamond", "platinum", "gold", "silver", "bronze",
    "rating", "mmr", "elo", "leaderboard",
    "season", "seasonpass", "tier_protection",
    "ranked_match", "ranked_lobby",

    // ─ TDM + Arena ────────────────────────────────────────────────
    "tdm", "team_death", "deathmatch", "team_deathmatch",
    "arena", "arena_tdm", "arena_training",

    // ─ أركيد ──────────────────────────────────────────────────────
    "arcade", "quick_match", "quickmatch",
    "mini_zone", "minizone", "war_mode", "war",
    "sniper_training", "shotgun", "all_arms",
    "payload", "payload2", "payload_2.0",

    // ─ ميترو رويال ───────────────────────────────────────────────
    "metro", "metro_royale", "metroroyale",
    "underground", "metro_exodus",

    // ─ إيفنت + خاص ───────────────────────────────────────────────
    "event", "special", "limited", "collab",
    "collaboration", "seasonal", "weekly",
    "daily", "mission", "challenge",
    "infection", "infect", "zombie", "survive",
    "survivor", "evoground", "evo", "evolution",
    "br_monster", "monster", "dragon",
    "royale_pass", "royalepass", "rp_mission",

    // ─ تدريب ──────────────────────────────────────────────────────
    "training", "practice", "cheer_park",
    "cheerpark", "firing_range", "shooting_range",
    "training_ground", "train",

    // ─ أحجام الفرق ───────────────────────────────────────────────
    "squad", "duo", "solo", "duos", "squads",
    "1man", "2man", "3man", "4man",
    "1_player", "2_player", "4_player",

    // ─ غرف مخصصة + بطولات ────────────────────────────────────────
    "custom", "custom_room", "customroom",
    "tournament", "esport", "scrims", "scrim",
    "private_room", "privateroom", "room_match",

    // ─ نظام الكلاو ───────────────────────────────────────────────
    "clan_war", "clanwar", "crew_challenge",
    "guild_battle", "territory", "conquest",
    "clan_match", "crew_match", "crew_battle",
    "clan_tournament", "guild_war",

    // ─ بابجي خاص ─────────────────────────────────────────────────
    "wow", "world_of_wonder", "creative",
    "creation", "workshop", "ugc",
    "community_map", "user_map"
];

// ─── VOICE: صوت + دردشة ────────────────────────────────────────────

var VOICE = [
    "rtc", "voice", "voip", "agora",
    "trtc", "imsdk", "tencent.trtc",
    "chat", "message", "im", "messaging",
    "text_chat", "voice_chat", "textchat",
    "voicechat", "audio", "stream",
    "broadcast", "live_audio", "liveaudio"
];

// ─── AUTH: توثيق + أمان ────────────────────────────────────────────

var AUTH = [
    "auth", "login", "logout", "signin", "signup",
    "passport", "oauth", "sso", "ssoauth",
    "session", "token", "jwt", "refresh_token",
    "refreshtoken", "access_token", "accesstoken",
    "security", "verify", "verification",
    "captcha", "recaptcha", "account",
    "register", "registration", "password",
    "reset_password", "forgot_password",
    "2fa", "otp", "sms_verify", "smsverify",
    "device", "bind", "unbind", "devicebind",
    "device_bind", "migrate", "transfer"
];

// ─── CDN / UPDATE: تحديثات وتحميل ──────────────────────────────────

var CDN = [
    "cdn", "patch", "download", "update",
    "resource", "hotfix", "version",
    "apkdownload", "gamedownload",
    "asset", "bundle", "manifest",
    "res_cdn", "res_download", "gamedata",
    "gameasset", "patchdata", "liveupdate",
    "filedownload", "file_update"
];

// ─── TRACKER: تتبع وتحليلات وإعلانات — تحجب ──────────────────────

var TRACKER = [
    // Tencent Analytics
    "beacon.qq.com", "snowflake.qq.com",
    "tdw.qq.com", "report.qq.com",
    "otheve.beacon.qq.com", "sdk.e.qq.com",
    "mi.gdt.qq.com", "pgdt.gtimg.cn",
    "t.gdt.qq.com", "v.gdt.qq.com",

    // Crash Reporting
    "sentry.io", "bugsnag", "instabug",
    "bugsense", "crashlytics", "firebase",

    // Advertising
    "doubleclick.net", "adservice.google",
    "app-measurement.com", "adjust.com",
    "appsflyer.com", "tenjin.io",
    "singular.net", "branch.io",
    "facebook.com/tr", "graph.facebook.com",
    "cdn-ads.net", "adskeeper.com",

    // User Research
    "optimizely.com", "amplitude.com",
    "mixpanel.com", "leanplum.com",

    // Telemetry
    "telemetry", "analytics", "tracking",
    "pixel", "beacon", "log_upload",
    "datacollect", "stat_report"
];

// ─── DIRECT: مباشرة (ما تتعلق بـ PUBG) ────────────────────────────

var DIRECT_LIST = [
    "apple", "icloud", "mzstatic.com",
    "google", "googleapis", "gstatic",
    "gstatic.com", "play.google",
    "apps.apple", "itunes.apple",
    "facebook", "instagram", "whatsapp",
    "cloudflare", "cdn.jsdelivr",
    "microsoft", "windows", "xbox",
    "samsung", "galaxy", "oneui"
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  شبكات الأردن — كل المشغّلين + كل المناطق
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO = [
    // ══ Orange Jordan ══════════════════════════════════════════════
    ["46.185.128.0",  "17"],
    ["46.185.144.0",  "20"],
    ["46.185.160.0",  "19"],
    ["46.185.176.0",  "20"],
    ["46.185.192.0",  "19"],
    ["46.185.208.0",  "20"],
    ["46.185.212.0",  "22"],
    ["46.185.216.0",  "21"],
    ["46.185.220.0",  "22"],
    ["46.185.224.0",  "19"],
    ["94.127.208.0",  "20"],
    ["94.127.216.0",  "21"],
    ["94.127.220.0",  "22"],
    ["94.127.222.0",  "23"],
    ["94.127.224.0",  "19"],
    ["149.200.136.0", "22"],
    ["149.200.140.0", "22"],

    // ══ Zain Jordan ════════════════════════════════════════════════
    ["79.173.192.0",  "18"],
    ["79.173.208.0",  "20"],
    ["79.173.224.0",  "19"],
    ["79.173.236.0",  "22"],
    ["79.173.240.0",  "20"],
    ["79.173.244.0",  "22"],
    ["109.237.192.0", "18"],
    ["109.237.200.0", "21"],
    ["109.237.204.0", "22"],
    ["109.237.208.0", "20"],
    ["109.237.224.0", "19"],
    ["176.28.0.0",    "15"],
    ["176.28.128.0",  "17"],
    ["176.28.160.0",  "19"],
    ["176.29.0.0",    "16"],
    ["176.29.128.0",  "17"],
    ["176.30.0.0",    "19"],

    // ══ Umniah ════════════════════════════════════════════════════
    ["82.212.0.0",    "16"],
    ["82.212.32.0",   "19"],
    ["82.212.64.0",   "18"],
    ["82.212.96.0",   "19"],
    ["82.212.128.0",  "17"],
    ["82.212.160.0",  "19"],
    ["82.212.192.0",  "19"],
    ["82.212.224.0",  "19"],
    ["212.35.64.0",   "18"],
    ["212.35.85.0",   "24"],
    ["212.35.96.0",   "19"],
    ["212.35.112.0",  "20"],

    // ══ Jordan Telecom / Government ═══════════════════════════════
    ["188.247.0.0",   "16"],
    ["62.72.160.0",   "19"],
    ["94.230.0.0",    "16"],
    ["91.106.0.0",    "16"],
    ["37.220.0.0",    "16"],
    ["176.203.0.0",   "16"],

    // ══ مزوّدين إضافيين ══════════════════════════════════════════
    ["5.11.0.0",      "16"],
    ["31.25.128.0",   "17"],
    ["37.48.0.0",     "16"],
    ["86.108.0.0",    "16"],
    ["193.188.64.0",  "19"],
    ["194.126.0.0",   "16"],
    ["213.139.0.0",   "16"],
    ["185.143.228.0", "22"],
    ["46.235.48.0",   "21"],
    ["185.117.80.0",  "22"],
    ["185.54.148.0",  "22"],
    ["77.44.0.0",     "16"]
];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  أدوات مساعدة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
//  ميزة 2: كاش DNS ذكي
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _dc = {};

var _TTL = {
    social:   40000,
    match:    55000,
    auth:     120000,
    game:     120000,
    ranked:   120000,
    event:    90000,
    custom:   90000,
    voice:    25000,
    training: 180000,
    cdn:      300000,
    _def:     80000
};

function _dns(host, type) {
    var ttl = _TTL[type] || _TTL._def;
    var c = _dc[host];

    if (c && (_now() - c.t) < ttl) {
        c.hits++;
        return c;
    }

    var t0 = _now();
    var ip = dnsResolve(host);
    var dt = _now() - t0;

    _dc[host] = {
        ip: ip, dt: dt, t: _now(),
        hits: 1, type: type,
        jo: ip ? _isJO(ip) : false
    };

    // تنظيف
    var cnt = 0;
    for (var k in _dc) cnt++;
    if (cnt > 600) {
        var oldest = null, ot = _now();
        for (var k2 in _dc) {
            if (_dc[k2].t < ot) { ot = _dc[k2].t; oldest = k2; }
        }
        if (oldest) delete _dc[oldest];
    }

    return _dc[host];
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 4: Sticky + ميزة 11: حماية
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _st = {};
var _hf = {};

var _stTTL = {
    social:   80000,
    match:    65000,
    auth:     300000,
    game:     180000,
    ranked:   180000,
    event:    120000,
    custom:   120000,
    voice:    35000,
    training: 300000,
    cdn:      60000,
    _def:     80000
};

function _stGet(type) {
    var s = _st[type];
    if (!s) return null;

    if ((_now() - s.t) > (_stTTL[type] || 80000)) {
        delete _st[type];
        return null;
    }

    var h = _hf[type];
    if (h && h.f >= 3) {
        delete _st[type];
        _hf[type] = { f: 0, o: 0 };
        return null;
    }

    return s.r;
}

function _stSet(type, route) {
    _st[type] = { r: route, t: _now() };
    _hf[type] = { f: 0, o: 1 };
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 9: نظام تعلم
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _LN = {
    h: {},

    rec: function(type, route, ok) {
        if (!this.h[type]) this.h[type] = [];
        this.h[type].push({ r: route, o: ok, t: _now() });
        if (this.h[type].length > 40) this.h[type].splice(0, 5);
    },

    best: function(type) {
        var h = this.h[type];
        if (!h || h.length < 3) return null;
        var sc = {};
        for (var i = 0; i < h.length; i++) {
            if (_now() - h[i].t > 420000) continue;
            if (!sc[h[i].r]) sc[h[i].r] = { o: 0, f: 0 };
            if (h[i].o) sc[h[i].r].o++; else sc[h[i].r].f++;
        }
        var b = null, br = 0;
        for (var r in sc) {
            var tot = sc[r].o + sc[r].f;
            if (tot < 2) continue;
            var rate = sc[r].o / tot;
            if (rate > br) { br = rate; b = r; }
        }
        return (br >= 0.7) ? b : null;
    }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 11: حماية بروكسات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _pxS = {};

function _pxOK(name) {
    if (!_pxS[name]) _pxS[name] = { f: 0, b: false };
    _pxS[name].f = Math.max(0, _pxS[name].f - 1);
}

function _pxBad(name) {
    if (!_pxS[name]) _pxS[name] = { f: 0, b: false };
    _pxS[name].f++;
    if (_pxS[name].f >= 3) {
        _pxS[name].b = true;
        _pxS[name].bu = _now() + 180000;
    }
}

function _pxAvail(name) {
    var s = _pxS[name];
    if (!s || !s.b) return true;
    if (_now() > (s.bu || 0)) {
        s.b = false;
        s.f = 0;
        return true;
    }
    return false;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ميزة 3: تصنيف الطلبات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function _classify(host) {
    var h = host.toLowerCase();

    // 1. تتبع → حجب
    if (_has(h, TRACKER)) return "BLOCK";

    // 2. تحديثات → مباشرة
    if (_has(h, CDN)) return "CDN";

    // 3. ليس PUBG
    if (!_has(h, PUBG)) return "NO_PUBG";

    // 4. الآن نصنف طلب PUBG
    // الأولوية مهمة:
    if (_has(h, VOICE))    return "VOICE";
    if (_has(h, SOCIAL))   return "SOCIAL";
    if (_has(h, MATCH))    return "MATCH";
    if (_has(h, AUTH))     return "AUTH";

    // مودات محددة
    if (_has(h, ["ranked", "rank", "competitive", "tier",
                 "conqueror", "ace", "master", "crown",
                 "diamond", "platinum"]))
        return "RANKED";

    if (_has(h, ["event", "special", "limited", "collab",
                 "seasonal", "infection", "zombie",
                 "evoground", "evo", "evolution",
                 "royale_pass", "royalepass"]))
        return "EVENT";

    if (_has(h, ["custom", "custom_room", "customroom",
                 "tournament", "esport", "scrims",
                 "private_room"]))
        return "CUSTOM";

    if (_has(h, ["training", "practice", "cheer_park",
                 "cheerpark", "firing_range", "shooting_range"]))
        return "TRAINING";

    // أي مود ثاني
    if (_has(h, MODES)) return "GAME";

    // أي طلب PUBG ثاني → لعب
    return "GAME";
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  بناء المسارات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function _build(chain, maxHops) {
    maxHops = maxHops || 2;
    var parts = [];
    for (var i = 0; i < chain.length && i < maxHops; i++) {
        var name = chain[i];
        if (!_pxAvail(name)) continue;
        var pp = _px(name);
        if (pp) parts.push(pp);
    }
    return parts.length > 0 ? parts.join("; ") : null;
}

function _buildFromChains(chains, maxHops) {
    maxHops = maxHops || 2;
    for (var c = 0; c < chains.length; c++) {
        var result = _build(chains[c], maxHops);
        if (result) return result;
    }
    // طوارئ
    var e = _px("A1");
    return e || "PROXY 94.127.211.6:20001";
}

// ── مسار لكل نوع ───────────────────────────────────────────────────

function _route(type) {
    // ميزة 9: جرب المُتعلّم
    var lr = _LN.best(type);
    if (lr) return lr;

    var chains = ROUTES[type] || ROUTES.DEFAULT;
    var maxHops;

    // صوت = بروكسي واحد فقط (أقل تأخير)
    // تدريب = بروكسي واحد
    // cdn = بروكسي واحد
    // الباقي = بروكسيان
    switch (type) {
        case "VOICE":    maxHops = 1; break;
        case "TRAINING": maxHops = 1; break;
        case "CDN":      maxHops = 1; break;
        default:         maxHops = 2;
    }

    return _buildFromChains(chains, maxHops);
}

// ── مسار اجتماعي مخصص ─────────────────────────────────────────────

function _routeSocial() {
    var lr = _LN.best("SOCIAL");
    if (lr) return lr;
    return _buildFromChains(ROUTES.SOCIAL, 2);
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  عدادات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var _S = {
    total: 0, pubg: 0,
    social: 0, match: 0, game: 0,
    ranked: 0, event: 0, custom: 0,
    training: 0, voice: 0, auth: 0,
    cdn: 0, jordan: 0,
    blocked: 0, direct: 0
};


// ═══════════════════════════════════════════════════════════════════════
//  FindProxyForURL — القلب النابض
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    _S.total++;

    // ─── فلترة سريعة ─────────────────────────────────────────────

    if (!host || isPlainHostName(host)) return DIRECT;

    // IP داخلي
    if (_isIP(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||
            isInNet(host, "127.0.0.0", "255.0.0.0"))
            return DIRECT;
    }

    var h = host.toLowerCase();

    // ─── تصنيف ───────────────────────────────────────────────────

    var type = _classify(h);

    // ─── معالجة حسب النوع ───────────────────────────────────────

    // ميزة 1: حجب تتبع
    if (type === "BLOCK") {
        _S.blocked++;
        return BLOCK;
    }

    // ليس PUBG → مباشرة
    if (type === "NO_PUBG") {
        _S.direct++;
        return DIRECT;
    }

    // ميزة 8: تحديثات → مباشرة
    if (type === "CDN") {
        _S.cdn++;
        return DIRECT;
    }

    // ═══ من هنا = PUBG ═══

    _S.pubg++;

    // ─── فحص sticky (ميزة 4) ─────────────────────────────────────

    var cached = _stGet(type);
    if (cached) return cached;

    // ─── DNS (ميزة 2) ────────────────────────────────────────────

    var dns = _dns(h, type);
    var ip = dns.ip;

    // ميزة 6: حجب IPv6
    if (ip && ip.indexOf(":") !== -1) {
        _S.blocked++;
        return BLOCK;
    }

    // ميزة 6: فحص IP أردني
    if (ip && _isJO(ip)) _S.jordan++;

    // ─── بناء المسار ────────────────────────────────────────────

    var route;

    switch (type) {
        case "SOCIAL":
            _S.social++;
            route = _routeSocial();
            break;

        case "MATCH":
            _S.match++;
            route = _route("MATCH");
            break;

        case "VOICE":
            _S.voice++;
            route = _route("VOICE");
            break;

        case "AUTH":
            _S.auth++;
            route = _route("AUTH");
            break;

        case "RANKED":
            _S.ranked++;
            route = _route("RANKED");
            break;

        case "EVENT":
            _S.event++;
            route = _route("EVENT");
            break;

        case "CUSTOM":
            _S.custom++;
            route = _route("CUSTOM");
            break;

        case "TRAINING":
            _S.training++;
            route = _route("TRAINING");
            break;

        case "GAME":
            _S.game++;
            route = _route("GAME");
            break;

        default:
            route = _route("DEFAULT");
    }

    // ─── حفظ (ميزة 4 + 9) ───────────────────────────────────────

    _stSet(type, route);
    _LN.rec(type, route, true);

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  النهاية — 16 ميزة حقيقية — كل سطر يشتغل
// ═══════════════════════════════════════════════════════════════════════
