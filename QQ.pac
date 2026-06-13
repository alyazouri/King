// ╔══════════════════════════════════════════════════════════════╗
// ║           PUBG MOBILE - JORDAN PROXY ROUTER v3.0           ║
// ║              المطوّر والمحسّن بالكامل                      ║
// ╚══════════════════════════════════════════════════════════════╝

// ========================== PROXIES ==========================

// بروكسي الماتش الرئيسي (الأقوى والأقل زمن)
var MATCH_JO = "PROXY 46.185.131.218:20001";

// بروكسي احتياطي للماتش في حال فشل الأول
var MATCH_FALLBACK = "PROXY 46.185.131.218:443";

// مجموعة بروكسيات اللوبي
var LOBBY_POOL = [
  "PROXY 212.35.66.45:8085",
  "PROXY 212.35.66.45:8181",
  "PROXY 46.185.131.218:443",
  "PROXY 46.185.131.218:20001"
];

// بروكسي خاص بالتحديثات والملفات الكبيرة
var CDN_POOL = [
  "PROXY 212.35.66.45:8085",
  "PROXY 212.35.66.45:8181"
];

var BLOCK  = "PROXY 127.0.0.1:9";
var DIRECT = "DIRECT";

// ======================== CONFIGURATION ========================

var CONFIG = {
  // تفعيل/تعطيل ميزات
  enableLogging:       false,
  enableHardGeoBlock:  true,
  enableMatchPinning:  true,
  enableSmartRetry:    true,

  // حدود الأداء
  maxDnsCacheAge:      300000,  // 5 دقائق بالميلي ثانية
  maxDnsCacheSize:     200,

  // أنماط PUBG الموسّعة
  pubgPatterns: /pubg|pubgm|tencent|krafton|lightspeed|levelinfinite|proximabeta|gpnb|greylag|pubgmobile|pubgcorp/i,

  // أنماط الماتشات
  matchPatterns: /match-|match\.|battle-|realtime|sync\.|udp\.|tick-|room-|gameserver|gs-|live-|rt-|combat-|arena-|classic-|ranked-|battleground|game-.*server|play-.*live|ingame|live\.game/i,

  // أنماط اللوبي
  lobbyPatterns: /lobby-|lobby\.|matchmak|queue\.|dispatch|gateway-|region\.|join\.|recruit|ranked\.|season\.|event\.|pass\.|shop\.|inventory|inventory-|gacha|crate|supply/i,

  // أنماط اجتماعية
  socialPatterns: /friend|invite|squad|team-|party|clan|presence|social|chat\.|msg\.|mail\.|gift\.|report\.|profile|badge|title|emote|voice|voip/i,

  // أنماط CDN
  cdnPatterns: /cdn-|cdn\.|asset|resource|patch|update|download|media-|content-|static\.|img\.|img-|apk\.|obb\.|bundle|manifest|config-|version|binary/i,

  // أنماط الإعلانات والتتبع (حجب)
  adPatterns: /ads\.|ads-|track|analytics|telemetry|metric|beacon|monitor|sentry|bugsnag|adjust\.|appsflyer|firebase|facebook.*pixel|doubleclick|admob/i,

  // أنماط المصادقة والحسابات
  authPatterns: /auth|login|oauth|token|session|account|verify|captcha|passport|passport-|signin|signup|register/i
};

// =================== JORDAN MATCH RANGES ===================

// نطاقات IP محدّدة للخوادم الأردنية (ماتش فقط - دقيقة جداً)
var JORDAN_MATCH_IPV4 = [
  // Orange Jordan - Gaming/Hosting
  ["46.185.128.0",   "255.255.128.0"],   // 46.185.128.0/17
  ["77.245.0.0",     "255.255.240.0"],   // 77.245.0.0/20
  ["79.134.128.0",   "255.255.224.0"],   // 79.134.128.0/19
  ["79.173.192.0",   "255.255.192.0"],   // 79.173.192.0/18
  ["80.90.160.0",    "255.255.240.0"],   // 80.90.160.0/20
  ["149.200.128.0",  "255.255.128.0"],   // 149.200.128.0/17

  // نطاقات أردنية إضافية للماتش
  ["82.212.64.0",    "255.255.192.0"],   // 82.212.64.0/18
  ["193.188.64.0",   "255.255.224.0"],   // 193.188.64.0/19
  ["195.28.160.0",   "255.255.224.0"]    // 195.28.160.0/19
];

