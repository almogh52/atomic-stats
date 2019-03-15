import Page from '../components/page.js' // Keep this, it's loading the material components css

import { Component } from 'react';

import NProgress from 'nprogress';

export default class BasePage extends Component {
    componentWillMount() {
        NProgress.done()
    }

    componentWillUpdate() {
        NProgress.done()
    }
}