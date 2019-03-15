import React from 'react';

import BasePage from '../components/base-page.js';

import Leaderboard from './leaderboard';
import News from './news';
import Shop from './shop';

class Home extends BasePage {
  static async getInitialProps() {
    var { leaderboard } = await Leaderboard.getInitialProps()
    var { news } = await News.getInitialProps()
    var { shop } = await Shop.getInitialProps()

    return {leaderboard, news, shop};
  }

  componentDidMount() {
    document.title = "Home Page · Atomic Stats"
  }

  render() {
    return (
      <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
        <Leaderboard small leaderboard={this.props.leaderboard} />
        <div style={{ paddingTop: "50px", display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
          <News small news={this.props.news} />
          <Shop small shop={this.props.shop} />
        </div>
      </div>
    );
  }
}

export default Home;
