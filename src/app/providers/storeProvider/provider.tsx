import { Provider } from "react-redux";
import { setupStore } from "./config/store";

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const store = setupStore();

  return <Provider store={store}>{children}</Provider>;
};
