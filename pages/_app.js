import App, {Container} from 'next/app'
import React from 'react'

import Page from '../components/page'

export default class AtomicApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    
    if (ctx.req && ctx.req.user)
    {
        return {pageProps, user: ctx.req.user}
    } else {
        return {pageProps}
    }
  }

  constructor(props) {
    super(props)

    this.state = {}

    if (this.props && this.props.user)
    {
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