import { BRAND, CONTACT } from "./site";

const PHONE_NUMBER = CONTACT.phone.replace(/\D/g, "");
const baseLink = `https://wa.me/${PHONE_NUMBER}`;

const bookMessage = `Hello ${BRAND.name}, I want to book a service`;

export const composeWhatsAppLink = (message: string) =>
  `${baseLink}?text=${encodeURIComponent(message)}`;

export const bookNowLink = composeWhatsAppLink(bookMessage);

export const serviceInquiryLink = (serviceName: string) =>
  composeWhatsAppLink(`Hi ${BRAND.name}, I want to know more about your ${serviceName}`);

export const whatsappDisplayNumber = CONTACT.phone;
