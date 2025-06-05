import React, {useEffect} from 'react';
import { API_OPTIONS } from '../utils/constants';  
import { useDispatch } from 'react-redux'; 
import { addTrailarVedio } from '../utils/moviesSlice';


const useMovieTrailar = (id)=> {    
    const dispatch = useDispatch();
     const getMovieVedios = async()=> {
        const res = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos", API_OPTIONS);
        const data =await res.json();
        const filteredVedios = data.results.filter(each => each.type === "Trailer");
        const movieVedio = filteredVedios.length? filteredVedios[0]: data.results?.[0];       
        dispatch(addTrailarVedio(movieVedio))       
        
    }
    useEffect(()=> {
        getMovieVedios()
    }, [])


}

    export default useMovieTrailar;