import { extraArgument } from "../store";
import { type AppDispatch } from "../store";
import { type RootState } from "../store";

type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
};

export { type AsyncThunkConfig };
