import App, {Container} from 'next/app'
import React from 'react'

import Page from '../components/page'

import Chart from 'chart.js';

import '../styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faNewspaper, faUser, faUsers, faHome, faChartPie, faSignOutAlt, faSignInAlt, faAward, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faNewspaper, faUser, faUsers, faHome, faChartPie, faSignOutAlt, faSignInAlt, faAward, faPlus)

Chart.defaults.global.defaultFontFamily = "Dosis"

const isServer = typeof window === 'undefined'

export default class AtomicApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (!isServer)
    {
        if (!window["__ATOMIC_USER__"] && ctx.req)
            window["__ATOMIC_USER__"] = ctx.req.user

        return {pageProps, user: window["__ATOMIC_USER__"]}
    } else {
        return {pageProps, user: ctx.req.user}
    }
  }

  constructor(props) {
    super(props)

    this.state = {}

    if (this.props && this.props.user)
    {
        if (!isServer)
            window['__ATOMIC_USER__'] = this.props.user

        this.state = {
            user: this.props.user
        }
    }
  }

  render () {
    const {Component, pageProps} = this.props

    // If the page asked to have no layout, return without page layout
    if (pageProps && pageProps.noLayout)
    {
        return (
            <Container>
                <Component user={this.state.user} {...pageProps} />
            </Container>
        )
    }

    return (
        <Container>
            <Page user={this.state.user}>
                <Component user={this.state.user} {...pageProps} />
            </Page>
        </Container>
    )
  }
}