import styled from 'styled-components'

const Contenair = styled.div`
width: 120px;
height: 2px;
background-color:#C4C4C4;
display: flex;
align-items: center;
justify-content: center;
margin-bottom:10px;
span{
    width:70%;
    height:100%;
    background:${({theme})=>theme.palette.colors.main};
}
`

const SoulignBar =()=>{
    return(
        <Contenair>
            <span></span>
        </Contenair>
    )
} 

export default SoulignBar;