import React, { Component } from 'react';
import fetch from 'node-fetch';

import Page from '../components/page.js';
import '../styles/player.scss';

import { Select } from 'rmwc/Select';
import { Typography } from 'rmwc/Typography';
import { Card } from 'rmwc/Card';
import { 
  GridList, 
  GridTile,   
  GridTilePrimary,
  GridTileSecondary
} from 'rmwc/GridList';
import {
  Dialog,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from 'rmwc/Dialog';
import { Ripple } from 'rmwc/Ripple';

import { Bar, Doughnut } from 'react-chartjs-2';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class Player extends Component {
  static async getInitialProps({ res, query }) {
    var stats = undefined;
    
    await fetch(`https://atomic-api.herokuapp.com/player/${query.username}`)
      .then(response => response.json())
      .then(json => {
        if ('error' in json) {
          //stats = {displayName: "Unknown"};
        } else {
          stats = json;
        }
      })
      .catch(ex => {
        //stats = {displayName: "Unknown"};
      })

    return {stats};
  }

  constructor(props) {
    super(props);

    this.state = {
      seasonRange: 'alltime',
      platform: 'pc',

      chartData: undefined,
      chartType: undefined,
      chartTitle: undefined
    };

    // This binding is necessary to make `this` work in the callback
    this.createDoughnutData = this.createDoughnutData.bind(this);
  }

  createDoughnutData(key) {
    var data = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [
          '#00b0ff',
          '#76ff03',
          '#ff9100'
        ]
      }]
    }
    
    var modes = {
      'Solo': this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
      'Duo': this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
      'Squad': this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key]
    }

    // Add to the data only the data that isn't 0
    for (var mode in modes)
    {
      if (modes[mode] != 0)
      {
        console.log(data);
        data.labels.push(mode);
        data.datasets[0].data.push(modes[mode]);
      }
    }

    return (data)
  }

  createBarData(key) {
    var data = {
      labels: [],
      datasets: [{
        data: [],
        borderColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: [
          '#00b0ff',
          '#76ff03',
          '#ff9100'
        ]
      }]
    }

    var modes = {
      'Solo': this.props.stats.stats[this.state.seasonRange][this.state.platform].solo[key],
      'Duo': this.props.stats.stats[this.state.seasonRange][this.state.platform].duo[key],
      'Squad': this.props.stats.stats[this.state.seasonRange][this.state.platform].squad[key]
    }

    // Add to the data only the data that isn't 0
    for (var mode in modes)
    {
      if (modes[mode] != 0)
      {
        console.log(data);
        data.labels.push(mode);
        data.datasets[0].data.push(modes[mode]);
      }
    }

    return (data);
  }

  render() {
    if (this.props.stats === undefined)
    {
      return (
        <Page>
          <h1>Player not found!</h1>
        </Page>
      )
    }

    var platformSelect = []

    // Add only the platforms that the user is playing on
    if (this.props.stats.stats[this.state.seasonRange].pc !== undefined)
      platformSelect.push({
        label: 'PC',
        value: 'pc'
      })

    if (this.props.stats.stats[this.state.seasonRange].ps4 !== undefined)
      platformSelect.push({
        label: 'PlayStation 4',
        value: 'ps4'
      })

    if (this.props.stats.stats[this.state.seasonRange].xb1 !== undefined)
      platformSelect.push({
        label: 'Xbox One',
        value: 'xb1'
      })

    // Get the played platforms
    var platforms = platformSelect.map(function(plat){
      return plat.value;
    });

    // If the selected platform isn't one of them, change it to one of them to prevent crash
    if (!platforms.includes(this.state.platform))
    {
      this.state.platform = platformSelect[0].value;
    }

    var statChart;

    if (this.state.chartType === 'doughnut')
    {
      statChart = <Doughnut data={ this.createDoughnutData(this.state.chartData) } legend={{ labels: { fontColor: "#ffffff" } }} options={{ tooltips: { callbacks: { label: function(tooltipItem, data) { var value = data.datasets[0].data[tooltipItem.index]; value = value.toString(); value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); return value; } } } }} />;
    } else if (this.state.chartType === 'bar') {
      statChart = <Bar data={ this.createBarData(this.state.chartData) } legend={{ display: false, fontColor: "#ffffff" }} options={{ scales: { xAxes: [{ ticks: { fontColor: "white" }, gridLines: { color: "#424242" } }], yAxes: [{ ticks: { beginAtZero: true, max: this.state.chartBarMax ? this.state.chartBarMax : 100, fontColor: "white" }, gridLines: { color: "#424242" } }] } }}/>;
    }

    var kdChartMax = Math.ceil(Math.max(this.props.stats.stats[this.state.seasonRange][this.state.platform].solo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].duo['kd'], this.props.stats.stats[this.state.seasonRange][this.state.platform].squad['kd']) / 10) * 10

    var matches;

    return (
      <Page>
        <br />

        <Dialog
          open={ this.state.chartData !== undefined }
          onClose={evt => this.setState({ chartData: undefined, chartType: undefined, chartTitle: undefined })}
        >
          <DialogSurface style={{ backgroundColor: "var(--mdc-theme-secondary)" }}>
            <DialogHeader>
              <DialogHeaderTitle style={{ color: "white" }}>{ this.state.chartTitle }</DialogHeaderTitle>
            </DialogHeader>
            <DialogBody>
              { statChart }             
            </DialogBody>
            <DialogFooter>
                <DialogFooterButton accept>Close</DialogFooterButton>
            </DialogFooter>
          </DialogSurface>
          <DialogBackdrop />
        </Dialog>

        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <AtomicCard className="atomic-player-total-stats-card" title={this.props.stats.displayName} titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="970px">
            <div className="atomic-section">
              <Select className="atomic-select atomic-season-range-select"
                box
                value={this.state.seasonRange}
                onChange={evt => this.setState({seasonRange: evt.target.value})}
                label="Season Range"
                options={[
                  {
                    label: 'All Seasons',
                    value: 'alltime',
                    color: "black"
                  },
                  {
                    label: 'Season 5',
                    value: 'weekly',
                    color: "black"
                  }
                ]}
              />

              <Select className="atomic-select atomic-platform-select"
                box
                value={this.state.platform}
                onChange={evt => this.setState({platform: evt.target.value})}
                label="Platform"
                style={{ minWidth: "140px" }}
                options={ platformSelect }
              />
            </div>

            <hr className="atomic-divider" style={{ marginTop: "68px", marginBottom: "10px" }}/>

            <div className="atomic-section">
              <GridList tileAspect="3x2" style={{ display: "flex" }}>
                <AtomicStatTile onClick={ () => this.setState({ chartData: 'score', chartType: 'doughnut', chartTitle: "Score" }) } title="Score" value={this.props.stats.stats[this.state.seasonRange][this.state.platform].total.score} />
                <AtomicStatTile onClick={ () => this.setState({ chartData: 'matches', chartType: 'doughnut', chartTitle: "Matches" }) } title="Matches" value={this.props.stats.stats[this.state.seasonRange][this.state.platform].total.matches} />
                <AtomicStatTile onClick={ () => this.setState({ chartData: 'wins', chartType: 'doughnut', chartTitle: "Wins" }) } title="Wins" value={this.props.stats.stats[this.state.seasonRange][this.state.platform].total.wins} />
                <AtomicStatTile onClick={ () => this.setState({ chartData: 'kd', chartType: 'bar', chartTitle: "K/D Ratio", chartBarMax: kdChartMax }) } title="K/D Ratio" value={this.props.stats.stats[this.state.seasonRange][this.state.platform].total.kd} />
                <AtomicStatTile onClick={ () => this.setState({ chartData: 'winrate', chartType: 'bar', chartTitle: "Win %", chartBarMax: 100 }) } title="Win %" value={this.props.stats.stats[this.state.seasonRange][this.state.platform].total.winrate} />
              </GridList>
              <Typography style={{ paddingLeft: "15px", color: "#9e9e9e" }} use="caption">Tip: Click on the stat for detailed chart!</Typography>
            </div>
          </AtomicCard>

          <div className="atomic-player-stats" style={{ paddingTop: "50px", display: "flex", justifyContent: "space-evenly" }}>
            <AtomicModeStatsCard keys={{ score: "Score", wins: "Wins", kills: "Kills", kd: "K/D", winrate: "Win%", top10: "Top 10", top25: "Top 25", kpm: "Kills per Match", spm: "Score per Match" }} title="Solo" stats={this.props.stats.stats[this.state.seasonRange][this.state.platform].solo} color="#00b0ff" />
            <AtomicModeStatsCard keys={{ score: "Score", wins: "Wins", kills: "Kills", kd: "K/D", winrate: "Win%", top5: "Top 5", top12: "Top 12", kpm: "Kills per Match", spm: "Score per Match" }} title="Duo" stats={this.props.stats.stats[this.state.seasonRange][this.state.platform].duo} color="#76ff03" />
            <AtomicModeStatsCard keys={{ score: "Score", wins: "Wins", kills: "Kills", kd: "K/D", winrate: "Win%", top3: "Top 3", top6: "Top 6", kpm: "Kills per Match", spm: "Score per Match" }} title="Squad" stats={this.props.stats.stats[this.state.seasonRange][this.state.platform].squad} color="#ff9100" />
          </div>
        </div>
      </Page>
    );
  }
}

