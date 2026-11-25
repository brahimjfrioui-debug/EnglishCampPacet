import { describe, expect, it } from "vitest";
import { registrationSchema, contactSchema, formatRegistrationMessage } from "@/lib/inquiry";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const valid = {
  name: "Siti Rahma",
  phone: "+62 812 3456 7890",
  age: "12",
  program: "English Camp — 2 Days 1 Night",
  message: "",
};

describe("registration form rules", () => {
  it("accepts a complete registration", () => {
    expect(registrationSchema.safeParse(valid).success).toBe(true);
  });

  it("requires parent/student name, phone, age and program", () => {
    const res = registrationSchema.safeParse({ name: "", phone: "", age: "", program: "" });
    expect(res.success).toBe(false);
    const fields = res.success ? [] : res.error.issues.map((i) => i.path[0]);
    expect(fields).toEqual(expect.arrayContaining(["name", "phone", "age", "program"]));
  });

  it("rejects phone numbers with letters or too few digits", () => {
    expect(registrationSchema.safeParse({ ...valid, phone: "0812abc" }).success).toBe(false);
    expect(registrationSchema.safeParse({ ...valid, phone: "0812" }).success).toBe(false);
  });

  it("rejects non-numeric student age", () => {
    expect(registrationSchema.safeParse({ ...valid, age: "twelve" }).success).toBe(false);
  });
});

describe("contact form rules", () => {
  it("requires a message of at least 10 characters", () => {
    const base = { name: "Budi", phone: "081234567890" };
    expect(contactSchema.safeParse({ ...base, message: "Hi" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...base, message: "What are the class times?" }).success).toBe(true);
  });
});

describe("WhatsApp link", () => {
  it("uses the configured number with digits only", () => {
    expect(buildWhatsAppLink("Hello", "+62 812-3456")).toBe("https://wa.me/628123456?text=Hello");
  });

  it("falls back to recipient picker when no number is set", () => {
    expect(buildWhatsAppLink("Hi there", "")).toBe("https://wa.me/?text=Hi%20there");
  });

  it("includes registration details in the message", () => {
    const data = registrationSchema.parse(valid);
    const msg = formatRegistrationMessage(data);
    expect(msg).toContain("Student age: 12");
    expect(msg).toContain("Interested program: English Camp — 2 Days 1 Night");
  });
});

describe("student age message", () => {
  it("asks for the age when left empty", () => {
    const res = registrationSchema.safeParse({ ...valid, age: "" });
    expect(res.success).toBe(false);
    expect(res.success ? "" : res.error.issues[0]?.message).toBe("Please enter the student's age");
  });
});
