import styled from 'styled-components'

import Button from '../components/Button';
import Input from  '../components/Input'

const Home = () => (
  <Container>
    <Heading>hi there</Heading>
    <Button text={'Test'} />
    <Input text={'name'}/>
  </Container>
)
const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`
const Heading = styled.h1``
export default Home
