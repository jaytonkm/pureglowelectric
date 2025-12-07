"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

type ContactFormProps = {
  mailto?: string;
  subject?: string;
  className?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const DEFAULT_MAILTO = "contact@pureglowelectric.com";
const DEFAULT_SUBJECT = "New inquiry from PureGlow Electric website";

export function ContactForm({
  mailto = DEFAULT_MAILTO,
  subject = DEFAULT_SUBJECT,
  className,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = `Name: ${form.name || "N/A"}\nEmail: ${form.email || "N/A"}\nPhone: ${
      form.phone || "N/A"
    }\n\nMessage:\n${form.message || "N/A"}`;

    const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <form className={cn("w-full space-y-5", className)} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange("name")}
          autoComplete="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={form.email}
          onChange={handleChange("email")}
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Phone</Label>
        <Input
          type="tel"
          placeholder="(587) 000-0000"
          value={form.phone}
          onChange={handleChange("phone")}
          autoComplete="tel"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Message</Label>
        <Textarea
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange("message")}
        />
      </div>
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
}

