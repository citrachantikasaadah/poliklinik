import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Sejarah from "../pages/tentangkami/sejarah/Sejarah";
import VisiMisi from "../pages/tentangkami/visimisi/VisiMisi";
import StrukturOrganisasi from "../pages/struktur/StrukturOrganisasi";
import Dokter from "../pages/team/Dokter";
import Edukasi from "../pages/edukasi/Edukasi";
import Kontak from "../pages/kontak/Kontak";
import PoliUmum from "../pages/layanan/poliumum/PoliUmum";
import PoliGigi from "../pages/layanan/poligigi/PoliGigi";
import Galeri from "../pages/galeri/Galeri";
import AddEdukasi from "../pages/cms/edukasi/AddEdukasi";
import EdukasiDetail from "../pages/edukasi/detail/EdukasiDetail";
import AddDokter from "../pages/cms/dokter/AddDokter";
import DokterDetail from "../pages/team/detail/DokterDetail";
import Dashboard from "../pages/cms/Dashboard";
import EdukasiPages from "../pages/cms/edukasi/EdukasiPages";
import DokterPages from "../pages/cms/dokter/DokterPages";
import UpdateEdukasi from "../pages/cms/edukasi/UpdateEdukasi";
import ViewEdukasi from "../pages/cms/edukasi/ViewEdukasi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateDokter from "../pages/cms/dokter/UpdateDokter";
import Login from "../pages/cms/component/Login";
import IklanPages from "../pages/cms/iklan/IklanPages";
import AddIklan from "../pages/cms/iklan/AddIklan";
import UpdateIklan from "../pages/cms/iklan/UpdateIklan";
import PoliGigiPages from "../pages/cms/poligigi/PoliGigiPages";
import PoliUmumPages from "../pages/cms/poliumum/PoliUmumPages";
import AddPoliGigi from "../pages/cms/poligigi/AddPoliGigi";
import UpdatePoliGigi from "../pages/cms/poligigi/UpdatePoliGigi";
import TentangKamiPages from "../pages/cms/tentangkami/TentangKamiPages";
import PoliGigiDetail from "../pages/layanan/poligigi/PoliGigiDetail";
import GaleriPages from "../pages/cms/galeri/GaleriPages";
import AddGaleri from "../pages/cms/galeri/AddGaleri";
import UpdateGaleri from "../pages/cms/galeri/UpdateGaleri";
import UpdatePoliUmum from "../pages/cms/poliumum/UpdatePoliUmum";
import AddPoliUmum from "../pages/cms/poliumum/AddPoliUmum";
import PoliUmumDetail from "../pages/layanan/poliumum/PoliUmumDetail";
import KontakPages from "../pages/cms/kontak/KontakPages";
import Scroll from "../components/Scroll";

const Routess = () => {
    return (
        <div>
            <ToastContainer position="top-center" />
            <Switch>

                {/* website */}
                <Route path="/" exact component={Beranda} />
                <Route path="/Sejarah" exact component={Sejarah} />
                <Route path="/VisiMisi" exact component={VisiMisi} />
                <Route path="/StrukturOrganisasi" exact component={StrukturOrganisasi} />

                <Route path="/dokter" exact component={Dokter} />
                <Route path="/detail-dokter/:id" exact component={DokterDetail} />
                <Route path="/Edukasi" exact component={Edukasi} />
                <Route path="/detail/:id" exact component={EdukasiDetail} />
                <Route path="/kontak" exact component={Kontak} />

                <Route path="/PoliUmum" exact component={PoliUmum} />
                <Route path="/poli-umum-detail/:uuid" exact component={PoliUmumDetail} />

                <Route path="/PoliGigi" exact component={PoliGigi} />
                <Route path="/poli-gigi-detail/:id" exact component={PoliGigiDetail} />

                <Route path="/galeri" exact component={Galeri} />
                
                {/* website */}

                {/* admin */}
                <Route path="/auth" exact component={Login} />

                <Route path="/dashboard-poli" exact component={Dashboard} />

                <Route path="/pages-edukasi" exact component={EdukasiPages} />
                <Route path="/add-edukasi" exact component={AddEdukasi} />
                <Route path="/update-edukasi/:id" exact component={UpdateEdukasi} />
                <Route path="/view-edukasi/:id" exact component={ViewEdukasi} />

                <Route path="/pages-dokter" exact component={DokterPages} />
                <Route path="/add-dokter" exact component={AddDokter} />
                <Route path="/update-dokter/:id" exact component={UpdateDokter} />

                <Route path="/pages-iklan" exact component={IklanPages} />
                <Route path="/add-iklan" exact component={AddIklan} />
                <Route path="/update-iklan/:id" exact component={UpdateIklan} />

                <Route path="/poli-gigi-pages" exact component={PoliGigiPages} />
                <Route path="/add-poli-gigi" exact component={AddPoliGigi} />
                <Route path="/update/:id" exact component={UpdatePoliGigi} />

                <Route path="/poli-umum-pages" exact component={PoliUmumPages} />
                <Route path="/add-poli-umum" exact component={AddPoliUmum} />
                <Route path="/update-poli-umum/:uuid" exact component={UpdatePoliUmum} />

                <Route path="/tentang-kami-pages" exact component={TentangKamiPages} />

                <Route path="/add-galeri" exact component={AddGaleri} />
                <Route path="/galeri-pages" exact component={GaleriPages} />
                <Route path="/update-galeri/:id" exact component={UpdateGaleri} />

                <Route path="/kontak-pages" exact component={KontakPages} />
                {/* admin */}

            </Switch>
            <Scroll/>
        </div>
    )

}

export default Routess;