import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; 
    justfy-content: flex-start;
    background-color: #f5fbfd;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
    )                                               
}

export default Products