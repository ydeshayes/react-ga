let isLoaded = false;
export default function (options) {
  if (isLoaded) return;
  isLoaded = true;
  let gaAddress = 'https://www.google-analytics.com/analytics.js';
  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  }

  const onerror = options && options.onerror;

  // https://developers.google.com/analytics/devguides/collection/analyticsjs/
  /* eslint-disable */
  (function (i, s, o, g, r, n, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    if(n)
      a.setAttribute('nonce', n);
    a.src = g;
    a.onerror = onerror;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga', options.nonce);
  /* eslint-enable */
}