// =================== JORDAN WIDE RANGES ====================

// نطاقات IP أردنية شاملة (لوبي + اجتماعي + CDN)
var JORDAN_WIDE_IPV4 = [

  // ═══════════════════════════════════
  //  Zain Jordan (AS22884)
  // ═══════════════════════════════════
  ["46.32.0.0",     "255.224.0.0"],    // 46.32.0.0/11 — Zain Mobile & Data
  ["46.185.0.0",    "255.255.128.0"],  // 46.185.0.0/17 — Zain Hosting
  ["77.245.0.0",    "255.255.0.0"],    // 77.245.0.0/16 — Zain Mobile
  ["79.134.128.0",  "255.255.128.0"],  // 79.134.128.0/17 — Zain Mobile
  ["176.29.0.0",    "255.255.0.0"],    // 176.29.0.0/16 — Zain Mobile
  ["178.77.0.0",    "255.255.0.0"],    // 178.77.0.0/16 — Zain LTE/5G
  ["188.247.0.0",   "255.255.0.0"],    // 188.247.0.0/16 — Zain

  // ═══════════════════════════════════
  //  Orange Jordan (AS8376)
  // ═══════════════════════════════════
  ["62.72.0.0",     "255.255.0.0"],    // 62.72.0.0/16 — Orange Core/Fixed
  ["37.202.0.0",    "255.255.0.0"],    // 37.202.0.0/16 — Orange Mobile
  ["37.252.0.0",    "255.255.0.0"],    // 37.252.0.0/16 — Orange Fiber
  ["85.159.0.0",    "255.255.0.0"],    // 85.159.0.0/16 — Orange Mobile
  ["93.93.0.0",     "255.255.0.0"],    // 93.93.0.0/16 — Orange Mobile
  ["93.95.0.0",     "255.255.0.0"],    // 93.95.0.0/16 — Orange Mobile
  ["94.127.0.0",    "255.255.0.0"],    // 94.127.0.0/16 — Orange Fixed
  ["82.212.0.0",    "255.255.192.0"],  // 82.212.0.0/18 — Orange

  // ═══════════════════════════════════
  //  Umniah (AS4816)
  // ═══════════════════════════════════
  ["212.34.0.0",    "255.255.0.0"],    // 212.34.0.0/16 — Umniah Core
  ["213.139.64.0",  "255.255.192.0"],  // 213.139.64.0/18 — Umniah Mobile
  ["176.57.0.0",    "255.255.0.0"],    // 176.57.0.0/16 — Umniah Mobile
  ["188.123.0.0",   "255.255.0.0"],    // 188.123.0.0/16 — Umniah Fixed

  // ═══════════════════════════════════
  //  Jordan Data / Hosting / Others
  // ═══════════════════════════════════
  ["193.188.64.0",  "255.255.224.0"],  // 193.188.64.0/19 — JODATA
  ["149.200.0.0",   "255.255.0.0"],    // 149.200.0.0/16 — Local Hosting
  ["195.28.160.0",  "255.255.224.0"],  // 195.28.160.0/19 — JO Hosting
  ["82.137.192.0",  "255.255.192.0"],  // 82.137.192.0/18 — JO Mixed
  ["87.236.192.0",  "255.255.192.0"],  // 87.236.192.0/18 — JO Hosting

  // ═══════════════════════════════════
  //  Middle East (سماح بالشرق الأوسط)
  // ═══════════════════════════════════
  // قطر
  ["37.210.0.0",    "255.255.0.0"],    // Ooredoo Qatar
  ["89.211.0.0",    "255.255.0.0"],    // Qtel/Qatar
  ["78.100.0.0",    "255.255.0.0"],    // Qatar

  // الإمارات
  ["94.56.0.0",     "255.252.0.0"],    // Etisalat UAE
  ["86.96.0.0",     "255.224.0.0"],    // du UAE

  // السعودية
  ["188.56.0.0",    "255.252.0.0"],    // STC Saudi
  ["94.142.0.0",    "255.255.0.0"],    // Mobily Saudi

  // الكويت
  ["168.187.0.0",   "255.255.0.0"],    // Zain Kuwait
  ["185.68.0.0",    "255.255.192.0"],  // Kuwait

  // البحرين
  ["185.92.0.0",    "255.255.192.0"],  // Bahrain
  ["193.188.96.0",  "255.255.240.0"]   // Batelco Bahrain
];

