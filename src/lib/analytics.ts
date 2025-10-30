// Google Analytics configuration and event tracking utilities

// Google Analytics Measurement ID - Dadaji Villa GA4 Property
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-C47BNTEH9G';

// Event types for better type safety
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Custom event tracking function
export const trackEvent = ({ action, category, label, value }: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for your villa website
export const trackBookingInquiry = (roomType?: string) => {
  trackEvent({
    action: 'booking_inquiry',
    category: 'engagement',
    label: roomType || 'general',
  });
};

export const trackContactFormSubmit = () => {
  trackEvent({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_page',
  });
};

export const trackPhoneClick = () => {
  trackEvent({
    action: 'phone_click',
    category: 'engagement',
    label: 'contact_info',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'engagement',
    label: 'contact_info',
  });
};

export const trackGalleryView = (galleryType: string) => {
  trackEvent({
    action: 'gallery_view',
    category: 'content',
    label: galleryType,
  });
};

export const trackMenuDownload = () => {
  trackEvent({
    action: 'menu_download',
    category: 'engagement',
    label: 'menu_pdf',
  });
};

// Enhanced ecommerce events for hospitality
export const trackRoomView = (roomName: string) => {
  trackEvent({
    action: 'view_item',
    category: 'ecommerce',
    label: roomName,
  });
};

export const trackBookingStart = (roomName: string, dates?: string) => {
  trackEvent({
    action: 'begin_checkout',
    category: 'ecommerce',
    label: `${roomName}${dates ? ` - ${dates}` : ''}`,
  });
};