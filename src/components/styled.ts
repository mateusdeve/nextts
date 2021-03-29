import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 150px;
  @media(max-width: 600px){
  padding: 0px 50px;
  }
`