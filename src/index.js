import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LuisGarcia from './PersonagensPaginas/LuisGarcia';
import AalikMattaaq from './PersonagensPaginas/AalikMattaq';
import Violetta from './PersonagensPaginas/Violetta';
import Niklas from './PersonagensPaginas/Niklas';
import Ewan from './PersonagensPaginas/Ewan';
import Danyel from './PersonagensPaginas/Danyel';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/personagens/LuisGarcia" component={LuisGarcia} />
    <Route path="/personagens/AalikMattaaq" component={AalikMattaaq} />
    <Route path="/personagens/Violetta" component={Violetta} />
    <Route path="/personagens/Niklas" component={Niklas} />
    <Route path="/personagens/Ewan" component={Ewan} />
    <Route path="/personagens/Danyel" component={Danyel} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

