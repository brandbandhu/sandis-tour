const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number

export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message || "Hi, I want to enquire about your travel services.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const getWhatsAppServiceUrl = (serviceName: string) => {
  return getWhatsAppUrl(`Hi, I want enquiry for ${serviceName}`);
};
