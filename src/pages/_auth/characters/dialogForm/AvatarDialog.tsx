import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";

const AvatarDialog = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>See Generated</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <div>
            <div className="w-full aspect-square border-border border"></div>
          </div>
          <Button>Generate</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AvatarDialog;
