import { AppRoutes } from "./components/Route/AppRoutes";
import { useAppDispatch } from "./hook/use-app-dispatch.hooks";
import { useEffect } from "react";
import { AuthActions } from "./store/actions";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AuthActions.current());
  }, [dispatch]);
  return <AppRoutes />;
}

export default App;
