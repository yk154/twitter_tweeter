import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  tweets: async (parent, args, ctx: Context, info) => {
    console.log({ info })
    return ctx.db.query.tweets(
      {
        ...args
      },
      info
    )
  }
}
