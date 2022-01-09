import styled from 'styled-components'

const Contenair = styled.div`
width: 120px;
height:2px;
background-color:#C4C4C4;
margin-bottom:10px;
div{
    width:50% !important;
    height:100% !important;
    background-color:${({theme})=>theme.palette.colors.main};
}
`

const SoulignBar2 =()=>{
    return(
        <Contenair>
            <div></div>
        </Contenair>
    )
} 

export default SoulignBar2