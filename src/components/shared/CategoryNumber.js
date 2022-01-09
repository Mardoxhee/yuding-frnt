import styled from 'styled-components'

const Contenair = styled.div`
width: 38px;
height: 38px;
border-radius:50%;
display:flex;
justify-content: center;
align-items: center;
background-color: ${({theme})=>theme.palette.colors.categoryNumber};
color:${({theme})=>theme.palette.colors.categoryNumberFontColor};
font-weight:500;
`

const CategoryNumber = ({value})=>{
    return(
        <Contenair>
            <span>{value}</span>
        </Contenair>
    )
}

export default CategoryNumber