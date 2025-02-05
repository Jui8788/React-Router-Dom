import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Home;
