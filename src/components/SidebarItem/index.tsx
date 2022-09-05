import { Link } from 'react-router-dom';
import * as C from './styles'
import { ReactComponent as ProfileIcon} from '../../svgs/profile.svg';
import { ReactComponent as BagIcon} from '../../svgs/bag.svg';
import { ReactComponent as QtdIcon} from '../../svgs/qtd.svg';
import { ReactComponent as PriceIcon} from '../../svgs/price.svg';

type Props = {
    title: string;
    descrtiption: string;
    icon: string;
    path: string;
    active: boolean
}

export const SideBarItem = ({title, descrtiption, icon, path, active}:Props) => {
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title active={active}>{title}</C.Title>
                    <C.Description active={active}>{descrtiption}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && 
                        <ProfileIcon fill='white' width={24} height={24}/>
                    }

                    {icon === 'bag' && 
                        <BagIcon fill='white' width={24} height={24}/>
                    }
                    
                    {icon === 'qtd' && 
                        <QtdIcon fill='#FFF' width={24} height={24}/>
                    }
                    {icon === 'price' && 
                        <PriceIcon fill='#FFF' width={24} height={24}/>
                    }
                    
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
} 