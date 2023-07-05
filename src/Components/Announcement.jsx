import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    background-color: teal;
    color: white;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free shopping on orders above 50$
    </Container>
  )
}

export default Announcement;