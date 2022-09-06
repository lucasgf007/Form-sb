import { useHistory, Link } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'
import toast,{ Toaster } from 'react-hot-toast'

export const FormStep2 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        if(state.name === '' || state.email ==='' || state.tell === ''){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [])

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.tell !== '' && state.product !== '' && state.logo !== '' && state.tecido !== ''){
            history.push('/step3')
        }else{
            toast.error("Selecione um modelo, logo ou tecido")
        }
            
    }
    const setProducts = (item: string, price: number) => {
        
        dispatch({
            type: FormActions.setProduct,
            payload: item
        })
        dispatch({
            type: FormActions.setPrice,
            payload: price
        })
    }

    const setLogo = (item: string) => {

        dispatch({
            type: FormActions.setLogo,
            payload: item
        })
    }

    const setAplique = (item: string) => {
        dispatch({
            type: FormActions.setAplique,
            payload: item
        })
    }

    const setTer = (item: string) => {
        dispatch({
            type: FormActions.setTer,
            payload: item
        })
    }

    const Limpar = () => {
        const novo = ''

        dispatch({
            type: FormActions.setAplique,
            payload: novo
        })
    }

    let addAplique = 'Grátis'

    if(state.logo === 'Aplique a laser' || state.logo === 'Aplique 3D'){
        addAplique = '+ R$ 2,00'
    }

    let Tecido = 'Grátis'
    if(state.tecido === 'Premium'){
        Tecido = ' + R$ 4,00'
    }
    
    return (
        <Theme>
            <C.Container>
                <Toaster />
    
                <h4>Passo 2/3</h4>
                <h1>Falta pouco {state.name} 😉</h1>
                <p>Agora que ja preecheu seus dados na primeira etapa, informe quais produtos você tem interesse</p>

                <hr />
            
                <h5>Escolha o modelo do produto: {state.product !== '' && '+ R$ ' + state.price + ',00'}</h5>
                <C.Allproducts>
                    <SelectOption
                        onClick={()=>setProducts('Trucker', 26)}
                        title='Boné Trucker'
                        urlImg="Trucker"
                        selected={state.product === 'Trucker'}
                    />
                    
                    <SelectOption
                        onClick={()=>setProducts('Americano', 27)}
                        title='Boné Americano'
                        urlImg="Americano"
                        selected={state.product === 'Americano'}
                    />
                    <SelectOption
                        onClick={()=>setProducts('DadHat', 27)}
                        title='Boné Dad Hat'
                        urlImg="Dad_hat"
                        selected={state.product === 'DadHat'}
                    />
                    <SelectOption
                        onClick={()=>setProducts('Viseira Sport', 24)}
                        title='Viseira Sport'
                        urlImg="Viseira_sport"
                        selected={state.product === 'Viseira Sport'}
                    />
                    <SelectOption
                        onClick={()=>setProducts('Viseira', 22)}
                        title='Viseira'
                        urlImg="Viseira"
                        selected={state.product === 'Viseira'}
                    />
                    <SelectOption 
                        onClick={()=>setProducts('Bucket', 26)}
                        title='Boné Bucket'
                        urlImg="Bucket"
                        selected={state.product === 'Bucket'}
                    />
                    <SelectOption 
                        onClick={()=>setProducts('Aba Reta', 30)}
                        title='Boné Aba Reta'
                        urlImg="Aba_reta"
                        selected={state.product === 'Aba Reta'}
                    />
                    <SelectOption 
                        onClick={()=>setProducts('6 Gomos', 30)}
                        title='6 Gomos'
                        urlImg="Gomos"
                        selected={state.product === '6 Gomos'}
                    />
                    
                </C.Allproducts>
                <h5>Escolha o modelo da logo frontal: {state.logo !== '' && addAplique}</h5>
                
                <C.Allproducts>
                    <SelectOption 
                        onClick={()=>setLogo('Aplique a laser')}
                        title='Aplique a laser'
                        urlImg="Laser"
                        selected={state.logo === 'Aplique a laser'}
                    />
                    
                    <SelectOption 
                        onClick={()=>setLogo('Aplique 3D')}
                        title='Aplique 3D'
                        urlImg="3D"
                        selected={state.logo === 'Aplique 3D'}
                    />
                    <SelectOption 
                        onClick={()=>setLogo('Bordado')}
                        title='Bordado'
                        urlImg="Bordado"
                        selected={state.logo === 'Bordado'}
                    />
                    <SelectOption 
                        onClick={()=>setLogo('Silk')}
                        title='Silk'
                        urlImg="Silk"
                        selected={state.logo === 'Silk'}
                    />
                </C.Allproducts>
                <div className='min-flex'>
                    <div className='esquerda'><h5>Escolha o modelo do aplique lateral: (Opcional) {state.aplique !== '' && ' + R$ 2,00'}</h5></div>
                    <div className='direita'><a onClick={Limpar} className='limpar'>Limpar</a></div>
                </div>
                
                <C.Allproducts>
                    <SelectOption 
                        onClick={()=>setAplique('Aplique a laser')}
                        title='Aplique a laser'
                        urlImg="Aplaser"
                        selected={state.aplique === 'Aplique a laser'}
                    />
                    
                    <SelectOption 
                        onClick={()=>setAplique('Aplique 3D')}
                        title='Aplique 3D'
                        urlImg="Apl3D"
                        selected={state.aplique === 'Aplique 3D'}
                    />
                    <SelectOption 
                        onClick={()=>setAplique('Bordado')}
                        title='Bordado'
                        urlImg="AplBordado"
                        selected={state.aplique === 'Bordado'}
                    />
                </C.Allproducts>
                <h5>Escolha o tipo de tecido: {state.tecido !== '' && Tecido}</h5>
                <C.Allproducts>
                    <SelectOption 
                        onClick={()=>setTer('Padrao')}
                        title='Tecido Padrão'
                        urlImg="Padrao"
                        selected={state.tecido === 'Padrao'}
                    />
                    
                    <SelectOption 
                        onClick={()=>setTer('Premium')}
                        title='Tecido Premium'
                        urlImg="Premium"
                        selected={state.tecido === 'Premium'}
                    />
                    
                </C.Allproducts>
                
                <Link to={'/'} className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próxima Etapa</button>
                <div className='footer'></div>
            </C.Container>
        </Theme>
    )
}