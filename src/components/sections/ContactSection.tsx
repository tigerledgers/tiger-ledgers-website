"use client";

import { useEffect, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/validations/contactSchema";
import { CONTACT, SERVICE_OPTIONS } from "@/constants/siteData";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema as never) as unknown as Resolver<ContactFormData>,
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const service = watch("service");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const onSubmit = async (data: ContactFormData) => {
    // Placeholder submit — wire to a backend endpoint when available.
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent", {
      description: `Thanks ${data.name.split(" ")[0]} — we'll be in touch shortly.`,
    });
    reset();
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get in touch"
      title="Contact Us"
      description="Tell us about your business — we'll reply within one business day."
    >
      <div className="grid items-stretch gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-2xl bg-navy p-8 text-navy-foreground shadow-[var(--shadow-elegant)]">
            <h3 className="font-display text-2xl font-semibold">Reach us directly</h3>
            <p className="mt-2 text-sm text-navy-foreground/70">
              We respond personally, not through a queue.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/60">
                    Address
                  </p>
                  <p className="mt-1 text-sm">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/60">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block text-sm transition-colors hover:text-gold"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs uppercase tracking-wider text-navy-foreground/60">Phone</p>
                  <p className="text-sm">
                    <span className="font-semibold text-gold">US:</span> {CONTACT.phoneUS}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-gold">IN:</span> {CONTACT.phoneIN}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-navy-foreground/60">
                Follow us
              </p>
              <SocialLinks variant="light" />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="lg:col-span-3 space-y-5 rounded-2xl border border-border/60 bg-surface p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" placeholder="+1 555 000 0000" {...register("phone")} />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="service">Service of Interest</Label>
              {mounted ? (
                <Select
                  value={service || undefined}
                  onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground">
                  Select a service
                </div>
              )}
              {errors.service && (
                <p className="text-xs text-destructive">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="A few words about what you need..."
              {...register("message")}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-gold-foreground hover:bg-gold/90 sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
