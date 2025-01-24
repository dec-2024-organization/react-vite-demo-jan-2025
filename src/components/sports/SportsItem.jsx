import { Component } from "react";

class SportsItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <li className="list-group-item">
          {this.props.item.sportsId}: {this.props.item.sportsName}{" "}
          {this.props.item.sportsEmoji}
          <button
            type="button"
            className="btn btn-danger btn-small"
            onClick={() => this.props.removeFn(this.props.item.sportsId)}
          >
            Remove
          </button>
        </li>
      </>
    );
  }
}

export default SportsItem;
