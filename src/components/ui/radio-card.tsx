import { cn } from "@/lib/utils";
import { useId } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export type RadioCardItemType = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

type RadioCardProps = {
  defaultValue?: string;
  items: RadioCardItemType[];
  className?: string;
  onChange: (value: string) => void;
  value?: string;
  hideLabel?: boolean;
};

export default function RadioCard({
  defaultValue,
  items,
  className,
  onChange,
  value,
  hideLabel,
}: RadioCardProps) {
  const id = useId();
  return (
    <RadioGroup
      className={cn(
        "flex rounded-md focus-within:ring-[2px] focus-within:ring-primary/30",
        className
      )}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(value) => onChange(value)}
    >
      {items.map((item, i) => (
        <div className="w-full bg-input/30 border-input has-[button[data-state=checked]]:font-semibold has-[button[data-state=checked]]:bg-muted has-[button[data-state=checked]]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
          <RadioGroupItem
            id={`${id}-${i}`}
            value={item.value}
            className="sr-only"
          />
          <label
            htmlFor={`${id}-${i}`}
            className={cn(
              "text-foreground font-semibold cursor-pointer text-sm leading-none after:absolute after:inset-0 flex flex-col items-center gap-2"
            )}
          >
            {item.icon}
            {!hideLabel && item.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
}
