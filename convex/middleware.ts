import { getAuthUserId } from "@convex-dev/auth/server";
import { MutationCtx, QueryCtx } from "./_generated/server";
import { ConvexError } from "convex/values";

export const validateUserId = async (ctx: QueryCtx | MutationCtx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new ConvexError("You are not authenticated");
    return userId
}