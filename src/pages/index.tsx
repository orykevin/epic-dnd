import { Routes, Route } from "react-router";
import AuthLayout from "./_auth";
import Login from "./_public/login/Login";
import PublicLayout from "./_public";
import MainPage from "./_auth/main/Main";
import CharacterPage from "./_auth/characters/Character";
import NewCharacter from "./_auth/characters/NewCharacter";
import EditCharacter from "./_auth/characters/EditCharacter";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />} path="/">
        <Route index element={<Login />} />
      </Route>

      <Route element={<AuthLayout />} path="/main">
        <Route index element={<MainPage />} />
      </Route>
      <Route element={<AuthLayout />} path="/characters">
        <Route index element={<CharacterPage />} />
        <Route path="new" element={<NewCharacter />} />
        <Route path="edit" element={<EditCharacter />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
