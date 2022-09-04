import * as C from './styles'
import { useForm } from '../../contexts/formContex'

export const Header = () => {
    const { state } = useForm()

    return (
        <C.Conteiner>
            <img src="https://seubone.com/wp-content/uploads/2022/01/sb-branca.png" alt="seubone" width={200}/>
        </C.Conteiner>
    )
}