import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import Wrapper from '../Wrapper/Wrapper';
import MainMenu from '../components/MainMenu'
import classes from '../UI/global.module.scss'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { addPokemons } from '../storage/slice/slice';



function Home(){
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [filterdata, setfilterData] = useState([])
    const [countOnPageRes, setcountOnPageRes] = useState(20);
    const [clicked,setClicked] = useState(false)
    const [typedData,setTypedData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      document.title = 'Pokédex';
    }, []);
  
    useEffect(() => {
      const dataFetch = async () => {
        const url = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
        const data = []
        for(let value of url.data.results){
          const pokemon = await axios.get(value.url);
          data.push(pokemon.data)
        }
        setData([...data])
        setTypedData([...data])
        dispatch(addPokemons(data))
        setIsLoaded(true)
      };
      dataFetch();
    }, []);

    return (
      <Wrapper>
        <h1 className={classes['headline']}>Pokédex</h1>
        <FilterBar data={data}
          setData={setData}
          setFilteredData={setfilterData}
          countOnPageRes={countOnPageRes}
          setcountOnPageRes={setcountOnPageRes}
          setClicked={setClicked}
          setTypedData = {setTypedData}
          typedData={typedData}
          filteredData = {filterdata}
          />
        <MainMenu  countOnPageRes={countOnPageRes} typedData={typedData} isLoaded={isLoaded}/>
      </Wrapper>
    );
    }

export default Home