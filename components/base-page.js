import Page from '../components/page.js'

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