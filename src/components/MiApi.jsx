    import React, { useEffect, useState } from "react";
    import Characters from "./Characters";
    import Pagination from "./Pagination";
    import Buscador from "./Buscador";

    const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [searchCharacters, setSearchCharacters] = useState([]);

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fecthCharacters = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results);
            setInfo(data.info);
            setSearchCharacters(data.results.name)
        })
        .catch((error) => console.log(error));
    };

    const onPrevious = () => {
        fecthCharacters(info.prev);
    };

    const onNext = () => {
        fecthCharacters(info.next);
    };

    useEffect(() => {
        fecthCharacters(initialUrl);
    }, []);

    const onSearch = () => {
        fecthCharacters(searchCharacters.onSearch);
        console.log(setSearchCharacters)
    };

    return (
        <>
        <main className="container mt-3">
            <Buscador 
            onSearch={onSearch}/>
            <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
            />
            <Characters characters={characters} />
            <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious}
            onNext={onNext}/>
        </main>
        </>
    );
    };

    export default MiApi;
