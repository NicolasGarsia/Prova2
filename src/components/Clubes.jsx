import { useState, useEffect } from "react";


export default function Clubes() {
  const [clubes, setClubes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubes = async () => {
      try {
        const response = await fetch(`https://api.cartola.globo.com/clubes`);
        const data = await response.json();
        setClubes(Object.values(data));
        setError(null);
      } catch (error) {
        console.log("Erro", error);
        setError("Erro ao buscar clubes");
      }
    };

    fetchClubes();
  }, []);

  return (
    <div id="box">
      <div>
        {error && <p>{error}</p>}
        {clubes.length > 0 ? (

          <div className="ListaC">

            {clubes.map((clube) => (
              <div key={clube.id} className="BoxT">

                <img src={clube.escudos["60x60"]} alt={clube.nome}/>

                <div className="BoxT2">
                  <p className="Nome">{clube.nome}</p>

                  <p className="Apelido">{clube.apelido}</p>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p>Carregando clubes...</p>
        )}
      </div>
    </div>
  );
}
