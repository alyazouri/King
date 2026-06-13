function FindProxyForURL(url, host) {
  // Normalize host
  host = host.toLowerCase();

  // Check if host is an IP address
  var isIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host);

  // Domain matching helper
  function matchDomain(domain, pattern) {
    if (pattern === domain) return true;
    if (pattern.startsWith('*.')) {
      var suffix = pattern.slice(3);
      return domain === suffix || domain.endsWith('.' + suffix);
    }
    return domain.endsWith('.' + pattern);
  }

  if (false) {
    return "PROXY";
  }

  if (false) {
    return "PROXY";
  }

  if (false) {
    return "PROXY 127.0.0.1:65535";
  }

  if (false) {
    return "PROXY";
  }

  // Default route
  return "DIRECT";
}
