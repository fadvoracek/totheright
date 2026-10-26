import { z } from "zod";

export const serviceOptions = [
  "Home delivery",
  "Výdejní boxy",
  "Přeprava nábytku",
  "Přeprava elektroniky",
  "Paletové zboží",
  "Jiné",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Vyplňte prosím jméno" })
    .max(100, { message: "Jméno může mít nejvýše 100 znaků" }),
  company: z.string().trim().max(150, { message: "Nejvýše 150 znaků" }).optional(),
  email: z
    .string()
    .trim()
    .email({ message: "Zadejte platný e‑mail" })
    .max(255, { message: "E‑mail může mít nejvýše 255 znaků" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Telefon může mít nejvýše 30 znaků" })
    .regex(/^[+\d\s()-]*$/, { message: "Telefon může obsahovat jen čísla, mezery a +" })
    .optional(),
  service: z.string().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Napište nám prosím, co potřebujete převézt" })
    .max(2000, { message: "Zpráva může mít nejvýše 2000 znaků" }),
});

export type ContactInput = z.infer<typeof contactSchema>;
