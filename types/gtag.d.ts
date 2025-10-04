interface Window {
  gtag?: (
    command: 'consent',
    action: 'update',
    params: {
      analytics_storage?: 'granted' | 'denied';
      ad_storage?: 'granted' | 'denied';
    }
  ) => void;
}
