import { actions, reducer } from "./slice";
import { signUp, signIn, current } from "./actions";

const allActions = {
  ...actions,
  signUp,
  signIn,
  current,
};

export { allActions as actions, reducer };
