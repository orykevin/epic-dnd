import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { useFormContext } from "react-hook-form";

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const ClassDialog = () => {
  const [open, setOpen] = React.useState(false);
  const forms = useFormContext();
  const value = forms.watch("class");

  const selectClassHandler = (className: string) => {
    forms.setValue("class", className);
    setOpen(false);
  };

  return (
    <>
      <label>Class</label>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setOpen(true)}
      >
        {value || "Select Class"}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {classes.map((item) => (
            <Button key={item} onClick={() => selectClassHandler(item)}>
              {item}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClassDialog;
