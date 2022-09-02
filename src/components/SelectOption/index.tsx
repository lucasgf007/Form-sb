import * as C from './styles'

type Props = {
    title: string;
    urlImg: string;
    price: number;
    selected: boolean;
}

export const SelectOption = ({title, urlImg, price, selected}: Props) => {
    return (
        <C.Container selected={selected}>
            <C.Product>
                <C.Img>
                    <img src={urlImg} alt={title} width={150}/>
                </C.Img>
                <C.Title>{title}</C.Title>
            </C.Product>
        </C.Container>
    );
}