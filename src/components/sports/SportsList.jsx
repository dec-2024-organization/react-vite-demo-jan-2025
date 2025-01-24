import { Component } from "react";
import SportsItem from "./SportsItem";
import { AppHeader } from "../AppHeader";

class SportsList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    allSports: [
      {
        sportsId: 101,
        sportsName: "Cricket",
        sportsEmoji: "🏏",
      },
      {
        sportsId: 102,
        sportsName: "Football",
        sportsEmoji: "⚽",
      },
      {
        sportsId: 103,
        sportsName: "Hockey",
        sportsEmoji: "🏑",
      },
    ],
  };

  mappedAllSports = this.state.allSports.map((eachSports) => (
    <SportsItem
      key={eachSports.sportsId}
      item={eachSports}
      removeFn={(sportsId) => this.deleteSports(sportsId)}
    ></SportsItem>
  ));

  deleteSports(sid) {
    console.log(sid);
    this.setState({
      allSports: this.state.allSports.filter(
        (eachSports) => eachSports.sportsId != sid
      ),
    });
    console.log(this.state.allSports.length);
  }

  render() {
    return (
      <>
        <AppHeader />
        <div className="container m-5">
          <h3>LIST OF SPORTS</h3>
          <ul className="list-group">{this.mappedAllSports}</ul>
        </div>
      </>
    );
  }
}

export default SportsList;
