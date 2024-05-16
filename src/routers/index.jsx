import { Navigate } from "react-router";
import { RoutesName } from "./consts";
import {
  AiNutrition,
  AiTrainer,
  Home,
  Login,
  Pricing,
  Register,
  Request,
  Terms,
  TryNow,
} from "../pages";

export const routes = [
  {
    index: true,
    element: <Home />,
    path: RoutesName.HOME,
  },
  {
    element: <Login />,
    path: RoutesName.LOGIN,
  },
  {
    element: <TryNow />,
    path: RoutesName.TRYNOW,
  },
  {
    element: <AiTrainer />,
    path: RoutesName.AITRAINER,
  },
  {
    element: <AiNutrition />,
    path: RoutesName.AINUTRITION,
  },
  {
    element: <Request />,
    path: RoutesName.REQUEST,
  },
  {
    element: <Register />,
    path: RoutesName.REGISTER,
  },
  {
    element: <Pricing />,
    path: RoutesName.PRICING,
  },
  {
    element: <Terms />,
    path: RoutesName.TERMS,
  },
  {
    element: <Navigate to="/" />,
    path: RoutesName.NOT_FOUND,
  },
];
