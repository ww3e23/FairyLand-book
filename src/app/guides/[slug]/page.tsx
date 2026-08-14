import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getGuideBySlug } from "@/data/guides";
import { GuideDetail } from "@/components/pages/GuideDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { guides } = await import("@/data/guides");
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "找不到攻略" };
  return {
    title: guide.metaTitle ?? guide.name,
    description: guide.metaDescription ?? guide.summary,
  };
}

export default async function GuideSlugPage({
  params,
}: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideDetail guide={guide} />;
}
