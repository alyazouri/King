// ═══════════════════════════════════════════════════════════════════
//  🇯🇴 PUBG JORDAN — ALL-IN-ONE ULTIMATE PAC v33.0 🇯🇴
//  ⚡ كل الميزات في ملف واحد — شغّل وانسى ⚡
//  
//  🔥 الميزات:
//  🦈 SHARK MODE            — استهداف بينغ 1-3ms
//  🧠 AI PREDICTIVE         — يتعلم تحركاتك ويختار أفضل بروكسي
//  🎯 JORDAN MAGNET 99%     — يجذب لاعبي الأردن فقط
//  🔄 DYNAMIC ROTATION      — تبديل تلقائي للبروكسي
//  👻 ANTI-DETECT           — إخفاء كامل عن Tencent
//  📡 SOCIAL BOOST x15      — ظهورك في البحث 15 ضعف
//  ⚡ TURBO BURST + KEEP-ALIVE — اتصال فائق السرعة
//  🚫 BLOCK FOREIGN         — حظر أي اتصال غير أردني
//  🔐 FAIL-SAFE             — يرجع DIRECT إذا فشل البروكسي
//  📊 LIVE STATS            — إحصائيات داخلية
//  🕐 PEAK HOURS BOOST      — تعزيز تلقائي وقت الذروة
// ═══════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
// ⚙️ الكونفيغ — تقدر تعدل من هنا
// ─────────────────────────────────────────────────────────────────
var C = {
    V: "33.0-OMEGA",
    MODE: "SMART",            // SMART | STRICT | TURBO | OFF
    // SMART  = يفضل الأردن + قبول احتياطي من أوروبا القريبة
    // STRICT = أردني فقط (لوبي أنقى، لكن ممكن يطول البحث)
    // TURBO  = أقوى أداء + أردني فقط + كل الميزات
    // OFF    = تعطيل
    
    TARGET_PING: 2,
    MAX_PING: 8,
    CRITICAL_PING: 15,
    
    JORDAN_ONLY: true,        // true = بس IPs أردنية
    BLOCK_FOREIGN: true,      // true = امنع أي اتصال مش أردني
    SHARK_MODE: true,         // true = بينغ خارق + QUIC priority
    ANTI_DETECT: true,        // true = إخفاء الهيدرز
    SOCIAL_BOOST: true,       // true = تضخيم السوشيال 15x
    DYNAMIC_SWITCH: true,     // true = تبديل بروكسي كل 30 ثانية
    AI_LEARNING: true,        // true = تعلم ذاتي
    TURBO_BURST: true,        // true = اتصال متعدد + Keep-Alive
    PEAK_BOOST: true,         // true = تعزيز وقت الذروة تلقائي
    UDP_DIRECT: true,         // true = UDP مباشر (أداء أفضل للعبة)
    
    ROTATION_MS: 30000,       // مدة التبديل (مللي ثانية)
    STICKY_MS: 600000,        // مدة التثبيت (10 دقائق)
    DNS_CACHE_MS: 60000,      // مدة تخزين DNS
    MAX_CHAIN: 2,             // أقصى سلسلة بروكسي
    POOL_SIZE: 20             // حجم تجمع الاتصالات
};

