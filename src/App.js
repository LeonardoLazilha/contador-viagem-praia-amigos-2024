import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });
  const [viagemIniciada, setViagemIniciada] = useState(false);

  useEffect(() => {
    const dataPraia = new Date('2024-11-15T00:00:00'); 

    const calcularTempoRestante = () => {
      const agora = new Date();
      const diferencaEmMs = dataPraia - agora;

      if (diferencaEmMs > 0) {
        const dias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaEmMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaEmMs % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaEmMs % (1000 * 60)) / 1000);

        setTempoRestante({ dias, horas, minutos, segundos });
        setViagemIniciada(false);
      } else {
        const dias = Math.floor(Math.abs(diferencaEmMs) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((Math.abs(diferencaEmMs) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((Math.abs(diferencaEmMs) % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((Math.abs(diferencaEmMs) % (1000 * 60)) / 1000);

        setTempoRestante({ dias, horas, minutos, segundos });
        setViagemIniciada(true);
      }
    };

    calcularTempoRestante();
    const timer = setInterval(calcularTempoRestante, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h1 className="titulo">
        {viagemIniciada
          ? `VIAJAMOS PARA A PRAIA HÁ ${tempoRestante.dias} DIAS 🏖️`
          : `FALTAM ${tempoRestante.dias} DIAS, ${tempoRestante.horas} HORAS, ${tempoRestante.minutos} MINUTOS E ${tempoRestante.segundos} SEGUNDOS PARA A PRAIA`}
      </h1>
    </div>
  );
}

export default App;