import { describe, expect, it } from "vitest";

import { contactSchema } from "@/lib/contact-schema";

const valid = {
  name: "Jan Novák",
  email: "jan@example.cz",
  message: "Potřebuji převézt 3 palety z Prahy do Brna.",
};

describe("contact form rules", () => {
  it("accepts a message with name, email and text", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires a name", () => {
    expect(contactSchema.safeParse({ ...valid, name: "  " }).success).toBe(false);
  });

  it("requires a valid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "neplatny" }).success).toBe(false);
  });

  it("rejects messages longer than 2000 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "a".repeat(2001) }).success).toBe(false);
  });
});
