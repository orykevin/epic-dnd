import { FormImageUpload } from "@/components/forms/FormImageUpload";
import { TextFormInput } from "@/components/forms/FormInput";
import { FormMultiSelect } from "@/components/forms/FormMultiSelect";
import SelectInputForm from "@/components/forms/FormSelectInput";
import { TextareaFormInput } from "@/components/forms/FormTextareaInput";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/button";
import { abilityLists } from "@/lib/dndData";
import { api } from "@convex/_generated/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ClassDialog from "./dialogForm/ClassDialog";
import RaceDialog from "./dialogForm/RaceDialog";
import RadioFormInput from "@/components/forms/FormRadioInput";
import AvatarDialog from "./dialogForm/AvatarDialog";

const schema = z.object({
  name: z.string(),
  gender: z.string(),
  race: z.string(),
  class: z.string(),
  background: z.string(),
  characteristic: z.string(),
  tags: z.array(z.string()),
  abilityScores: z.object({
    str: z.string(),
    dex: z.string(),
    con: z.string(),
    int: z.string(),
    wis: z.string(),
    cha: z.string(),
  }),
});

const abilityScoreArray = [
  { label: "8 (-1)", value: "8" },
  { label: "10 (0)", value: "10" },
  { label: "12 (+1)", value: "12" },
  { label: "13 (+1)", value: "13" },
  { label: "14 (+2)", value: "14" },
  { label: "15 (+2)", value: "15" },
];

type ProjectFormsProps = {
  type: "create" | "edit";
  onFormSubmit: (data: z.infer<typeof schema>) => void;
  isSubmitting?: boolean;
  // projectData?: Doc<"projects"> | null;
};

const CharacterForm = ({
  type = "create",
  onFormSubmit,
  isSubmitting,
}: // projectData,
ProjectFormsProps) => {
  const forms = useForm({
    defaultValues: {
      name: "",
      gender: "",
      race: "",
      class: "",
      background: "",
      characteristic: "",
      tags: [],
      abilityScores: {
        str: "",
        dex: "",
        con: "",
        int: "",
        wis: "",
        cha: "",
      },
    },
    resolver: zodResolver(schema as any),
  });

  // const tags = useQuery(api.v1.tags.getTags);

  const abilityScores = forms.watch("abilityScores") as z.infer<
    typeof schema
  >["abilityScores"];

  const selectedAbilityScores = Object.values(abilityScores).map(
    (abilityScore) => abilityScore
  );

  const availableOptions = useMemo(
    () =>
      abilityScoreArray.map((option) =>
        selectedAbilityScores.includes(option.value)
          ? { ...option, disabled: true }
          : { ...option, disabled: false }
      ),
    [selectedAbilityScores]
  );

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    onFormSubmit(data);
  };

  return (
    <FormWrapper className="space-y-2" forms={forms} onSubmitHandler={onSubmit}>
      <div>
        <div className="flex gap-3">
          <div className="w-24 h-24 border border-border rounded-md px-2 pt-1">
            <img
              src="/shiloute.png"
              className="w-full h-full object-cover opacity-50 invert"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button>Upload</Button>
            </div>
            <div className="flex gap-2">
              <Button>Generate</Button>
              <AvatarDialog />
            </div>
          </div>
        </div>
      </div>
      <TextFormInput name="name" label="Name" />
      <RadioFormInput
        items={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        name="gender"
        label="Gender"
      />
      <div className="flex gap-3">
        <RaceDialog />
        <ClassDialog />
      </div>
      <TextareaFormInput name="background" label="Background / Origin" />
      <TextareaFormInput name="characteristic" label="Characteristic" />
      <div className="grid grid-cols-2 gap-3">
        {Object.keys(abilityScores).map((abilityScore) => (
          <SelectInputForm
            key={abilityScore}
            name={`abilityScores.${abilityScore}`}
            label={`${
              abilityLists[abilityScore as keyof typeof abilityLists].name
            } (${abilityScore.toUpperCase()})`}
            options={availableOptions}
            tooltip={
              abilityLists[abilityScore as keyof typeof abilityLists].info
            }
          />
        ))}
      </div>

      <Button disabled={isSubmitting} className="w-full my-3">
        {type === "create" ? "Create Character" : "Update Character"}
      </Button>
    </FormWrapper>
  );
};

export default CharacterForm;
