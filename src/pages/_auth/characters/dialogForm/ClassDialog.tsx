import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { classInfo } from "@/lib/dndData";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

const ClassDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>("");
  const forms = useFormContext();
  const value = forms.watch("class");

  const selectClassHandler = (className: string) => {
    forms.setValue("class", className);
    setOpen(false);
  };

  const selectedClassData = classInfo.find((item) => item.name === selected);

  return (
    <>
      <div className="w-full">
        <label className="font-semibold">Class</label>
        <Button
          variant="outline"
          className="w-full capitalize"
          onClick={() => setOpen(true)}
        >
          {value || "Choose Class"}
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden">
          <h4 className="font-semibold">Choose your Class</h4>
          <div className="flex gap-1 max-w-max overflow-x-auto pr-1 scrollbar-slim">
            {classInfo.map((item) => {
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
                        className="min-w-10 min-h-10 cursor-pointer rounded-md"
                        src={`/class-icon/${item.name.toLocaleLowerCase()}.webp`}
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
          {selectedClassData && (
            <div>
              <h4 className="font-semibold text-xl mb-3 capitalize">
                {selected}
              </h4>
              <div className="relative">
                <p className="text-sm w-[50%]">
                  {selectedClassData?.description}
                </p>
                {selected && (
                  <img
                    className="absolute -top-12 -right-12 w-3/4 -z-10 invert-75 opacity-35"
                    src={`/class-shilloute/${selected.toLocaleLowerCase()}.png`}
                  />
                )}
              </div>

              <h6 className="text-sm font-semibold mt-3 mb-1">Kelebihan</h6>
              <ul className="list-disc font-sm pl-4">
                {selectedClassData?.strengths.map((item) => (
                  <li className="text-sm" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <h6 className="text-sm font-semibold mt-3 mb-1">Kekurangan</h6>
              <ul className="list-disc font-sm pl-4">
                {selectedClassData?.weaknesses.map((item) => (
                  <li className="text-sm" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Button
            className="w-full"
            disabled={!selected}
            onClick={() => selectClassHandler(selected)}
          >
            Select this class
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClassDialog;
