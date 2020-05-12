import React from 'react';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


function App(){
  return(
      <div id="parent" className="menu-list">
        <SideNav onSelect={(selected) => {
            // Add your code here
        }}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                   <a href=""> HOME</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="a-propos">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkpropos">A PROPOS</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="scolarite">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkscolarite">SCOLARITÉ</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="competence">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkcompetence">COMPÉTENCES</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="experience">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkexperience">EXPÉRIENCE</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="projet">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkprojet">PROJET</a>
                </NavText>
            </NavItem>
            <NavItem eventKey="contact">
                <NavIcon>
                    <i className="fa fa-fw fa-home"  />
                </NavIcon>
                <NavText>
                    <a href="#linkcontact">CONTACT</a>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  </div>
);
}



export default App;
