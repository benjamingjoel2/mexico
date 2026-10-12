import { whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a specialist on WhatsApp"
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#1f8f5f] p-3.5 text-white shadow-[0_12px_30px_-10px_rgba(8,47,51,.6)] transition-transform hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon width={26} height={26} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width] duration-300 group-hover:max-w-40 group-focus-visible:max-w-40 sm:inline">
        Chat with us
      </span>
    </a>
  );
}
