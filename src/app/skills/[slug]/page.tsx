import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSkillBySlug } from "@/data/skills";
import { SkillDetail } from "@/components/pages/SkillDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { skills } = await import("@/data/skills");
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/skills/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "找不到技能" };
  return {
    title: skill.metaTitle ?? `${skill.name}｜技能資料`,
    description: skill.metaDescription,
  };
}

export default async function SkillSlugPage({
  params,
}: PageProps<"/skills/[slug]">) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();
  return <SkillDetail skill={skill} />;
}
