import { defineTable } from "convex/server";
import { v } from "convex/values";

export const characterSchema = {
    name: v.string(),
    gender: v.string(),
    race: v.string(),
    class: v.string(),
    background: v.string(),
    characteristic: v.string(),
    abilityScores: v.object({
        str: v.number(),
        dex: v.number(),
        con: v.number(),
        int: v.number(),
        wis: v.number(),
        cha: v.number()
    }),
    imageFullUrl: v.optional(v.string()),
    imageAvatarUrl: v.optional(v.string())
}

export const charactersTable = defineTable({
    ...characterSchema,
    userId: v.id('users'),

}).index("byUserId", ['userId'])