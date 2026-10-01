import { ideas } from "@/lib/ideas";
import { integralIdea } from "@/lib/integralIdea";
import { maintenanceIdea } from "@/lib/maintenanceIdea";

export const allIdeas = [...ideas, integralIdea, maintenanceIdea];

export function getAllIdea(slug: string) {
  return allIdeas.find((idea) => idea.slug === slug);
}
