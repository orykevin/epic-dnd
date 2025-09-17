"use node";

import { ConvexError, v } from "convex/values";
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { internalAction } from "../_generated/server";
import { r2 } from "./upload";

export const IMAGE_CACHE_CONTROL = "public, max-age=31536000"

// export async function generateImage(prompt: string) {
//     const result = await generateText({
//         model: 'gemini-2.5-flash-image-preview',
//         prompt
//     });

//     let fileName = '';

//     // Save generated images
//     for (const file of result.files) {
//         if (file.mediaType.startsWith('image/')) {
//             const timestamp = Date.now();
//             fileName = `$}-${timestamp}.png`;


//         }
//     }

//     return `/${fileName}`
// }

export const generateImagesAction = internalAction({
    args: {
        userId: v.id("users"),
        prompt: v.string(),
    }, handler: async (ctx, { userId, prompt }) => {
        try {
            const result = await generateText({
                model: google("gemini-2.5-flash-image-preview"),
                prompt
            });

            await Promise.all(result.files.map(async (files) => {
                const generateUploadUrl = await r2.generateUploadUrl('gnrt/' + crypto.randomUUID())
                if (files.uint8Array) return
                await fetch(generateUploadUrl.url, {
                    method: "PUT",
                    headers: { "Content-Type": "image/png", "Cache-Control": IMAGE_CACHE_CONTROL, "Access-Control-Allow-Origin": process.env?.APP_URL || "*" },
                    body: files.uint8Array,
                })
                await r2.syncMetadata(ctx, generateUploadUrl.key)
                return generateUploadUrl.key
            }))
            // for (const file of result.files) {
            //     if (file.mediaType.startsWith('image/')) {
            //         const timestamp = Date.now()
            //         await file.uint8Array
            //     }
            // }
        } catch (e) {
            console.log(e)
            throw new ConvexError("Error when generating image")
        }
    }
})
