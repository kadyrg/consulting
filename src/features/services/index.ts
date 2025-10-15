import { getLocale } from "next-intl/server";

const SERVICES_DATA_EN = [
  {
    key: "education",
    field: "Education",
    image: "/study-in-romania.webp",
    title: "Consulting",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur placeat id aspernatur provident harum voluptatem
                  aliquam recusandae iusto culpa necessitatibus natus, fugit
                  nemo suscipit, vitae atque officiis blanditiis omnis
                  commodi.`,
  },
  {
    key: "work",
    field: "Work",
    image: "/study-in-romania.webp",
    title: "Consulting",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur placeat id aspernatur provident harum voluptatem
                  aliquam recusandae iusto culpa necessitatibus natus, fugit
                  nemo suscipit, vitae atque officiis blanditiis omnis
                  commodi.`,
  },
  {
    key: "business",
    field: "Business",
    image: "/study-in-romania.webp",
    title: "Consulting",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur placeat id aspernatur provident harum voluptatem
                  aliquam recusandae iusto culpa necessitatibus natus, fugit
                  nemo suscipit, vitae atque officiis blanditiis omnis
                  commodi.`,
  },
];

export async function getServicesData() {
  const locale = await getLocale();

  return locale === "en" ? SERVICES_DATA_EN : SERVICES_DATA_EN;
}