// ================ GEO BLACKLIST (محسّن) ================

// مناطق محظورة: أوروبا الغربية + روسيا + شرق آسيا
// تم تنقية القائمة لتقليل الحجب الخاطئ
var GEO_BLACKLIST = [

  // ──── أوروبا الغربية ────
  ["5.0.0.0",     "255.248.0.0"],    // 5.0.0.0/13
  ["51.0.0.0",    "255.252.0.0"],    // 51.0.0.0/14
  ["185.0.0.0",   "255.252.0.0"],    // 185.0.0.0/14

  // ──── روسيا ────
  ["5.136.0.0",   "255.248.0.0"],    // 5.136.0.0/13
  ["31.128.0.0",  "255.192.0.0"],    // 31.128.0.0/10
  ["46.16.0.0",   "255.240.0.0"],    // 46.16.0.0/12
  ["77.88.0.0",   "255.248.0.0"],    // 77.88.0.0/13 — Yandex RU
  ["78.25.0.0",   "255.255.0.0"],    // 78.25.0.0/16
  ["85.140.0.0",  "255.252.0.0"],    // 85.140.0.0/14
  ["95.24.0.0",   "255.248.0.0"],    // 95.24.0.0/13
  ["109.60.0.0",  "255.252.0.0"],    // 109.60.0.0/14
  ["178.64.0.0",  "255.192.0.0"],    // 178.64.0.0/10
  ["188.16.0.0",  "255.240.0.0"],    // 188.16.0.0/12
  ["213.5.0.0",   "255.255.0.0"],    // 213.5.0.0/16

  // ──── شرق آسيا (الصين/اليابان/كوريا) ────
  ["1.0.0.0",     "255.128.0.0"],    // 1.0.0.0/9 — APNIC
  ["14.0.0.0",    "255.252.0.0"],    // 14.0.0.0/14
  ["27.0.0.0",    "255.192.0.0"],    // 27.0.0.0/10
  ["36.0.0.0",    "255.192.0.0"],    // 36.0.0.0/10
  ["39.64.0.0",   "255.224.0.0"],    // 39.64.0.0/11
  ["42.0.0.0",    "255.128.0.0"],    // 42.0.0.0/9
  ["49.64.0.0",   "255.224.0.0"],    // 49.64.0.0/11
  ["58.0.0.0",    "255.224.0.0"],    // 58.0.0.0/11
  ["59.32.0.0",   "255.224.0.0"],    // 59.32.0.0/11
  ["60.0.0.0",    "255.224.0.0"],    // 60.0.0.0/11
  ["61.0.0.0",    "255.224.0.0"],    // 61.0.0.0/11
  ["101.0.0.0",   "255.128.0.0"],    // 101.0.0.0/9
  ["103.0.0.0",   "255.192.0.0"],    // 103.0.0.0/10
  ["106.0.0.0",   "255.128.0.0"],    // 106.0.0.0/9
  ["112.0.0.0",   "255.128.0.0"],    // 112.0.0.0/9
  ["114.64.0.0",  "255.224.0.0"],    // 114.64.0.0/11
  ["119.0.0.0",   "255.128.0.0"],    // 119.0.0.0/9
  ["121.0.0.0",   "255.128.0.0"],    // 121.0.0.0/9
  ["125.0.0.0",   "255.128.0.0"],    // 125.0.0.0/9

  // ──── جنوب شرق آسيا ────
  ["175.0.0.0",   "255.128.0.0"],    // 175.0.0.0/9 — SEA
  ["202.0.0.0",   "255.192.0.0"],    // 202.0.0.0/10
  ["210.0.0.0",   "255.224.0.0"],    // 210.0.0.0/11
  ["211.0.0.0",   "255.224.0.0"],    // 211.0.0.0/11
  ["218.0.0.0",   "255.192.0.0"],    // 218.0.0.0/10
  ["220.0.0.0",   "255.192.0.0"],    // 220.0.0.0/10
  ["222.0.0.0",   "255.192.0.0"]     // 222.0.0.0/10
];

