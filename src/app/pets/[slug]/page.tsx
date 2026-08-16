import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPetBySlug } from "@/data/pets";
import { PetDetail } from "@/components/pages/PetDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { pets } = await import("@/data/pets");
  return pets.map((pet) => ({ slug: pet.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/pets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pet = getPetBySlug(slug);
  if (!pet) return { title: "找不到幻獸" };
  return {
    title: pet.metaTitle ?? `${pet.name}｜幻獸資料`,
    description: pet.metaDescription ?? pet.note.value,
  };
}

export default async function PetSlugPage({
  params,
}: PageProps<"/pets/[slug]">) {
  const { slug } = await params;
  const pet = getPetBySlug(slug);
  if (!pet) notFound();
  return <PetDetail pet={pet} />;
}
