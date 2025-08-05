import { useEffect, useState, useCallback } from 'react';

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState({
    connectionType: 'unknown',
    isSlowConnection: false,
    isMobile: false,
    isLowEndDevice: false
  });

  useEffect(() => {
    // Detect connection type
    const checkConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const isSlowConnection = ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
          setMetrics(prev => ({
            ...prev,
            connectionType: connection.effectiveType,
            isSlowConnection
          }));
        }
      }
    };

    // Detect mobile device
    const checkMobile = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setMetrics(prev => ({ ...prev, isMobile }));
    };

    // Detect low-end device
    const checkDevicePerformance = () => {
      const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                            (navigator as any).deviceMemory <= 2;
      setMetrics(prev => ({ ...prev, isLowEndDevice }));
    };

    checkConnection();
    checkMobile();
    checkDevicePerformance();

    // Listen for connection changes
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      connection?.addEventListener('change', checkConnection);
      
      return () => {
        connection?.removeEventListener('change', checkConnection);
      };
    }
  }, []);

  return metrics;
};

// Lazy loading hook with intersection observer
export const useLazyLoading = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const callbackRef = useCallback((node: HTMLElement | null) => {
    setRef(node);
  }, []);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return [callbackRef, isInView] as const;
};

// Optimized image loading hook
export const useOptimizedImages = () => {
  const [imageCache] = useState(new Map<string, boolean>());

  const preloadImage = useCallback((src: string): Promise<void> => {
    if (imageCache.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        imageCache.set(src, true);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [imageCache]);

  const preloadImages = useCallback(async (srcs: string[]) => {
    const promises = srcs.map(src => preloadImage(src));
    try {
      await Promise.allSettled(promises);
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  }, [preloadImage]);

  return { preloadImage, preloadImages, imageCache };
};

// Performance-aware component rendering
export const useAdaptiveRendering = () => {
  const { isSlowConnection, isLowEndDevice, isMobile } = usePerformanceMonitoring();

  const shouldReduceAnimations = isSlowConnection || isLowEndDevice;
  const shouldPreferSystemFonts = isSlowConnection;
  const shouldOptimizeImages = isSlowConnection || isMobile;
  const shouldLazyLoad = isSlowConnection || isLowEndDevice;

  return {
    shouldReduceAnimations,
    shouldPreferSystemFonts,
    shouldOptimizeImages,
    shouldLazyLoad,
    isMobile,
    isSlowConnection,
    isLowEndDevice
  };
};

// Touch and gesture optimization
export const useTouchOptimization = () => {
  const [touchCapabilities, setTouchCapabilities] = useState({
    supportsTouchEvents: false,
    supportsPointerEvents: false,
    maxTouchPoints: 0
  });

  useEffect(() => {
    const checkTouchSupport = () => {
      const supportsTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const supportsPointerEvents = 'onpointerdown' in window;
      const maxTouchPoints = navigator.maxTouchPoints || 0;

      setTouchCapabilities({
        supportsTouchEvents,
        supportsPointerEvents,
        maxTouchPoints
      });
    };

    checkTouchSupport();
  }, []);

  return touchCapabilities;
};

// Font loading optimization
export const useFontOptimization = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { shouldPreferSystemFonts } = useAdaptiveRendering();

  useEffect(() => {
    if (shouldPreferSystemFonts) {
      setFontsLoaded(true);
      return;
    }

    // Check if fonts are already loaded
    if (document.fonts) {
      if (document.fonts.status === 'loaded') {
        setFontsLoaded(true);
      } else {
        document.fonts.ready.then(() => {
          setFontsLoaded(true);
        });
      }
    } else {
      // Fallback for browsers without font loading API
      setTimeout(() => setFontsLoaded(true), 3000);
    }
  }, [shouldPreferSystemFonts]);

  return { fontsLoaded, shouldPreferSystemFonts };
};

// Critical path optimization
export const useCriticalPath = () => {
  const [isInitialRenderComplete, setIsInitialRenderComplete] = useState(false);

  useEffect(() => {
    // Mark initial render as complete after paint
    const timer = setTimeout(() => {
      setIsInitialRenderComplete(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const deferNonCritical = useCallback((callback: () => void) => {
    if (isInitialRenderComplete) {
      callback();
    } else {
      setTimeout(callback, 100);
    }
  }, [isInitialRenderComplete]);

  return { isInitialRenderComplete, deferNonCritical };
};