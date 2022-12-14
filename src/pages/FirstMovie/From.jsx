import { Header } from "../Header"
import './From.css'
import { MoviesBigCart } from "./BigCart/List";

export const FirstMovie = () => {
    const style = {
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    }
    return (
        <div style={style}>
            <Header />
            <div className="movie-part">
                <MoviesBigCart />
            </div>
        </div>
    )
}