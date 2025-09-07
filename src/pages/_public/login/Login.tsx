import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { Navigate } from "react-router";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { signIn } = useAuthActions();
  const user = useQuery(api.users.getUser);
  console.log(user, "user");

  if (user) {
    return <Navigate to="/main" />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">Let's Play DnD</h1>
      <div className="p-4 border border-border text-center rounded-lg">
        <h4 className="text-xl font-semibold mb-5">
          Selamat datang di dunia baru Dungeons & Dragons
        </h4>
        <p>
          Kami menghadirkan oengalaman bermain D&D dengan bantuan fitur AI yang
          berperan sebagai host sehingga permainan Anda menjadi lebih mudah,
          interaktif dan tanpa batas. <br /> <br /> Temukan petualangan seru
          jelajahi dunia fantasi dan nikmati kemudahan dalam setiap langkah
          permainan.
        </p>
      </div>
      <Button
        className="w-full mt-8 max-w-[300px] mx-auto block"
        size={"lg"}
        onClick={() => signIn("google")}
      >
        Login with Google
      </Button>
      <div className="space-y-3 mt-12">
        <h4 className="text-center font-semibold">About Us</h4>
        <div className="flex gap-4 justify-center">
          <img className="w-10 h-10" src="/Instagram.svg" />
          <img className="w-10 h-10" src="/Facebook.svg" />
          <img className="w-10 h-10" src="/X.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
