import { R2 } from "@convex-dev/r2";
import { components } from "../_generated/api";
import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation } from "../_generated/server";

export const r2 = new R2(components.r2);

export const { generateUploadUrl, syncMetadata, getMetadata } = r2.clientApi({
    checkUpload: async (ctx) => {
        const userId = await getAuthUserId(ctx)
        if (!userId) throw new ConvexError("Unauthorized, You must logged in first")
        // check if they already subscribe for future implementation
    },
    onUpload: async (ctx, bucket, key) => {
        // ...do something with the key
        // Runs in the `syncMetadata` mutation, as the upload is performed from the
        // client side. Convenient way to create relations between the newly created
        // object key and other data in your Convex database. Runs after the `checkUpload`
        // callback.
        const userId = await getAuthUserId(ctx)
        if (!userId) throw new ConvexError("Unauthorized, You must logged in first")
        await ctx.db.insert("uploadImages", {
            userId,
            key,
            bucket,
        })
    },
});

export const generateUploadUrlWithPrefix = mutation({
    args: { prefix: v.optional(v.string()), key: v.optional(v.string()) },
    handler: async (ctx, args) => {
        const userId = await getAuthUserId(ctx)
        if (!userId) throw new ConvexError("Unauthorized, You must logged in first")
        const prefix = args.prefix || "temp/";
        const key = args?.key || `${prefix}${crypto.randomUUID()}`;
        return r2.generateUploadUrl(key);
    },
});

