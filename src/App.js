import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
import EventDetails from './EventDetails';
import Community from './Community';
import CommunityDetails from './CommunityDetails';
import Shop from './Shop';
import ShopItemDetails from './ShopItemDetails';
import Profile from './Profile';
import Art from './Art';
import Artist from './Artist';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router basename='/artconnect'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/eventDetails" component={EventDetails} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/communityDetails" component={CommunityDetails} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shopItemDetails" component={ShopItemDetails} />
          <Route path="/art" component={Art} />
          <Route path="/artist" component={Artist} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
