import { Navigate, Outlet, useLocation } from "react-router";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PublicLayout = () => {
  // checking user is logged in or not
  const path = useLocation();
  const user = useQuery(api.users.getUser);
  if (user === undefined) return <div>Loading ...</div>;
  if (user && path.pathname === "/") {
    return <Navigate to="/main" />;
  } else {
    return (
      <div className="p-3">
        <div className="flex justify-between items-center pb-2 border-b border-border">
          <Gamepad2 /> <Button>Login</Button>
        </div>
        <Outlet />
      </div>
    );
  }
};

export default PublicLayout;