// ================ ALLOWED RANGES (سماح إضافي) ================

// نطاقات مصرح بها إضافياً (تتجاوز القائمة السوداء)
var ALLOWED_OVERRIDE = [
  // نطاقات CDN عالمية مهمة للعبة
  ["13.32.0.0",    "255.252.0.0"],    // AWS CloudFront
  ["13.107.0.0",   "255.255.0.0"],    // Azure CDN
  ["104.16.0.0",   "255.240.0.0"],    // Cloudflare
  ["143.204.0.0",  "255.255.0.0"],    // AWS
  ["18.64.0.0",    "255.192.0.0"],    // AWS
  ["34.192.0.0",   "255.192.0.0"],    // AWS
  ["52.84.0.0",    "255.252.0.0"],    // AWS CloudFront
  ["99.84.0.0",    "255.252.0.0"],    // AWS CloudFront
  ["142.250.0.0",  "255.254.0.0"],    // Google
  ["172.217.0.0",  "255.255.0.0"],    // Google
  ["151.101.0.0",  "255.255.0.0"],    // Fastly CDN
  ["205.251.0.0",  "255.255.0.0"]     // AWS
];

// ================ SESSION STATE ================

var SESSION = {
  matchNet:       null,
  matchHost:      null,
  matchPort:      null,
  matchStartTime: null,
  matchDuration:  900000,   // 15 دقيقة - عمر جلسة الماتش

  dnsCache:       {},
  dnsCacheTime:   {},
  dnsCacheOrder:  [],

  proxyHealth:    {},       // تتبع صحة البروكسيات
  stats: {
    blocked: 0,
    allowed: 0,
    matchRouted: 0,
    lobbyRouted: 0,
    cdnRouted: 0
  }
};

// ================ PERFORMANCE HELPERS ================

// تنظيم الـ DNS Cache
function dnsCacheClean() {
  var now = new Date().getTime();

  // حذف المدخلات القديمة
  for (var key in SESSION.dnsCacheTime) {
    if (now - SESSION.dnsCacheTime[key] > CONFIG.maxDnsCacheAge) {
      delete SESSION.dnsCache[key];
      delete SESSION.dnsCacheTime[key];
    }
  }

  // تحديد حجم الكاش
  var keys = [];
  for (var k in SESSION.dnsCache) keys.push(k);
  while (keys.length > CONFIG.maxDnsCacheSize) {
    var oldest = keys.shift();
    delete SESSION.dnsCache[oldest];
    delete SESSION.dnsCacheTime[oldest];
  }
}

// إزالة البورت من الهوست
function norm(h) {
  var i = h.indexOf(":");
  if (i > -1) {
    // تأكد أنها ليست IPv6
    if (h.indexOf("[") === 0) return h;
    return h.substring(0, i);
  }
  return h;
}

// تنظيف النطاق الفرعي (subdomain)
function extractDomain(host) {
  var parts = host.split(".");
  if (parts.length <= 2) return host;
  return parts.slice(-2).join(".");
}

