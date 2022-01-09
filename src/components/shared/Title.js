import styled from 'styled-components'
import Soulign from './SoulignBar2'

const Contenair = styled.div`
display:flex;
flex-direction:column;
h1{
    font-size:1.6rem;
    color:${({theme})=>theme.palette.colors.title};
    font-weight:600;
}
span{
    font-weight:200;
}
`

const Title = ({title, subtitle}) =>{
    return(
        <Contenair>
            <Soulign/>
            <h2>{title}</h2>
            <span>{subtitle}</span>
        </Contenair>
    )
}

export default Title