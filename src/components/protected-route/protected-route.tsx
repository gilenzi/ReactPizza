import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { username } = useSelector((state: RootState) => state.user);

  return username ? <Outlet /> : <Navigate to={"/"} replace />;
}