// فحص سريع لشبكة /24
function getNet24(ip) {
  var parts = ip.split(".");
  if (parts.length !== 4) return null;
  return parts[0] + "." + parts[1] + "." + parts[2];
}

// ===================== CORE FUNCTIONS =====================

function isInList(ip, list) {
  for (var i = 0; i < list.length; i++) {
    if (isInNet(ip, list[i][0], list[i][1])) return true;
  }
  return false;
}

function resolvePinned(host) {
  var now = new Date().getTime();

  // فحص الكاش مع العمر
  if (SESSION.dnsCache[host] && SESSION.dnsCacheTime[host]) {
    if (now - SESSION.dnsCacheTime[host] < CONFIG.maxDnsCacheAge) {
      return SESSION.dnsCache[host];
    }
    // انتهت صلاحية - احذف وأعد الحل
    delete SESSION.dnsCache[host];
    delete SESSION.dnsCacheTime[host];
  }

  // تنظيف دوري
  if (Math.random() < 0.05) dnsCacheClean();

  var ip = dnsResolve(host);
  if (ip) {
    SESSION.dnsCache[host] = ip;
    SESSION.dnsCacheTime[host] = now;
  }
  return ip;
}

// اختيار بروكسي ذكي بناءً على الهاش
function pickProxy(host, pool) {
  if (!pool || pool.length === 0) return BLOCK;

  var h = 5381;
  for (var i = 0; i < host.length; i++) {
    h = ((h << 5) + h + host.charCodeAt(i)) & 0xFFFFFFFF;
  }
  return pool[Math.abs(h) % pool.length];
}

// =================== DETECTION FUNCTIONS ===================

function isPUBG(h) {
  // فحص أوسع يشمل جميع نطاقات Tencent/Krafton المعروفة
  if (CONFIG.pubgPatterns.test(h)) return true;

  // فحص النطاق الفرعي الرئيسي
  var domain = extractDomain(h);
  var pubgDomains = [
    "tencent.com", "tencentgames.com", "gpubgm.com",
    "pubgmobile.com", "igamecj.com", "proximabeta.com",
    "gpnb.io", "greylag.io", "levelinfinite.com",
    "pubgmobileapi.com", "pubgmapi.com", "krafton.com"
  ];

  for (var i = 0; i < pubgDomains.length; i++) {
    if (domain === pubgDomains[i]) return true;
  }

  return false;
}

function isMatchTraffic(u, h) {
  return CONFIG.matchPatterns.test(u + h);
}

function isLobbyTraffic(u, h) {
  return CONFIG.lobbyPatterns.test(u + h);
}

function isSocialTraffic(u, h) {
  return CONFIG.socialPatterns.test(u + h);
}

function isCDNTraffic(u, h) {
  return CONFIG.cdnPatterns.test(u + h);
}

function isAdTraffic(u, h) {
  return CONFIG.adPatterns.test(u + h);
}

function isAuthTraffic(u, h) {
  return CONFIG.authPatterns.test(u + h);
}

// =================== SESSION MANAGEMENT ===================

function isMatchSessionActive() {
  if (!SESSION.matchStartTime) return false;
  var now = new Date().getTime();
  return (now - SESSION.matchStartTime) < SESSION.matchDuration;
}

function startMatchSession(host, ip) {
  SESSION.matchNet = getNet24(ip);
  SESSION.matchHost = host;
  SESSION.matchStartTime = new Date().getTime();
  SESSION.stats.matchRouted++;
}

function resetMatchSession() {
  SESSION.matchNet = null;
  SESSION.matchHost = null;
  SESSION.matchStartTime = null;
}

// فحص ما إذا كان الـ IP ينتمي لنطاق ماتش مسموح
function isJordanMatchIP(ip) {
  return isInList(ip, JORDAN_MATCH_IPV4);
}

// فحص ما إذا كان الـ IP ينتمي لنطاق أردني شامل
function isJordanIP(ip) {
  return isInList(ip, JORDAN_WIDE_IPV4);
}

