import React, { Component } from 'react';

import { Typography } from 'rmwc/Typography';
import { Card } from 'rmwc/Card';

export default class AtomicCard extends Component {
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