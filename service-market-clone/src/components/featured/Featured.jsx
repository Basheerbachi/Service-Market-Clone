// import { Search } from "@material-ui/icons";
import { Call, ChatBubble, Person, Star, VerifiedUser } from "@material-ui/icons";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://plus.unsplash.com/premium_photo-1661962769667-a159071a31cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

        <div className="container">
            <div className="heading1">Sit back, we'll take it from here</div>
            <div className="heading2">Book or get free quotes for over 25 home services from trusted companies in Dubai</div>
            
            <div className="wrapper">
            <select>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
                <option>Ajman</option>
                <option>Riyadh</option>
                <option>Qatar</option>
                <option>Muscat</option>
              </select>
              <input type="text" placeholder="Start typing to find a service" />
              {/* <Search/> */}
              <button className="searchButton">Search</button>
            </div>
        </div>

        <div className="lowerContainer">
          <span><Person/> 150,000+ </span>
          <span><ChatBubble/> Over 15,000 reviews </span>
          <span><Star/> Rated 4.8 out of 5 </span>
          <span><VerifiedUser/> Trusted service professionals </span>
          <span><Call/> Live customer support </span>
        </div>
        
    </div>
  );
}
