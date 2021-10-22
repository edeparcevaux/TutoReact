import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Logo />
            <h1>Accueil</h1>
            <Countries/>
        </div>
    )
}

export default Home;