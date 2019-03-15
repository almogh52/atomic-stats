import React, { Component } from 'react';
import fetch from 'node-fetch';

import BasePage from '../components/base-page';
import AtomicCard from '../components/atomic-card';

import { List } from '@rmwc/list'
import { Typography } from '@rmwc/typography';

export default class News extends BasePage {
    static async getInitialProps() {
        var news = undefined;

        await fetch(`http://35.177.120.249:5000/news`)
          .then(response => response.json())
          .then(json => {
            if ('error' in json) {
              //stats = {displayName: "Unknown"};
            } else {
              news = json;
            }
          })
          .catch(ex => {
            //stats = {displayName: "Unknown"};
          })
    
        return {news};
    }

    componentDidMount() {
        document.title = "News · Atomic Stats"
    }

    render() {
        if (this.props.small)
        {
            return (
                <AtomicCard className="atomic-news" title="News" titleSize="headline3" titleColor="#00bfa5" outlineColor="#00bfa5" backgroundColor="var(--drawer-color)" width="540px" maxWidth="540px">
                    <List>
                        {
                            this.props.news.map((message, i) => <AtomicNewsTile small key={i} color="#00bfa5" image={ message.image } title={ message.title } description={ message.description }/>)
                        }
                    </List>
                </AtomicCard>
            )
        }

        return (
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <AtomicCard className="atomic-news" title="News" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1052px">
                    <List>
                        {
                            this.props.news.map((message, i) => <AtomicNewsTile key={i} image={ message.image } title={ message.title } description={ message.description }/>)
                        }
                    </List>
                </AtomicCard>
            </div>
        )
    }
}

class AtomicNewsTile extends Component {
    render() {
        return (
            <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-news-tile" } style={{ height: this.props.small ? "256px" : "512px", width: this.props.small ? "512px" : "1024px", overflow: "hidden", backgroundImage: `url(${this.props.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", marginBottom: "25px" }}>
                <div style={{ minWidth: "100%", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "10px 10px 5px 10px" }} >
                    <Typography style={{ fontSize: this.props.small ? "40px" : "", color: this.props.color ? this.props.color : "var(--mdc-theme-primary)" }} use="headline3">{this.props.title}</Typography>
                    <br />
                    <Typography style={{ fontSize: this.props.small ? "26px" : "", color: "white" }} use="headline4">{this.props.description}</Typography>
                </div>
            </div>
        )
    }
}