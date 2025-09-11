import CharacterForm from "./CharacterForm";

const NewCharacter = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold my-3">Create new Character</h4>
      <CharacterForm onFormSubmit={(data) => console.log(data)} type="create" />
    </div>
  );
};

export default NewCharacter;
