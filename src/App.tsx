import { useEffect } from "react";
import "./App.scss";
import { AppRouter } from "./app/providers/router/AppRouter";
import { useNavigate } from "react-router-dom";

import { routePath } from "./shared/router/routes";

export const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${routePath.posts}1`);
  }, []);

  return <AppRouter />;
};
