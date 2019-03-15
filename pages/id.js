import Player from './player';
import fetch from 'node-fetch';

export default class PlayerId extends Player {
    static async getInitialProps({ query }) {
        var stats = undefined, matches = undefined;
        
        await fetch(`http://35.177.120.249:5000/id/${query.id}`)
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

        await fetch(`http://35.177.120.249:5000/id/${query.id}/matches`)
          .then(response => response.json())
          .then(json => {
            if ('error' in json) {
              //stats = {displayName: "Unknown"};
            } else {
              matches = json;
            }
          })
          .catch(ex => {
            //stats = {displayName: "Unknown"};
          })

        return {stats, matches};
      }
}