import styled from "styled-components";
import { Announcement } from "@mui/icons-material";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const Price = styled.div``;



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Nam fermentum nibh ac diam bibendum, in finibus ipsum efficitur.
            Quisque eget molestie orci. Vivamus at metus ac elit pretium
            molestie ac pellentesque magna. Curabitur varius odio metus, non
            rhoncus enim fringilla ac. Cras et cursus augue, eu porta quam. Sed
            quis ornare erat, a aliquam urna. Aliquam erat volutpat.
          </Desc>
          <Price>$20</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
