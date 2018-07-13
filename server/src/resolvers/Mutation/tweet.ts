import { Context, getUserId } from "../../utils"
export default {
  createTweet: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return await ctx.db.mutation.createTweet(
      {
        data: {
          text: args.text,
          author: {
            connect: {
              id: id
            }
          }
        }
      },
      info
    )
  }
}
