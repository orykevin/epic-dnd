import CharacterForm from "./CharacterForm";

const EditCharacter = () => {
  return (
    <div>
      <h4>EditCharacter</h4>
      <CharacterForm onFormSubmit={(data) => console.log(data)} type="edit" />
    </div>
  );
};

export default EditCharacter;
