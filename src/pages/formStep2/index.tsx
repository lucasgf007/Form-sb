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
        if(state.name === '' && state.email ==='' && state.tell === ''){
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        
    }, [])

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.tell !== '' && state.product !== ''){
            history.push('/step3')
        }else{
            toast.error("Escolha um produto!")
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

    
    return (
        <Theme>
            <C.Container>
                <Toaster />
                <p>Passo 2/3</p>
                <h1>Falta pouco {state.name} 😉</h1>
                <p>Agora que ja preecheu seus dados na primeira etapa, informe quais produtos você tem interesse</p>

                <hr />
                <C.Allproducts>
                    <SelectOption 
                        onClick={()=>setProducts('Trucker', 26)}
                        title='Boné Trucker'
                        price={26}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product === 'Trucker'}
                    />
                    <SelectOption 
                        onClick={()=>setProducts('Americano', 27)}
                        title='Boné Americano'
                        price={27}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product === 'Americano'}
                    />
                    <SelectOption 
                        onClick={()=>setProducts('DadHat', 26)}
                        title='Boné Dad Hat'
                        price={26}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product === 'DadHat'}
                    />
                    
                </C.Allproducts>
                
                <Link to={'/'} className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próxima Etapa</button>

            </C.Container>
        </Theme>
    )
}