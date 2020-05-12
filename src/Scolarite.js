import React from 'react';
import './App.css';

function Scolarite() {
    return (
        <section id="parent-scolarite">
            <h1 className="titre-scolarite" id="linkscolarite">SCOLARITÉ</h1>
            <article className="content-scolarite">
                <article className="content-cesi">
                    <div className="cesi">
                        <p className="c">C</p>
                    </div>
                    <hr className="reliant"></hr>
                    <div className="info-cesi">
                        <h2 className="nom-ecole">Ecole d'ingénieur CESI</h2>
                        <h3 className="ville-ecole">Valbonne (06560)</h3>
                        <h4 className="date">2018-2023</h4>
                        <h4 className="information">Parcours informatique EXIA</h4>
                    </div>
                    <hr className="reliant2"></hr>
                </article>
                <article className="content-cesi">
                    <div className="cesi">
                        <p className="j">JA</p>
                    </div>
                    <hr className="reliant"></hr>
                    <div className="info-cesi">
                        <h2 className="nom-ecole">Collège Sainte Jeanne d'Arc</h2>
                        <h3 className="ville-ecole">Brignoles (83170)</h3>
                        <h4 className="date">6ème - 3ème</h4>
                        <h4 className="information">Parcours général</h4>
                    </div>
                    <hr className="reliant2"></hr>
                </article>
                <article className="content-cesi">
                    <div className="cesi">
                        <p className="m">MJ</p>
                    </div>
                    <hr className="reliant3"></hr>
                    <div className="info-mj">
                        <h2 className="nom-ecole">Lycée Maurice Janetti</h2>
                        <h3 className="ville-ecole">Saint-Maximin (83470)</h3>
                        <h4 className="date">2nd - Terminale</h4>
                        <h4 className="information">Parcours général Option SI</h4>
                    </div>
                    <hr className="reliant4"></hr>
                    <hr className="reliant5"></hr>
                    <hr className="reliant6"></hr>
                </article>
            </article>

        </section>
    );
}
export default Scolarite