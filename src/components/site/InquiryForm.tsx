import { useId, useState, type ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROGRAM_OPTIONS } from "@/content/programs";
import {
  contactSchema,
  formatContactMessage,
  formatRegistrationMessage,
  registrationSchema,
} from "@/lib/inquiry";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";

type Kind = "registration" | "contact";
type Values = { name: string; phone: string; age: string; program: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const INITIAL: Record<Kind, Values> = {
  registration: { name: "", phone: "", age: "", program: "", subject: "", message: "" },
  contact: { name: "", phone: "", age: "", program: "", subject: "", message: "" },
};

function validate(kind: Kind, values: Values) {
  const result =
    kind === "registration"
      ? registrationSchema.safeParse(values)
      : contactSchema.safeParse(values);
  if (result.success) return { ok: true as const, data: result.data, errors: {} };
  const errors: Errors = {};
  for (const issue of result.error.issues) {
    const key = String(issue.path[0]) as keyof Values;
    if (!errors[key]) errors[key] = issue.message;
  }
  return { ok: false as const, errors };
}

export function InquiryForm({ kind, defaultProgram }: { kind: Kind; defaultProgram?: string | undefined }) {
  const formId = useId();
  const [values, setValues] = useState<Values>(() => ({
    ...INITIAL[kind],
    ...(kind === "registration" && defaultProgram ? { program: defaultProgram } : {}),
  }));
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState<{ name: string; message: string } | null>(null);

  const set = (key: keyof Values, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitted) setErrors(validate(kind, next).errors);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const res = validate(kind, values);
    setErrors(res.errors);
    if (!res.ok) {
      const first = Object.keys(res.errors)[0];
      document.getElementById(`${formId}-${first}`)?.focus();
      return;
    }
    const message =
      kind === "registration"
        ? formatRegistrationMessage(res.data as Parameters<typeof formatRegistrationMessage>[0])
        : formatContactMessage(res.data as Parameters<typeof formatContactMessage>[0]);
    setSuccess({ name: res.data.name, message });
  };

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-success/30 bg-card p-8 text-center shadow-soft animate-in fade-in-0 zoom-in-95 sm:p-10"
      >
        <CheckCircle2 className="mx-auto size-14 text-success" />
        <h3 className="mt-5 text-2xl font-medium text-primary sm:text-3xl">
          Thank you, {success.name}!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Your {kind === "registration" ? "registration inquiry" : "message"} is ready. Tap the
          button below to send it to our team on WhatsApp — we'll reply as soon as we can.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <WhatsAppButton size="lg" message={success.message} label="Send via WhatsApp" />
          <button
            type="button"
            onClick={() => {
              setSuccess(null);
              setSubmitted(false);
              setValues(INITIAL[kind]);
            }}
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  const field = (key: keyof Values) => ({
    id: `${formId}-${key}`,
    name: key,
    value: values[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${formId}-${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      set(key, e.target.value),
  });

  const inputCls =
    "h-12 rounded-xl border-input bg-background px-4 text-base shadow-none focus-visible:ring-2 aria-[invalid=true]:border-destructive";

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={kind === "registration" ? "Parent / student name" : "Your name"}
          htmlFor={`${formId}-name`}
          error={errors.name}
          errorId={`${formId}-name-error`}
          className="sm:col-span-2"
        >
          <Input {...field("name")} autoComplete="name" placeholder="Full name" className={inputCls} />
        </Field>

        <Field
          label="Phone or WhatsApp number"
          htmlFor={`${formId}-phone`}
          error={errors.phone}
          errorId={`${formId}-phone-error`}
          className={kind === "contact" ? "sm:col-span-2" : undefined}
        >
          <Input
            {...field("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+62 812 3456 7890"
            className={inputCls}
          />
        </Field>

        {kind === "registration" && (
          <>
            <Field
              label="Student age"
              htmlFor={`${formId}-age`}
              error={errors.age}
              errorId={`${formId}-age-error`}
            >
              <Input
                {...field("age")}
                type="number"
                inputMode="numeric"
                min={4}
                max={80}
                placeholder="e.g. 12"
                className={inputCls}
              />
            </Field>
            <Field
              label="Interested program"
              htmlFor={`${formId}-program`}
              error={errors.program}
              errorId={`${formId}-program-error`}
              className="sm:col-span-2"
            >
              <select
                {...field("program")}
                className={cn(
                  "flex w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive",
                  "h-12",
                  !values.program && "text-muted-foreground",
                )}
              >
                <option value="" disabled>
                  Choose a program
                </option>
                {PROGRAM_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {kind === "contact" && (
          <Field
            label="Subject (optional)"
            htmlFor={`${formId}-subject`}
            error={errors.subject}
            errorId={`${formId}-subject-error`}
            className="sm:col-span-2"
          >
            <Input {...field("subject")} placeholder="What is your message about?" className={inputCls} />
          </Field>
        )}

        <Field
          label={kind === "registration" ? "Additional message (optional)" : "Message"}
          htmlFor={`${formId}-message`}
          error={errors.message}
          errorId={`${formId}-message-error`}
          className="sm:col-span-2"
        >
          <Textarea
            {...field("message")}
            rows={4}
            placeholder={
              kind === "registration"
                ? "Tell us about the student's English level, goals or questions"
                : "How can we help?"
            }
            className="rounded-xl border-input bg-background px-4 py-3 text-base shadow-none focus-visible:ring-2 aria-[invalid=true]:border-destructive"
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        <Send />
        {kind === "registration" ? "Send registration inquiry" : "Send message"}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        No payment is required. Our team will contact you to answer your questions.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  errorId,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  errorId: string;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-primary">
        {label}
      </Label>
      {children}
      {error && (
        <p id={errorId} className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
