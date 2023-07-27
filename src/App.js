import HeroSection from "./HeroSection";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App flex ">
      <NavBar />
      <SideBar />
      <HeroSection />
    </div>
  );
}

export default App;
