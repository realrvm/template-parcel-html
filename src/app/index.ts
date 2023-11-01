import { example } from "@/app/example";

function init() {
  const body = document.querySelector("body") as HTMLBodyElement;
  const p = document.createElement("p") as HTMLParagraphElement;

  body.appendChild(p);
  p.textContent = `${example} created by ts`;
}

document.addEventListener("DOMContentLoaded", init);
