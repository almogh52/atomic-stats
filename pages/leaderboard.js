import React from 'react';
import fetch from 'node-fetch';

import BasePage from '../components/base-page';

import { Select } from '@rmwc/select';
import { Button } from '@rmwc/button';

import {
    DataTable,
    DataTableContent,
    DataTableHead,
    DataTableBody,
    DataTableHeadCell,
    DataTableRow,
    DataTableCell
  } from '@rmwc/data-table';

import AtomicCard from '../components/atomic-card';

import '../styles/leaderboard.scss'
import '@rmwc/data-table/data-table.css'
import { Typography } from '@rmwc/typography';

import Router from '../components/atomic-router';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class Player extends BasePage {
    static async getInitialProps() {
      var leaderboard = undefined;
      
      await fetch(`http://35.177.120.249:5000/leaderboard`)
        .then(response => response.json())
        .then(json => {
          if ('error' in json) {
            //stats = {displayName: "Unknown"};
          } else {
            leaderboard = json;
          }
        })
        .catch(ex => {
          //stats = {displayName: "Unknown"};
        })
  
      return {leaderboard};
    }

    constructor(props) {
        super(props);

        this.state = {
          platform: 'pc',
          mode: 'total',
          stat: 'score',
          playerMax: 25
        };
      }

    componentDidMount() {
        document.title = "Leaderboard · Atomic Stats"
    }

    render() {
        if (this.props.small)
        {
            return (
                <div className="atomic-leaderboard" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <AtomicCard className="atomic-leaderboard-wins-card" 
                    center 
                    ripple 
                    onClick={() => Router.pushRoute("id", { id: this.props.leaderboard.pc.total.wins[0].id })} 
                    title="Most Wins" 
                    titleSize="headline3" 
                    titleColor="#00b0ff" 
                    outlineColor="#00b0ff" 
                    backgroundColor="var(--drawer-color)" 
                    width="350px" 
                    maxWidth="350px"
                    >
                        <div className="atomic-player-info" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                            <Typography use="headline4" style={{ color: "white" }}>
                                {this.props.leaderboard.pc.total.wins[0].displayName}
                            </Typography>
                            <Typography use="headline5" style={{ color: "#00b0ff" }}>
                                {numberWithCommas(this.props.leaderboard.pc.total.wins[0].value)} Wins
                            </Typography>
                        </div>
                    </AtomicCard>

                    <AtomicCard className="atomic-leaderboard-kills-card" 
                    center 
                    ripple
                    onClick={() => Router.pushRoute("id", { id: this.props.leaderboard.pc.total.kills[0].id })} 
                    title="Most Kills" 
                    titleSize="headline3" 
                    titleColor="#76ff03" 
                    outlineColor="#76ff03" 
                    backgroundColor="var(--drawer-color)" 
                    width="350px" 
                    maxWidth="350px">
                        <div className="atomic-player-info" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                            <Typography use="headline4" style={{ color: "white" }}>
                                {this.props.leaderboard.pc.total.kills[0].displayName}
                            </Typography>
                            <Typography use="headline5" style={{ color: "#76ff03" }}>
                                {numberWithCommas(this.props.leaderboard.pc.total.kills[0].value)} Kills
                            </Typography>
                        </div>
                    </AtomicCard>

                    <AtomicCard className="atomic-leaderboard-score-card" 
                    center 
                    ripple 
                    onClick={() => Router.pushRoute("id", { id: this.props.leaderboard.pc.total.score[0].id })} 
                    title="Most Score" 
                    titleSize="headline3" 
                    titleColor="#ff9100" 
                    outlineColor="#ff9100" 
                    backgroundColor="var(--drawer-color)" 
                    width="350px" 
                    maxWidth="350px">
                        <div className="atomic-player-info" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                            <Typography use="headline4" style={{ color: "white" }}>
                                {this.props.leaderboard.pc.total.score[0].displayName}
                            </Typography>
                            <Typography use="headline5" style={{ color: "#ff9100" }}>
                                {numberWithCommas(this.props.leaderboard.pc.total.score[0].value)} Score
                            </Typography>
                        </div>
                    </AtomicCard>
                </div>
            )
        }

        const SIZES_FOR_PLACES = {
            1: {
                fontSize: 80,
                height: 100,
                color: "#00b0ff"
            },
            2: {
                fontSize: 65,
                height: 85,
                color: "#76ff03"
            },
            3: {
                fontSize: 50,
                height: 70,
                color: "#ff9100"
            }
        }

        const CATAGORIES = {
            score: "Score",
            kills: "Kills",
            wins: "Wins",
            kd: "K/D",
            winrate: "Win %",
            kpm: "Kills per Match",
            spm: "Score per Match"
        }

        return (
            <div className="atomic-leaderboard">
                <AtomicCard className="atomic-leaderboard-card" title="Leaderboard" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1030px">
                    <div className="atomic-section">
                        <Select className="atomic-select atomic-platform-select"
                            box
                            value={this.state.platform}
                            onChange={evt => this.setState({platform: evt.target.value})}
                            label="Platform"
                            options={[
                                {
                                    label: 'PC',
                                    value: 'pc',
                                    color: 'black'
                                },
                                {
                                    label: 'PlayStation 4',
                                    value: 'ps4',
                                    color: 'black'
                                },
                                {
                                    label: 'Xbox One',
                                    value: 'xb1',
                                    color: 'black'
                                }
                            ]}
                        />
                        <Select className="atomic-select atomic-mode-select"
                            box
                            value={this.state.mode}
                            onChange={evt => this.setState({mode: evt.target.value})}
                            label="Mode"
                            options={[
                                {
                                    label: 'Total',
                                    value: 'total',
                                    color: 'black'
                                },
                                {
                                    label: 'Solo',
                                    value: 'solo',
                                    color: 'black'
                                },
                                {
                                    label: 'Duo',
                                    value: 'duo',
                                    color: 'black'
                                },
                                {
                                    label: 'Squad',
                                    value: 'squad',
                                    color: 'black'
                                }
                            ]}
                        />

                        <Select className="atomic-select atomic-catagory-select"
                            box
                            value={this.state.stat}
                            onChange={evt => this.setState({stat: evt.target.value})}
                            label="Catagory"
                            options={[
                                {
                                    label: 'Score',
                                    value: 'score',
                                    color: 'black'
                                },
                                {
                                    label: 'Wins',
                                    value: 'wins',
                                    color: 'black'
                                },
                                {
                                    label: 'Kills',
                                    value: 'kills',
                                    color: 'black'
                                },
                                {
                                    label: 'K/D',
                                    value: 'kd',
                                    color: 'black'
                                },
                                {
                                    label: 'Win %',
                                    value: 'winrate',
                                    color: 'black'
                                },
                                {
                                    label: 'Kills per Match',
                                    value: 'kpm',
                                    color: 'black'
                                },
                                {
                                    label: 'Score per Match',
                                    value: 'spm',
                                    color: 'black'
                                }
                            ]}
                        />
                    </div>

                    <hr className="atomic-divider" style={{ marginTop: "68px", marginBottom: "10px" }}/>

                    <div className="atomic-section">
                        <DataTable style={{ borderColor: "transparent" }}>
                            <DataTableContent style={{minWidth: "1000px"}}>
                            <DataTableHead>
                                <DataTableRow>
                                    <DataTableHeadCell alignStart className="atomic-data-table-head-cell atomic-leaderboard-rank">Rank</DataTableHeadCell>
                                    <DataTableHeadCell alignStart className="atomic-data-table-head-cell atomic-leaderboard-player">Player</DataTableHeadCell>
                                    <DataTableHeadCell alignMiddle className="atomic-data-table-head-cell">{CATAGORIES[this.state.stat]}</DataTableHeadCell>
                                </DataTableRow>
                            </DataTableHead>
                                <DataTableBody>
                                    {
                                        this.props.leaderboard[this.state.platform][this.state.mode][this.state.stat].slice(0, this.state.playerMax).map(({rank, displayName, value, id}, i) =>
                                            <DataTableRow key={i} onClick={() => Router.pushRoute("id", { id })} style={rank <= 3 ? { height: `${SIZES_FOR_PLACES[rank].height}px` } : {}}>
                                                <DataTableCell alignStart className="atomic-data-table-cell atomic-leaderboard-rank" key="rank" style={rank <= 3 ? { fontSize: `${SIZES_FOR_PLACES[rank].fontSize}px`, color: SIZES_FOR_PLACES[rank].color } : {}}>{rank <= 3 ? "#" + rank : rank }</DataTableCell>
                                                <DataTableCell alignStart className="atomic-data-table-cell atomic-leaderboard-player" key="player" style={rank <= 3 ? { fontSize: `${SIZES_FOR_PLACES[rank].fontSize - 20}px`, color: SIZES_FOR_PLACES[rank].color } : {}}>{displayName}</DataTableCell>
                                                <DataTableCell alignMiddle className="atomic-data-table-cell" key="value" style={rank <= 3 ? { fontSize: `${SIZES_FOR_PLACES[rank].fontSize - 20}px`, color: SIZES_FOR_PLACES[rank].color } : {}}>{numberWithCommas(value)}</DataTableCell>
                                            </DataTableRow>
                                        )
                                    }
                                    {
                                        this.props.leaderboard[this.state.platform][this.state.mode][this.state.stat].length > this.state.playerMax ? (
                                            <DataTableRow key="999">
                                                <DataTableCell alignMiddle className="atomic-data-table-cell" colSpan="3">
                                                    <Button className="atomic-white-ripple" style={{ color: "#00e5ff" }} onClick={evt => this.setState({ playerMax: this.state.playerMax + 25 })}>
                                                        Show More
                                                    </Button>
                                                </DataTableCell>
                                            </DataTableRow>
                                        ) : (
                                            null
                                        )
                                    }
                                </DataTableBody>
                            </DataTableContent>
                        </DataTable>
                    </div>
                </AtomicCard>
            </div>
        )
    }
}