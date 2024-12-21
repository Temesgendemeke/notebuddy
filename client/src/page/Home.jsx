import NavBar from "../components/NavBar";
import Search from "../components/Search";
import useAuth from "../context/useAuth";


const Home = () => {
  const {userId} = useAuth()
  
  
  console.log("dfdfd", userId)

  return (
    <div >
      <NavBar />
      <Search />
    </div>
  );
};

export default Home;
