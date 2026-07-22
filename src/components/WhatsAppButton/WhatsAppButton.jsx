import React from "react";
import "./WhatsAppButton.css";
import { TEXT_DEFAULTS } from "../../data/siteDefaults";
import { useSiteText } from "../../context/SiteContentContext";

const DEFAULT_MESSAGE =
  "Hi, I'd like to enquire about booking The Rustic Farm Villaa.";

const WhatsAppButton = () => {
  const whatsappNumber = useSiteText(
    "contact.whatsapp_number",
    TEXT_DEFAULTS["contact.whatsapp_number"]
  );
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
      >
        <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.353.617 4.646 1.789 6.667L2.667 29.333l6.83-1.775a13.27 13.27 0 0 0 6.504 1.708h.006c7.363 0 13.333-5.97 13.333-13.333 0-3.56-1.386-6.909-3.904-9.428a13.246 13.246 0 0 0-9.435-3.904zm0 24.4h-.005a11.06 11.06 0 0 1-5.63-1.541l-.404-.24-4.053 1.054 1.082-3.951-.263-.406a11.04 11.04 0 0 1-1.693-5.883c0-6.107 4.969-11.076 11.078-11.076a11.02 11.02 0 0 1 7.834 3.245 11.02 11.02 0 0 1 3.24 7.838c-.002 6.108-4.972 11.076-11.086 11.076v-.116zm6.076-8.293c-.333-.167-1.968-.971-2.273-1.081-.305-.111-.527-.167-.749.166-.222.334-.86 1.082-1.054 1.304-.194.223-.389.25-.722.084-.333-.167-1.406-.518-2.679-1.653-.99-.883-1.659-1.974-1.853-2.307-.194-.333-.02-.514.146-.68.15-.15.333-.39.5-.585.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.084-.167-.749-1.806-1.026-2.474-.27-.65-.545-.562-.749-.572a14.4 14.4 0 0 0-.638-.012.916.916 0 0 0-.665.31c-.228.25-.874.854-.874 2.083s.895 2.417 1.02 2.583c.125.167 1.76 2.688 4.264 3.77.596.257 1.06.411 1.422.526.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.677-1.181.208-.58.208-1.077.146-1.181-.062-.104-.229-.167-.562-.334z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
