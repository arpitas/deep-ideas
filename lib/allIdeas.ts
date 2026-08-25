import { ideas } from "@/lib/ideas";
import { integralIdea } from "@/lib/integralIdea";

export const allIdeas = [...ideas, integralIdea];

export function getAllIdea(slug: string) {
  return allIdeas.find((idea) => idea.slug === slug);
}
