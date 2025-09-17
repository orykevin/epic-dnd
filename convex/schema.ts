import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { charactersTable } from "./tables/characters";

export default defineSchema({
    ...authTables,
    characters: charactersTable
})