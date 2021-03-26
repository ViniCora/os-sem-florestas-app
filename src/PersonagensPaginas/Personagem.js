import React, {useState, useEffect} from 'react';
import Atributos from '../Atributos/Atributos';
import Header from '../Header/Header';
import LuisGarcia from '../Personagens/LuisGarcia.jpg'
import AalikMattaaq from '../Personagens/AalikMattaaq.png'
import Violetta from '../Personagens/Violetta.png'
import Niklas from '../Personagens/Niklas.png'
import Ewan from '../Personagens/Ewan.png'
import Danyel from '../Personagens/Danyel.png';
import AtributesDataService from '../Services/AtributesService.js';

function Personagem({Nome}){

    const [atributes, setAtributes] = useState(null);
    
    useEffect(() => {
        retrieveAtributes();
      }, []);

    const retrieveAtributes = () => {
        AtributesDataService.getAtributes(Nome)
        .then((response) => {
        setAtributes(response.data[0]);
        console.log(response.data[0].jogador);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            {
                atributes == null ? <h2>Carregando Página</h2> : 

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
                paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#696969'}}>  
                        
                        <img style={{maxWidth: '200px', paddingLeft: '0px', paddingTop: '50px', paddingBottom: '50px'}} src={
                            Nome === "Luis Garcia Do Nascimento" ? LuisGarcia :
                            Nome === "Violetta" ? Violetta : 
                            Nome === "Aalik Mattaaq" ? AalikMattaaq :
                            Nome === "Danyel de Lucca" ? Danyel :
                            Nome === "Ewan Butcher" ? Ewan :
                            Niklas
                        } alt={Nome} />
                        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h1 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{Nome}</h1>
                            <h1 style={{paddingLeft: '20px', paddingTop: '0px', margin: '0px'}}>{`Jogador: ${atributes.jogador}`}</h1>
                            <h2 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{`Data de nascimento: ${atributes.nascimento}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px'}}>{`Ofício pré bomba: ${atributes.oficio_pre_base}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px', paddingBottom: '40px'}}>{`Cargo da base: ${atributes.oficio_base}`}</h2>
                        </div>
                    </div>
                    <Atributos id={atributes._id} Força={atributes.força} Destreza={atributes.destreza} Carisma={atributes.carisma} Inteligencia={atributes.inteligencia} 
                        Resistencia={atributes.resistencia} Mira={atributes.mira} Oficio={atributes.oficio} Percepcao={atributes.percepcao} Vida={atributes.vida}></Atributos>
                </div>
            }
        </div>
    );
}

export default Personagem;