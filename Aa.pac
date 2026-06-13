// ===================== CONFIGURATION =====================

// تم إضافة الـ IP والـ Port الخاص بك هنا:
var GAMING_PROXY = "PROXY 46.185.200.5:8080"; 

// بروكسي لحجب الإعلانات (Blackhole)
var BLOCK_PROXY = "PROXY 127.0.0.1:65535";

// ===================== UTILITY FUNCTIONS =====================

function normalizeHost(host) {
  return host.toLowerCase();
}

function isIpAddress(host) {
  return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host);
}

function matchDomain(domain, pattern) {
  if (pattern === domain) return true;
  if (pattern.startsWith('*.')) {
    var suffix = pattern.slice(2);
    return domain === suffix || domain.endsWith('.' + suffix);
  }
  return domain.endsWith('.' + pattern);
}

function matchAnyDomain(host, domains) {
  for (var i = 0; i < domains.length; i++) {
    if (matchDomain(host, domains[i])) return true;
  }
  return false;
}

function isLocalNetwork(host) {
  return /^(10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|192\.168\.|localhost|127\.)/.test(host);
}

// ===================== DOMAIN GROUPS =====================

var pubgCoreDomains = [
  "*.pubgmobile.com", "*.igamecj.com", "*.levelinfinite.com", "*.pubg.com",
  "*.krafton.com", "*.tencent.com", "*.gtimg.com", "*.myqcloud.com",
  "*.qcloud.com", "*.qq.com", "*.weixin.qq.com", "*.game.qq.com"
];

var cdnDomains = [
  "*.cloudfront.net", "*.akamaized.net", "*.akamai.net", "*.edgekey.net",
  "*.edgesuite.net", "*.cloudflare.com", "*.fastly.net"
];

var menaAndAsiaServers = [
  "*.me-central-1.*", "*.mec1.*", "*.bahrain.*", "*.uae.*",
  "*.dubai.*", "*.singapore.*", "*.ap-southeast-1.*"
];

var adAndTrackerDomains = [
  "*.doubleclick.net", "*.googleadservices.com", "*.googlesyndication.com",
  "*.facebook.com", "*.fbcdn.net", "*.appsflyer.com", "*.adjust.com",
  "*.branch.io", "*.unity3d.com", "*.adcolony.com", "*.applovin.com",
  "*.ironsrc.com", "*.vungle.com", "*.taboola.com", "*.outbrain.com",
  "*.scorecardresearch.com", "*.crashlytics.com"
];

// ===================== ROUTING RULES =====================

function checkRule1(url, host) { return matchAnyDomain(host, adAndTrackerDomains); }
function checkRule2(url, host) { return matchAnyDomain(host, pubgCoreDomains); }
function checkRule3(url, host) { return matchAnyDomain(host, cdnDomains); }
function checkRule4(url, host) { return matchAnyDomain(host, menaAndAsiaServers); }

// ===================== MAIN ROUTING FUNCTION =====================

function FindProxyForURL(url, host) {
  host = normalizeHost(host);

  if (isLocalNetwork(host)) return "DIRECT";

  if (isIpAddress(host)) return GAMING_PROXY; 

  if (checkRule1(url, host)) return BLOCK_PROXY; 
  if (checkRule2(url, host)) return GAMING_PROXY; 
  if (checkRule3(url, host)) return GAMING_PROXY; 
  if (checkRule4(url, host)) return GAMING_PROXY; 

  return "DIRECT";
}
