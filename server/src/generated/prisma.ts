import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    tweets: <T = Tweet[]>(args: { where?: TweetWhereInput, orderBy?: TweetOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tweet: <T = Tweet | null>(args: { where: TweetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tweetsConnection: <T = TweetConnection>(args: { where?: TweetWhereInput, orderBy?: TweetOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createTweet: <T = Tweet>(args: { data: TweetCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTweet: <T = Tweet | null>(args: { data: TweetUpdateInput, where: TweetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTweet: <T = Tweet | null>(args: { where: TweetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTweet: <T = Tweet>(args: { where: TweetWhereUniqueInput, create: TweetCreateInput, update: TweetUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTweets: <T = BatchPayload>(args: { data: TweetUpdateInput, where?: TweetWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTweets: <T = BatchPayload>(args: { where?: TweetWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    tweet: <T = TweetSubscriptionPayload | null>(args: { where?: TweetSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Tweet: (where?: TweetWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateTweet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createTweet(data: TweetCreateInput!): Tweet!
  createUser(data: UserCreateInput!): User!
  updateTweet(data: TweetUpdateInput!, where: TweetWhereUniqueInput!): Tweet
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteTweet(where: TweetWhereUniqueInput!): Tweet
  deleteUser(where: UserWhereUniqueInput!): User
  upsertTweet(where: TweetWhereUniqueInput!, create: TweetCreateInput!, update: TweetUpdateInput!): Tweet!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyTweets(data: TweetUpdateInput!, where: TweetWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyTweets(where: TweetWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  tweet(where: TweetWhereUniqueInput!): Tweet
  user(where: UserWhereUniqueInput!): User
  tweetsConnection(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TweetConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  tweet(where: TweetSubscriptionWhereInput): TweetSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tweet implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  author(where: UserWhereInput): User!
  attachment: String
}

"""A connection to a list of items."""
type TweetConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TweetEdge]!
  aggregate: AggregateTweet!
}

input TweetCreateInput {
  text: String!
  attachment: String
  author: UserCreateOneWithoutTweetsInput!
}

input TweetCreateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  connect: [TweetWhereUniqueInput!]
}

input TweetCreateWithoutAuthorInput {
  text: String!
  attachment: String
}

"""An edge in a connection."""
type TweetEdge {
  """The item at the end of the edge."""
  node: Tweet!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TweetOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
  attachment_ASC
  attachment_DESC
}

type TweetPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  attachment: String
}

type TweetSubscriptionPayload {
  mutation: MutationType!
  node: Tweet
  updatedFields: [String!]
  previousValues: TweetPreviousValues
}

input TweetSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TweetSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TweetSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TweetSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TweetWhereInput
}

input TweetUpdateInput {
  text: String
  attachment: String
  author: UserUpdateOneWithoutTweetsInput
}

input TweetUpdateManyWithoutAuthorInput {
  create: [TweetCreateWithoutAuthorInput!]
  connect: [TweetWhereUniqueInput!]
  disconnect: [TweetWhereUniqueInput!]
  delete: [TweetWhereUniqueInput!]
  update: [TweetUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TweetUpsertWithWhereUniqueWithoutAuthorInput!]
}

input TweetUpdateWithoutAuthorDataInput {
  text: String
  attachment: String
}

input TweetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  data: TweetUpdateWithoutAuthorDataInput!
}

input TweetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput!
  update: TweetUpdateWithoutAuthorDataInput!
  create: TweetCreateWithoutAuthorInput!
}

input TweetWhereInput {
  """Logical AND on all given filters."""
  AND: [TweetWhereInput!]

  """Logical OR on all given filters."""
  OR: [TweetWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TweetWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  attachment: String

  """All values that are not equal to given value."""
  attachment_not: String

  """All values that are contained in given list."""
  attachment_in: [String!]

  """All values that are not contained in given list."""
  attachment_not_in: [String!]

  """All values less than the given value."""
  attachment_lt: String

  """All values less than or equal the given value."""
  attachment_lte: String

  """All values greater than the given value."""
  attachment_gt: String

  """All values greater than or equal the given value."""
  attachment_gte: String

  """All values containing the given string."""
  attachment_contains: String

  """All values not containing the given string."""
  attachment_not_contains: String

  """All values starting with the given string."""
  attachment_starts_with: String

  """All values not starting with the given string."""
  attachment_not_starts_with: String

  """All values ending with the given string."""
  attachment_ends_with: String

  """All values not ending with the given string."""
  attachment_not_ends_with: String
  author: UserWhereInput
}

input TweetWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  username: String
  password: String!
  name: String!
  picture: String
  tweets(where: TweetWhereInput, orderBy: TweetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tweet!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String
  password: String!
  name: String!
  picture: String
  tweets: TweetCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTweetsInput {
  email: String!
  username: String
  password: String!
  name: String!
  picture: String
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  picture_ASC
  picture_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String
  password: String!
  name: String!
  picture: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  name: String
  picture: String
  tweets: TweetUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutTweetsInput {
  create: UserCreateWithoutTweetsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTweetsDataInput
  upsert: UserUpsertWithoutTweetsInput
}

input UserUpdateWithoutTweetsDataInput {
  email: String
  username: String
  password: String
  name: String
  picture: String
}

input UserUpsertWithoutTweetsInput {
  update: UserUpdateWithoutTweetsDataInput!
  create: UserCreateWithoutTweetsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  picture: String

  """All values that are not equal to given value."""
  picture_not: String

  """All values that are contained in given list."""
  picture_in: [String!]

  """All values that are not contained in given list."""
  picture_not_in: [String!]

  """All values less than the given value."""
  picture_lt: String

  """All values less than or equal the given value."""
  picture_lte: String

  """All values greater than the given value."""
  picture_gt: String

  """All values greater than or equal the given value."""
  picture_gte: String

  """All values containing the given string."""
  picture_contains: String

  """All values not containing the given string."""
  picture_not_contains: String

  """All values starting with the given string."""
  picture_starts_with: String

  """All values not starting with the given string."""
  picture_not_starts_with: String

  """All values ending with the given string."""
  picture_ends_with: String

  """All values not ending with the given string."""
  picture_not_ends_with: String
  tweets_every: TweetWhereInput
  tweets_some: TweetWhereInput
  tweets_none: TweetWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type TweetOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'attachment_ASC' |
  'attachment_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'picture_ASC' |
  'picture_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateOneWithoutTweetsInput {
  create?: UserCreateWithoutTweetsInput
  connect?: UserWhereUniqueInput
}

export interface TweetWhereInput {
  AND?: TweetWhereInput[] | TweetWhereInput
  OR?: TweetWhereInput[] | TweetWhereInput
  NOT?: TweetWhereInput[] | TweetWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  attachment?: String
  attachment_not?: String
  attachment_in?: String[] | String
  attachment_not_in?: String[] | String
  attachment_lt?: String
  attachment_lte?: String
  attachment_gt?: String
  attachment_gte?: String
  attachment_contains?: String
  attachment_not_contains?: String
  attachment_starts_with?: String
  attachment_not_starts_with?: String
  attachment_ends_with?: String
  attachment_not_ends_with?: String
  author?: UserWhereInput
}

export interface TweetCreateManyWithoutAuthorInput {
  create?: TweetCreateWithoutAuthorInput[] | TweetCreateWithoutAuthorInput
  connect?: TweetWhereUniqueInput[] | TweetWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  picture?: String
  picture_not?: String
  picture_in?: String[] | String
  picture_not_in?: String[] | String
  picture_lt?: String
  picture_lte?: String
  picture_gt?: String
  picture_gte?: String
  picture_contains?: String
  picture_not_contains?: String
  picture_starts_with?: String
  picture_not_starts_with?: String
  picture_ends_with?: String
  picture_not_ends_with?: String
  tweets_every?: TweetWhereInput
  tweets_some?: TweetWhereInput
  tweets_none?: TweetWhereInput
}

export interface UserUpdateInput {
  email?: String
  username?: String
  password?: String
  name?: String
  picture?: String
  tweets?: TweetUpdateManyWithoutAuthorInput
}

export interface TweetCreateWithoutAuthorInput {
  text: String
  attachment?: String
}

export interface UserUpsertWithoutTweetsInput {
  update: UserUpdateWithoutTweetsDataInput
  create: UserCreateWithoutTweetsInput
}

export interface TweetSubscriptionWhereInput {
  AND?: TweetSubscriptionWhereInput[] | TweetSubscriptionWhereInput
  OR?: TweetSubscriptionWhereInput[] | TweetSubscriptionWhereInput
  NOT?: TweetSubscriptionWhereInput[] | TweetSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TweetWhereInput
}

export interface UserUpdateWithoutTweetsDataInput {
  email?: String
  username?: String
  password?: String
  name?: String
  picture?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface UserUpdateOneWithoutTweetsInput {
  create?: UserCreateWithoutTweetsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTweetsDataInput
  upsert?: UserUpsertWithoutTweetsInput
}

export interface TweetUpdateWithoutAuthorDataInput {
  text?: String
  attachment?: String
}

export interface UserCreateInput {
  email: String
  username?: String
  password: String
  name: String
  picture?: String
  tweets?: TweetCreateManyWithoutAuthorInput
}

export interface UserCreateWithoutTweetsInput {
  email: String
  username?: String
  password: String
  name: String
  picture?: String
}

export interface TweetUpdateInput {
  text?: String
  attachment?: String
  author?: UserUpdateOneWithoutTweetsInput
}

export interface TweetCreateInput {
  text: String
  attachment?: String
  author: UserCreateOneWithoutTweetsInput
}

export interface TweetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput
  data: TweetUpdateWithoutAuthorDataInput
}

export interface TweetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TweetWhereUniqueInput
  update: TweetUpdateWithoutAuthorDataInput
  create: TweetCreateWithoutAuthorInput
}

export interface TweetWhereUniqueInput {
  id?: ID_Input
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface TweetUpdateManyWithoutAuthorInput {
  create?: TweetCreateWithoutAuthorInput[] | TweetCreateWithoutAuthorInput
  connect?: TweetWhereUniqueInput[] | TweetWhereUniqueInput
  disconnect?: TweetWhereUniqueInput[] | TweetWhereUniqueInput
  delete?: TweetWhereUniqueInput[] | TweetWhereUniqueInput
  update?: TweetUpdateWithWhereUniqueWithoutAuthorInput[] | TweetUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput[] | TweetUpsertWithWhereUniqueWithoutAuthorInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  username?: String
  password: String
  name: String
  picture?: String
}

/*
 * A connection to a list of items.

 */
export interface TweetConnection {
  pageInfo: PageInfo
  edges: TweetEdge[]
  aggregate: AggregateTweet
}

export interface Tweet extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  author: User
  attachment?: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateUser {
  count: Int
}

export interface TweetSubscriptionPayload {
  mutation: MutationType
  node?: Tweet
  updatedFields?: String[]
  previousValues?: TweetPreviousValues
}

export interface TweetPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  attachment?: String
}

export interface AggregateTweet {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  username?: String
  password: String
  name: String
  picture?: String
  tweets?: Tweet[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TweetEdge {
  node: Tweet
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string