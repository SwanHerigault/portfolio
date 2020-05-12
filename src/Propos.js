import React from 'react';
import './App.css';


function Propos(){
    return (
        
        <div id="parent-propos">
            <h1 id ="titre-propos" className="titre-propos">A PROPOS</h1>
            <div className="parent-propos">
                <div>
                    <p className="texte-propos">
                        Mon nom est Herigault-Valétudie Swan, je suis née à Créteil (94) le 06 Mars 2000. 
                        Passionné depuis mon enfance par tous types de sports, j'ai eu l'occasion de 
                        pratiquer la natation, l'équitation, football, handball, basketball, gymnastique, 
                        athlétisme, tennis et le rugby. Dans cette longue liste mes 3 principales passions 
                        sont l'équitation que j'ai eu la chance de pratiquer pendant plus de 10 ans,
                        l'athlétisme sport dans lequel j'ai été champion départemental et régional en 
                        triple-saut et à la longueur et actuellement le football où j'évolue en amateur. 
                        Toutes ces activités m'ont permis d'acquérir beaucoup de valeurs comme l'assiduité,
                        la persévérance, le perfectionnisme, le travail d'équipe et par dessus tout le respect
                        qu'il soit de soi-même, envers son entraineur où surtout envers son adversaire.
                        Toutes ces valeurs j'espère pouvoir les retrouver dans le monde du travail, un milieu
                        professionnel qui va me permettre de murir, de grandir mais surtout d'apprendre.
                        Je suis actuellement en 2ème année du cycle préparatoire de l'école d'ingénieur
                        informatique du CESI. Je souhaite perfectionner mes connaissances dans le Web,
                        les bases de données et en Java. En commençant par mon stage de deuxième année
                        ou j'espère travailler dans un environnement que je ne connais pas et où je vais être
                        mis en difficulté et prouver mes compétences aux personnes qui m'ont fait 
                        confiance en me choisissant. 
                    </p>
                </div>
                <a href="https://drive.google.com/file/d/1z2iMydV1Yt0UwGQnr3vWYfp4z0dPjZww/view?usp=sharing" target="_blank">
                    <button className="download">TÉLÉCHARGER CV</button>
                </a>
                <a href="#linkcontact" >
                <button className="contact-button">CONTACTER</button>
                </a>
            </div>
        </div>

    );
}
export default Propos;