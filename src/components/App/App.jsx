import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import LineChart from '../../shared/LineChart'
import ShoppingList from './../ShoppingList'
import productsMock from '../../mocks/productsList.json'
import { Wrapper, Container } from './App.styles'
import extractPercentage from '../../utils/extractPercentage'
import Calculator from '../Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts, selectSelectedProducts, selectSelectedProductsTotalPrice } from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'

function App() {
  const colors = [ '#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61' ]
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const selectedProducts = useSelector(selectSelectedProducts)
  const totalPrice = useSelector(selectSelectedProductsTotalPrice)

  function handleToggle(id) {
    dispatch(toggleProduct(id))
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer

          left={
            <ShoppingList
              title="Produtos disponíveis"
              products={ products }
              onToggle={ handleToggle }
            /> }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              products={ selectedProducts }
              onToggle={ handleToggle }
            /> }
          right={
            <div>
              Estatísticas:
              <LineChart
                color={ colors[ 0 ] }
                title='saudável'
                percentage={ extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags
                      .includes('healthy'))
                    .length) } />
              <LineChart
                color={ colors[ 1 ] }
                title='não tão saudável assim'
                percentage={ extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags
                      .includes('junk'))
                    .length) } />
              <LineChart
                color={ colors[ 2 ] }
                title='limpeza'
                percentage={ extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags
                      .includes('cleaning'))
                    .length) } />
              <LineChart
                color={ colors[ 3 ] }
                title='outros'
                percentage={ extractPercentage(
                  selectedProducts.length,
                  selectedProducts
                    .filter(product => product.tags
                      .includes('others'))
                    .length) } />
              <div style={ { marginTop: 12, } }>
                <h2 style={ { fontWeight: 400, fontSize: 12, color: '#00364A' } }>
                  Previsão de gastos:
                </h2>
                <div style={ { fontSize: 24, color: '#000' } }>
                  { totalPrice.toLocaleString('pt-br',
                    {
                      style: 'currency',
                      minimumFractionDigits: 2,
                      currency: 'BRL'
                    }) }
                </div>
                {/* <Calculator /> */ }
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  )
}

export default App