import { useHistory } from 'react-router-dom'
import * as C from './styleds'
import { useForm, FormActions } from '../../contexts/formContex'
import { Theme } from '../../components/theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'
import { Product } from '../../components/SelectOption/styles'

export const FormStep2 = () => {
    const history = useHistory()
    const { state, dispatch } = useForm()

    // update level
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    })

    const handleNextStep = () => {
        if(state.name !== '' && state.email !== '' && state.tell !== ''){
            history.push('/step2')
        }else{
            alert('preecha todos os campos antes de ir para a próxima etapa')
        }
            
    }
    const setProducts = (level: string) => {
        dispatch({
            type: FormActions.setProduct,
            payload: []
        })
    }

    
    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Falta pouco {state.name} 😉</h1>
                <p>Agora que ja preecheu seus dados na primeira etapa, informe quais produtos você tem interesse</p>

                <hr />
                <C.Allproducts>
                    <SelectOption 
                        // onClick={()=>setProducts('tr')}
                        title='Boné Trucker'
                        price={26}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product[1] === 'tr'}
                    />
                    <SelectOption 
                        title='Boné Americano'
                        price={26}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product[1] === 'am'}
                    />
                    <SelectOption 
                        title='Boné Dad Hat'
                        price={26}
                        urlImg="https://seubone.com/wp-content/webp-express/webp-images/uploads/2022/07/TRUCKER.png.webp"
                        selected={state.product[1] === 'dh'}
                    />
                    
                </C.Allproducts>
                
                <button onClick={handleNextStep}>Etapa Anterior</button>
                <button onClick={handleNextStep}>Próxima Etapa</button>

            </C.Container>
        </Theme>
    )
}