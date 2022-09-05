import * as C from './styles'
// imgs
import Trucker from '../../assets/imgs/TRUCKER.webp'
import Americano from '../../assets/imgs/AMERICANO.webp'
import Aba_reta from '../../assets/imgs/ABA-RETA.webp'
import Gomos from '../../assets/imgs/6-GOMOS.webp'
import Bucket from '../../assets/imgs/BUCKET.webp'
import Viseira_sport from '../../assets/imgs/VISEIRA-SPORT.webp'
import Viseira from '../../assets/imgs/VISEIRA.webp'
import Dad_hat from '../../assets/imgs/DAD-HAT.webp'

type Props = {
    title: string;
    urlImg: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, urlImg, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Product>
                <C.Img>
                    {urlImg === 'Trucker' && <img src={Trucker} alt={title} width={150}/>}
                    {urlImg === 'Americano' && <img src={Americano} alt={title} width={150}/>}
                    {urlImg === 'Viseira_sport' && <img src={Viseira_sport} alt={title} width={150}/>}
                    {urlImg === 'Viseira' && <img src={Viseira} alt={title} width={150}/>}
                    {urlImg === 'Bucket' && <img src={Bucket} alt={title} width={150}/>}
                    {urlImg === 'Gomos' && <img src={Gomos} alt={title} width={150}/>}
                    {urlImg === 'Aba_reta' && <img src={Aba_reta} alt={title} width={150}/>}
                    {urlImg === 'Dad_hat' && <img src={Dad_hat} alt={title} width={150}/>}
                </C.Img>
                <C.Title>{title}</C.Title>
            </C.Product>
        </C.Container>
    );
}