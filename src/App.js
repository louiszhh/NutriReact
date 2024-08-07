import React, { useEffect, useState } from 'react';
import './Style/estilo.css';

function App(){
  const [nutri, setNutri] = useState([]);
  
  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((r) => r.json())
    .then((json) =>{
        setNutri(json);
    })
  }, []);

  return(
    <div>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id}>
            <strong>{item.titulo}</strong>
            <img className="img" src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
            <span>{item.categoria}</span>
          </article>
        );
      })
      }
    </div>
  );
}

export default App;