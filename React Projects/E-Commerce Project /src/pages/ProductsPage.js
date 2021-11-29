import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { 
  Loading,
  Error,
  Filters, 
  ProductList, 
  Sort, 
  PageHero 
} from '../components'

const ProductsPage = () => {
  const {
    products_loading: loading,
    products_error: error
  } = useProductsContext();

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <main>
      <PageHero title="products"/>
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
