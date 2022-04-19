import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/signIn/sign-in.component";

const App = () => {
  const Shop = () => {
    return "I am in shop ";
  };

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />  
      </Route>
    </Routes>
  );
};

export default App;