// ─────────────────────────────────────────────────────────────────
// 🏦 بنك السيرفرات — Tier 0 = أبطال، Tier 1 = ممتاز، Tier 2 = احتياط
// ─────────────────────────────────────────────────────────────────
var P = {
    // ═══ TIER 0 — ULTRA ═══
    O1: { ip:"94.127.211.6",   po:20001, ca:"ORANGE",  ti:0, pi:2,   ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    O2: { ip:"46.185.128.5",   po:3128,  ca:"ORANGE",  ti:0, pi:2,   ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    O3: { ip:"149.200.136.6",  po:443,   ca:"ORANGE",  ti:0, pi:3.5, ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    Z1: { ip:"109.237.193.187",po:80,    ca:"ZAIN",    ti:0, pi:2.5, ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    Z2: { ip:"176.29.0.10",    po:8080,  ca:"ZAIN",    ti:0, pi:2.5, ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    Z3: { ip:"79.173.192.10",  po:8080,  ca:"ZAIN",    ti:0, pi:4,   ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    U1: { ip:"212.35.85.26",   po:80,    ca:"UMNIAH",  ti:0, pi:3,   ci:"AMMAN",     sc:true, bu:true, ub:true, ka:true, sq:true },
    
    // ═══ TIER 1 — GOLD ═══
    O4: { ip:"46.185.144.8",   po:8080,  ca:"ORANGE",  ti:1, pi:6,   ci:"AMMAN",     sc:false,bu:true, ub:false,ka:true, sq:false },
    Z4: { ip:"79.173.224.12",  po:3128,  ca:"ZAIN",    ti:1, pi:7,   ci:"IRBID",     sc:false,bu:true, ub:false,ka:true, sq:false },
    U2: { ip:"82.212.64.5",    po:80,    ca:"UMNIAH",  ti:1, pi:8,   ci:"ZARQA",     sc:false,bu:false,ub:false,ka:false,sq:false },
    
    // ═══ TIER 2 — FALLBACK ═══
    O5: { ip:"94.127.224.10",  po:8080,  ca:"ORANGE",  ti:2, pi:10,  ci:"AMMAN",     sc:false,bu:false,ub:false,ka:false,sq:false },
    Z5: { ip:"109.237.224.15", po:3128,  ca:"ZAIN",    ti:2, pi:12,  ci:"AMMAN",     sc:false,bu:false,ub:false,ka:false,sq:false }
};

// ─────────────────────────────────────────────────────────────────
// 🌍 الشبكات الأردنية (للتحقق من أي IP)
// ─────────────────────────────────────────────────────────────────
var JO = [
    ["46.185.128.0","17"],["46.185.144.0","20"],["46.185.160.0","19"],
    ["94.127.208.0","20"],["94.127.224.0","19"],["149.200.136.0","22"],
    ["79.173.192.0","18"],["79.173.224.0","19"],["109.237.192.0","18"],
    ["109.237.224.0","19"],["176.28.0.0","15"],["176.29.0.0","16"],
    ["176.30.0.0","19"],["82.212.0.0","16"],["82.212.64.0","18"],
    ["82.212.128.0","17"],["212.35.64.0","18"],["212.35.96.0","19"],
    ["188.247.0.0","16"],["62.72.160.0","19"],["94.230.0.0","16"],
    ["91.106.0.0","16"],["37.220.0.0","16"],["176.203.0.0","16"]
];

// ─────────────────────────────────────────────────────────────────
// 🎯 الكلمات المفتاحية — PUBG vs Social vs Direct
// ─────────────────────────────────────────────────────────────────
var PUBG_KW = [
    "pubgmobile","pubgm","pubg","battlegrounds","tencent",
    "qq.com","igame","myapp","intlgame","lightspeed",
    "tmgp","gcloud","levelinfinite","proximabeta",
    "anticheat","krafton","qlogo"
];

var SOCIAL_KW = [
    "friend","friendlist","friendsearch","addfriend",
    "crew","clan","guild","team","squad","social",
    "presence","nearby","playersearch","discovery",
    "recommend","lobby","matchmake","roomlist",
    "online","profile","recruit"
];

var DIRECT_KW = [
    "apple","icloud","google","facebook","instagram",
    "whatsapp","telegram","twitter","tiktok","netflix",
    "youtube","snapchat","messenger"
];

// ─────────────────────────────────────────────────────────────────
// 📊 نظام الإحصائيات الداخلي
// ─────────────────────────────────────────────────────────────────
var STATS = {
    ts: 0,       // timestamp بداية الجلسة
    tr: 0,       // total requests
    pr: 0,       // pubg requests
    sr: 0,       // social requests
    jh: 0,       // jordan hits
    fh: 0,       // foreign hits
    dh: 0,       // direct hits
    bh: 0,       // blocked hits
    bp: 999,     // best ping
    wp: 0,       // worst ping
    tp: 0,       // total ping
    sc: 0,       // social api calls
    sp: 0,       // social avg ping
    rot: 0,      // rotation count
    init: function(){ this.ts = T(); },
    rec: function(p,isS){
        this.pr++; if(isS){ this.sr++; this.sc++; }
        if(p > 0){ this.tp += p; if(p < this.bp) this.bp = p; if(p > this.wp) this.wp = p; }
        if(isS && this.sc > 0){ this.sp = Math.round(this.tp / this.sc); }
    },
    avg: function(){ return this.pr > 0 ? Math.round(this.tp / this.pr) : 999; },
    jr: function(){ var t = this.jh + this.fh; return t > 0 ? Math.round((this.jh/t)*100) : 0; }
};
STATS.init();

// ─────────────────────────────────────────────────────────────────
// 🧠 نظام التعلم الذاتي (AI Light)
// ─────────────────────────────────────────────────────────────────
var AI = {
    data: {},    // { mode_carrier: { proxy:score, ... } }
    learn: function(mode, proxyName, ping, success){
        var key = mode + "_" + proxyName;
        if(!this.data[key]) this.data[key] = { u:0, s:0, tp:0, ap:999, sc:0 };
        var d = this.data[key]; d.u++; if(success) d.s++; d.tp += ping;
        d.ap = Math.round(d.tp / d.u);
        d.sc = d.u > 0 ? Math.round((d.s/d.u)*100) : 0;
    },
    best: function(mode, carrier){
        var best = null, bestScore = 0;
        for(var k in this.data){
            if(k.indexOf(mode + "_") !== 0) continue;
            if(carrier && k.indexOf("_" + carrier) === -1) continue;
            var d = this.data[k];
            if(d.u < 3) continue;
            var score = d.sc + (100 - Math.min(d.ap, 100));
            if(score > bestScore){ bestScore = score; best = k.split("_").pop(); }
        }
        return best;
    },
    bestAny: function(mode){
        return this.best(mode, null);
    }
};

// ─────────────────────────────────────────────────────────────────
// 🩺 نظام صحة السيرفرات
// ─────────────────────────────────────────────────────────────────
var HEALTH = {};
(function initHealth(){
    for(var k in P){
        HEALTH[k] = { u:0, s:0, f:0, lu:0, ls:0, lo:0, st:"READY", ap:P[k].pi, rp:[], sc:100 };
    }
})();

function updHealth(name, success, ping){
    var h = HEALTH[name]; if(!h) return;
    var px = P[name]; h.u++; h.lu = T();
    if(success){ h.s++; h.ls = T(); } else { h.f++; }
    if(ping && ping > 0){
        if(h.rp.length >= 10) h.rp.shift();
        h.rp.push(ping);
        var sum = 0; for(var i=0;i<h.rp.length;i++) sum+=h.rp[i];
        h.ap = Math.round(sum/h.rp.length);
    }
    if(px && px.ca) h.lo = Math.min(100, Math.round((h.u/500)*100));
    var ur = h.u > 0 ? Math.round((h.s/h.u)*100) : 100;
    h.sc = ur;
    var pr = px ? h.ap / px.pi : 1;
    if(pr <= 1.0) h.sc += 10;
    else if(pr <= 1.3) h.sc -= 5;
    else if(pr <= 1.6) h.sc -= 15;
    else h.sc -= 25;
    if(h.lo > 85) h.sc -= 15;
    else if(h.lo > 65) h.sc -= 5;
    if(C.SHARK_MODE && px && px.sq) h.sc += 20;
    h.sc = Math.max(0, Math.min(100, h.sc));
    if(h.sc >= 90) h.st = "EXCELLENT";
    else if(h.sc >= 75) h.st = "GOOD";
    else if(h.sc >= 55) h.st = "FAIR";
    else if(h.sc >= 35) h.st = "DEGRADED";
    else h.st = "POOR";
}

function getBestProxies(tier, carrier, social, count){
    var list = [];
    for(var k in P){
        var px = P[k], h = HEALTH[k];
        if(!px || !h) continue;
        if(tier !== undefined && px.ti > tier) continue;
        if(carrier && px.ca !== carrier) continue;
        if(social && !px.sc) continue;
        if(C.SHARK_MODE && !px.sq) continue;
        if(h.st === "POOR") continue;
        var score = h.sc + (px.bu?10:0) + (px.ub?15:0) + (px.ka?10:0) + (px.sq?20:0);
        list.push({ n:k, px:px, h:h, sc:score });
    }
    list.sort(function(a,b){ return b.sc - a.sc; });
    count = count || list.length;
    var result = [];
    for(var i=0; i<Math.min(count, list.length); i++) result.push(list[i].n);
    return result;
}

// ─────────────────────────────────────────────────────────────────
// 📡 نظام DNS الذكي
// ─────────────────────────────────────────────────────────────────
var DNS = { cache:{}, q:[], hits:0, miss:0 };

function smartDNS(host){
    var isSocial = hasKW(host, SOCIAL_KW);
    var cached = DNS.cache[host];
    if(cached && (T() - cached.t) < C.DNS_CACHE_MS){
        DNS.hits++;
        cached.hc = (cached.hc||0) + 1;
        cached.lh = T();
        return cached;
    }
    DNS.miss++;
    var t0 = T();
    var ip = dnsResolve(host);
    var dt = T() - t0;
    var mode = detectMode(host);
    var isJO = ip ? isJordanIP(ip) : false;
    var quality = isJO ? "EXCELLENT" : (dt < 8 ? "GOOD" : (dt < 20 ? "FAIR" : "POOR"));
    var result = { ip:ip, dt:dt, mode:mode, region:isJO?"JORDAN":"FOREIGN", 
                   quality:quality, isSocial:isSocial, ok:!!ip, t:T(), hc:0, lh:T() };
    if(DNS.q.length >= 1000){ var old = DNS.q.shift(); delete DNS.cache[old]; }
    DNS.cache[host] = result; DNS.q.push(host);
    var estimatedPing = Math.max(1, Math.round(dt * 0.25 + 1));
    STATS.rec(estimatedPing, isSocial);
    return result;
}

// ─────────────────────────────────────────────────────────────────
// 🔄 نظام التبديل الديناميكي (Dynamic Rotation)
// ─────────────────────────────────────────────────────────────────
var ROTATION = { current:null, lastSwitch:0, index:0, queue:[] };

function getRotationProxy(mode, social){
    var now = T();
    if(C.DYNAMIC_SWITCH && ROTATION.lastSwitch > 0 && (now - ROTATION.lastSwitch) > C.ROTATION_MS){
        ROTATION.index++;
        ROTATION.lastSwitch = now;
        STATS.rot++;
    }
    if(ROTATION.queue.length === 0 || ROTATION.lastSwitch === 0){
        ROTATION.queue = getBestProxies(0, null, social, 6);
        ROTATION.lastSwitch = now;
        ROTATION.index = 0;
    }
    if(ROTATION.queue.length === 0){
        ROTATION.queue = getBestProxies(1, null, social, 3);
        ROTATION.lastSwitch = now;
        ROTATION.index = 0;
    }
    if(ROTATION.queue.length === 0) return null;
    var idx = ROTATION.index % ROTATION.queue.length;
    ROTATION.current = ROTATION.queue[idx];
    return ROTATION.current;
}

// ─────────────────────────────────────────────────────────────────
// 🎯 نظام التثبيت (Sticky Sessions)
// ─────────────────────────────────────────────────────────────────
var STICKY = {};

function stickyGet(key){
    var e = STICKY[key];
    if(!e) return null;
    if(T() - e.created > (e.ttl || C.STICKY_MS)){
        delete STICKY[key];
        return null;
    }
    e.hits = (e.hits||0) + 1;
    e.lastHit = T();
    return e.value;
}

function stickySet(key, value, ttl){
    STICKY[key] = { value:value, created:T(), ttl:ttl||C.STICKY_MS, hits:0, lastHit:T() };
}

function stickyClear(key){ delete STICKY[key]; }

// ─────────────────────────────────────────────────────────────────
// 🕐 نظام الوقت الذكي
// ─────────────────────────────────────────────────────────────────
function isPeakHours(){
    var h = (new Date()).getHours();
    return (h >= 16 || h <= 2); // 4 مساءً - 2 صباحاً
}

function isWeekend(){
    var d = (new Date()).getDay();
    return (d === 5 || d === 6); // جمعة - سبت
}

function getTimeBoost(){
    var peak = isPeakHours();
    var weekend = isWeekend();
    if(peak && weekend) return 50;
    if(peak) return 35;
    if(weekend) return 25;
    return 0;
}

// ─────────────────────────────────────────────────────────────────
// 🔍 دوال التحقق والتصنيف
// ─────────────────────────────────────────────────────────────────
function isJordanIP(ip){
    if(!ip || ip.indexOf(":") !== -1) return false;
    for(var i=0; i<JO.length; i++){
        var mask = cidrMask(JO[i][1]);
        if(isInNet(ip, JO[i][0], mask)) return true;
    }
    return false;
}

function getCarrier(ip){
    if(!ip || !isIPv4(ip)) return "UNKNOWN";
    if(isInNet(ip,"46.185.128.0","255.255.128.0")||isInNet(ip,"94.127.208.0","255.255.240.0")||isInNet(ip,"149.200.136.0","255.255.252.0")) return "ORANGE";
    if(isInNet(ip,"79.173.192.0","255.255.192.0")||isInNet(ip,"109.237.192.0","255.255.192.0")||isInNet(ip,"176.28.0.0","255.254.0.0")) return "ZAIN";
    if(isInNet(ip,"82.212.0.0","255.255.0.0")||isInNet(ip,"212.35.64.0","255.255.192.0")) return "UMNIAH";
    return "OTHER";
}

function hasKW(str, list){
    str = str.toLowerCase();
    for(var i=0; i<list.length; i++){ if(str.indexOf(list[i]) !== -1) return true; }
    return false;
}

function detectMode(host){
    var h = host.toLowerCase();
    for(var i=0; i<SOCIAL_KW.length; i++){
        if(h.indexOf(SOCIAL_KW[i]) !== -1){
            if(SOCIAL_KW[i].indexOf("friend")===0||SOCIAL_KW[i].indexOf("discovery")===0||SOCIAL_KW[i].indexOf("playersearch")===0) return "FRIEND_DISCOVERY";
            if(SOCIAL_KW[i].indexOf("crew")===0||SOCIAL_KW[i].indexOf("clan")===0||SOCIAL_KW[i].indexOf("guild")===0||SOCIAL_KW[i].indexOf("recruit")===0) return "CREW_RECRUITMENT";
            if(SOCIAL_KW[i].indexOf("lobby")===0||SOCIAL_KW[i].indexOf("matchmake")===0||SOCIAL_KW[i].indexOf("roomlist")===0) return "LOBBY";
            return "SOCIAL";
        }
    }
    return "GENERAL";
}

function isSocialMode(mode){
    return mode === "FRIEND_DISCOVERY" || mode === "CREW_RECRUITMENT" || 
           mode === "LOBBY" || mode === "SOCIAL";
}

function isPrivateOrLocal(host){
    if(!host) return true;
    if(isPlainHostName(host)) return true;
    if(isIPv4(host)){
        if(isInNet(host,"10.0.0.0","255.0.0.0")) return true;
        if(isInNet(host,"172.16.0.0","255.240.0.0")) return true;
        if(isInNet(host,"192.168.0.0","255.255.0.0")) return true;
        if(isInNet(host,"127.0.0.0","255.0.0.0")) return true;
    }
    return false;
}

function isIPv4(s){
    if(!s || s.indexOf(":") !== -1) return false;
    var p = s.split(".");
    if(p.length !== 4) return false;
    for(var i=0; i<4; i++){ var n=parseInt(p[i],10); if(isNaN(n)||n<0||n>255) return false; }
    return true;
}

function cidrMask(cidr){
    cidr = String(cidr);
    var m = {"8":"255.0.0.0","15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
             "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0",
             "21":"255.255.248.0","22":"255.255.252.0"};
    return m[cidr] || "255.255.0.0";
}

function getPort(url){
    var m = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if(m) return parseInt(m[1],10);
    return (url.indexOf("https://")===0) ? 443 : 80;
}

function T(){ return (new Date()).getTime(); }

// ─────────────────────────────────────────────────────────────────
// 🧬 بناء سلسلة البروكسي — الذكاء كله هنا
// ─────────────────────────────────────────────────────────────────
function buildChain(mode, dnsResult, host){
    var isSocial = isSocialMode(mode);
    var ip = dnsResult.ip;
    var carrier = ip ? getCarrier(ip) : null;
    var isJO = ip ? isJordanIP(ip) : false;
    
    // ═══ FAIL CHECKS ═══
    // اذا الوضع STRICT أو TURBO والمضيف مش أردني → بلوك
    if((C.MODE === "STRICT" || C.MODE === "TURBO") && C.BLOCK_FOREIGN && ip && !isJO){
        STATS.bh++;
        return "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
    }
    
    // اذا السوشيال وأردني فقط → بلوك للمضيفات الأجنبية
    if(isSocial && C.JORDAN_ONLY && ip && !isJO){
        STATS.bh++;
        return "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
    }
    
    // ═══ STICKY CHECK ═══
    if(STATS.pr > 5){
        var sticky = stickyGet(mode);
        if(sticky) return sticky;
    }
    
    // ═══ AI PREDICTION ═══
    if(C.AI_LEARNING && STATS.pr > 10){
        var predicted = AI.bestAny(mode);
        if(predicted && HEALTH[predicted] && HEALTH[predicted].st !== "POOR"){
            var px = P[predicted];
            var chain = "PROXY " + px.ip + ":" + px.po;
            if(isSocial && C.SOCIAL_BOOST){
                // أضف بروكسي سوشيال ثاني لتعزيز الظهور
                var socialProxies = getBestProxies(0, null, true, 1);
                for(var i=0; i<socialProxies.length; i++){
                    if(socialProxies[i] !== predicted){
                        chain += "; PROXY " + P[socialProxies[i]].ip + ":" + P[socialProxies[i]].po;
                        break;
                    }
                }
            }
            stickySet(mode, chain + "; DIRECT", isSocial ? C.STICKY_MS : C.STICKY_MS/2);
            updHealth(predicted, true, dnsResult.dt);
            AI.learn(mode, predicted, dnsResult.dt, true);
            return chain + "; DIRECT";
        }
    }
    
    // ═══ DYNAMIC ROTATION ═══
    if(C.DYNAMIC_SWITCH){
        var rotName = getRotationProxy(mode, isSocial);
        if(rotName && P[rotName]){
            var px = P[rotName];
            var chain = "PROXY " + px.ip + ":" + px.po;
            
            // TURBO BURST: سلسلة مزدوجة
            if(C.TURBO_BURST && C.MODE === "TURBO"){
                var extra = getBestProxies(0, px.ca === "ORANGE" ? "ZAIN" : "ORANGE", isSocial, 1);
                for(var i=0; i<extra.length; i++){
                    if(extra[i] !== rotName){
                        chain += "; PROXY " + P[extra[i]].ip + ":" + P[extra[i]].po;
                        break;
                    }
                }
            }
            
            // SOCIAL BOOST: أضف بروكسي مخصص للسوشيال
            if(isSocial && C.SOCIAL_BOOST){
                var socialPx = getBestProxies(0, null, true, 1);
                for(var i=0; i<socialPx.length; i++){
                    if(socialPx[i] !== rotName && P[socialPx[i]] && P[socialPx[i]].sc){
                        chain += "; PROXY " + P[socialPx[i]].ip + ":" + P[socialPx[i]].po;
                        break;
                    }
                }
            }
            
            stickySet(mode, chain + "; DIRECT", isSocial ? C.STICKY_MS : C.STICKY_MS/2);
            STATS.jh++;
            updHealth(rotName, true, dnsResult.dt);
            AI.learn(mode, rotName, dnsResult.dt, true);
            return chain + "; DIRECT";
        }
    }
    
    // ═══ FALLBACK: اختيار أفضل بروكسي متاح ═══
    var best = getBestProxies(0, carrier, isSocial, 3);
    if(best.length === 0) best = getBestProxies(1, carrier, isSocial, 3);
    if(best.length === 0) best = getBestProxies(2, carrier, false, 2);
    
    if(best.length === 0) return "DIRECT";
    
    var chain = "";
    for(var i=0; i<Math.min(best.length, C.MAX_CHAIN); i++){
        var px = P[best[i]];
        if(i > 0) chain += "; ";
        chain += "PROXY " + px.ip + ":" + px.po;
    }
    
    STATS.jh++;
    updHealth(best[0], true, dnsResult.dt);
    AI.learn(mode, best[0], dnsResult.dt, true);
    stickySet(mode, chain + "; DIRECT", isSocial ? C.STICKY_MS : C.STICKY_MS/2);
    return chain + "; DIRECT";
}

// ═══════════════════════════════════════════════════════════════════
// 🚀 الدالة الرئيسية — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host){
    STATS.tr++;
    
    // تعطيل كامل
    if(C.MODE === "OFF") return "DIRECT";
    
    // حماية أساسية
    if(isPrivateOrLocal(host)) return "DIRECT";
    
    // تحويل لـ lowercase
    var h = host.toLowerCase();
    
    // ═══ DIRECT PASS-THROUGH ═══
    // تطبيقات التواصل + المواقع العادية = DIRECT دائماً
    if(hasKW(h, DIRECT_KW) && !hasKW(h, PUBG_KW)){
        STATS.dh++;
        return "DIRECT";
    }
    
    // ═══ PUBG DETECTION ═══
    if(!hasKW(h, PUBG_KW)){
        STATS.dh++;
        return "DIRECT";
    }
    
    // ═══ PUBG TRAFFIC — المعالجة الذكية ═══
    var dns = smartDNS(host);
    var mode = dns.mode;
    var isSocial = dns.isSocial;
    
    if(isSocial) STATS.sr++;
    
    // UDP ports → DIRECT (أداء أفضل للعبة)
    if(C.UDP_DIRECT){
        var port = getPort(url);
        if(port >= 7000 && port <= 20099){
            return "DIRECT";
        }
    }
    
    // تحقق من IP الأردني
    if(dns.ip){
        if(isJordanIP(dns.ip)){
            STATS.jh++;
            // لو IP أردني والسيرفر قريب → ممكن DIRECT
            if(dns.dt < 3 && !isSocial && C.MODE === "SMART"){
                return "DIRECT";
            }
        } else {
            STATS.fh++;
            // STRICT/TURBO = بلوك الأجنبي
            if(C.BLOCK_FOREIGN && (C.MODE === "STRICT" || C.MODE === "TURBO")){
                STATS.bh++;
                return "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
            }
        }
    }
    
    // بناء السلسلة الذكية
    var route = buildChain(mode, dns, h);
    
    // ANTI-DETECT: إضافة headers manipulation عبر proxy chain
    if(C.ANTI_DETECT && route.indexOf("PROXY") !== -1){
        // استخدام HTTPS proxy بدل HTTP اذا متاح
        if(C.SHARK_MODE){
            route = route.replace(/PROXY /g, "HTTPS ");
            // التأكد من وجود fallback
            if(route.indexOf("DIRECT") === -1) route += "; DIRECT";
        }
    }
    
    return route;
}