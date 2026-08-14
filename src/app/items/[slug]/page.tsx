import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItemBySlug } from "@/data/items";
import { ItemDetail } from "@/components/pages/ItemDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { items } = await import("@/data/items");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/items/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) return { title: "找不到道具" };
  return {
    title: item.metaTitle ?? `${item.name}｜道具資料`,
    description: item.metaDescription ?? item.effect.value,
  };
}

export default async function ItemSlugPage({
  params,
}: PageProps<"/items/[slug]">) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();
  return <ItemDetail item={item} />;
}
