import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import Cards from "../components/Cards/Cards"
import Input from "../components/Input/Input"
import Categorias from "../components/Categorias/Categorias"
 
const Homepage = () => {
    return (
        <>
            <Header />
            <Banner backgroundImage="src/assets/images/banner.png" icone="src/assets/images/red-dead.png" text="Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos." botao="COMPRE AGORA"/>
            <Categorias />
            <div className="container">
              <Input style={{marginBottom: '112px'}} placeholder="BUSCAR" />
            </div>

            <div className="container containerCards">
                <Cards src="src/assets/images/farcry.png" />
                <Cards src="src/assets/images/forza.png" />
                <Cards src="src/assets/images/fifa.png" />
                <Cards src="src/assets/images/minecraft.png" />
            </div>
            <Footer />
        </>
    )
}

export default Homepage;