import React from 'react'
import CardAtributos from '../CardAtributos/CardAtributos';

function Atributos({Força, Destreza, Carisma, Inteligencia, Resistencia, Mira, Oficio, Percepcao}){
    return(
        <div>
            <CardAtributos Atributo="Vida" Value={100}></CardAtributos>
            <CardAtributos Atributo="Força" Value={Força}></CardAtributos>
            <CardAtributos Atributo="Destreza" Value={Destreza}></CardAtributos>
            <CardAtributos Atributo="Carisma" Value={Carisma}></CardAtributos>
            <CardAtributos Atributo="Inteligência" Value={Inteligencia}></CardAtributos>
            <CardAtributos Atributo="Resistência" Value={Resistencia}></CardAtributos>
            <CardAtributos Atributo="Mira" Value={Mira}></CardAtributos>
            <CardAtributos Atributo="Ofício" Value={Oficio}></CardAtributos>
            <CardAtributos Atributo="Percepção" Value={Percepcao}></CardAtributos>
        </div>
    );
}

export default Atributos;