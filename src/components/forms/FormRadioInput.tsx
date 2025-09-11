import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "./FormWrapper";
import RadioCard, { type RadioCardItemType } from "../ui/radio-card";

type Props = {
  items: RadioCardItemType[];
  name: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
  fieldClassName?: string;
  tooltip?: string;
};

const RadioFormInput = ({
  items,
  name,
  label,
  isRequired,
  className,
  fieldClassName,
  tooltip,
}: Props) => {
  const forms = useFormContext();
  const value = forms.watch(name);
  return (
    <div className={cn("w-full space-y-2", fieldClassName)}>
      {label && (
        <Label isRequired={isRequired} tooltip={tooltip}>
          {label}
        </Label>
      )}
      <RadioCard
        value={value}
        defaultValue={value}
        items={items}
        onChange={(value) => forms.setValue(name, value)}
        className={className}
      />
    </div>
  );
};

export default RadioFormInput;
