import { getAboutData } from "@/shared/model/get-about-data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const aboutData = await getAboutData();

  return (
    <>
      <section className="relative h-130 md:h-150">
        <div className="z-10 absolute top-0 text-background h-full w-full flex flex-col gap-4 md:gap-6 items-center px-4 justify-center">
          <h1 className="scroll-m-20 text-center text-4xl md:text-5xl font-extrabold tracking-tight text-balance max-w-xl">
            {t("hero-title")}
          </h1>
          <h3 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight text-center max-w-xl">
            {t("hero-subtitle")}
          </h3>
        </div>
        <Image
          src={"/about-us-image-1.jpg"}
          width={1920}
          height={1080}
          alt={""}
          className="absolute top-0 brightness-30 object-cover h-full"
        />
      </section>
      <section className="px-5">
        <div className="max-w-6xl mx-auto py-6">
          <h2 className="scroll-m-20 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-6">
            The People of the Kingdom
          </h2>
          {aboutData.map((item) => (
            <div className="py-6" key={item.key}>
              <h4 className="scroll-m-20 text-2xl max-w-2xl mx-auto text-center font-semibold tracking-tight">
                {item.title}
              </h4>
              <p className="leading-7 text-center max-w-2xl mx-auto [&:not(:first-child)]:mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5">
        <div className="max-w-6xl py-16 mx-auto">
          <h3 className="scroll-m-20 text-2xl sm:text-3xl text-center font-semibold tracking-tight mt-4">
            {t("our-location")}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.075798691656!2d21.63569377720237!3d47.546853471184406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470dc27317cec1%3A0x3cd85a1504c3211b!2sDebrecen%20Swimming%20Pool%20Complex!5e0!3m2!1sen!2shu!4v1760547687638!5m2!1sen!2shu"
            loading="lazy"
            className="w-full h-100 rounded-lg mt-7"
          />
        </div>
      </section>
    </>
  );
}
