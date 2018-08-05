import React, { Component } from 'react';
import fetch from 'node-fetch';

import Page from '../components/page';
import AtomicCard from '../components/atomic-card';

import { GridList } from 'rmwc/GridList'
import { Typography, Grid } from '../node_modules/rmwc';

export default class News extends Component {
    static async getInitialProps() {
        var shop = undefined;
        
        await fetch(`https://atomic-api.herokuapp.com/shop`)
          .then(response => response.json())
          .then(json => {
            if ('error' in json) {
              //stats = {displayName: "Unknown"};
            } else {
                shop = json;
            }
          })
          .catch(ex => {
            //stats = {displayName: "Unknown"};
          })

        console.log(shop)

        return {shop};
    }

    render() {
        return (
            <Page>
                <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    <AtomicCard className="atomic-featured-shop" title="Featured" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1100px">
                        <GridList>
                            {
                                this.props.shop.featured.map((item, i) => <AtomicFeaturedShopItem key={i} item={item} />)
                            }
                        </GridList>
                    </AtomicCard>
                </div>
            </Page>
        )
    }
}

class AtomicFeaturedShopItem extends Component {
    constructor(props) {
        super(props);

        // Make 'this' work
        this.colorForItem = this.colorForItem.bind(this);
    }

    colorForItem() {
        switch(this.props.item.rarity)
        {
            case 'uncommon':
                return "radial-gradient(#60aa3a,#175117)";

            case 'rare':
                return "radial-gradient(#49acf2,#143977)";

            case "epic":
                return "radial-gradient(#b15be2,#4b2483)";

            case "legendary":
                return "radial-gradient(#d37841,#78371d)";
        }
    }

    render() {
        return (
            <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-featured-shop-item" } style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "400px", width: "300px", background: this.colorForItem() }}>
                {/*<div style={{ position: "absolute", bottom: "0", left: "0", zIndex: "1000", width: "300px", height: "85px", backgroundColor: "rgba(0, 0, 0, 0.3)", textAlign: "center" }}>
                    <div style={{ paddingTop: "5px" }}><span style={{ color: "white", fontFamily: "Burbank", fontSize: "50px", letterSpacing: "1px" }}>{this.props.item.name}</span></div>
                    <p style={{ color: "white", fontFamily: "Burbank", fontSize: "25px", letterSpacing: "1px" }}>
                        <img src="https://image.fnbr.co/price/icon_vbucks.png" style={{ width: "30px" }} />
                        {this.props.item.price}
                    </p>
                </div>*/}
                <img src={this.props.item.image} style={{ display: "block", width: this.props.item.image.includes("featured") ? "" : "300px", height: this.props.item.image.includes("featured") ? "100%" : "300px" }} />
            </div>
        )
    }
}