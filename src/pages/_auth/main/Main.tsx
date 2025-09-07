import { Button } from "@/components/ui/button";

const MainPage = () => {
  return (
    <div className="p-2">
      <h4 className="font-bold">Recent Campaign</h4>
      <div>
        <img className="max-w-[300px] mx-auto" src="empty-placeholder.png" />
        <p className="text-center font-semibold mb-4">
          No recent Campaign available
        </p>

        <div className="flex flex-col gap-3 items-center">
          <Button className="w-full max-w-[300px] block">
            Join a Campaign
          </Button>
          <Button className="w-full max-w-[300px] block">
            Create a Campaign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
