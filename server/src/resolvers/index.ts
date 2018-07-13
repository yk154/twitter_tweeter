import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import tweet from "./Mutation/tweet"
import { AuthPayload } from "./AuthPayload"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...tweet
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
