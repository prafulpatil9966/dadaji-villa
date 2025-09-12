// src/constants/faqs.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Where is Dadaji Villa located?',
    answer: 'Dadaji Villa is located in a serene countryside setting, just 20 minutes from the city center. You can find detailed directions on our Contact page.',
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 1:00 PM onwards and check-out is until 11:00 AM. Early check-in or late check-out requests are subject to availability.',
  },
  {
    question: 'Is Wi-Fi available at the villa?',
    answer: 'Yes, high-speed Wi-Fi is available throughout the property, including rooms, common areas, and the garden.',
  },
  {
    question: 'Can I book the entire villa for private events?',
    answer: 'Absolutely! Dadaji Villa is perfect for family getaways, private functions, and small events. Please contact us directly for group bookings and pricing.',
  },
  {
    question: 'Do you allow pets?',
    answer: 'Yes, we are a pet-friendly villa. However, we request guests to inform us in advance if they are bringing pets.',
  },
  {
    question: 'Is there parking available at the villa?',
    answer: 'Yes, we have free secure parking space available for all guests within the villa premises.',
  },
];
