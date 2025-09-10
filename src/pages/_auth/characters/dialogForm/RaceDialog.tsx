import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { raceInfo } from "@/lib/dndData";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

const RaceDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>("");
  const forms = useFormContext();
  const value = forms.watch("race");

  const selectRaceHandler = (className: string) => {
    forms.setValue("race", className);
    setOpen(false);
  };

  const selectedRaceData = raceInfo.find((item) => item.name === selected);

  return (
    <>
      <label>Race (ras)</label>
      <Button
        variant="outline"
        className="w-full capitalize"
        onClick={() => setOpen(true)}
      >
        {value || "Choose Race"}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden">
          <h4 className="font-semibold">Choose your Race</h4>
          <div className="flex gap-1 max-w-max overflow-x-auto pr-1 scrollbar-slim">
            {raceInfo.map((item) => {
              const isSelected = item.name === selected;
              return (
                <div
                  key={item.name}
                  className={cn(
                    "opacity-50 cursor-pointer",
                    isSelected && "opacity-100"
                  )}
                  onClick={() => setSelected(item.name)}
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <img
                        className="min-w-10 min-h-10 cursor-pointer rounded-md invert"
                        src={`/race-icon/${item.name.toLocaleLowerCase()}.png`}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="capitalize text-primary-foreground">
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-3 capitalize">
              {selected}
            </h4>
            <div className="relative">
              <p className="text-sm w-full">{selectedRaceData?.description}</p>
            </div>

            <h6 className="text-sm font-semibold mt-3 mb-1">Kelebihan</h6>
            <ul className="list-disc font-sm pl-4">
              {selectedRaceData?.strengths.map((item) => (
                <li className="text-sm" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <h6 className="text-sm font-semibold mt-3 mb-1">Kekurangan</h6>
            <ul className="list-disc font-sm pl-4">
              {selectedRaceData?.weaknesses.map((item) => (
                <li className="text-sm" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button
            className="w-full"
            onClick={() => selectRaceHandler(selected)}
          >
            Select this race
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RaceDialog;
