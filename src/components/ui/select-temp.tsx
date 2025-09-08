import { useEffect, useId, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectImageOptionsType = {
  value: string;
  label: string | React.ReactNode;
  disabled?: boolean;
};

type Props = {
  defaultValue: string;
  options: SelectImageOptionsType[];
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  canRemoveValue?: boolean;
  value?: string;
  disabled?: boolean;
};

export default function SelectInput({
  defaultValue,
  options,
  onChange,
  className,
  placeholder,
  canRemoveValue = true,
  value,
  disabled,
}: Props) {
  const id = useId();
  const [valueSelected, setValueSelected] = useState(defaultValue);

  const onChangeHandler = (value: string) => {
    setValueSelected(value);
    onChange(value);
  };

  const onClearHandler = () => {
    setValueSelected("");
    onChange("");
  };

  useEffect(() => {
    setValueSelected(value || "");
  }, [value]);

  return (
    <div className="flex bg-input dark:bg-input/30 pl-1 h-10 w-full items-center justify-between gap-3 border border-input rounded-md ring-offset-background focus-within:outline-none focus-within:ring-1 ring-ring has-[button[aria-expanded=true]]:ring-1">
      <Select
        key={valueSelected}
        value={valueSelected}
        defaultValue={valueSelected}
        onValueChange={onChangeHandler}
        disabled={disabled}
      >
        <SelectTrigger
          id={id}
          className={cn(
            "relative w-full h-auto ps-2 text-left [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0 data-[placeholder]:text-primary border-none !bg-transparent",
            className
          )}
        >
          <SelectValue
            placeholder={placeholder || "Select options"}
            className="text-primary-foreground/25"
          />
        </SelectTrigger>
        {canRemoveValue && value && !disabled && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onClearHandler();
            }}
          >
            <X className="min-w-4 min-h-4 h-4 w-4 cursor-pointer hover:text-red-500 mr-3" />
          </button>
        )}
        <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
          {options.map((option) => {
            return (
              <SelectItem value={option.value} disabled={option.disabled}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
