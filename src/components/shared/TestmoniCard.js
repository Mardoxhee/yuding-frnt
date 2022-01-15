import styled from 'styled-components'
import { Icon } from '@iconify/react';


const Contenair = styled.div`
width: 300px;
display:flex;
flex-direction: column;
box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 0.25);
margin-bottom:25px;
.iconeContenair{
    
    padding:10px;
    color:${({theme})=>theme.palette.colors.secondary};
    font-size:2.5rem;
    width: 100%;
    .icone{
        float: left;
    }
}
p{
    text-align:center;
    min-height:140px;
    font-size:0.9rem;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0px 10px;

}
.bottomSide{
    background-color:${({theme})=>theme.palette.colors.secondary};
    padding:10px;
    width:100%;
    display: flex;
    align-items: center;
    
    .author-info{
        margin-left:20px;
        display:flex;
        flex-direction: column;
        .function{
            font-weight:600;
            color:${({theme})=>theme.palette.colors.main}
        }
   
    }

.avatarContenair{
    border:solid 2px white;
    width:68px;
    height:68px;
    border-radius:50%;
    background-color:${({theme})=>theme.palette.colors.secondary}

}
}
`

const TestmoniCard = ({content, author, fonction})=>{
    return(
        <Contenair>
            <div className="iconeContenair">
                <Icon icon="el:quote-right" className="icone" />     
            </div>
            <p>{content}
            </p>
            <div className="bottomSide">
                <div className="avatarContenair">
                    
                </div>
                <div className="author-info">
                    <span className="author">
                  {author}
                    </span>
                    <span className="function">
                        {fonction}
                    </span>
                </div>
            </div>
        </Contenair>
    )
}

export default TestmoniCard