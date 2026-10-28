import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema, serviceOptions, type ContactInput } from "@/lib/contact-schema";
import { contact } from "@/lib/site";

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm font-medium text-destructive">{message}</p>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    const { error } = await supabase.from("contact_messages").insert({
      name: values.name,
      company: values.company || null,
      email: values.email,
      phone: values.phone || null,
      service: values.service || null,
      message: values.message,
    });
    if (error) {
      toast.error("Zprávu se nepodařilo odeslat", {
        description: `Zkuste to prosím znovu, nebo nám napište na ${contact.email}.`,
      });
      return;
    }
    reset();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-8 shadow-card">
        <CheckCircle2 className="size-10 text-signal" />
        <h3 className="text-2xl font-black">Děkujeme, zprávu máme!</h3>
        <p className="text-muted-foreground">
          Ozveme se vám co nejdříve — obvykle ještě týž pracovní den. Pokud spěcháte, zavolejte
          nám na{" "}
          <a href={contact.phoneHref} className="font-bold text-foreground underline decoration-signal">
            {contact.phone}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Odeslat další poptávku
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-xl border border-border bg-card p-6 shadow-card sm:grid-cols-2 sm:p-8"
    >
      <div>
        <Label htmlFor="name">Jméno a příjmení *</Label>
        <Input id="name" autoComplete="name" className="mt-2 h-11" {...register("name")} aria-invalid={!!errors.name} />
        <FieldError message={errors.name?.message} />
      </div>
      <div>
        <Label htmlFor="company">Firma</Label>
        <Input id="company" autoComplete="organization" className="mt-2 h-11" {...register("company")} />
        <FieldError message={errors.company?.message} />
      </div>
      <div>
        <Label htmlFor="email">E‑mail *</Label>
        <Input id="email" type="email" autoComplete="email" className="mt-2 h-11" {...register("email")} aria-invalid={!!errors.email} />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" type="tel" autoComplete="tel" className="mt-2 h-11" {...register("phone")} aria-invalid={!!errors.phone} />
        <FieldError message={errors.phone?.message} />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="service">O jakou přepravu máte zájem?</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger id="service" className="mt-2 h-11 w-full">
                <SelectValue placeholder="Vyberte službu" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Co potřebujete převézt? *</Label>
        <Textarea
          id="message"
          rows={5}
          className="mt-2"
          placeholder="Např. 4 europalety z Prahy 9 do Kladna, nakládka v pátek ráno."
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        <FieldError message={errors.message?.message} />
      </div>
      <div className="flex flex-col items-start justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          Odesláním souhlasíte se zpracováním údajů za účelem vyřízení poptávky.
        </p>
        <Button type="submit" variant="signal" size="xl" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          Odeslat poptávku
        </Button>
      </div>
    </form>
  );
}
