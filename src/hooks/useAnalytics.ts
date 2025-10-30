import { useEffect } from 'react';
import {
  trackBookingInquiry,
  trackContactFormSubmit,
  trackPhoneClick,
  trackWhatsAppClick,
  trackGalleryView,
  trackMenuDownload,
  trackRoomView,
  trackBookingStart,
  GAEvent,
  trackEvent
} from '../lib/analytics';

// Custom hook for analytics
export const useAnalytics = () => {
  // Page view tracking is handled automatically by GoogleAnalytics component
  
  return {
    // Booking and inquiry events
    trackBookingInquiry,
    trackBookingStart,
    
    // Contact events
    trackContactFormSubmit,
    trackPhoneClick,
    trackWhatsAppClick,
    
    // Content engagement
    trackGalleryView,
    trackMenuDownload,
    trackRoomView,
    
    // Custom event tracking
    trackCustomEvent: trackEvent,
  };
};

// Component wrapper for automatic page view tracking with custom parameters
export const usePageTracking = (pageName: string, additionalData?: Record<string, unknown>) => {
  useEffect(() => {
    // Custom page tracking with additional context
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        ...additionalData,
      });
    }
  }, [pageName, additionalData]);
};