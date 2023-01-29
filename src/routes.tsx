import Settings from "./components/Settings/Settings";
import Game from "./components/Game/Game";
import Grid from "./components/Grid";

const routesConfig = [
  {
    path: "/",
    element: <Settings />,
    errorElement: <div>404 - not found</div>,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/grid",
    element: <Grid />,
  },
];

export default routesConfig;
