import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <AppWrapper>
        {children}
      </AppWrapper>
    )
  }
}


const AppWrapper = styled.div``;