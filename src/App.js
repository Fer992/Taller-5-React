import React from 'react';
import ProfileCard from './components/ProfileCard'; // Importación componente ProfileCard
import ProductCard from './components/ProductCard'; // Importación componente ProductCard
import img1 from './assets/img1.jpg'; // Importación imagen1
import Card from './components/Card'; //Importación componente Card
import Header from './components/Header'; // Importación del componente Header

const App = () => {
  return (
    <div>
      <Header />
      <main className="p0 flex-grow bg-violet-400 text-black">
        <h2 className="font-bold p-8 text-2xl container mx-auto flex justify-center items-center text-white"> Hola  Developer!! (Punto 4) <br></br>Bienvenido al Taller de React 5</h2>
      </main>
  
      <ProfileCard 
        name="Fernanda Triviño" 
        description="Desarrolladora web en atapa de aprendizaje." 
      />
    
    <ProductCard 
        name="Producto 1" 
        image={img1} />
    
    <Card 
        title="Tarjeta 1" 
        description="Este es el Punto 3 del taller de React" 
        buttonText="Click Aquí" 
      />

  </div>
  );
};

export default App; 