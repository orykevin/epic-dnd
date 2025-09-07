import { Button } from "@/components/ui/button";

const CharacterPage = () => {
  return (
    <div className="p-2">
      <h4 className="font-bold">Characters</h4>
      <img
        className="invert opacity-35 max-w-[300px] mx-auto my-8 border border-black rounded-lg"
        src="shiloute.png"
      />
      <p className="text-center font-semibold my-3">
        You don't have any characters
      </p>
      <Button className="w-full mx-auto max-w-[300px] block">
        Create Character
      </Button>
    </div>
  );
};

export default CharacterPage;
