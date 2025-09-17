import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function createFileFromBlobURL(blobUrl: string, name: string): Promise<File> {
  const response = await fetch(blobUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch blob: ${response.status} ${response.statusText}`);
  }
  const blob = await response.blob();

  return new File([blob], name, { type: blob.type })
}

export function normalizeAbilityScores(abilityScores: Record<string, any>) {
  return {
    str: Number(abilityScores.str),
    dex: Number(abilityScores.dex),
    con: Number(abilityScores.con),
    int: Number(abilityScores.int),
    wis: Number(abilityScores.wis),
    cha: Number(abilityScores.cha),
  };
}