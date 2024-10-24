import React from 'react';
import styled from 'styled-components';

// Contenedor del producto
const CardContainer = styled.div`
  border: solid #ad4f89; 
  border-radius: 20px; 
  padding: 16px; 
  max-width: 300px; 
  background-color: rgb(230, 190, 228); 
  margin: 16px auto; 
  text-align: center; 
  color: #0331c9  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Imagen del producto
const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  margin-botton: 15px auto;
  object-fit: cover;

`;

// Nombre del producto
const ProductName = styled.h2`
  font-size: 1.5em;
  font-family: monospace, sans-serif;
  color: #333;
  margin: 0 0 16px 0;
`;

// Botón de compra
const PurchaseButton = styled.button`
  background-color: #0f96d4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-family: monospace, sans-serif;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #004261;
    color: #abc903
  }
`;

const ProductCard = ({ name, image }) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <h2>Punto 2</h2>
      <PurchaseButton>Comprar</PurchaseButton>
    </CardContainer>
  );
};

export default ProductCard;