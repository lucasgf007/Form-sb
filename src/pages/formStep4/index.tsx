import { useHistory } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { useEffect } from 'react'
import toast,{ Toaster } from 'react-hot-toast'

export const FormStep4 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        if(state.name === '' || state.email ==='' || state.tell === '' || state.product === '' || state.logo === ''){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
        
    }, [])
    
    const Envio = async () => {
        const url: string = (process.env.REACT_APP_API_URL as string)
        

        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(state),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        toast.success('Seu pedido foi enviado!', {
            style: {
              border: '1px solid #00E33B',
              padding: '16px',
              color: '#00E33B',
            },
            iconTheme: {
              primary: '#00E33B',
              secondary: '#FFFAEE',
            },
            duration: 8000
        });

        return await resp.text() 
    }

    
 
    let addAplique = 'Grátis'

    if(state.logo === 'Aplique a laser' || state.logo === 'Aplique 3D'){
        addAplique = '+ R$ 2,00'
    }

    let tecido = 'Grátis'
    if(state.tecido === 'Premium'){
        tecido = ' + R$ 4,00'
    }
    
    const TotalOrcamento = (priceProduto: number, qtd:number) => {
        let logoPrice = 0;
        let adicional = 0;
        let tecido = 0;

        if(state.logo === 'Aplique a laser' || state.logo === 'Aplique 3D'){
            logoPrice = 2
        }
        if(state.aplique !== ''){
            adicional = 2
        }
        if(state.tecido === 'Premium'){
            tecido = 4
        }

        return (priceProduto + logoPrice + adicional + tecido) * qtd
    }


    return (
        <Theme>
            <C.Container>
                <Toaster />
                <h1>Orçamento 💰</h1>
                <p>{state.name}, confira abaixo o resumo do seu pedido e o valor total</p>
                <h3>Resumo do seu pedido:</h3>
                <ul>
                    <li>Modelo: {state.product}</li>
                    <li>Valor do {state.product}: R${state.price},00</li>
                    <li>Logo em: {state.logo} {addAplique} </li>
                    <li>Tecido {state.tecido}: {tecido}</li>
                    {state.aplique !== '' && 
                    <li>Adicionais: {state.aplique + '+ R$ 2,00'}</li>}
                    <li>Quantidade: {state.qtd} unidades</li>
                </ul>
                <h3>Total: R$ {TotalOrcamento(state.price,state.qtd)},00</h3>
                <p>Esse valor pode ser dividido em até 3x de R${(TotalOrcamento(state.price,state.qtd) / 3).toFixed(2)}</p>
                

                <hr />
                
                <p>{state.name}, agora que ja viu quanto vai sair tudo, clique em "Fala com o vendedor", para iniciar seu atendimento</p>
                
                <div className='orcamento'>
                    <button onClick={Envio}>Falar com um vendedor</button>
                </div>
                <div className='footer'></div>
            </C.Container>
        </Theme>
    )
}
