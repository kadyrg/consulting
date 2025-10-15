import { getTermsOfServiceData } from "@/shared/model/get-terms-of-service-data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("TermsOfServicePage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TermsOfServicePage() {
  const t = await getTranslations("TermsOfServicePage");
  const termsOfServiceData = await getTermsOfServiceData();

  return (
    <section className="px-5">
      <div className="max-w-4xl mx-auto py-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {t("title")}
        </h2>
        <span className="tracking-tight block pt-2">{t("last-updated")}</span>
        {termsOfServiceData.map((item) => (
          <div key={item.key} className="py-3">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight py-2">
              {item.title}
            </h4>
            <p className="leading-7 whitespace-pre-line">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
