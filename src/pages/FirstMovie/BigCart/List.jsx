import './List.css'
import { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import { Link } from 'react-router-dom';
import { BackButtonPage } from '../../BackButton/BackButton';
export const MoviesBigCart = () => {
    const { userWantedMovie } = useContext(MoviesContext);

    return (
        <div className="border">
            <img className='movieImg' src={userWantedMovie.image} alt="" />
            <div className='evens'>
                <h1>{userWantedMovie.name}</h1>
                <span>{userWantedMovie.event}</span>
                <Link to= '/movie/about/reserved'> 
                    <button className='reservedButton' >Захиалах</button>
                </Link>
                <Link to='/'>
                    <BackButtonPage />
                </Link>
            </div>
        </div>
    )
}