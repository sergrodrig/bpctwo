import { findById } from "@/helpers";

export default {
  authUser: (state, getters) => {
    return getters.user(state.authId);
  },
  user: (state) => {
    return (id) => {
      const user = findById(state.users, id);
      if (!user) return null;
      return { ...user };
    };
  },
};
