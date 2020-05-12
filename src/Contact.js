import React from 'react';
import './App.css';

function Contact(){
    return(
        <section id="parent-contact">
            <h1 className="titre-contact" id="linkcontact">CONTACT</h1>
            <div className="container">
                <form action="action_page.php">
                    <label for="fname">Nom-Prénom</label>
                    <input type="text" id="fname" name="firstname" placeholder="Votre nom-prénom..."/>
                    <label for="lname">Object</label>
                    <input type="text" id="lname" name="lastname" placeholder="Object..."/>
                    <label for="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="Écrivez quelque chose..." type="text"></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div> 
        </section>
    );
}

export default Contact;