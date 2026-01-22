// app/nieuws/[title]/page.js
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NewsItem from "@/components/modules/NewsItem";
import Container from "@/components/containers/Container";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Same idea as your old setup: ISR with short revalidate
export const revalidate = 10;

// Decode up to 2x to avoid %2520 style double-encoding issues
function decodeUpToTwice(value) {
  let v = String(value);
  for (let i = 0; i < 2; i++) {
    if (!/%[0-9A-Fa-f]{2}/.test(v)) break;
    try {
      const d = decodeURIComponent(v);
      if (d === v) break;
      v = d;
    } catch {
      break;
    }
  }
  return v;
}

async function getNewsItemByTitle(rawTitle) {
  const title = decodeUpToTwice(rawTitle);

  const url =
    `${API_URL}/api/nieuwsberichts` +
    `?filters[titel][$eq]=${encodeURIComponent(title)}` +
    `&populate[0]=bericht` +
    `&populate[1]=bericht.afbeelding`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed fetching nieuwsbericht: ${res.status}`);

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export async function generateMetadata({ params }) {
  const { title } = await params;

  const item = await getNewsItemByTitle(title);
  if (!item) return {};

  return {
    title: `ECU Repair – ${item.titel}`,
    description: item.samenvatting,
  };
}

export default async function NieuwsItemPage({ params }) {
  const { title } = await params;

  const item = await getNewsItemByTitle(title);
  if (!item) notFound();

  return (
    <Container>
      <NewsItem item={item} />
    </Container>
  );
}

// Optional: pre-generate known items (like your old getStaticPaths)
// You can remove this entirely if you don't want prebuilding.
// Leaving it in keeps "best of both": prebuilt + fallback for new items.
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/api/nieuwsberichts`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];

  const json = await res.json();
  const items = json.data ?? [];

  return items.map((n) => ({
    title: n.titel,
  }));
}
