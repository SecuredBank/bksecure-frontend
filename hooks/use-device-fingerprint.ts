"use client";

import { useState, useEffect } from "react";

export function useDeviceFingerprint() {
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  useEffect(() => {
    // Simulate fingerprint generation
    const generateFingerprint = async () => {
      const userAgent = window.navigator.userAgent;
      const screenRes = `${window.screen.width}x${window.screen.height}`;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Simple hash for demo
      const raw = `${userAgent}-${screenRes}-${timezone}`;
      const hash = btoa(raw).slice(0, 16);
      
      setFingerprint(hash);
      setDeviceInfo({
        userAgent,
        screenRes,
        timezone,
        platform: window.navigator.platform
      });
    };

    generateFingerprint();
  }, []);

  return { fingerprint, deviceInfo };
}
