import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getClassBySlug } from "@/data/classes";
import { ClassDetail } from "@/components/pages/ClassDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { classes } = await import("@/data/classes");
  return classes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/classes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cls = getClassBySlug(slug);
  if (!cls) return { title: "找不到職業" };
  return {
    title: cls.metaTitle ?? `${cls.name}｜職業攻略`,
    description: cls.metaDescription,
  };
}

export default async function ClassSlugPage({
  params,
}: PageProps<"/classes/[slug]">) {
  const { slug } = await params;
  const cls = getClassBySlug(slug);
  if (!cls) notFound();
  return <ClassDetail cls={cls} />;
}
