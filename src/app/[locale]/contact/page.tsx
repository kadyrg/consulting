import { ContactForm } from "@/features/contact";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/kit/card";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <section className="px-5">
      <div className="py-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight">
              {t("contact-form-title")}
            </CardTitle>
            <CardDescription>{t("contact-form-subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
