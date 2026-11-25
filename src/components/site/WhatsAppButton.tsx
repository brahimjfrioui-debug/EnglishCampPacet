import { Button, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = Omit<ButtonProps, "asChild"> & { message?: string; label?: string };

export function WhatsAppButton({
  message = DEFAULT_WHATSAPP_MESSAGE,
  label = "Chat on WhatsApp",
  variant = "whatsapp",
  ...rest
}: Props) {
  return (
    <Button asChild variant={variant} {...rest}>
      <a href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-5" />
        {label}
      </a>
    </Button>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with English Camp on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
