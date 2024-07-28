import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    Const[topMovies, setTopMovies] = useState([]) // gerenciando os estados dos filmes

    const getTopRatedMovies = async(url)=>{ // Aqui estamos fazendo uma requisição assincrona, que vamos esperar o retorno da API

        const resposta = await fetch(url);
        const data = await resposta.json();

        setTopMovies(data.results);
    };

    useEffect(()=>{
        const topRetadUrl = `${moviesURL}top_rated?${apiKey}`;
    }, []);

  return (
    <div>
        {topMovies && topMovies.map((movie)=> <p>{ movie.title}</p>)}
    </div>
  )
}

export default Home

/* Aqui usei dois hooks, o useState para gerenciar o estado dos filmes e o useEffec para fazer a chamada da API quando a página carregar */