import React, { Fragment, Component } from 'react'
import { Header, Footer } from '@/component'

export default class BasicLayout extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}
