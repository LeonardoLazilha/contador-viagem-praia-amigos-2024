import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [diasRestantes, setDiasRestantes] = useState(0);
  const [viagemIniciada, setViagemIniciada] = useState(false);

  useEffect(() => {
    const dataPraia = new Date('2024-11-15'); 

    const calcularDiasRestantes = () => {
      const hoje = new Date();
      const diffEmMilissegundos = dataPraia.setHours(0, 0, 0, 0) - hoje.setHours(0, 0, 0, 0);
      const dias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));
    
      if (dias >= 0) {
        setDiasRestantes(dias);
        setViagemIniciada(false);
      } else {
        setDiasRestantes(Math.abs(dias));
        setViagemIniciada(true);
      }
    };

    calcularDiasRestantes();
    const timer = setInterval(calcularDiasRestantes, 1000 * 60 * 60 * 24); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1 className="titulo">
        {viagemIniciada
          ? `VIAJAMOS PARA A PRAIA HÁ ${diasRestantes} DIAS`
          : `FALTAM ${diasRestantes} DIAS PARA PRAIA`}
      </h1>
    </div>
  );
}

export default App;