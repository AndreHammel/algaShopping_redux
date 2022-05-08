import React from 'react'
import Checkbox from './../../shared/Checkbox'
import { Wrapper, Title, Array } from './ShoppingList.styles'

function ShoppingList({ title, products, onToggle }) {
  return (
    <Wrapper>
      <Title>
        {title}:
      </Title>
      <Array>
        {products.map(({ id, name, checked }) => (
          <Checkbox
            key={id}
            title={name}
            value={checked}
            onClick={() => onToggle(id, checked)}
          />
        ))}
      </Array>
    </Wrapper>
  )
}

export default ShoppingList