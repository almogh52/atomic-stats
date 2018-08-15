import fetch from 'node-fetch';

import BasePage from '../components/base-page';
import { Typography } from 'rmwc';

import AnimatedNumber from 'react-animated-number';

export default class ObsOverlay extends BasePage {
    static async getInitialProps({ query }) {
      var stats = undefined, displayName = undefined;
      
      await fetch(`https://atomic-api.herokuapp.com/player/${query.username}`)
        .then(response => response.json())
        .then(json => {
          if ('error' in json) {
            //stats = {displayName: "Unknown"};
          } else {
            displayName = json.displayName;
            stats = json.stats.alltime[query.platform].total;
          }
        })
        .catch(ex => {
          
        })
  
      return {displayName, username: query.username, platform: query.platform, startStats: stats, noLayout: true};
    }

    constructor(props) {
        super(props)

        this.state = {
            matches: 0,
            wins: 0,
            kills: 0,
            newStats: Object.create(this.props.startStats)
        }

        this.updateStats = this.updateStats.bind(this);
    }

    componentDidMount() {
        var intervalId = setInterval(this.updateStats, 60000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
     }
     
     componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
     }

    updateStats() {    
        fetch(`https://atomic-api.herokuapp.com/player/${this.props.username}`)
            .then(response => response.json())
            .then(json => {
                if ('error' in json) {
                    //stats = {displayName: "Unknown"};
                } else {
                    this.setState({newStats: json.stats.alltime[this.props.platform].total})
                }
            })
            .catch(ex => {
            
            })
    }

    div(a, b) {
        return b == 0 ? a : a / b;
    }

    render() {
        if (!this.props.startStats)
        {
            return (
                <p>Player not found!</p>
            )
        } else {
            return (
                <div className="atomic-obs-overlay" style={{ width: "270px" }}>
                    <div className="atomic-obs-wins" style={{ minWidth: "270px", display: "flex", justifyContent: "space-evenly" }}>
                        <div>
                            <i className="fas fa-trophy" style={{ color: "#42a5f5", position: "relative", fontSize: "30px", top: "-3px", paddingRight: "20px" }}></i>
                            <Typography style={{ color: "#42a5f5", fontFamily: "Burbank", fontSize: "40px" }}>Wins:</Typography>
                        </div>
                        <AnimatedNumber component="text" value={this.state.newStats.wins - this.props.startStats.wins}
                            style={{
                                paddingRight: "10px",
                                fontFamily: "Burbank", fontSize: "40px",
                                color: "white"
                            }}
                            duration={1000}
                            component="span"
                            stepPrecision={0}/>
                    </div>
                    <div className="atomic-obs-kd" style={{ paddingTop: "8px", minWidth: "270px", display: "flex", justifyContent: "space-evenly" }}>
                        <div>
                            <Typography style={{ color: "#26c6da", fontFamily: "Burbank", fontSize: "40px" }}>Overall K/D:</Typography>
                        </div>
                        <AnimatedNumber component="text" value={Number(this.state.newStats.kd)}
                            style={{
                                paddingRight: "10px",
                                fontFamily: "Burbank", fontSize: "40px",
                                color: "white"
                            }}
                            duration={1000}
                            component="span"
                            stepPrecision={2}
                            formatValue={n => n.toFixed(2)}/>
                    </div>
                    <div className="atomic-obs-stats" style={{ paddingTop: "15px", minWidth: "270px", display: "flex", justifyContent: "space-around", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "column" }}>
                            <Typography style={{ color: "#d32f2f", flexDirection: "row", fontFamily: "Burbank", fontSize: "25px" }}>K/D</Typography>
                            <AnimatedNumber component="text" value={this.div(this.state.newStats.kills - this.props.startStats.kills, (this.state.newStats.matches - this.state.newStats.wins) - (this.props.startStats.matches - this.props.startStats.wins))}
                                style={{
                                    paddingTop: "5px",
                                    flexWrap: "row",
                                    fontFamily: "Burbank", fontSize: "34px",
                                    color: "white"
                                }}
                                duration={1000}
                                component="span"
                                stepPrecision={2}
                                formatValue={n => n.toFixed(2)}/>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "column" }}>
                            <Typography style={{ color: "#66bb6a", flexDirection: "row", fontFamily: "Burbank", fontSize: "25px" }}>Win %</Typography>
                            <AnimatedNumber component="text" value={this.div(this.state.newStats.wins - this.props.startStats.wins, this.state.newStats.matches - this.props.startStats.matches) * 100}
                                style={{
                                    paddingTop: "5px",
                                    flexWrap: "row",
                                    fontFamily: "Burbank", fontSize: "34px",
                                    color: "white"
                                }}
                                duration={1000}
                                component="span"
                                stepPrecision={2}
                                formatValue={n => n.toFixed(2) + "%"}/>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "column" }}>
                            <Typography style={{ color: "#ffa726", flexDirection: "row", fontFamily: "Burbank", fontSize: "25px" }}>Matches</Typography>
                            <AnimatedNumber component="text" value={this.state.newStats.matches - this.props.startStats.matches}
                                style={{
                                    paddingTop: "5px",
                                    flexWrap: "row",
                                    fontFamily: "Burbank", fontSize: "34px",
                                    color: "white"
                                }}
                                duration={1000}
                                component="span"
                                stepPrecision={0}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}