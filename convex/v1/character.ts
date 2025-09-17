import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { internal } from "../_generated/api";
import { Id } from "../_generated/dataModel";
import { characterSchema } from "../tables/characters";
import { validateUserId } from "../middleware";

export const createCharacters = mutation({
    args: characterSchema,
    handler: async (ctx, args) => {
        const userId = await validateUserId(ctx);
        const characterId = await ctx.db.insert("characters", { ...args, userId })
        return characterId
    }
})

export const generateCharacterPortrait = mutation({
    args: {
        prompt: v.string()
    },
    handler: async (ctx, { prompt }) => {
        const userId = "jx747gvp3a6c0nrdkfpa4tns7n7q0wxd" as Id<"users">

        await ctx.scheduler.runAfter(0, internal.v1.generate.generateImagesAction, { prompt, userId: userId })
    }
})