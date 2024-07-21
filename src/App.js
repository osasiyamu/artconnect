import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Explore from './Explore';
import SearchResult from './SearchResult';
import Discover from './Discover';
import FrenchDiscover from './French/FrenchDiscover';
import EventDetails from './EventDetails';
import Community from './Community';
import CommunityDetails from './CommunityDetails';
import Shop from './Shop';
import ShopItemDetails from './ShopItemDetails';
import Profile from './Profile';
import Art from './Art';
import Tutorial from './Tutorial/Tutorial';
import Tutorial1 from './Tutorial/Tutorial1';
import TutorialFinal from './Tutorial/TutorialFinal';
import Artist from './Artist';
import ArtistArt from './Artist/ArtistArts';
import ArtistEvents from './Artist/ArtistEvents';
import ArtistLinks from './Artist/ArtistLinks';
import Navbar from './Navbar';
import Cart from './Cart';
import CheckoutPage from './CheckoutPage';
import Error from './404Error';
import UserArts from './Profile/UserArts';
import UserEvents from './Profile/UserEvents';
import UserUploadArt from './Profile/UserUploadArt';
import UserSettings from './Profile/UserSettings';

function App() {
  return (
    <div>
      <Navbar />
      <Router basename='/artconnect'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/searchResult" component={SearchResult} />
          <Route path="/discover" component={Discover} />
          <Route path="/frenchDiscover" component={FrenchDiscover} />
          <Route path="/eventDetails" component={EventDetails} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/communityDetails" component={CommunityDetails} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shopItemDetails" component={ShopItemDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkoutPage" component={CheckoutPage} />
          <Route path="/art" component={Art} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/tutorial1" component={Tutorial1} />
          <Route exact path="/tutorialFinal" component={TutorialFinal} />
          <Route path="/artist" component={Artist} />
          <Route path="/artistArts" component={ArtistArt} />
          <Route path="/artistEvents" component={ArtistEvents} />
          <Route path="/artistLinks" component={ArtistLinks} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/userArts" component={UserArts} />
          <Route exact path="/userEvents" component={UserEvents} />
          <Route exact path="/userUploadArt" component={UserUploadArt} />
          <Route exact path="/userSettings" component={UserSettings} />

          <Route path="/" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
