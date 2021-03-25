import {React, useState} from 'react';
import dados from '../Icons/Dados.png'
import forçaImg from '../Icons/Arm.png'
import destrezaImg from '../Icons/Run.png'
import carismaImg from '../Icons/Happy.png'
import inteligenciaImg from '../Icons/Brain.png'
import resistenciaImg from '../Icons/Strong.png'
import miraImg from '../Icons/Gun.png'
import oficioImg from '../Icons/Wrench.png'
import vidaImg from '../Icons/heart.png'
import editarImg from '../Icons/pencil.png'
import confirmar from '../Icons/right.png'
import cancenlar from '../Icons/wrong.png'
import percepcaoImg from '../Icons/Binoculars.png'
import Modal from 'react-modal';
import './CardAtributos.css'

function CardAtributos({Atributo,Value}){
    const customStyles = {
        content : {
          top                   : '25%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '50%',
          backgroundColor       : '#696969',
          borderColor           : '#000', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };
    const [modalIsOpen,setIsOpen] = useState(false);
    const [hasRoll,setHasRoll] = useState(false);
    const [modifier,setModifier] = useState(0);
    const [roll, setRoll] = useState(0);
    const [rollSemMod, setRollSemMod] = useState(0);
    const [contestacao, setContestacao] = useState(0);
    const valorMinimo = 100 - Value;
    const [isEditar, setIsEditar] = useState(false);
    const [vidaPreEdicao, setVidaPreEdicao] = useState(0);
    const [vida, setVida] = useState(Value);

    return(
        
        <div style={{width:'750px', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', 
        marginBottom: '50px', padding: '10px', backgroundColor:'#696969', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={()=>{setIsOpen(false); setHasRoll(false); setModifier(0);}}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                    <h2 style={{fontSize:'30px'}}>Teste de {Atributo}</h2>
                </div>
                {hasRoll ? 
                            <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
                                <div style={{width: '75%', height: '200px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <h2 style={{ fontSize: '20px', marginTop: '20px'}}>{
                                            (roll > 1 && roll < valorMinimo) ? 'Falhou, rodou: ' + roll + (modifier != 0 ? ` (${rollSemMod} com modifier de: ${modifier})` : '') +  '.' :
                                            (roll < 100 && roll > valorMinimo) ? 'Sucesso, rodou: ' + roll + (modifier != 0 ? ` (${rollSemMod} com modifier de: ${modifier})` : '') +'.' : 
                                            roll === 1 ? 'Falha Critica' : 
                                            roll < 1 ? 'Ação Impossivel' : 
                                            roll === 100 ? 'Sucesso Critico, rodou: ' + roll :
                                            roll > 100 ? 'Ação garantida' : ''
                                        }</h2>
                                        { (roll < 1 || roll > 100) ? <div></div> : 
                                            <h2 style={{ fontSize: '20px', marginBottom: '20px'}}>{`Valor minimo para sucesso era: ${valorMinimo}.`}</h2>
                                        }
                                        {(roll < 100 && roll > valorMinimo) ?
                                            <h2 style={{ fontSize: '20px', marginBottom: '20px'}}> Valor de contestação: {contestacao}.</h2>
                                        :
                                            <div></div>
                                        }
                                </div>
                            </div>
                                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            setIsOpen(false); setHasRoll(false); setModifier(0);
                                        }
                                        }>Fechar</button>
                                </div>
                            </div> 
                        :
                        <div>
                            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                <div style={{width: '50%', height: '200px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                    flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
                                        <h2 style={{ fontSize: '20px', marginTop: '10px'}}>Qual o modifier a ser adicionado?</h2>
                                        <input value={modifier} maxLength='3'
                                        style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                        borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} type='number' onChange={(event)=>{
                                        
                                            var value = event.target.value;
                                            
                                            if(value <= 100 && value >= -100){
                                                setModifier(value);
                                            }
                                        }}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            var mod = modifier;
                                            if(modifier == ''){
                                                setModifier(0);
                                                mod = 0;
                                            }
                                            setHasRoll(true);
                                            var newRoll = (Math.floor(Math.random() * 100) + 1);
                                            setRollSemMod(newRoll);
                                            newRoll += parseInt(mod);
                                            setRoll(newRoll);
                                            var cont = Math.ceil((Value * newRoll)/100);
                                            console.log(cont);
                                            setContestacao(cont);
                                            setHasRoll(true);
                                        }
                                    }>Rodar</button>
                            </div>
                        </div>
                }
            </Modal>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
                <div>
                    <img style ={{maxWidth: '40px', paddingRight: '10px'}} 
                    src={Atributo === 'Força' ? forçaImg : 
                         Atributo === 'Destreza' ?  destrezaImg :
                         Atributo === 'Carisma' ? carismaImg :
                         Atributo === 'Inteligência' ? inteligenciaImg :
                         Atributo === 'Resistência' ? resistenciaImg : 
                         Atributo === 'Mira' ? miraImg : 
                         Atributo === 'Ofício' ? oficioImg : 
                         Atributo == 'Percepção' ? percepcaoImg : vidaImg} alt="Força" />
                </div>
                {
                    isEditar ? 
                        <div>
                            <label style={{fontSize: '30px', paddingLeft:'10px'}}>{Atributo}: </label>
                                <input value={Atributo == 'Vida' ? vida : Value} maxLength='3'
                                style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                                type='number' onChange={(event)=>{
                                    setVidaPreEdicao(Value);

                                    var value = event.target.value;

                                    if(value <= 100 && value >= -100){
                                        setVida(value);
                                    }

                                }}></input>
                            
                        </div>
                    : 
                        <label style={{fontSize: '30px', paddingLeft:'10px'}}>{Atributo}: {Atributo == 'Vida' ? vida : Value}</label>
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
             <input type='image' src={isEditar ? cancenlar : (Atributo == 'Vida' ? editarImg : dados)} alt='row' width="40px" height="40px" onClick={()=>{
                 
                    if(isEditar){
                        setVida(vidaPreEdicao);
                        setIsEditar(false);
                    }else{
                        if(Atributo == 'Vida'){
                            setIsEditar(true);
                        }else{
                            setIsEditar(false);
                            setIsOpen(true);
                        }
                    }
                }
            }/> 
             {isEditar ? 
                <input type='image' src={confirmar} alt='row' width="40px" height="40px" onClick={()=>{
                        setIsEditar(false);
                   }
               }/> 
            :
            
               ''
            }
            </div>
         </div>
    );
}

export default CardAtributos;