// فحص ما إذا كان IP مسموح بالتجاوز
function isAllowedOverride(ip) {
  return isInList(ip, ALLOWED_OVERRIDE);
}

// ================ SMART MATCH ROUTING ================

function routeMatch(url, host, ip) {

  // ─── فحص أولي: هل IP أردني؟ ───
  if (!isJordanMatchIP(ip)) {
    // السماح بنطاقات CDN المسموحة مسبقاً
    if (isAllowedOverride(ip)) {
      return pickProxy(host, LOBBY_POOL);
    }
    return BLOCK;
  }

  // ─── فحص تثبيت الماتش ───
  if (CONFIG.enableMatchPinning) {
    var currentNet24 = getNet24(ip);

    // جلسة جديدة
    if (!SESSION.matchNet || !isMatchSessionActive()) {
      startMatchSession(host, ip);
      if (CONFIG.enableLogging) {
        // يمكن إضافة logging هنا
      }
      return MATCH_JO;
    }

    // جلسة نشطة - تحقق من التطابق
    if (host !== SESSION.matchHost) {
      // هوست مختلف - احجب لمنع تسريب
      return BLOCK;
    }

    if (currentNet24 !== SESSION.matchNet) {
      // شبكة مختلفة - احجب لمنع الهوب
      return BLOCK;
    }

    SESSION.stats.matchRouted++;
    return MATCH_JO;
  }

  return MATCH_JO;
}

// ================ MAIN FUNCTION ================

function FindProxyForURL(url, host) {

  // ─── تنظيف وتحضير ───
  host = norm(host.toLowerCase());
  var urlLower = url.toLowerCase();

  // ─── فحص: هل هذا ترافيك PUBG؟ ───
  if (!isPUBG(host)) return DIRECT;

  // ─── حل الـ DNS ───
  var ip = resolvePinned(host);
  if (!ip) {
    // لا يمكن حل DNS - حجب مؤقت
    return BLOCK;
  }

  // رفض IPv6
  if (ip.indexOf(":") > -1) return BLOCK;

  // ─── حجب جغرافي صارم ───
  if (CONFIG.enableHardGeoBlock) {
    if (isInList(ip, GEO_BLACKLIST)) {
      // استثناء: نطاقات CDN المسموحة
      if (!isAllowedOverride(ip)) {
        SESSION.stats.blocked++;
        return BLOCK;
      }
    }
  }

  // ─── حجب الإعلانات والتتبع ───
  if (isAdTraffic(urlLower, host)) {
    return BLOCK;
  }

  // ─── توجيه الماتش ───
  if (isMatchTraffic(urlLower, host)) {
    return routeMatch(url, host, ip);
  }

  // ─── توجيه المصادقة ───
  if (isAuthTraffic(urlLower, host)) {
    if (isJordanIP(ip) || isAllowedOverride(ip)) {
      return pickProxy(host, LOBBY_POOL);
    }
    return BLOCK;
  }

  // ─── توجيه اللوبي ───
  if (isLobbyTraffic(urlLower, host) || isSocialTraffic(urlLower, host)) {
    if (isJordanIP(ip) || isAllowedOverride(ip)) {
      SESSION.stats.lobbyRouted++;
      return pickProxy(host, LOBBY_POOL);
    }
    return BLOCK;
  }

  // ─── توجيه CDN ───
  if (isCDNTraffic(urlLower, host)) {
    if (isJordanIP(ip) || isAllowedOverride(ip)) {
      SESSION.stats.cdnRouted++;
      return pickProxy(host, CDN_POOL);
    }
    // CDN: السماح بالعادي إذا لم يكن أردني
    return pickProxy(host, CDN_POOL);
  }

  // ─── ترافيك PUBG غير مصنّف ───
  // محاولة التوجيه عبر البروكسي الأقرب
  if (isJordanIP(ip) || isAllowedOverride(ip)) {
    return pickProxy(host, LOBBY_POOL);
  }

  // ─── افتراضي: حجب ───
  SESSION.stats.blocked++;
  return BLOCK;
}
