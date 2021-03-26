import React from 'react'
import CardAtributos from '../CardAtributos/CardAtributos';

function Atributos({id, Força, Destreza, Carisma, Inteligencia, Resistencia, Mira, Oficio, Percepcao, Vida}){
    return(
        <div>
            <CardAtributos Atributo="Vida" Value={Vida} id={id}></CardAtributos>
            <CardAtributos Atributo="Iniciativa" Value={Destreza} id={id}></CardAtributos>
            <CardAtributos Atributo="Força" Value={Força} id={id}></CardAtributos>
            <CardAtributos Atributo="Destreza" Value={Destreza} id={id}></CardAtributos>
            <CardAtributos Atributo="Carisma" Value={Carisma} id={id}></CardAtributos>
            <CardAtributos Atributo="Inteligência" Value={Inteligencia} id={id}></CardAtributos>
            <CardAtributos Atributo="Resistência" Value={Resistencia} id={id}></CardAtributos>
            <CardAtributos Atributo="Mira" Value={Mira} id={id}></CardAtributos>
            <CardAtributos Atributo="Ofício" Value={Oficio} id={id}></CardAtributos>
            <CardAtributos Atributo="Percepção" Value={Percepcao} id={id}></CardAtributos>
        </div>
    );
}

export default Atributos;