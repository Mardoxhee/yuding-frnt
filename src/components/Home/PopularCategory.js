import styled from 'styled-components'
import Title from './../shared/Title'

const Contenair = styled.section`
width: 100%;
height: 60vh;
background-color:#F6F6F6;
padding:40px;
`

const Popular = ()=>{
    return(
        <Contenair>
            <Title title ="Les plus populaires" subtitle ="Les resturants les plus fréquentés de la ville de la ville de Kinshasa "/>

        </Contenair>
    )
}
export default Popular 