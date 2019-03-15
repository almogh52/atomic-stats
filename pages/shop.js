import React, { Component } from 'react';
import fetch from 'node-fetch';

import AtomicCard from '../components/atomic-card';

import { GridList } from '@rmwc/grid-list'
import { Typography } from '@rmwc/typography';
import { Button, ButtonIcon } from '@rmwc/button';

import dateFormat from 'dateformat';
import BasePage from '../components/base-page';

import Router from '../components/atomic-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class News extends BasePage {
    static async getInitialProps() {
        var shop = undefined;
        
        await fetch(`http://35.177.120.249:5000/shop`)
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

        return {shop};
    }

    componentDidMount() {
        document.title = "Item Shop · Atomic Stats"
    }
    
    render() {
        if (this.props.small) 
        {
            return (
                <div style={{ display: "block", minWidth: "764px" }}>
                    <AtomicCard className="atomic-daily-shop" title="Daily Shop" titleSize="headline3" titleColor="#ff3d00" outlineColor="#ff3d00" backgroundColor="var(--drawer-color)" width="764px" maxWidth="764px">
                        <GridList>
                            {
                                this.props.shop.daily.map((item, i) => <AtomicShopItem key={i} item={item} />)
                            }
                        </GridList>
                        <hr className="atomic-divider" style={{ marginTop: "10px", marginBottom: "10px" }}/>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button className="atomic-white-ripple" onClick={() => Router.pushRoute("shop")} style={{ color: "#ff3d00", marginBottom: "4px" }}>
                                <ButtonIcon style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="shopping-cart" />} />
                                Show full shop
                            </Button>
                        </div>
                    </AtomicCard>
                </div>
            )
        }

        var updateDate = new Date(this.props.shop.date)

        var updateDateFormat = dateFormat(updateDate, "dd/mm/yyyy, HH:MM")

        return (
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <AtomicCard className="atomic-featured-shop" title="Featured Shop" subtitle={ "Last updated at " + updateDateFormat } titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1010px">
                    <GridList>
                        {
                            this.props.shop.featured.map((item, i) => <AtomicShopItem key={i} item={item} />)
                        }
                    </GridList>
                </AtomicCard>
                <AtomicCard className="atomic-daily-shop" title="Daily Shop" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="1010px" style={{ paddingTop: "50px" }}>
                    <GridList>
                        {
                            this.props.shop.daily.map((item, i) => <AtomicShopItem key={i} item={item} />)
                        }
                    </GridList>
                </AtomicCard>
            </div>
        )
    }
}

class AtomicShopItem extends Component {
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
            <div className={ this.props.className ? this.props.className : "" + ' ' + "atomic-featured-shop-item" } style={{ padding: "10px 10px", height: "225px", width: "225px" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", height: "100%", width: "100%", background: this.colorForItem() }}>
                    <AtomicShopItemOverlay name={this.props.item.name} price={this.props.item.price} />
                    <img src={this.props.item.image} style={{ width: "95%", height: "95%" }} />
                </div>
            </div>
        )
    }
}

class AtomicShopItemOverlay extends Component {
    render() {
        return (
            <div style={{ position: "absolute", bottom: "0", left: "0", zIndex: "1000", overflow: "hidden", width: "225px", height: "40px", backgroundColor: "rgba(0, 0, 0, 0.4)", textAlign: "center", display: "flex", justifyContent: "space-around", flexDirection: "column", flexWrap: "wrap" }}>
                <Typography use="headline4" style={{ color: "white", fontFamily: "Burbank", fontSize: "25px", paddingTop: "3px" }}>{this.props.name}</Typography>
                <span style={{ color: "white" }}>
                    <Typography use="headline4" style={{ position: "relative", top: "-4px", fontFamily: "Burbank", fontSize: "18px" }}>{" " + this.props.price + " "}</Typography>
                    <img src="https://image.fnbr.co/price/icon_vbucks.png" style={{ paddingTop: "15px", width: "20px" }} /> 
                </span>
            </div>
        )
    }
}