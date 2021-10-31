import {Route,Redirect} from "react-router-dom"


// Hoc
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC"

// Component
import Temp from "./components/temp";




// pages
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";

function App() {
  return (
    <>
    <Route path="/" exact>
        <Redirect to="/delivery" />
    </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview}/>
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp}/>
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp}/>
      
    </>
  );
}

export default App;
