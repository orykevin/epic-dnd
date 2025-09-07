import { Navigate, Outlet } from "react-router";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Gamepad2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuthActions } from "@convex-dev/auth/react";

const AuthLayout = () => {
  const { signOut } = useAuthActions();
  const user = useQuery(api.users.getUser);
  if (user === undefined) return <div>Loading ...</div>;
  if (!user) return <Navigate to="/" />;
  // checking user is logged in or not
  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center pb-2 border-b border-border">
          <Gamepad2 />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" className="h-8 w-8">
                <UserRound />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => signOut()}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
