import GraphQLDate from "graphql-date";
import NeedResolvers from "./need-resolver";
import UserResolvers from "./user-resolvers";

export default {
  Date: GraphQLDate,
  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed,
    me: UserResolvers.me
  },

  Mutation: {
    createNeed: NeedResolvers.createNeed,
    updateNeed: NeedResolvers.updateNeed,
    deleteNeed: NeedResolvers.deleteNeed,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
