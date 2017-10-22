declare global {
  interface Window {
    dataLayer:any;
  }
}

if (typeof window === 'undefined') {
  (global as any).window = {} as Window;
}
// @todo refactor the following lines from html.tsx into this file
// {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-43130231-1"></script>

window.dataLayer = window.dataLayer || [];

function gtag(action: string, param: string | Date, extra?: {}) { window.dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-43130231-1');

/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
export const trackOutboundLink = function (url: string, target: string) {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function () {
      target === "_blank" ?
        window.open(url, target) :
        document.location.assign(url);
        ;
    }
  });
  return false;
}
