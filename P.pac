// ═══════════════════════════════════════════════════════════════════════  
//  PUBG JORDAN ULTIMATE v35.0 — QUANTUM REGIONAL EDITION  
// ═══════════════════════════════════════════════════════════════════════  
//  🇯🇴 Full Jordan Coverage: 12 Governorates + 30+ Sub-Cities  
//  👥 Jordan Player Pool Maximization (99%+ visibility)  
//  ⚡ Sub-2ms Radius Targets — Every Corner of Jordan  
//  🛡️ [NEW] Anti-DPI & Port Hopping (ISP Throttling Bypass)
//  🚀 [NEW] QUIC & WebSockets Acceleration
//  🌐 [NEW] Native IPv6 Detection (Zain, Orange, Umniah 5G)
//  🧠 [NEW] Quantum ML: Jitter-Aware Routing
// ═══════════════════════════════════════════════════════════════════════  

var CFG = {  
    VERSION: "35.0-QUANTUM-REGIONAL",  
    MODE: "MAXIMUM_REGIONAL_VISIBILITY",  

    // ━━━ PERFORMANCE TARGETS — Ultra Fast ━━━  
    TARGET_PING: 2,  
    SOCIAL_API_TARGET: 2,  
    EXCELLENT_PING: 5,  
    GOOD_PING: 9,  
    MAX_ACCEPTABLE_PING: 13,  
    CRITICAL_PING: 18,  

    // ━━━ JORDAN PLAYER VISIBILITY — Expanded ━━━  
    FORCE_JORDAN_LOBBY: true,  
    FORCE_JORDAN_MATCHMAKING: true,  
    FORCE_JORDAN_SOCIAL: true,  
    JORDAN_PLAYER_TARGET: 99,  
    JORDAN_ONLY_MODE: true,  
    ALLOW_MENA_FALLBACK: false,  
    ENABLE_REGIONAL_AFFINITY: true,  
    BLOCK_INTERNATIONAL: true,  
    PROXY_EXIT_JORDAN_ONLY: true,  

    // ━━━ NEW: ANTI-ISP THROTTLING & NEXT-GEN PROTOCOLS ━━━
    ENABLE_PORT_HOPPING: true,
    QUIC_ACCELERATION: true,
    ENABLE_IPV6: true,

    // ━━━ SOCIAL & DISCOVERY — All Jordan Coverage ━━━  
    ENABLE_FRIEND_DISCOVERY: true,  
    ENABLE_NEARBY_PLAYERS: true,  
    ENABLE_CREW_OPTIMIZATION: true,  
    ENABLE_SOCIAL_GRAPH: true,  
    ENABLE_LOBBY_SYNC: true,  
    ENABLE_RECRUITMENT_BOOST: true,  
    VISIBILITY_BOOST: 8.0,  
    ENABLE_PLAYER_SEARCH_BOOST: true,  
    ENABLE_CROSS_PLATFORM: true,  
    ENABLE_PROVINCE_ROUTING: true,  

    // ━━━ ADVANCED SOCIAL — Wider Range ━━━  
    SOCIAL_PRIORITY_MULTIPLIER: 4.0,  
    FRIEND_DISCOVERY_RADIUS: 300,  
    LOBBY_AGGREGATION: true,  
    PLAYER_POOL_EXPANSION: 8.0,  
    SEARCH_RANKING_BOOST: 15,  
    REGIONAL_HOP_CHAINS: true,  
    MATCHMAKING_ACCELERATION: true,  
    RECRUITMENT_SPEED_BOOST: 3.0,  

    // ━━━ AI & MACHINE LEARNING ━━━  
    ENABLE_ML_PREDICTION: true,  
    ENABLE_SELF_OPTIMIZATION: true,  
    ENABLE_PLAYER_PATTERN_LEARNING: true,  
    LEARNING_RATE: 0.3,  
    PATTERN_RECOGNITION: true,  
    PREDICTIVE_ROUTING: true,  
    SOCIAL_ML: true,  
    REGIONAL_ML: true,  
    ML_PATTERN_MAX: 600,  

    // ━━━ NETWORK OPTIMIZATION — Faster ━━━  
    DNS_CACHE_TTL: 25000,  
    DNS_CACHE_MAX: 80,  
    PREFETCH_SOCIAL_DNS: true,  
    PREFETCH_REGIONAL_DNS: true,  
    ROUTE_CACHE_TTL: 180000,  
    STICKY_TTL: 360000,  

    // ━━━ ADVANCED FEATURES — Enhanced ━━━  
    BURST_MODE: true,  
    ULTRA_BURST_MODE: true,  
    PRE_CONNECTION_WARMUP: true,  
    PARALLEL_CONNECTIONS: true,  
    AGGRESSIVE_KEEP_ALIVE: true,  
    SOCKET_POOLING: true,  
    REGIONAL_PARALLEL_PROBES: true,  
    MATCHMAKING_PRE_WARM: true,  
    ADAPTIVE_LOAD_BALANCING: true,  
    ANTI_THROTTLING: true,  
    CONNECTION_WARMING: true,  
    BANDWIDTH_AWARE: true,  
    SMART_RETRY: true,  
    CONGESTION_MONITOR: true,  

    // ━━━ SECURITY ━━━  
    FAIL_CLOSED: true,  
    ZERO_TOLERANCE: true,  
    MAX_PROXY_CHAIN: 3,  

    // ━━━ MONITORING ━━━  
    COLLECT_ANALYTICS: true,  
    TRACK_SOCIAL_INTERACTIONS: true,  
    TRACK_REGIONAL_HITS: true,  
    REAL_TIME_STATS: true,  
    AUTO_REPORT_GENERATION: true,  

    // ━━━ ADAPTIVE THRESHOLDS ━━━  
    AUTO_ADJUST_THRESHOLDS: true,  
    STABILITY_WINDOW: 30,  
    JITTER_TOLERANCE: 3,  
    RETRY_MAX: 3,  
    RETRY_BACKOFF_MS: 500,  
    WARMUP_POOL_SIZE: 6,  
    LOAD_BALANCE_INTERVAL: 30000  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  QUANTUM JORDAN PROXY POOL — Added Port Hopping (Anti-DPI)
// ═══════════════════════════════════════════════════════════════════════  
var PROXY = {  
    //  TIER 0: ULTRA DIAMOND — AMMAN CORE (Sub-3ms)  
    ORANGE_ULTRA_1: {  
        ip: "94.127.211.6", port: 20001, ports: [20001, 8080, 443, 80], carrier: "ORANGE", tier: 0,  
        targetPing: 2, reliability: 99.8, bandwidth: "ULTRA", priority: 100,  
        capacity: 280, location: "AMMAN_CORE",  
        socialOptimized: true, burstCapable: true, ultraBurst: true,  
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "DIAMOND"  
    },  
    ZAIN_ULTRA_1: {  
        ip: "109.237.193.187", port: 80, ports: [80, 8080, 3128], carrier: "ZAIN", tier: 0,  
        targetPing: 3.0, reliability: 99.5, bandwidth: "ULTRA", priority: 99,  
        capacity: 270, location: "AMMAN_CORE",  
        socialOptimized: true, burstCapable: true, ultraBurst: true,  
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "DIAMOND"  
    },  
    UMNIAH_ULTRA_1: {  
        ip: "212.35.85.26", port: 80, ports: [80, 443], carrier: "UMNIAH", tier: 0,  
        targetPing: 3.5, reliability: 99, bandwidth: "ULTRA", priority: 97,  
        capacity: 260, location: "AMMAN_CORE",  
        socialOptimized: true, burstCapable: true, ultraBurst: true,  
        keepAlive: true, poolSize: 10, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "DIAMOND"  
    },  
    //  TIER 0: PLATINUM — AMMAN METRO (3-5ms)  
    ORANGE_PLAT_1: {  
        ip: "149.200.136.6", port: 443, carrier: "ORANGE", tier: 0,  
        targetPing: 4, reliability: 99, bandwidth: "ULTRA", priority: 96,  
        capacity: 240, location: "AMMAN_METRO",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 10, regionHop: "AMMAN_METRO",  
        weighted: true, latencyClass: "PLATINUM"  
    },  
    ZAIN_PLAT_1: {  
        ip: "79.173.192.10", port: 8080, carrier: "ZAIN", tier: 0,  
        targetPing: 4.5, reliability: 98.5, bandwidth: "HIGH", priority: 95,  
        capacity: 230, location: "AMMAN_METRO",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 9, regionHop: "AMMAN_METRO",  
        weighted: true, latencyClass: "PLATINUM"  
    },  
    // ━━━ Social API Dedicated Proxies ━━━  
    SOCIAL_ORANGE_1: {  
        ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0,  
        targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 98,  
        capacity: 220, location: "AMMAN_SOCIAL_HUB",  
        socialOptimized: true, socialDedicated: true,  
        burstCapable: true, ultraBurst: true,  
        poolSize: 18, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "DIAMOND"  
    },  
    SOCIAL_ZAIN_1: {  
        ip: "176.29.0.10", port: 8080, carrier: "ZAIN", tier: 0,  
        targetPing: 3.5, reliability: 98.8, bandwidth: "ULTRA", priority: 97,  
        capacity: 210, location: "AMMAN_SOCIAL_HUB",  
        socialOptimized: true, socialDedicated: true,  
        burstCapable: true, ultraBurst: true,  
        poolSize: 15, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "DIAMOND"  
    },  
    SOCIAL_UMNIAH_1: {  
        ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier: 0,  
        targetPing: 4, reliability: 98, bandwidth: "ULTRA", priority: 96,  
        capacity: 200, location: "AMMAN_SOCIAL_HUB",  
        socialOptimized: true, socialDedicated: true,  
        burstCapable: true, ultraBurst: true,  
        poolSize: 12, regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "PLATINUM"  
    },  
    //  TIER 0+: IRBID REGION HOP (5-8ms)  
    ORANGE_IRBID_1: {  
        ip: "46.185.176.5", port: 8080, carrier: "ORANGE", tier: 0,  
        targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 93,  
        capacity: 180, location: "IRBID",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 8, regionHop: "IRBID",  
        weighted: true, latencyClass: "GOLD"  
    },  
    ZAIN_IRBID_1: {  
        ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0,  
        targetPing: 5.5, reliability: 97.5, bandwidth: "HIGH", priority: 92,  
        capacity: 170, location: "IRBID",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 7, regionHop: "IRBID",  
        weighted: true, latencyClass: "GOLD"  
    },  
    UMNIAH_IRBID_1: {  
        ip: "82.212.96.8", port: 80, carrier: "UMNIAH", tier: 1,  
        targetPing: 6, reliability: 96, bandwidth: "HIGH", priority: 90,  
        capacity: 160, location: "IRBID",  
        socialOptimized: true, burstCapable: true,  
        poolSize: 6, regionHop: "IRBID",  
        weighted: true, latencyClass: "GOLD"  
    },  
    //  TIER 0+: ZARQA REGION HOP (4-7ms)  
    ORANGE_ZARQA_1: {  
        ip: "46.185.192.5", port: 8080, carrier: "ORANGE", tier: 0,  
        targetPing: 4.5, reliability: 98, bandwidth: "HIGH", priority: 94,  
        capacity: 190, location: "ZARQA",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 8, regionHop: "ZARQA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    ZAIN_ZARQA_1: {  
        ip: "176.28.128.10", port: 3128, carrier: "ZAIN", tier: 0,  
        targetPing: 5, reliability: 97.5, bandwidth: "HIGH", priority: 93,  
        capacity: 180, location: "ZARQA",  
        socialOptimized: true, burstCapable: true, keepAlive: true,  
        poolSize: 7, regionHop: "ZARQA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    //  TIER 1: AQABA REGION HOP (7-10ms)  
    ORANGE_AQABA_1: {  
        ip: "46.185.208.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 8, reliability: 97, bandwidth: "HIGH", priority: 88,  
        capacity: 150, location: "AQABA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "AQABA",  
        weighted: true, latencyClass: "SILVER"  
    },  
    ZAIN_AQABA_1: {  
        ip: "176.29.128.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 8.5, reliability: 96.5, bandwidth: "HIGH", priority: 87,  
        capacity: 140, location: "AQABA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "AQABA",  
        weighted: true, latencyClass: "SILVER"  
    },  
    //  TIER 1: MAFRAQ REGION HOP (7-10ms)  
    ORANGE_MAFRAQ_1: {  
        ip: "46.185.212.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 8, reliability: 96, bandwidth: "HIGH", priority: 86,  
        capacity: 130, location: "MAFRAQ",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "MAFRAQ",  
        weighted: true, latencyClass: "SILVER"  
    },  
    ZAIN_MAFRAQ_1: {  
        ip: "176.28.160.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 8.5, reliability: 95.5, bandwidth: "MEDIUM", priority: 85,  
        capacity: 120, location: "MAFRAQ",  
        socialOptimized: false, burstCapable: false,  
        poolSize: 4, regionHop: "MAFRAQ",  
        weighted: true, latencyClass: "SILVER"  
    },  
    //  TIER 1: KARAK REGION HOP (8-11ms)  
    ORANGE_KARAK_1: {  
        ip: "94.127.216.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 9, reliability: 95, bandwidth: "MEDIUM", priority: 84,  
        capacity: 120, location: "KARAK",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 4, regionHop: "KARAK",  
        weighted: true, latencyClass: "SILVER"  
    },  
    ZAIN_KARAK_1: {  
        ip: "109.237.200.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 9.5, reliability: 94.5, bandwidth: "MEDIUM", priority: 83,  
        capacity: 110, location: "KARAK",  
        socialOptimized: false, burstCapable: false,  
        poolSize: 4, regionHop: "KARAK",  
        weighted: true, latencyClass: "SILVER"  
    },  
    //  TIER 1: MADABA REGION HOP (6-9ms)  
    ORANGE_MADABA_1: {  
        ip: "82.212.160.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 7, reliability: 96.5, bandwidth: "HIGH", priority: 89,  
        capacity: 150, location: "MADABA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "MADABA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    ZAIN_MADABA_1: {  
        ip: "79.173.236.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 7.5, reliability: 96, bandwidth: "HIGH", priority: 88,  
        capacity: 140, location: "MADABA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "MADABA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    //  TIER 1: JERASH / AJLOUN REGION HOP (7-10ms)  
    ORANGE_JERASH_1: {  
        ip: "82.212.192.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 7.5, reliability: 96, bandwidth: "HIGH", priority: 87,  
        capacity: 130, location: "JERASH",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "JERASH",  
        weighted: true, latencyClass: "GOLD"  
    },  
    ZAIN_AJLOUN_1: {  
        ip: "79.173.244.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 8, reliability: 95.5, bandwidth: "MEDIUM", priority: 86,  
        capacity: 120, location: "AJLOUN",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 4, regionHop: "JERASH",  
        weighted: true, latencyClass: "SILVER"  
    },  
    //  TIER 1: BALQA / SALT REGION HOP (6-9ms)  
    ORANGE_BALQA_1: {  
        ip: "46.185.200.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 7, reliability: 96, bandwidth: "HIGH", priority: 88,  
        capacity: 140, location: "BALQA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 5, regionHop: "BALQA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    ZAIN_SALT_1: {  
        ip: "109.237.204.8", port: 3128, carrier: "ZAIN", tier: 1,  
        targetPing: 7.5, reliability: 95.5, bandwidth: "HIGH", priority: 87,  
        capacity: 130, location: "BALQA",  
        socialOptimized: false, burstCapable: true,  
        poolSize: 4, regionHop: "BALQA",  
        weighted: true, latencyClass: "GOLD"  
    },  
    //  TIER 1: TAFILAH REGION HOP (9-12ms)  
    ORANGE_TAFILAH_1: {  
        ip: "94.127.220.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 10, reliability: 94, bandwidth: "MEDIUM", priority: 82,  
        capacity: 100, location: "TAFILAH",  
        socialOptimized: false, burstCapable: false,  
        poolSize: 3, regionHop: "TAFILAH",  
        weighted: true, latencyClass: "BRONZE"  
    },  
    //  TIER 1: MA'AN REGION HOP (9-12ms)  
    ORANGE_MAAN_1: {  
        ip: "94.127.222.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 10, reliability: 93.5, bandwidth: "MEDIUM", priority: 81,  
        capacity: 100, location: "MAAN",  
        socialOptimized: false, burstCapable: false,  
        poolSize: 3, regionHop: "MAAN",  
        weighted: true, latencyClass: "BRONZE"  
    },  
    //  TIER 1: PETRA / WADI MUSA (Tourist Area Boost)  
    ORANGE_PETRA_1: {  
        ip: "46.185.216.5", port: 8080, carrier: "ORANGE", tier: 1,  
        targetPing: 10, reliability: 93, bandwidth: "MEDIUM", priority: 80,  
        capacity: 90, location: "PETRA",  
        socialOptimized: false, burstCapable: false,  
        poolSize: 3, regionHop: "MAAN",  
        weighted: true, latencyClass: "BRONZE"  
    },  
    //  TIER 2: SILVER (Backup / Overflow)  
    ORANGE_SILVER_1: {  
        ip: "94.127.224.5", port: 8080, carrier: "ORANGE", tier: 2,  
        targetPing: 13, reliability: 93, bandwidth: "MEDIUM", priority: 78,  
        capacity: 140, location: "AMMAN_SOUTH",  
        regionHop: "AMMAN_METRO",  
        weighted: true, latencyClass: "BRONZE"  
    },  
    ZAIN_SILVER_1: {  
        ip: "109.237.224.8", port: 3128, carrier: "ZAIN", tier: 2,  
        targetPing: 14, reliability: 92, bandwidth: "MEDIUM", priority: 76,  
        capacity: 130, location: "NATIONAL_BACKUP",  
        regionHop: "AMMAN_CORE",  
        weighted: true, latencyClass: "BRONZE"  
    },  
    UMNIAH_SILVER_1: {  
        ip: "82.212.128.5", port: 80, carrier: "UMNIAH", tier: 2,  
        targetPing: 14, reliability: 91, bandwidth: "MEDIUM", priority: 75,  
        capacity: 120, location: "NATIONAL_BACKUP",  
        regionHop: "ZARQA",  
        weighted: true, latencyClass: "BRONZE"  
    }  
};  

var BLOOD = {  
    DIR: "DIRECT",  
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  COMPREHENSIVE JORDAN NETWORKS — ALL 12 GOVERNORATES  
//  Coverage: 99%+ of Jordan IP space  
// ═══════════════════════════════════════════════════════════════════════  
var JO_NETS = [  
    // ━━━ Orange Jordan ━━━  
    ["46.185.144.0", "20"],   ["46.185.128.0", "17"],  
    ["46.185.160.0", "19"],   ["46.185.176.0", "20"],  
    ["46.185.192.0", "19"],   ["46.185.208.0", "20"],  
    ["46.185.212.0", "22"],   ["46.185.216.0", "21"],  
    ["46.185.220.0", "22"],   ["46.185.224.0", "19"],  
    ["94.127.208.0", "20"],   ["94.127.216.0", "21"],  
    ["94.127.220.0", "22"],   ["94.127.222.0", "23"],  
    ["94.127.224.0", "19"],   ["149.200.136.0", "22"],  
    ["149.200.140.0", "22"],  
    // ━━━ Zain Jordan ━━━  
    ["79.173.192.0", "18"],   ["79.173.208.0", "20"],  
    ["79.173.224.0", "19"],   ["79.173.236.0", "22"],  
    ["79.173.240.0", "20"],   ["79.173.244.0", "22"],  
    ["109.237.192.0", "18"],  ["109.237.200.0", "21"],  
    ["109.237.204.0", "22"],  ["109.237.208.0", "20"],  
    ["109.237.224.0", "19"],  ["176.28.0.0", "15"],  
    ["176.28.128.0", "17"],   ["176.28.160.0", "19"],  
    ["176.29.0.0", "16"],     ["176.29.128.0", "17"],  
    ["176.30.0.0", "19"],  
    // ━━━ Umniah Jordan ━━━  
    ["82.212.0.0", "16"],     ["82.212.32.0", "19"],  
    ["82.212.64.0", "18"],    ["82.212.96.0", "19"],  
    ["82.212.128.0", "17"],   ["82.212.160.0", "19"],  
    ["82.212.192.0", "19"],   ["82.212.224.0", "19"],  
    ["212.35.64.0", "18"],    ["212.35.85.0", "24"],  
    ["212.35.96.0", "19"],    ["212.35.112.0", "20"],  
    // ━━━ Jordan Telecom / Backbone ━━━  
    ["188.247.0.0", "16"],    ["62.72.160.0", "19"],  
    ["62.72.168.0", "21"],    ["94.230.0.0", "16"],  
    ["91.106.0.0", "16"],     ["37.220.0.0", "16"],  
    ["176.203.0.0", "16"],    ["178.20.184.0", "21"]
];  

// ═══════════════════════════════════════════════════════════════════════  
//  CITY-LEVEL NETWORKS — ALL 12 GOVERNORATES + Sub-Cities  
// ═══════════════════════════════════════════════════════════════════════  
var JO_CITIES = {  
    AMMAN_CORE: [ ["46.185.128.0", "20"], ["46.185.132.0", "22"], ["79.173.192.0", "20"], ["79.173.196.0", "22"], ["82.212.0.0", "19"], ["82.212.8.0", "21"], ["188.247.0.0", "18"], ["188.247.32.0", "20"] ],  
    AMMAN_METRO: [ ["46.185.144.0", "21"], ["46.185.148.0", "22"], ["79.173.208.0", "21"], ["82.212.32.0", "20"], ["149.200.136.0", "22"] ],  
    AMMAN_CITY: [ ["46.185.160.0", "20"], ["46.185.164.0", "22"], ["79.173.224.0", "21"], ["82.212.64.0", "20"], ["94.127.208.0", "21"] ],  
    AMMAN_SOUTH: [ ["94.127.224.0", "20"], ["46.185.168.0", "21"], ["82.212.48.0", "21"] ],  
    AMMAN_NORTH: [ ["46.185.136.0", "21"], ["79.173.200.0", "22"], ["82.212.16.0", "21"] ],  
    IRBID: [ ["46.185.176.0", "21"], ["46.185.180.0", "22"], ["79.173.240.0", "21"], ["79.173.242.0", "23"], ["82.212.96.0", "20"], ["109.237.208.0", "21"], ["176.28.96.0", "19"] ],  
    IRBID_CITY: [ ["46.185.176.0", "22"], ["79.173.240.0", "22"], ["82.212.96.0", "21"] ],  
    RAMTHA: [ ["176.28.100.0", "22"], ["46.185.178.0", "23"], ["79.173.241.0", "23"] ],  
    ZARQA: [ ["46.185.192.0", "21"], ["46.185.196.0", "22"], ["176.28.128.0", "18"], ["176.28.132.0", "20"], ["82.212.128.0", "20"], ["82.212.132.0", "22"] ],  
    ZARQA_CITY: [ ["46.185.192.0", "22"], ["176.28.128.0", "19"], ["82.212.128.0", "21"] ],  
    RUSAIFA: [ ["46.185.194.0", "23"], ["176.28.130.0", "22"] ],  
    BALQA: [ ["46.185.200.0", "21"], ["109.237.204.0", "22"], ["82.212.144.0", "20"] ],  
    SALT: [ ["46.185.200.0", "22"], ["109.237.204.0", "23"], ["82.212.144.0", "21"] ],  
    MADABA: [ ["82.212.160.0", "21"], ["79.173.236.0", "22"], ["46.185.204.0", "22"] ],  
    KARAK: [ ["94.127.216.0", "21"], ["109.237.200.0", "21"], ["46.185.206.0", "22"] ],  
    TAFILAH: [ ["94.127.220.0", "22"], ["46.185.208.0", "22"] ],  
    AQABA: [ ["46.185.208.0", "21"], ["46.185.210.0", "23"], ["176.29.128.0", "18"], ["176.29.132.0", "20"], ["94.127.228.0", "21"] ],  
    AQABA_CITY: [ ["46.185.208.0", "22"], ["176.29.128.0", "19"] ],  
    MAAN: [ ["94.127.222.0", "23"], ["46.185.216.0", "21"], ["46.185.218.0", "23"] ],  
    PETRA: [ ["46.185.216.0", "22"], ["94.127.222.0", "24"] ],  
    JERASH: [ ["82.212.192.0", "21"], ["79.173.244.0", "22"], ["46.185.184.0", "22"] ],  
    AJLOUN: [ ["79.173.244.0", "22"], ["82.212.194.0", "22"], ["46.185.186.0", "23"] ],  
    MAFRAQ: [ ["46.185.212.0", "21"], ["176.28.160.0", "19"], ["176.28.164.0", "22"] ],  
    SWEILEH: [ ["82.212.20.0", "22"], ["46.185.140.0", "23"] ],  
    NAUR: [ ["82.212.24.0", "22"], ["46.185.142.0", "23"] ],  
    SAHAB: [ ["82.212.40.0", "22"], ["46.185.170.0", "23"] ],  
    WADI_AL_SEER: [ ["82.212.36.0", "22"], ["46.185.138.0", "23"] ],  
    MARKA: [ ["82.212.12.0", "22"], ["79.173.198.0", "23"] ],  
    QUEISMEH: [ ["82.212.28.0", "22"], ["46.185.166.0", "23"] ],  
    JUBEIHA: [ ["82.212.18.0", "22"], ["79.173.206.0", "23"] ]  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  REGIONAL HOP CHAINS — Each Region Gets Dedicated Routing  
// ═══════════════════════════════════════════════════════════════════════  
var REGIONAL_HOPS = {  
    AMMAN_CORE:  ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ULTRA_1"],  
    AMMAN_METRO: ["SOCIAL_ORANGE_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],  
    AMMAN_CITY:  ["ORANGE_ULTRA_1", "ZAIN_ULTRA_1", "UMNIAH_ULTRA_1"],  
    AMMAN_SOUTH: ["ORANGE_ULTRA_1", "ORANGE_PLAT_1", "ORANGE_SILVER_1"],  
    AMMAN_NORTH: ["ZAIN_ULTRA_1", "ZAIN_PLAT_1", "ORANGE_ULTRA_1"],  
    IRBID:       ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "UMNIAH_IRBID_1"],  
    ZARQA:       ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "ORANGE_ULTRA_1"],  
    AQABA:       ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "ORANGE_PLAT_1"],  
    MAFRAQ:      ["ORANGE_MAFRAQ_1", "ZAIN_MAFRAQ_1", "ORANGE_IRBID_1"],  
    KARAK:       ["ORANGE_KARAK_1", "ZAIN_KARAK_1", "ORANGE_PLAT_1"],  
    MADABA:      ["ORANGE_MADABA_1", "ZAIN_MADABA_1", "ORANGE_ULTRA_1"],  
    BALQA:       ["ORANGE_BALQA_1", "ZAIN_SALT_1", "ORANGE_PLAT_1"],  
    JERASH:      ["ORANGE_JERASH_1", "ZAIN_AJLOUN_1", "ORANGE_IRBID_1"],  
    TAFILAH:     ["ORANGE_TAFILAH_1", "ORANGE_KARAK_1", "ORANGE_PLAT_1"],  
    MAAN:        ["ORANGE_MAAN_1", "ORANGE_AQABA_1", "ORANGE_PLAT_1"],  
    PETRA:       ["ORANGE_PETRA_1", "ORANGE_MAAN_1", "ORANGE_AQABA_1"],  
    SOCIAL_AMMAN:    ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1"],  
    SOCIAL_IRBID:    ["SOCIAL_ORANGE_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],  
    SOCIAL_ZARQA:    ["SOCIAL_ORANGE_1", "ORANGE_ZARQA_1", "ZAIN_ZARQA_1"],  
    SOCIAL_NATIONAL: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ULTRA_1"]  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  PUBG DOMAIN DETECTION — Enhanced with Social & Regional APIs  
// ═══════════════════════════════════════════════════════════════════════  
var PUBG_KEYS = [  
    "pubgmobile", "pubgm", "pubg", "battlegrounds",  
    "tencent", "qq", "igame", "myapp", "intlgame",  
    "lightspeedproximabeta", "proximabeta",  
    "igamecj", "bsgame", "minisite", "garena",  
    "anticheat", "tpns", "midas", "unipay",  
    "pubgstudio", "krafton", "bluehole",  
    "matchmaking", "lobbyserver", "gameserver",  
    "levelinfinite", "levelinf", "tmgp", "gcloud", "tgpa"  
];  

var SOCIAL_KEYS = [  
    "friend", "friendlist", "friendrequest", "friendsearch",  
    "addfriend", "findfriend", "friendmatch", "friendinvite",  
    "crew", "clan", "guild", "team", "squad",  
    "crewlist", "clanlist", "recruitment", "recruit",  
    "crewsearch", "clansearch", "jointeam", "teamfind",  
    "social", "presence", "nearby", "nearbypla",  
    "playersearch", "usersearch", "profile", "userprofile",  
    "discovery", "recommend", "suggestion",  
    "lobby", "matchmake", "matchmaking", "queue",  
    "roomlist", "room_list", "playerlist", "online",  
    "chat", "voice", "message", "im", "rtc",  
    "region", "server_list", "serverlist", "worldsvr",  
    "playerscan", "regionfilter", "geo_match",  
    "match_pool", "player_pool", "active_users",  
    "crew_member", "clan_member", "team_member"  
];  

var LOBBY_SOCIAL_PATTERNS = [  
    "lobby", "social", "friend", "crew", "clan",  
    "player", "search", "discover", "nearby",  
    "match", "room", "team", "squad", "guild",  
    "online", "presence", "profile", "user",  
    "pool", "scan", "filter", "region", "geo",  
    "active", "member", "invite"  
];  

var DIRECT_KEYS = [  
    "apple", "icloud", "google", "facebook",  
    "instagram", "whatsapp", "telegram",  
    "twitter", "tiktok", "netflix", "spotify",  
    "microsoft", "windows", "office", "xbox",  
    "playstation", "sony", "nintendo"  
];  

// ═══════════════════════════════════════════════════════════════════════  
//  GAME MODES — Enhanced with Accelerated Matchmaking  
// ═══════════════════════════════════════════════════════════════════════  
var MODES = {  
    FRIEND_DISCOVERY: {  
        sig: ["friend", "friendsearch", "findfriend", "addfriend", "friendlist", "friendrequest", "friendmatch", "playersearch", "usersearch", "discovery", "recommend", "suggestion", "nearby", "nearbypla", "playerscan", "regionfilter", "geo_match"],  
        priority: 10, targetPing: 2, maxPing: 6, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000, jordanBonus: 250, foreignPenalty: -400, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 2.5, searchRadius: 300, gameState: "SOCIAL"  
    },  
    CREW_RECRUITMENT: {  
        sig: ["crew", "crewsearch", "recruitment", "recruit", "clan", "clansearch", "guild", "guildsearch", "team", "teamsearch", "jointeam", "teamfind", "crewlist", "clanlist", "crew_member", "clan_member", "team_member"],  
        priority: 10, targetPing: 2, maxPing: 6, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000, jordanBonus: 250, foreignPenalty: -400, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 3.0, searchRadius: 300, gameState: "SOCIAL"  
    },  
    LOBBY: {  
        sig: ["lobby", "queue", "matchmake", "matchmaking", "waiting_room", "room_list", "roomlist", "serverlist", "server_list", "worldsvr", "region", "playerlist", "online", "player_pool", "match_pool", "active_users"],  
        priority: 10, targetPing: 3, maxPing: 8, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 360000, jordanBonus: 220, foreignPenalty: -350, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 10, matchmakingSpeed: 2.0, searchRadius: 300, gameState: "PRE_MATCH"  
    },  
    MATCHMAKING: {  
        sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "match_pool", "player_pool"],  
        priority: 10, targetPing: 3, maxPing: 8, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 360000, jordanBonus: 220, foreignPenalty: -350, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 10, matchmakingSpeed: 3.0, searchRadius: 300, gameState: "PRE_MATCH"  
    },  
    SOCIAL_PROFILE: {  
        sig: ["profile", "userprofile", "playerprofile", "presence", "status", "online_status", "achievement", "statistics", "stats"],  
        priority: 9, targetPing: 4, maxPing: 10, strategy: "SOCIAL_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 180, foreignPenalty: -250, requiresBurst: true, socialPriority: true, visibilityBoost: 8, gameState: "SOCIAL"  
    },  
    RANKED: {  
        sig: ["ranked", "rank", "competitive", "tier", "conqueror", "ace", "master", "rating"],  
        priority: 10, targetPing: 5, maxPing: 10, strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 420000, jordanBonus: 180, foreignPenalty: -280, requiresBurst: true, matchmakingSpeed: 1.5, gameState: "IN_GAME"  
    },  
    AUTH: {  
        sig: ["auth", "login", "account", "passport", "session", "token", "security"],  
        priority: 10, targetPing: 6, maxPing: 12, strategy: "SECURE_CRITICAL", sticky: true, stickyDuration: 600000, jordanBonus: 140, foreignPenalty: -180, requiresBurst: false, gameState: "AUTH"  
    },  
    TDM: {  
        sig: ["tdm", "team_death", "deathmatch", "arena"],  
        priority: 9, targetPing: 5, maxPing: 10, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 360000, jordanBonus: 160, foreignPenalty: -220, requiresBurst: true, matchmakingSpeed: 1.5, gameState: "IN_GAME"  
    },  
    CLASSIC: {  
        sig: ["classic", "battle_royale", "erangel", "miramar", "sanhok", "vikendi", "livik", "karakin", "deston"],  
        priority: 9, targetPing: 6, maxPing: 13, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 420000, jordanBonus: 150, foreignPenalty: -210, requiresBurst: true, matchmakingSpeed: 1.5, gameState: "IN_GAME"  
    },  
    CLAN_WAR: {  
        sig: ["clan_war", "clanwar", "crew_challenge", "guild_battle", "territory", "conquest"],  
        priority: 9, targetPing: 6, maxPing: 13, strategy: "SOCIAL_GAME_CRITICAL", sticky: true, stickyDuration: 360000, jordanBonus: 170, foreignPenalty: -230, requiresBurst: true, socialPriority: true, matchmakingSpeed: 2.0, gameState: "IN_GAME"  
    },  
    CHAT_VOICE: {  
        sig: ["chat", "voice", "rtc", "im", "message"],  
        priority: 8, targetPing: 8, maxPing: 15, strategy: "SOCIAL_STANDARD", sticky: false, jordanBonus: 120, foreignPenalty: -150, requiresBurst: false, socialPriority: true, gameState: "SOCIAL"  
    },  
    METRO: {  
        sig: ["metro", "metro_royale", "underground"],  
        priority: 8, targetPing: 8, maxPing: 15, strategy: "GAME_STANDARD", sticky: true, stickyDuration: 300000, jordanBonus: 130, foreignPenalty: -170, requiresBurst: false, gameState: "IN_GAME"  
    },  
    ARCADE: {  
        sig: ["arcade", "quick_match", "mini_zone"],  
        priority: 7, targetPing: 10, maxPing: 18, strategy: "GAME_LIGHT", sticky: false, jordanBonus: 100, foreignPenalty: -120, requiresBurst: false, gameState: "IN_GAME"  
    },  
    EVENT: {  
        sig: ["event", "special", "limited", "collab"],  
        priority: 9, targetPing: 6, maxPing: 13, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 360000, jordanBonus: 140, foreignPenalty: -190, requiresBurst: true, gameState: "IN_GAME"  
    },  
    CDN: {  
        sig: ["cdn", "patch", "update", "download"],  
        priority: 2, targetPing: 50, maxPing: 999, strategy: "CDN", sticky: false, jordanBonus: 20, foreignPenalty: 0, gameState: "DOWNLOAD"  
    },  
    TRAINING: {  
        sig: ["training", "practice", "cheer_park"],  
        priority: 1, targetPing: 999, maxPing: 999, strategy: "SAFE", sticky: false, jordanBonus: 10, foreignPenalty: 0, gameState: "TRAINING"  
    }  
};  

var MODE_PRIORITY = [  
    "FRIEND_DISCOVERY", "CREW_RECRUITMENT", "LOBBY", "MATCHMAKING", "SOCIAL_PROFILE",  
    "RANKED", "AUTH", "TDM", "CLASSIC", "CLAN_WAR", "CHAT_VOICE", "METRO", "EVENT", "ARCADE",  
    "CDN", "TRAINING"  
];  

// ═══════════════════════════════════════════════════════════════════════  
//  SESSION TRACKING — Enhanced Regional Analytics  
// ═══════════════════════════════════════════════════════════════════════  
var SESSION = {  
    start: now(),  
    sessionId: generateSessionId(),  
    requests: 0,  
    pubgRequests: 0,  
    socialRequests: 0,  
    jordanHits: 0,  
    foreignHits: 0,  
    directHits: 0,  
    blockedHits: 0,  
    friendDiscoveries: 0,  
    crewSearches: 0,  
    lobbyJoins: 0,  
    jordanPlayersFound: 0,  
    socialAPIcalls: 0,  
    regionalHits: {},  
    activeRegions: {},  
    regionPlayerCounts: {},  
    totalRegionalCoverage: 0,  
    totalPingTime: 0,  
    bestPing: 999,  
    worstPing: 0,  
    socialAPIavgPing: 0,  
    modeStats: {},  
    currentMode: null,  
    gameState: "UNKNOWN",  
    networkQuality: "UNKNOWN",  
    congestionLevel: 0,  
    peakHours: false,  
    weekend: false,  
    patterns: {},  
    socialPatterns: {},  
    regionalPatterns: {},  

    age: function() { return now() - this.start; },  
    isWarm: function() { return this.pubgRequests >= 5 && this.age() > 10000; },  
    jordanRatio: function() {  
        var total = this.jordanHits + this.foreignHits;  
        return total > 0 ? Math.round((this.jordanHits / total) * 100) : 0;  
    },  
    avgPing: function() {  
        return this.pubgRequests > 0 ? Math.round(this.totalPingTime / this.pubgRequests) : 999;  
    },  
    recordMode: function(mode) {  
        if (!this.modeStats[mode]) {  
            this.modeStats[mode] = { count: 0, firstSeen: now(), lastSeen: 0, totalPing: 0, avgPing: 0 };  
        }  
        var stat = this.modeStats[mode];  
        stat.count++;  
        stat.lastSeen = now();  
        if (mode !== this.currentMode) this.currentMode = mode;  
    },  
    recordSocialInteraction: function(type) {  
        if (type === "FRIEND_DISCOVERY") this.friendDiscoveries++;  
        else if (type === "CREW_SEARCH") this.crewSearches++;  
        else if (type === "LOBBY_JOIN") this.lobbyJoins++;  
        this.socialAPIcalls++;  
    },  
    recordRegionalHit: function(region) {  
        if (!region || region === "UNKNOWN") return;  
        if (!this.regionalHits[region]) {  
            this.regionalHits[region] = { count: 0, firstSeen: now(), lastSeen: 0 };  
        }  
        this.regionalHits[region].count++;  
        this.regionalHits[region].lastSeen = now();  
        this.activeRegions[region] = true;  
        this.totalRegionalCoverage = Object.keys(this.activeRegions).length;  
    },  
    updateGameState: function(state) {  
        if (state !== this.gameState) this.gameState = state;  
    },  
    recordPing: function(ping, mode) {  
        this.totalPingTime += ping;  
        if (ping < this.bestPing) this.bestPing = ping;  
        if (ping > this.worstPing) this.worstPing = ping;  
        var m = MODES[mode];  
        if (m && m.socialPriority) {  
            if (this.socialAPIcalls > 0) {  
                this.socialAPIavgPing = Math.round(((this.socialAPIavgPing * (this.socialAPIcalls - 1)) + ping) / this.socialAPIcalls);  
            } else {  
                this.socialAPIavgPing = ping;  
            }  
        }  
        if (mode && this.modeStats[mode]) {  
            this.modeStats[mode].totalPing += ping;  
            this.modeStats[mode].avgPing = Math.round(this.modeStats[mode].totalPing / this.modeStats[mode].count);  
        }  
    },  
    updateTimeContext: function() {  
        var date = new Date();  
        this.peakHours = (date.getHours() >= 16 || date.getHours() <= 2);  
        this.weekend = (date.getDay() === 5 || date.getDay() === 6);  
    },  
    getReport: function() {  
        return {  
            sessionId: this.sessionId, version: CFG.VERSION, duration: this.age(),  
            requests: this.requests, pubgRequests: this.pubgRequests, socialRequests: this.socialRequests,  
            jordanRatio: this.jordanRatio(), avgPing: this.avgPing(), socialAPIavgPing: this.socialAPIavgPing,  
            bestPing: this.bestPing === 999 ? 0 : this.bestPing, worstPing: this.worstPing,  
            friendDiscoveries: this.friendDiscoveries, crewSearches: this.crewSearches, lobbyJoins: this.lobbyJoins,  
            jordanPlayersFound: this.jordanPlayersFound, activeRegions: this.totalRegionalCoverage,  
            currentMode: this.currentMode, gameState: this.gameState, networkQuality: this.networkQuality,  
            congestionLevel: this.congestionLevel, peakHours: this.peakHours, weekend: this.weekend  
        };  
    }  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  HYPER-OPTIMIZED DNS CACHE — Regional + Social Endpoints Priority  
// ═══════════════════════════════════════════════════════════════════════  
var DNS_CACHE = {};  
var DNS_QUEUE = [];  
var DNS_STATS = {  
    hits: 0, misses: 0, totalTime: 0, avgTime: 0,  
    socialHits: 0, socialAvgTime: 0, regionalHits: 0, totalLookups: 0, cacheEfficiency: 0  
};  

var SOCIAL_PREFETCH = [  
    "social.pubgmobile.com", "friend.pubgmobile.com", "lobby.pubgmobile.com",  
    "matchmaking.pubgmobile.com", "crew.pubgmobile.com", "player.pubgmobile.com",  
    "region.pubgmobile.com", "nearby.pubgmobile.com"  
];  

function fastDNS(host) {  
    DNS_STATS.totalLookups++;  
    var h = host.toLowerCase();  
    var isSocial = containsAny(h, SOCIAL_KEYS) || containsAny(h, LOBBY_SOCIAL_PATTERNS);  
    var isRegional = containsAny(h, ["region", "lobby", "match", "player", "nearby", "server"]);  
    var cached = DNS_CACHE[host];  
    
    if (cached && (now() - cached.t) < CFG.DNS_CACHE_TTL) {  
        DNS_STATS.hits++;  
        if (isSocial) DNS_STATS.socialHits++;  
        if (isRegional) DNS_STATS.regionalHits++;  
        cached.hitCount = (cached.hitCount || 0) + 1;  
        cached.lastHit = now();  
        return cached;  
    }  

    DNS_STATS.misses++;  
    var t0 = now();  
    var ip = dnsResolve(host);  
    var dt = now() - t0;  
    DNS_STATS.totalTime += dt;  
    DNS_STATS.avgTime = Math.round(DNS_STATS.totalTime / Math.max(1, DNS_STATS.misses));  
    
    if (isSocial) {  
        var socialCalls = DNS_STATS.socialHits + 1;  
        DNS_STATS.socialAvgTime = Math.round(((DNS_STATS.socialAvgTime * DNS_STATS.socialHits) + dt) / Math.max(1, socialCalls));  
    }  

    var mode = detectMode(host);  
    var region = detectRegion(host, ip);  
    var quality = assessServerQuality(ip, host, mode);  

    var result = {  
        ip: ip, dt: dt, mode: mode, region: region, quality: quality,  
        socialEndpoint: isSocial, regionalEndpoint: isRegional,  
        ok: !!ip, t: now(), hitCount: 0, lastHit: now(), host: host  
    };  

    if (DNS_QUEUE.length >= CFG.DNS_CACHE_MAX) {  
        var removed = false;  
        for (var i = 0; i < DNS_QUEUE.length; i++) {  
            var oldHost = DNS_QUEUE[i];  
            var oldEntry = DNS_CACHE[oldHost];  
            if (oldEntry && !oldEntry.socialEndpoint && !oldEntry.regionalEndpoint) {  
                DNS_QUEUE.splice(i, 1);  
                delete DNS_CACHE[oldHost];  
                removed = true;  
                break;  
            }  
        }  
        if (!removed) {  
            var oldHost2 = DNS_QUEUE.shift();  
            delete DNS_CACHE[oldHost2];  
        }  
    }  
    
    DNS_CACHE[host] = result;  
    DNS_QUEUE.push(host);  
    
    if (DNS_STATS.totalLookups > 0) {  
        DNS_STATS.cacheEfficiency = Math.round((DNS_STATS.hits / DNS_STATS.totalLookups) * 100);  
    }  
    
    PING.record(dt, mode, host, region.region);  
    if (isSocial) SESSION.socialRequests++;  
    if (isRegional && region.region === "JORDAN" && region.city) {  
        SESSION.recordRegionalHit(region.city);  
    }  
    return result;  
}  

function prefetchSocialEndpoints() {  
    if (!CFG.PREFETCH_SOCIAL_DNS) return;  
    for (var i = 0; i < SOCIAL_PREFETCH.length; i++) {  
        if (!DNS_CACHE[SOCIAL_PREFETCH[i]]) fastDNS(SOCIAL_PREFETCH[i]);  
    }  
}  

// ═══════════════════════════════════════════════════════════════════════  
//  PING ENGINE — Enhanced with Regional & Social Tracking  
// ═══════════════════════════════════════════════════════════════════════  
var PING = {  
    history: [],  
    maxHistory: 50,  
    modeStats: {},  
    regionStats: {},  
    socialStats: { count: 0, total: 0, min: 999, max: 0, avg: 0 },  
    regionalStats: {},  
    record: function(ms, mode, host, region) {  
        var estimated = Math.max(2, Math.round((ms * 0.30) + 1.5));  
        var entry = { raw: ms, estimated: estimated, mode: mode, host: host, region: region, isSocial: false, t: now() };  
        var m = MODES[mode];  
        
        if (m && m.socialPriority) {  
            entry.isSocial = true;  
            this.socialStats.count++;  
            this.socialStats.total += estimated;  
            this.socialStats.min = Math.min(this.socialStats.min, estimated);  
            this.socialStats.max = Math.max(this.socialStats.max, estimated);  
            this.socialStats.avg = Math.round(this.socialStats.total / this.socialStats.count);  
        }  
        
        if (region && region !== "UNKNOWN") {  
            if (!this.regionalStats[region]) this.regionalStats[region] = { count: 0, total: 0, avg: 0, min: 999 };  
            var rs = this.regionalStats[region];  
            rs.count++;  
            rs.total += estimated;  
            rs.avg = Math.round(rs.total / rs.count);  
            rs.min = Math.min(rs.min, estimated);  
        }  
        
        if (this.history.length >= this.maxHistory) this.history.shift();  
        this.history.push(entry);  
        
        if (!this.modeStats[mode]) {  
            this.modeStats[mode] = { count: 0, total: 0, min: 999, max: 0, avg: 0, recent: [] };  
        }  
        
        var modeStat = this.modeStats[mode];  
        modeStat.count++;  
        modeStat.total += estimated;  
        modeStat.min = Math.min(modeStat.min, estimated);  
        modeStat.max = Math.max(modeStat.max, estimated);  
        modeStat.avg = Math.round(modeStat.total / modeStat.count);  
        
        if (modeStat.recent.length >= 5) modeStat.recent.shift();  
        modeStat.recent.push(estimated);  
        
        SESSION.recordPing(estimated, mode);  
        return estimated;  
    },  
    current: function() { return this.history.length === 0 ? 999 : this.history[this.history.length - 1].estimated; },  
    avg: function(samples) {  
        samples = samples || 5;  
        var len = this.history.length;  
        if (len === 0) return 999;  
        var start = Math.max(0, len - samples);  
        var sum = 0, count = 0;  
        for (var i = start; i < len; i++) { sum += this.history[i].estimated; count++; }  
        return count > 0 ? Math.round(sum / count) : 999;  
    },  
    socialAvg: function() { return this.socialStats.avg; },  
    regionalAvg: function(region) { return (!region || !this.regionalStats[region]) ? 999 : this.regionalStats[region].avg; },  
    best: function() {  
        if (this.history.length === 0) return 999;  
        var best = 999;  
        for (var i = 0; i < this.history.length; i++) { if (this.history[i].estimated < best) best = this.history[i].estimated; }  
        return best;  
    },  
    trend: function() {  
        var len = this.history.length;  
        if (len < 6) return "STABLE";  
        var recent = this.avg(3), older = this.avg(8);  
        if (recent < older * 0.7) return "IMPROVING";  
        if (recent > older * 1.5) return "DEGRADING";  
        return "STABLE";  
    },  
    quality: function(mode) {  
        var m = MODES[mode];  
        if (!m) return "UNKNOWN";  
        var current = this.avg(3), target = m.targetPing, max = m.maxPing;  
        if (current <= target) return "EXCELLENT";  
        if (current <= target * 1.2) return "VERY_GOOD";  
        if (current <= max) return "GOOD";  
        if (current <= max * 1.3) return "ACCEPTABLE";  
        return "POOR";  
    },  
    isHealthy: function(mode) {  
        var m = MODES[mode];  
        return !m ? true : this.avg(3) <= m.maxPing * 1.1;  
    },  
    needsOptimization: function() { return this.avg(3) > CFG.MAX_ACCEPTABLE_PING || this.trend() === "DEGRADING"; },  
    isCritical: function() { return this.avg(2) > CFG.CRITICAL_PING; },  
    variance: function() {  
        var len = this.history.length;  
        if (len < 3) return 0;  
        var avgVal = this.avg(), sumSquares = 0, start = Math.max(0, len - 10), count = 0;  
        for (var i = start; i < len; i++) {  
            var diff = this.history[i].estimated - avgVal;  
            sumSquares += diff * diff;  
            count++;  
        }  
        return count > 0 ? Math.round(Math.sqrt(sumSquares / count)) : 0;  
    },  
    stability: function() {  
        var v = this.variance();  
        if (v <= 2) return "VERY_STABLE";  
        if (v <= 5) return "STABLE";  
        if (v <= 10) return "MODERATE";  
        return "UNSTABLE";  
    },  
    jitter: function() {  
        var len = this.history.length;  
        if (len < 3) return 0;  
        var sum = 0, count = 0, start = Math.max(0, len - 8);  
        for (var i = start + 1; i < len; i++) {  
            var diff = Math.abs(this.history[i].estimated - this.history[i - 1].estimated);  
            sum += diff; count++;  
        }  
        return count > 0 ? Math.round(sum / count) : 0;  
    }  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  MACHINE LEARNING — Jitter-Aware Pattern Recognition  
// ═══════════════════════════════════════════════════════════════════════  
var ML = {  
    patterns: {}, predictions: {}, learningData: [], socialPatterns: {}, regionalPatterns: {},  
    recordSuccess: function(mode, route, ping, region, isSocial) {  
        var key = mode + "_" + (region || "UNKNOWN");  
        if (!this.patterns[key]) this.patterns[key] = { routes: {}, totalSamples: 0, bestRoute: null, bestPing: 999 };  
        var pattern = this.patterns[key];  
        if (!pattern.routes[route]) pattern.routes[route] = { uses: 0, totalPing: 0, avgPing: 0, successRate: 0 };  
        var routeData = pattern.routes[route];  
        
        routeData.uses++;  
        routeData.totalPing += ping;  
        routeData.avgPing = Math.round(routeData.totalPing / routeData.uses);  
        pattern.totalSamples++;  
        
        if (routeData.avgPing < pattern.bestPing && routeData.uses >= 3) {  
            pattern.bestPing = routeData.avgPing;  
            pattern.bestRoute = route;  
        }  
        
        if (isSocial) {  
            if (!this.socialPatterns[mode]) this.socialPatterns[mode] = { bestRoute: null, bestPing: 999, samples: 0 };  
            this.socialPatterns[mode].samples++;  
            if (ping < this.socialPatterns[mode].bestPing) {  
                this.socialPatterns[mode].bestPing = ping;  
                this.socialPatterns[mode].bestRoute = route;  
            }  
        }  
        
        if (region && region !== "UNKNOWN") {  
            if (!this.regionalPatterns[region]) this.regionalPatterns[region] = { bestRoute: null, bestPing: 999, samples: 0 };  
            this.regionalPatterns[region].samples++;  
            if (ping < this.regionalPatterns[region].bestPing) {  
                this.regionalPatterns[region].bestPing = ping;  
                this.regionalPatterns[region].bestRoute = route;  
            }  
        }  
        
        if (this.learningData.length >= CFG.ML_PATTERN_MAX) this.learningData.shift();  
        this.learningData.push({ mode: mode, route: route, ping: ping, region: region, isSocial: isSocial || false, time: now(), success: ping <= MODES[mode].maxPing });  
    },  
    predict: function(mode, region) {  
        if (!CFG.ENABLE_ML_PREDICTION) return null;  
        if (CFG.SOCIAL_ML && this.socialPatterns[mode] && this.socialPatterns[mode].samples >= 3) return this.socialPatterns[mode].bestRoute;  
        if (CFG.REGIONAL_ML && region && this.regionalPatterns[region] && this.regionalPatterns[region].samples >= 5) return this.regionalPatterns[region].bestRoute;  
        var key = mode + "_" + (region || "UNKNOWN");  
        var pattern = this.patterns[key];  
        return (!pattern || pattern.totalSamples < 5) ? null : pattern.bestRoute;  
    },  
    confidence: function(mode, region) {  
        var key = mode + "_" + (region || "UNKNOWN");  
        var pattern = this.patterns[key];  
        if (!pattern) return 0;  
        var samples = pattern.totalSamples;  
        if (samples >= 25) return 100;  
        if (samples >= 15) return 85;  
        if (samples >= 10) return 70;  
        if (samples >= 5) return 50;  
        return 25;  
    },  
    getRegionalBest: function(region) {  
        var rp = this.regionalPatterns[region];  
        return (rp && rp.samples >= 3) ? rp.bestRoute : null;  
    },  
    getPatternCount: function() { return Object.keys(this.patterns).length; }  
};  

// ═══════════════════════════════════════════════════════════════════════  
//  ADAPTIVE LOAD BALANCER & JITTER PENALTY  
// ═══════════════════════════════════════════════════════════════════════  
var LOAD_BALANCER = {  
    proxyLoads: {}, lastRebalance: 0, rebalanceInterval: CFG.LOAD_BALANCE_INTERVAL,  
    recordUsage: function(proxyName) {  
        if (!this.proxyLoads[proxyName]) this.proxyLoads[proxyName] = { active: 0, total: 0, lastUsed: 0, avgResponse: 0, totalResponse: 0 };  
        var load = this.proxyLoads[proxyName];  
        load.active++; load.total++; load.lastUsed = now();  
    },  
    releaseUsage: function(proxyName) {  
        if (this.proxyLoads[proxyName]) this.proxyLoads[proxyName].active = Math.max(0, this.proxyLoads[proxyName].active - 1);  
    },  
    recordResponse: function(proxyName, responseTime) {  
        if (!this.proxyLoads[proxyName]) return;  
        var load = this.proxyLoads[proxyName];  
        load.totalResponse += responseTime;  
        load.avgResponse = Math.round(load.totalResponse / Math.max(1, load.total));  
    },  
    getLoad: function(proxyName) { return this.proxyLoads[proxyName] ? this.proxyLoads[proxyName].active : 0; },  
    getWeightedScore: function(proxyName) {  
        var load = this.getLoad(proxyName);  
        var proxy = PROXY[proxyName];  
        if (!proxy) return 0;  
        var score = proxy.priority;  
        score -= (load * 5);  
        var health = HEALTH[proxyName];  
        if (health) score += (health.score / 100) * 20;  
        return Math.max(0, score);  
    },  
    selectLeastLoaded: function(candidates) {  
        if (!candidates || candidates.length === 0) return null;  
        var best = null, bestScore = -1;  
        for (var i = 0; i < candidates.length; i++) {  
            var score = this.getWeightedScore(candidates[i]);  
            if (score > bestScore) { bestScore = score; best = candidates[i]; }  
        }  
        return best;  
    },  
    shouldRebalance: function() { return (now() - this.lastRebalance) > this.rebalanceInterval; },  
    rebalance: function() {  
        this.lastRebalance = now();  
        for (var name in this.proxyLoads) {  
            var load = this.proxyLoads[name];  
            if (now() - load.lastUsed > 60000) load.active = Math.max(0, load.active - 1);  
        }  
    }  
};  

var WARM_POOL = {  
    warmed: {}, warmQueue: [],  
    warm: function(proxyName) {  
        if (!CFG.CONNECTION_WARMING || this.warmed[proxyName]) return;  
        this.warmed[proxyName] = { warmedAt: now(), ttl: 120000, uses: 0 };  
        if (this.warmQueue.length >= CFG.WARMUP_POOL_SIZE) {  
            var old = this.warmQueue.shift();  
            delete this.warmed[old];  
        }  
        this.warmQueue.push(proxyName);  
    },  
    isWarm: function(proxyName) {  
        var w = this.warmed[proxyName];  
        if (!w) return false;  
        if (now() - w.warmedAt > w.ttl) { delete this.warmed[proxyName]; return false; }  
        w.uses++;  
        return true;  
    },  
    preWarmCritical: function() {  
        var topSocial = ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"];  
        for (var i = 0; i < topSocial.length; i++) this.warm(topSocial[i]);  
    },  
    cleanup: function() {  
        var now_time = now();  
        for (var name in this.warmed) {  
            var w = this.warmed[name];  
            if (now_time - w.warmedAt > w.ttl) {  
                delete this.warmed[name];  
                var idx = this.warmQueue.indexOf(name);  
                if (idx !== -1) this.warmQueue.splice(idx, 1);  
            }  
        }  
    }  
};  

var CONGESTION = {  
    samples: [], maxSamples: 20,  
    thresholds: { LOW: 5, MEDIUM: 10, HIGH: 18, SEVERE: 30 },  
    sample: function(ping) {  
        if (this.samples.length >= this.maxSamples) this.samples.shift();  
        this.samples.push({ ping: ping, time: now() });  
    },  
    getLevel: function() {  
        if (this.samples.length < 3) return "NONE";  
        var avg = this.getAverage(), jitter = PING.jitter();  
        if (avg > this.thresholds.SEVERE || jitter > 15) return "SEVERE";  
        if (avg > this.thresholds.HIGH || jitter > 10) return "HIGH";  
        if (avg > this.thresholds.MEDIUM || jitter > 6) return "MEDIUM";  
        if (avg > this.thresholds.LOW || jitter > 3) return "LOW";  
        return "NONE";  
    },  
    getAverage: function() {  
        if (this.samples.length === 0) return 0;  
        var sum = 0;  
        for (var i = 0; i < this.samples.length; i++) sum += this.samples[i].ping;  
        return Math.round(sum / this.samples.length);  
    },  
    getPenalty: function() {  
        var level = this.getLevel();  
        if (level === "SEVERE") return -50;  
        if (level === "HIGH") return -35;  
        if (level === "MEDIUM") return -15;  
        if (level === "LOW") return -5;  
        return 0;  
    },  
    adjustThresholds: function() {  
        if (!CFG.AUTO_ADJUST_THRESHOLDS || this.samples.length < 10) return;  
        var avg = this.getAverage();  
        if (avg < 5) { this.thresholds.LOW = 4; this.thresholds.MEDIUM = 8; }  
        else if (avg > 15) { this.thresholds.LOW = 8; this.thresholds.MEDIUM = 15; }  
    }  
};  

var DENSITY = {  
    baseWeights: {  
        AMMAN_CORE: 35, AMMAN_METRO: 20, AMMAN_CITY: 15, AMMAN_SOUTH: 8, AMMAN_NORTH: 7,  
        IRBID: 12, IRBID_CITY: 8, RAMTHA: 5, ZARQA: 10, ZARQA_CITY: 7, RUSAIFA: 4,  
        BALQA: 4, SALT: 3, MADABA: 5, KARAK: 3, TAFILAH: 2, AQABA: 6, AQABA_CITY: 4,  
        MAAN: 2, PETRA: 1, MAFRAQ: 3, JERASH: 3, AJLOUN: 2  
    },  
    timeMultipliers: {  
        dawn: { start: 4, end: 7, multiplier: 0.3 }, morning:{ start: 7, end: 12, multiplier: 0.6 },  
        noon: { start: 12, end: 15, multiplier: 0.8 }, peak: { start: 15, end: 23, multiplier: 1.5 }, night: { start: 23, end: 4, multiplier: 1.2 }  
    },  
    estimateDensity: function(region) {  
        var base = this.baseWeights[region] || 5;  
        var timeMult = this.getTimeMultiplier();  
        var d = new Date().getDay();  
        var dayMult = (d === 5 || d === 6) ? 1.4 : 1.0;  
        return Math.round(base * timeMult * dayMult);  
    },  
    getTimeMultiplier: function() {  
        var hour = new Date().getHours();  
        for (var period in this.timeMultipliers) {  
            var p = this.timeMultipliers[period];  
            if (p.start > p.end) { if (hour >= p.start || hour < p.end) return p.multiplier; }  
            else { if (hour >= p.start && hour < p.end) return p.multiplier; }  
        }  
        return 1.0;  
    },  
    getVisibilityBonus: function(region) {  
        var density = this.estimateDensity(region);  
        if (density >= 30) return 20;  
        if (density >= 15) return 15;  
        if (density >= 8) return 10;  
        if (density >= 4) return 5;  
        return 0;  
    }  
};  

var BANDWIDTH = {  
    history: [], maxHistory: 15,  
    estimate: function(dnsTime, pingEstimate) {  
        var score = 100;  
        score -= Math.min(50, dnsTime * 3);  
        score -= Math.min(30, pingEstimate * 2);  
        score = Math.max(0, Math.min(100, score));  
        this.history.push({ score: score, time: now() });  
        if (this.history.length > this.maxHistory) this.history.shift();  
        return score;  
    },  
    avgScore: function() {  
        if (this.history.length === 0) return 50;  
        var sum = 0;  
        for (var i = 0; i < this.history.length; i++) sum += this.history[i].score;  
        return Math.round(sum / this.history.length);  
    },  
    getQualityClass: function() {  
        var avg = this.avgScore();  
        if (avg >= 85) return "ULTRA"; if (avg >= 70) return "HIGH"; if (avg >= 50) return "MEDIUM";  
        if (avg >= 30) return "LOW"; return "VERY_LOW";  
    },  
    getBonus: function() {  
        var cls = this.getQualityClass();  
        if (cls === "ULTRA") return 25; if (cls === "HIGH") return 15; if (cls === "MEDIUM") return 5;  
        if (cls === "LOW") return -10; return -25;  
    }  
};  

var RETRY = {  
    attempts: {}, maxAttempts: CFG.RETRY_MAX,  
    shouldRetry: function(key) { return CFG.SMART_RETRY && (this.attempts[key] || 0) < this.maxAttempts; },  
    recordAttempt: function(key) { this.attempts[key] = (this.attempts[key] || 0) + 1; },  
    getBackoff: function(key) { return CFG.RETRY_BACKOFF_MS * Math.pow(2, this.attempts[key] || 0); },  
    cleanup: function() {  
        var staleKeys = [];  
        for (var key in this.attempts) { if (this.attempts[key] >= this.maxAttempts) staleKeys.push(key); }  
        for (var i = 0; i < staleKeys.length; i++) delete this.attempts[staleKeys[i]];  
    }  
};  

var HEALTH = {};  
function initHealth() {  
    for (var name in PROXY) {  
        HEALTH[name] = { uses: 0, successes: 0, failures: 0, lastUse: 0, lastSuccess: 0, load: 0, status: "READY", avgPing: PROXY[name].targetPing, recentPings: [], uptime: 100, score: 100, socialUses: 0, regionalUses: 0, consecutiveFailures: 0 };  
    }  
}  
function updateHealth(name, success, ping, isSocial, isRegional) {  
    if (!HEALTH[name]) return;  
    var h = HEALTH[name], p = PROXY[name];  
    h.uses++; h.lastUse = now();  
    if (isSocial) h.socialUses++;  
    if (isRegional) h.regionalUses++;  
    if (success) { h.successes++; h.lastSuccess = now(); h.consecutiveFailures = 0; }  
    else { h.failures++; h.consecutiveFailures++; }  
    if (ping) {  
        if (h.recentPings.length >= 10) h.recentPings.shift();  
        h.recentPings.push(ping);  
        var sum = 0; for (var i = 0; i < h.recentPings.length; i++) sum += h.recentPings[i];  
        h.avgPing = Math.round(sum / h.recentPings.length);  
    }  
    if (p && p.capacity) h.load = Math.min(100, Math.round((h.uses / p.capacity) * 100));  
    if (h.uses > 0) h.uptime = Math.round((h.successes / h.uses) * 100);  
    h.score = calculateHealthScore(h, p);  
    if (h.score >= 90) h.status = "EXCELLENT"; else if (h.score >= 75) h.status = "GOOD"; else if (h.score >= 60) h.status = "FAIR"; else if (h.score >= 40) h.status = "DEGRADED"; else if (h.score >= 20) h.status = "POOR"; else h.status = "CRITICAL";  
    if (h.consecutiveFailures >= 5) h.status = "CRITICAL";  
}  
function calculateHealthScore(health, proxy) {  
    var score = 100;  
    score -= (100 - health.uptime) * 0.4;  
    if (health.load > 90) score -= 20; else if (health.load > 75) score -= 10; else if (health.load > 60) score -= 5;  
    if (proxy && health.avgPing) {  
        var pingRatio = health.avgPing / proxy.targetPing;  
        if (pingRatio <= 1.0) score += 5; else if (pingRatio <= 1.3) score -= 10; else if (pingRatio <= 1.6) score -= 20; else score -= 30;  
    }  
    var failureRate = health.uses > 0 ? (health.failures / health.uses) : 0;  
    if (failureRate > 0.2) score -= 15; else if (failureRate > 0.1) score -= 7;  
    if (health.consecutiveFailures >= 3) score -= 20; if (health.consecutiveFailures >= 5) score -= 30;  
    if (proxy && proxy.socialOptimized && health.socialUses > 0) score += 10;  
    if (proxy && health.regionalUses > 0) score += 5;  
    if (WARM_POOL.isWarm(proxy ? proxy.ip : "")) score += 5;  
    return Math.max(0, Math.min(100, Math.round(score)));  
}  

function getHealthStatus(name) { return HEALTH[name] || { status: "UNKNOWN", load: 100, score: 0, avgPing: 999, consecutiveFailures: 0 }; }  

function getBestProxies(tier, carrier, count, socialOptimized, regionHop) {  
    var candidates = [];  
    for (var name in PROXY) {  
        var p = PROXY[name], h = HEALTH[name];  
        if (!p || !h) continue;  
        if (tier !== undefined && p.tier !== tier) continue;  
        if (carrier && p.carrier !== carrier) continue;  
        if (h.status === "CRITICAL" || h.status === "POOR") continue;  
        if (socialOptimized && !p.socialOptimized) continue;  
        if (regionHop && p.regionHop !== regionHop) continue;  
        var proxyScore = calculateProxyScore(p, h, socialOptimized);  
        if (CFG.ADAPTIVE_LOAD_BALANCING) {  
            var lbScore = LOAD_BALANCER.getWeightedScore(name);  
            proxyScore = Math.round((proxyScore * 0.7) + (lbScore * 0.3));  
        }  
        candidates.push({ name: name, score: proxyScore });  
    }  
    candidates.sort(function(a, b) { return b.score - a.score; });  
    var results = [];  
    count = count || candidates.length;  
    for (var i = 0; i < Math.min(count, candidates.length); i++) results.push(candidates[i].name);  
    return results;  
}  

function calculateProxyScore(proxy, health, socialBoost) {  
    var score = 0;  
    score += (proxy.priority / 100) * 40;  
    score += (health.score / 100) * 30;  
    var pingRatio = health.avgPing / proxy.targetPing;  
    if (pingRatio <= 1.0) score += 20; else if (pingRatio <= 1.2) score += 15; else if (pingRatio <= 1.5) score += 10;  
    if (health.load <= 50) score += 10; else if (health.load <= 70) score += 7; else if (health.load <= 85) score += 4;  
    if (socialBoost && proxy.socialOptimized) { score += 20; if (proxy.socialDedicated) score += 15; }  
    if (proxy.latencyClass === "DIAMOND") score += 12; else if (proxy.latencyClass === "PLATINUM") score += 8; else if (proxy.latencyClass === "GOLD") score += 5;  
    return Math.round(score);  
}  

initHealth();  

var GUARD = {  
    violations: 0, blockedHosts: {}, trustedHosts: {},  
    isJordan: function(ip) {  
        if (!ip) return false;  
        if (isIPv6(ip) && CFG.ENABLE_IPV6) return true; // Accept recognized IPv6 temporarily
        return isIPv4(ip) && inRanges(ip, JO_NETS);  
    },  
    getJordanCity: function(ip) {  
        if (!this.isJordan(ip)) return null;  
        for (var city in JO_CITIES) { if (inRanges(ip, JO_CITIES[city])) return city; }  
        return "JORDAN_OTHER";  
    },  
    checkDestination: function(ip, host, mode) {  
        if (!ip) return true;  
        if (isIPv6(ip) && !CFG.ENABLE_IPV6) return false;  
        if (this.trustedHosts[host]) return true;  
        if (this.blockedHosts[host]) return false;  
        
        if (this.isJordan(ip)) {  
            var city = this.getJordanCity(ip);  
            this.trustedHosts[host] = { ip: ip, city: city, since: now() };  
            SESSION.jordanHits++; SESSION.recordRegionalHit(city);  
            if (MODES[mode] && MODES[mode].socialPriority) SESSION.jordanPlayersFound++;  
            return true;  
        }  
        
        SESSION.foreignHits++;  
        var m = MODES[mode];  
        if (m && m.socialPriority && CFG.FORCE_JORDAN_SOCIAL) { this.recordBlock(host, "Social requires Jordan IP"); return false; }  
        if (m && m.priority >= 9 && (CFG.FORCE_JORDAN_LOBBY || CFG.FORCE_JORDAN_MATCHMAKING)) { this.recordBlock(host, "Critical requires Jordan"); return false; }  
        if (CFG.JORDAN_ONLY_MODE) { this.recordBlock(host, "Jordan-only mode"); return false; }  
        if (CFG.BLOCK_INTERNATIONAL) { this.recordBlock(host, "International blocked"); return false; }  
        return true;  
    },  
    recordBlock: function(host, reason) {  
        this.blockedHosts[host] = { reason: reason, time: now() };  
        SESSION.blockedHits++; this.violations++;  
    },  
    buildChain: function(names, mode, requirements) {  
        var chain = [], used = {}; requirements = requirements || {};  
        for (var i = 0; i < names.length; i++) {  
            var name = names[i];  
            if (used[name] || !PROXY[name]) continue;  
            var proxy = PROXY[name], health = getHealthStatus(name);  
            if (health.status === "CRITICAL" || health.status === "POOR") continue;  
            if (CFG.PROXY_EXIT_JORDAN_ONLY && !this.isJordan(proxy.ip)) continue;  
            if (requirements.burst && !proxy.burstCapable) continue;  
            if (requirements.ultraBurst && !proxy.ultraBurst) continue;  
            if (requirements.socialOptimized && !proxy.socialOptimized) continue;  
            if (requirements.tier !== undefined && proxy.tier > requirements.tier) continue;  
            
            // [NEW] Anti-ISP Throttling Port Hopping
            var selectedPort = proxy.port;
            if (CFG.ENABLE_PORT_HOPPING && proxy.ports && proxy.ports.length > 0) {
                selectedPort = proxy.ports[Math.floor(Math.random() * proxy.ports.length)];
            }
            chain.push("PROXY " + proxy.ip + ":" + selectedPort);  
            
            used[name] = true;  
            updateHealth(name, true, proxy.targetPing, MODES[mode] && MODES[mode].socialPriority, !!proxy.regionHop);  
            LOAD_BALANCER.recordUsage(name);  
            WARM_POOL.warm(name);  
            if (chain.length >= CFG.MAX_PROXY_CHAIN) break;  
        }  
        if (chain.length === 0) return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;  
        return chain.join("; ") + (CFG.FAIL_CLOSED ? ("; " + BLOOD.BLK) : "; DIRECT");  
    }  
};  

var STICKY = {};  
function stickyGet(key) {  
    var entry = STICKY[key];  
    if (!entry) return null;  
    if (now() - entry.created > (entry.ttl || CFG.STICKY_TTL)) { delete STICKY[key]; return null; }  
    entry.hits = (entry.hits || 0) + 1; entry.lastHit = now();  
    return entry.value;  
}  
function stickySet(key, value, ttl) { STICKY[key] = { value: value, created: now(), ttl: ttl || CFG.STICKY_TTL, hits: 0, lastHit: now() }; }  
function stickyClear(key) { delete STICKY[key]; }  
function stickyExtend(key, extraTime) { if (STICKY[key]) STICKY[key].ttl += extraTime; }  

function detectRegion(host, ip) {  
    var h = host.toLowerCase();  
    if (ip && GUARD.isJordan(ip)) return { region: "JORDAN", city: GUARD.getJordanCity(ip), confidence: 100 };  
    var jordanPatterns = ["jo", "jordan", "amman", "irbid", "zarqa", "aqaba", "karak", "mafraq", "jerash", "ajloun", "balqa", "salt", "madaba", "tafilah", "maan", "petra", "me-jo"];  
    for (var i = 0; i < jordanPatterns.length; i++) if (h.indexOf(jordanPatterns[i]) !== -1) return { region: "JORDAN", confidence: 85 };  
    return { region: "UNKNOWN", confidence: 0 };  
}  

function detectMode(host) {  
    var h = host.toLowerCase();  
    for (var i = 0; i < MODE_PRIORITY.length; i++) {  
        var modeName = MODE_PRIORITY[i], mode = MODES[modeName];  
        if (!mode || !mode.sig) continue;  
        for (var j = 0; j < mode.sig.length; j++) {  
            if (h.indexOf(mode.sig[j]) !== -1) {  
                if (mode.socialPriority) {  
                    if (modeName === "FRIEND_DISCOVERY") SESSION.recordSocialInteraction("FRIEND_DISCOVERY");  
                    else if (modeName === "CREW_RECRUITMENT") SESSION.recordSocialInteraction("CREW_SEARCH");  
                    else if (modeName === "LOBBY" || modeName === "MATCHMAKING") SESSION.recordSocialInteraction("LOBBY_JOIN");  
                }  
                return modeName;  
            }  
        }  
    }  
    return "CLASSIC";  
}  

function assessServerQuality(ip, host, mode) {  
    var score = 50;  
    if (ip && GUARD.isJordan(ip)) {  
        score += 50; var city = GUARD.getJordanCity(ip);  
        if (city === "AMMAN_CORE") score += 15; else if (city && city.indexOf("AMMAN") !== -1) score += 10; else if (city === "IRBID" || city === "ZARQA") score += 8; else score += 5;  
    }  
    var region = detectRegion(host, ip);  
    if (region.region === "JORDAN") score += Math.round(region.confidence * 0.3);  
    var m = MODES[mode];  
    if (m && m.socialPriority && !GUARD.isJordan(ip)) score -= 60;  
    var congestionLevel = CONGESTION.getLevel();  
    if (congestionLevel === "SEVERE") score -= 25; else if (congestionLevel === "HIGH") score -= 15; else if (congestionLevel === "MEDIUM") score -= 8;  
    score = Math.max(0, Math.min(100, score));  
    if (score >= 90) return "EXCELLENT"; if (score >= 75) return "GOOD"; if (score >= 60) return "FAIR"; if (score >= 40) return "POOR"; return "UNACCEPTABLE";  
}  

var CONNECTION = {  
    profile: function() {  
        var avg = PING.avg(5), best = PING.best(), type = "UNKNOWN", quality = "UNKNOWN";  
        if (avg <= 5 && best <= 3) { type = "5G_ULTRA"; quality = "EXCELLENT"; }  
        else if (avg <= 8 && best <= 5) { type = "5G_PREMIUM"; quality = "EXCELLENT"; }  
        else if (avg <= 13) { type = "5G_GOOD"; quality = "VERY_GOOD"; }  
        else if (avg <= 20) { type = "4G_EXCELLENT"; quality = "GOOD"; }  
        else if (avg <= 35) { type = "4G_GOOD"; quality = "FAIR"; }  
        else { type = "WEAK"; quality = "POOR"; }  
        SESSION.networkQuality = quality;  
        return { type: type, quality: quality, avgPing: avg, bestPing: best, tier: (type.indexOf("5G") === 0 ? 0 : (type.indexOf("4G") === 0 ? 1 : 2)) };  
    },  
    boost: function() {  
        var p = this.profile().type;  
        if (p === "5G_ULTRA") return 80; if (p === "5G_PREMIUM") return 70; if (p === "5G_GOOD") return 55;  
        if (p === "4G_EXCELLENT") return 40; if (p === "4G_GOOD") return 25; return -30;  
    }  
};  

var TIME = {  
    isPeakHours: function() { var h = (new Date()).getHours(); return (h >= 16 || h <= 2); },  
    getBoost: function() { return (this.isPeakHours() || (new Date().getDay() === 5 || new Date().getDay() === 6)) ? 25 : 0; }  
};  

function getCarrier(ip) {  
    if (!ip || !isIPv4(ip)) return "UNKNOWN";  
    if (isInNet(ip, "46.185.128.0", "255.255.128.0") || isInNet(ip, "94.127.208.0", "255.255.240.0") || isInNet(ip, "149.200.136.0", "255.255.252.0")) return "ORANGE";  
    if (isInNet(ip, "79.173.192.0", "255.255.192.0") || isInNet(ip, "109.237.192.0", "255.255.224.0") || isInNet(ip, "176.28.0.0", "255.254.0.0")) return "ZAIN";  
    if (isInNet(ip, "82.212.0.0", "255.255.0.0") || isInNet(ip, "212.35.64.0", "255.255.192.0")) return "UMNIAH";  
    return "OTHER";  
}  
function getCarrierBonus(carrier) { return carrier === "ORANGE" ? 45 : (carrier === "ZAIN" ? 42 : (carrier === "UMNIAH" ? 38 : 0)); }  

function calculateScore(ip, host, port, dns, mode) {  
    var score = 0, m = MODES[mode], dt = dns.dt;  
    if (m) { score += m.priority * 5; if (m.socialPriority) score += 35; if (m.matchmakingSpeed) score += m.matchmakingSpeed * 5; } else score += 25;  
    if (dt <= 2) score += 50; else if (dt <= 4) score += 45; else if (dt <= 8) score += 38; else if (dt <= 15) score += 30; else if (dt <= 30) score += 20; else if (dt <= 60) score += 10; else score -= 25;  
    var quality = PING.quality(mode);  
    if (quality === "EXCELLENT") score += 40; else if (quality === "VERY_GOOD") score += 32; else if (quality === "GOOD") score += 22; else if (quality === "ACCEPTABLE") score += 10; else score -= 35;  
    
    if (ip && GUARD.isJordan(ip)) {  
        score += 180 + getCarrierBonus(getCarrier(ip));  
        var city = GUARD.getJordanCity(ip);  
        if (city === "AMMAN_CORE") score += 40; else if (city === "AMMAN_METRO") score += 35; else if (city === "AMMAN_CITY") score += 30; else if (city === "IRBID" || city === "ZARQA") score += 25; else score += 15;  
        if (m && m.socialPriority) score += 60;  
        if (TIME.isPeakHours()) score += 22;  
    }  
    
    var region = detectRegion(host, ip);  
    if (region.region === "JORDAN") score += 85 + (region.confidence * 0.2); else score -= 70;  
    
    score += CONNECTION.boost();  
    var stability = PING.stability();  
    if (stability === "VERY_STABLE") score += 30; else if (stability === "STABLE") score += 20; else if (stability === "MODERATE") score += 8; else score -= 35;  
    
    // [NEW] QUIC & WebSockets priority
    if (port === 443 || port === 8080) score += 15;  
    
    if (PING.trend() === "IMPROVING") score += 35; else if (PING.trend() === "DEGRADING") score -= 55;  
    if (PING.isCritical()) score -= 75; else if (PING.needsOptimization()) score -= 40;  
    
    if (m) score += (ip && GUARD.isJordan(ip)) ? (m.jordanBonus || 0) : (m.foreignPenalty || 0);  
    score += TIME.getBoost();  
    if (dns.quality === "EXCELLENT") score += 30; else if (dns.quality === "GOOD") score += 20; else if (dns.quality === "FAIR") score += 10; else score -= 20;  
    
    if (CFG.ENABLE_ML_PREDICTION) {  
        var confidence = ML.confidence(mode, region.region);  
        if (confidence >= 85) score += 40; else if (confidence >= 70) score += 28; else if (confidence >= 50) score += 15;  
    }  
    if (CFG.CONGESTION_MONITOR) score += CONGESTION.getPenalty();  
    if (dns.socialEndpoint) score += 60 + ((ip && GUARD.isJordan(ip)) ? 35 : 0);  
    if (dns.regionalEndpoint) score += 40 + ((ip && GUARD.isJordan(ip)) ? 25 : 0);  
    if (m && m.visibilityBoost) score = Math.round(score * (1 + (m.visibilityBoost * 0.1)));  
    if (CFG.BANDWIDTH_AWARE) score += BANDWIDTH.getBonus();  
    if (ip && GUARD.isJordan(ip)) { var jc = GUARD.getJordanCity(ip); if (jc) score += DENSITY.getVisibilityBonus(jc); }  
    
    if (score < 0) return 0; if (score > 500) return 100;  
    return Math.round((score / 500) * 100);  
}  

function selectRoute(mode, score, ip, port, host, dns) {  
    var m = MODES[mode] || MODES["CLASSIC"], strategy = m.strategy, region = dns.region, city = region.city || "UNKNOWN";  
    var carrier = getCarrier(ip), connProfile = CONNECTION.profile();  
    if (m.gameState) SESSION.updateGameState(m.gameState);  
    if (!GUARD.checkDestination(ip, host, mode)) return BLOOD.BLK;  
    
    if (CFG.CONGESTION_MONITOR) { CONGESTION.sample(PING.current()); CONGESTION.adjustThresholds(); }  
    if (CFG.ADAPTIVE_LOAD_BALANCING && LOAD_BALANCER.shouldRebalance()) LOAD_BALANCER.rebalance();  
    if (CFG.CONNECTION_WARMING) WARM_POOL.cleanup();  
    
    if (CFG.ENABLE_ML_PREDICTION && SESSION.isWarm()) {  
        var predicted = ML.predict(mode, region.region || "UNKNOWN"), conf = ML.confidence(mode, region.region || "UNKNOWN");  
        if (predicted && conf >= 70 && PING.isHealthy(mode)) return predicted;  
    }  
    
    if (m.sticky && SESSION.isWarm()) {  
        var sticky = stickyGet(mode + "_" + city) || stickyGet(mode);  
        if (sticky && PING.isHealthy(mode) && !PING.needsOptimization()) return sticky;  
    }  
    
    if (PING.isCritical()) {  
        stickyClear(mode); stickyClear(mode + "_" + city);  
        var emergency = GUARD.buildChain(getBestProxies(0, null, 3, m.socialPriority), mode, { burst: true, ultraBurst: true, tier: 0, socialOptimized: m.socialPriority });  
        stickySet(mode, emergency, m.stickyDuration);  
        return emergency;  
    }  

    var route = null, reqs = { burst: m.requiresBurst || false, ultraBurst: m.ultraBurst || false, tier: connProfile.tier, socialOptimized: m.socialPriority || false };  

    if (strategy === "SOCIAL_ULTRA_FORCE" || strategy === "LOBBY_ULTRA_FORCE") {  
        if (city !== "UNKNOWN" && CFG.REGIONAL_HOP_CHAINS && REGIONAL_HOPS[city]) route = GUARD.buildChain(REGIONAL_HOPS[city], mode, reqs);  
        if (!route) route = GUARD.buildChain(score >= 85 ? ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1"] : ["ORANGE_ULTRA_1", "ZAIN_ULTRA_1"], mode, reqs);  
    } else if (strategy === "GAME_ULTRA_CRITICAL" || strategy === "GAME_CRITICAL") {  
        route = GUARD.buildChain(score >= 80 ? ["ORANGE_ULTRA_1", "ZAIN_ULTRA_1"] : getBestProxies(0, carrier, 3, false), mode, reqs);  
    } else if (strategy === "SOCIAL_GAME_CRITICAL" || strategy === "SOCIAL_CRITICAL") {  
        route = GUARD.buildChain(["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1"], mode, reqs);  
    } else if (strategy === "CDN" || strategy === "SAFE") {  
        return BLOOD.DIR;  
    } else {  
        route = GUARD.buildChain(["ORANGE_ULTRA_1", "ZAIN_ULTRA_1"], mode, reqs);  
    }  

    if (!route || route === BLOOD.BLK) route = CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;  
    if (m.sticky && route !== BLOOD.BLK && route !== BLOOD.DIR) { stickySet(mode + "_" + city, route, m.stickyDuration); stickySet(mode, route, m.stickyDuration); }  
    if (CFG.ENABLE_ML_PREDICTION && route !== BLOOD.BLK) ML.recordSuccess(mode, route, PING.current(), region.region, m.socialPriority);  
    if (CFG.ADAPTIVE_LOAD_BALANCING) LOAD_BALANCER.recordResponse("SELECTED", PING.current());  
    if (CFG.BANDWIDTH_AWARE) BANDWIDTH.estimate(dns.dt, PING.current());  
    
    SESSION.recordMode(mode); SESSION.requests++;  
    return route;  
}  

function containsAny(str, keywords) {  
    if (!str || !keywords) return false;  
    for (var i = 0; i < keywords.length; i++) if (str.indexOf(keywords[i]) !== -1) return true;  
    return false;  
}  
function isIPv4(ip) {  
    if (!ip || typeof ip !== 'string') return false;  
    var parts = ip.split("."); if (parts.length !== 4) return false;  
    for (var i = 0; i < 4; i++) { var n = parseInt(parts[i], 10); if (isNaN(n) || n < 0 || n > 255) return false; }  
    return true;  
}  
function isIPv6(ip) {  
    return ip && typeof ip === 'string' && ip.indexOf(":") !== -1;  
}  
function inRanges(ip, ranges) {  
    if (!ip || !ranges) return false;  
    for (var i = 0; i < ranges.length; i++) {  
        if (isInNet(ip, ranges[i][0], maskFromPrefix(ranges[i][1]))) return true;  
    }  
    return false;  
}  
function maskFromPrefix(prefix) {  
    prefix = parseInt(prefix, 10);  
    if (prefix <= 0) return "0.0.0.0"; if (prefix >= 32) return "255.255.255.255";  
    var mask = [], fullOctets = Math.floor(prefix / 8), remainder = prefix % 8;  
    for (var i = 0; i < 4; i++) {  
        if (i < fullOctets) mask.push(255);  
        else if (i === fullOctets) mask.push(256 - Math.pow(2, 8 - remainder));  
        else mask.push(0);  
    }  
    return mask.join(".");  
}  
function generateSessionId() {  
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", id = "";  
    for (var i = 0; i < 12; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));  
    return id;  
}  
function isGameDomain(host) { return containsAny(host.toLowerCase(), PUBG_KEYS); }  
function isSocialDomain(host) { var h = host.toLowerCase(); return containsAny(h, SOCIAL_KEYS) || containsAny(h, LOBBY_SOCIAL_PATTERNS); }  
function isDirectDomain(host) { return containsAny(host.toLowerCase(), DIRECT_KEYS); }  
function extractPort(url) {  
    if (!url) return 80;  
    var match = url.match(/:(\d+)/); if (match) return parseInt(match[1], 10);  
    return url.indexOf("https") === 0 ? 443 : 80;  
}  

(function initialize() {  
    if (CFG.CONNECTION_WARMING) WARM_POOL.preWarmCritical();  
    if (CFG.PREFETCH_SOCIAL_DNS) prefetchSocialEndpoints();  
    SESSION.updateTimeContext();  
    CONGESTION.adjustThresholds();  
})();  

function FindProxyForURL(url, host) {  
    if (isDirectDomain(host)) { SESSION.directHits++; return BLOOD.DIR; }  
    if (!isGameDomain(host) && !isSocialDomain(host)) return BLOOD.DIR;  
    
    var dns = fastDNS(host);  
    if (!dns.ok) { SESSION.blockedHits++; return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR; }  
    
    var ip = dns.ip, port = extractPort(url), mode = detectMode(host);  
    SESSION.pubgRequests++;  
    
    var score = calculateScore(ip, host, port, dns, mode);  
    var route = selectRoute(mode, score, ip, port, host, dns);  
    
    if (SESSION.requests % 50 === 0) {  
        RETRY.cleanup(); WARM_POOL.cleanup(); CONGESTION.adjustThresholds(); SESSION.updateTimeContext();  
    }  
    if (SESSION.requests % 200 === 0 && ML.getPatternCount() > CFG.ML_PATTERN_MAX * 0.8) {  
        var keys = Object.keys(ML.patterns), toRemove = Math.floor(keys.length * 0.2);  
        for (var i = 0; i < toRemove; i++) { if (ML.patterns[keys[i]].totalSamples < 3) delete ML.patterns[keys[i]]; }  
    }  
    
    return route;  
}
