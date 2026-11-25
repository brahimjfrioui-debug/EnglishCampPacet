import { SITE } from "@/config/site";

/** Keep digits only so "+62 812-3456" becomes "628123456". */
export function normalizeWhatsAppNumber(input: string): string {
  return input.replace(/\D/g, "");
}

/**
 * Build a wa.me link. When no school number is configured yet, the link opens
 * WhatsApp with the message ready and lets the visitor pick the recipient.
 */
export function buildWhatsAppLink(message?: string, number: string = SITE.whatsappNumber): string {
  const digits = normalizeWhatsAppNumber(number);
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello English Camp! I would like to know more about your English programs.";