class AtomicModeStatsCard extends Component {
  render() {
    return (
      <AtomicCard className={ this.props.className ? this.props.className : "" + ' ' + "atomic-mode-stats-card" } title={this.props.title} subtitle={ numberWithCommas(this.props.stats.matches) + " Matches"} titleSize="headline4" titleColor={this.props.color} outlineColor={this.props.color} backgroundColor="var(--drawer-color)" width="350px" maxWidth="970px">
        <GridList>
          {
            Object.entries(this.props.keys).map( ([key, name], i) => <AtomicStatMiniTile key={i} noBorder={i == Object.entries(this.props.keys).length - 1} color={this.props.color} title={name} value={this.props.stats[key]} /> )
          }
        </GridList>
      </AtomicCard>
    )
  }
}

class AtomicStatMiniTile extends Component {
  render() {
    var divider = this.props.noBorder ? (
      ""
    ) : <hr className="atomic-stat-divider" style={{ borderColor: this.props.color }} />

    return (
      <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-stat-mini-tile" } style={ {...this.props.style} }>
        <Ripple onClick={ this.props.onClick }>
          <div style={{ minWidth: "320px", height: "35px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography use="body1" style={{ paddingLeft: "5px", color: "white" }}>{ this.props.title }</Typography>
            <Typography use="body2" style={{ paddingRight: "5px", color: this.props.color }}>{ numberWithCommas(this.props.value) }</Typography>
          </div>
        </Ripple>
        {divider}
      </div>
    )
  }
}

class AtomicStatTile extends Component {
  render() {
    return (
      <Ripple onClick={ this.props.onClick }>
        <GridTile style={{ width: "180px" }} className={ this.props.className ? this.props.className : "" + ' ' + "atomic-stat-tile" }>
          <GridTilePrimary style={{ backgroundColor: "var(--mdc-theme-secondary)" }}>
            <div style={{ minHeight: "78px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography use="headline4" style={{ color: "var(--mdc-theme-primary)" }}>{ numberWithCommas(this.props.value) }</Typography>
            </div>
          </GridTilePrimary>
          <GridTileSecondary style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "17px", paddingLeft: "0px", paddingRight: "0px" }}>
            <Typography use="headline5" style={{ color: 'var(--mdc-theme-secondary)' }}>{this.props.title}</Typography>
          </GridTileSecondary>
        </GridTile>
      </Ripple>
    )
  }
}

class AtomicCard extends Component {
  render() {
    var polygon = "polygon(20px 0%, 100% 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 100%, 0% 20px)";

    return (
      <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-card" } style={ this.props.style }>
        <Card style={{ maxWidth: this.props.maxWidth, width: this.props.width, backgroundColor: this.props.outlineColor, clipPath: polygon, WebkitClipPath: polygon, margin: "auto" }} className="atomic-outer-card">
          <Card style={{ maxWidth: this.props.maxWidth, clipPath: polygon, WebkitClipPath: polygon, backgroundColor: this.props.backgroundColor, margin: "4px 4px" }} className="atomic-inner-card">
            <div className="atomic-card-title" style={{ display: "flex", justifyContent: "space-between", paddingTop: "8px", display: "flex", alignItems: "center", paddingLeft: "20px", width: "100%", height: "60px", backgroundColor: "var(--mdc-theme-secondary)" }}>
              <Typography use={this.props.titleSize} style={{ color: this.props.titleColor }}>{this.props.title}</Typography>
              <Typography use="headline5" style={{ marginRight: "35px", color: "white" }}>{this.props.subtitle}</Typography>
            </div>
            <div className="atomic-card-content" style={{ padding: "10px 10px" }}>
              {this.props.children}
            </div>
          </Card>
        </Card>
      </div>
    )
  }
}