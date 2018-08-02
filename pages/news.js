import React, { Component } from 'react';
import fetch from 'node-fetch';

import Page from '../components/page';
import AtomicCard from '../components/atomic-card';

import { List } from 'rmwc/List'
import { Typography } from '../node_modules/rmwc';

import '../styles/news.scss';

export default class News extends Component {
    static async getInitialProps() {
        var news = undefined;
        
        await fetch(`https://atomic-api.herokuapp.com/news`)
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

    render() {
        return (
            <Page>
                <AtomicCard className="atomic-news" title="News" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1100px">
                    <List>
                        {
                            this.props.news.map((message, i) => <AtomicNewsTile key={i} image={ message.image } title={ message.title } description={ message.description }/>)
                        }
                    </List>
                </AtomicCard>
            </Page>
        )
    }
}

class AtomicNewsTile extends Component {
    render() {
        return (
            <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-news-tile" } style={{ paddingTop: "25px" }}>
                <div style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img src={this.props.image} />
                </div>
                <div style={{ display: "inline-block", paddingTop: "20px" }} >
                    <Typography style={{ color: "var(--mdc-theme-primary)" }} use="headline3">{this.props.title}</Typography>
                    <br />
                    <Typography style={{ position: "absolute", color: "white", paddingRight: "325px" }} use="headline4">{this.props.description}</Typography>
                </div>
            </div>
        )
    }
}