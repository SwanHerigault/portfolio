import React, { useState } from 'react';
import './App.css';

function Competence(){

    const [isShown, setIsShown] = useState(false);
    return(
        <section id="parent-competence">
            <h1 className="titre-competence" id="linkcompetence">COMPÉTENCES TECHNIQUES</h1>
            <article className="content-competence">
                <div className="mmysql">
                    <img className="image-mysql" src="./mysql.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">MYSQL</p>
                </div>
                <div className="mmysql">
                    <img className="image-html" src="./html.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js2"></hr>
                        )}
                    <p className="desc-image">HTML</p>
                </div>
                <div className="mmysql">
                    <img className="image-css" src="./css.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">CSS</p>
                </div>
                <div className="mmysql">
                    <img className="image-react" src="./logo.svg"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">REACT</p>
                </div>
                <div className="mmysql">
                    <img className="image-java" src="./java.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">JAVA</p>
                </div>
                <div className="mmysql">
                    <img className="image-sql" src="./sql.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">SQL</p>
                </div>
                <div className="mmysql">
                    <img className="image-c" src="./c.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">C</p>
                </div>
                <div className="mmysql">
                    <img className="image-git" src="./git.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">GIT</p>
                </div>
                <div className="mmysql">
                    <img className="image-js" src="./js.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">JS</p>
                </div>
                <div className="mmysql">
                    <img className="image-laravel" src="./laravel.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">LARAVEL</p>
                </div>
                <div className="mmysql">
                    <img className="image-cisco" src="./cisco.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">CISCO</p>
                </div>
                <div className="mmysql">
                    <img className="image-bash" src="./bash.png"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}/>
                        {isShown && (
                    <hr className="reliant-js1"></hr>
                        )}
                    <p className="desc-image">BASH</p>
                </div>

            </article>


        </section>
    );
}
export default Competence;