
import AllCountaries from "./pages/AllCountaries";
import Hero from "./pages/Hero";
import LocationList from "./pages/LocationList";
import PopularLocation from "./pages/PopularLocation";



function App() {

  return (
    <div className="App">
      <Hero />
      <PopularLocation  />
      <LocationList />
      <AllCountaries />
    </div>
  );
}

export default App;
