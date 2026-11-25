import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(1, "Please enter a phone or WhatsApp number")
  .regex(/^\+?[\d\s\-()]+$/, "Use numbers only, e.g. +62 812 3456 7890")
  .refine((v) => {
    const digits = v.replace(/\D/g, "").length;
    return digits >= 9 && digits <= 15;
  }, "Phone number should have 9 to 15 digits");

export const registrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter the parent or student name")
    .max(100, "Name is too long"),
  phone: phoneSchema,
  age: z.preprocess(
    (v) => {
      if (v === undefined || v === null || (typeof v === "string" && v.trim() === "")) return undefined;
      return Number(v);
    },
    z
      .number({
        error: (issue) =>
          issue.input === undefined
            ? "Please enter the student's age"
            : "Please enter the student's age as a number",
      })
      .int("Age should be a whole number")
      .min(4, "Student age should be between 4 and 80")
      .max(80, "Student age should be between 4 and 80"),
  ),
  program: z.string().trim().min(1, "Please choose a program"),
  message: z.string().trim().max(1000, "Message is too long (max 1000 characters)").optional(),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: phoneSchema,
  subject: z.string().trim().max(120, "Subject is too long").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please write a short message (at least 10 characters)")
    .max(1000, "Message is too long (max 1000 characters)"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function formatRegistrationMessage(data: RegistrationInput): string {
  return [
    "Hello English Camp! I would like to register / ask about joining.",
    "",
    `Name: ${data.name}`,
    `Phone/WhatsApp: ${data.phone}`,
    `Student age: ${data.age}`,
    `Interested program: ${data.program}`,
    data.message ? `Message: ${data.message}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

export function formatContactMessage(data: ContactInput): string {
  return [
    "Hello English Camp!",
    "",
    `Name: ${data.name}`,
    `Phone/WhatsApp: ${data.phone}`,
    data.subject ? `Subject: ${data.subject}` : null,
    `Message: ${data.message}`,
  ]
    .filter((l) => l !== null)
    .join("\n");
}
