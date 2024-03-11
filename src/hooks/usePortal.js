import { useState } from "react";

function usePortal() {
  const [container] = useState(() => {
    const element = document.createElement("div");
    element.classList.add("portal-container");
    document.body.appendChild(element);
    return element;
  });

  return container;
}

export { usePortal };
