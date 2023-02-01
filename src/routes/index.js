import React from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Fasilitas from "../pages/Fasilitas";
import Sejarah from "../pages/tentangkami/sejarah/Sejarah";
import VisiMisi from "../pages/tentangkami/visimisi/VisiMisi";
import StrukturOrganisasi from "../pages/struktur/StrukturOrganisasi";
import Layanan from "../pages/Layanan";
import Jadwal from "../pages/tentangkami/jadwal/Jadwal";
import Team from "../pages/team/TeamPoli";
import Dokter from "../pages/team/Dokter";
import Edukasi from "../pages/edukasi/Edukasi";
import Kontak from "../pages/kontak/Kontak";
import Header from "../components/head/Header";
import Footer from "../components/foot/Footer";
import PoliUmum from "../pages/layanan/PoliUmum";
import PoliGigi from "../pages/layanan/PoliGigi";
import drAnidiaPutri from "../pages/team/drAnidiaPutri";
import drDetiNurdianti from "../pages/team/drDetiNurdianti";
import drFebrianaListyaAndanti from "../pages/team/drFebrinaListyaAndanti ";
import drSisil from "../pages/team/drSisil";
import drRadite from "../pages/team/drRadite";
import Galeri from "../pages/galeri/Galeri";
import AddEdukasi from "../pages/cms/AddEdukasi";
import EdukasiHome from "../pages/edukasi/EdukasiHome";

const Routes =() => {
    return(
    <div>
        <Header/>
        <Switch>
            <Route path="/" exact component={Beranda}/>
            <Route path="/fasilitas" exact component={Fasilitas}/>
            <Route path="/Sejarah" exact component={Sejarah}/>
            <Route path="/VisiMisi" exact component={VisiMisi}/>
            <Route path="/StrukturOrganisasi" exact component={StrukturOrganisasi}/>
            <Route path="/layanan" exact component={Layanan}/>
            <Route path="/Jadwal" exact component={Jadwal}/>
            <Route path="/Team" exact component={Team}/>
            <Route path="/dokter" exact component={Dokter}/>
            <Route path="/Edukasi" exact component={Edukasi}/>
            <Route path="/kontak" exact component={Kontak}/>
            <Route path="/PoliUmum" exact component={PoliUmum}/>
            <Route path="/PoliGigi" exact component={PoliGigi}/>
            <Route path="/drAnidiaPutri" exact component={drAnidiaPutri}/>
            <Route path="/drDetiNurdianti" exact component={drDetiNurdianti}/>
            <Route path="/drFebrinaListyaAndanti" exact component={drFebrianaListyaAndanti}/>
            <Route path="/drSisil" exact component={drSisil}/>
            <Route path="/drRadite" exact component={drRadite}/>
            <Route path="/galeri" exact component={Galeri}/>
            <Route path="/addedukasi" exact component={AddEdukasi}/>
            <Route path="/edukasihome" exact component={EdukasiHome}/>
        </Switch>
        <Footer/>
    </div>
    )

}

export default Routes;