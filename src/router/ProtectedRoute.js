import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AppLayout from "../pages/dashboard/component/layout";

export function InappPrivateRoute() {
  const location = useLocation();
  const { isLoggedIn, authedUser } = useSelector((state) => state.authReducer);
  const isAuthed = isLoggedIn && authedUser !== null;
  return isAuthed ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export function AuthappPrivateRoute() {
  const { isLoggedIn, authedUser } = useSelector((state) => state.authReducer);
  const isAuthed = !isLoggedIn && authedUser === null;
  return isAuthed ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/dashboard" />
  );
}
