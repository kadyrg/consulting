"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/kit/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { Textarea } from "@/shared/ui/kit/textarea";
import { useTranslations } from "next-intl";
import React from "react";
import { sendContactEmail } from "@/actions/send-contact-email";
import { Spinner } from "@/shared/ui/kit/spinner";
import { Link } from "@/shared/i18n/navigation";
import { ChevronRight } from "lucide-react";

export const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    email: z.email(t("invalid-email-error")),
    name: z
      .string()
      .min(2, t("name-too-short-error"))
      .max(50, t("name-too-long-error")),
    message: z.string().max(500, t("message-too-long-error")).optional(),
  });

export type ContactFormSchema = z.infer<
  ReturnType<typeof createContactFormSchema>
>;

export function ContactForm() {
  const t = useTranslations("ContactPage");
  const contactFormSchema = createContactFormSchema(t);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormSchema) {
    setError(null);
    if (loading) return;
    setLoading(true);
    const { success } = await sendContactEmail(values);
    setLoading(false);
    if (success) {
      form.reset();
      setSuccess(true);
    } else {
      setError(t("error-message"));
    }
  }

  return (
    <>
      {success ? (
        <div>
          <h4 className="py-10 scroll-m-20 text-2xl font-semibold tracking-tight text-green-600">
            {t("success-message")}
          </h4>
          <Button size={"sm"} className="mt-6 !pr-2" asChild>
            <Link href={"/"}>
              Back to homepage
              <ChevronRight />
            </Link>
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email-label")} *</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder={t("email-placeholder")}
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name-label")} *</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder={t("name-placeholder")}
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("message-label")}</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder={t("message-placeholder")}
                      className="rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-end gap-3">
              {error && <div className="text-destructive text-sm">{error}</div>}
              <Button
                type="submit"
                disabled={loading}
                className="rounded-md w-full"
              >
                {loading && <Spinner />}
                {!loading ? t("submit-button") : t("sending-button")}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
