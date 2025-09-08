import { useFormContext } from "react-hook-form";
import { Label } from "./FormWrapper";
import { cn } from "@/lib/utils";
import SelectInput from "../ui/select-temp";
import type { SelectImageOptionsType } from "../ui/select-temp";

interface SelectInputFormProps {
  label?: string;
  name: string;
  options: SelectImageOptionsType[];
  className?: string;
  fieldClassName?: string;
  placeholder?: string;
  canRemoveValue?: boolean;
  isRequired?: boolean;
  tooltip?: string | React.ReactNode;
  disabled?: boolean;
}

const SelectInputForm = ({
  label,
  name,
  options,
  fieldClassName,
  className,
  placeholder,
  canRemoveValue,
  isRequired,
  tooltip,
  disabled,
}: SelectInputFormProps) => {
  const forms = useFormContext();
  const value = forms.watch(name);
  return (
    <div className={cn("space-y-2", fieldClassName)}>
      {label && (
        <Label isRequired={isRequired} tooltip={tooltip}>
          {label}
        </Label>
      )}
      <SelectInput
        options={options}
        defaultValue={forms.getValues(name)}
        onChange={(value) => forms.setValue(name, value)}
        className={className}
        placeholder={placeholder}
        canRemoveValue={canRemoveValue}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default SelectInputForm;
