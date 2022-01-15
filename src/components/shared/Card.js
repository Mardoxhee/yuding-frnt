import styled from "styled-components"

const Contenair = styled.div`
width: 300px;
height: 220px;
display: flex;
flex-direction:column;
margin-bottom:15px;
.status{
display: flex;
border-radius:3px;
justify-content:center;
color:${({theme})=>theme.palette.colors.red} ;
border:${({theme})=>theme.palette.colors.red} solid 2px;
align-items: center;
text-align: center;
width:30%;
margin-top:8px;
font-size:0.8rem;
}
.mainCard{
    width: 100%;
    height: 201px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(3,7,9,1) 0%, rgba(6,10,11,0.6842087176667542) 0%, rgba(0,0,0,0) 54%), url(${({theme})=>theme.img.images.cardBackground});
    background-size: cover;
    padding:10px;
    @media only screen and (max-width: 799px) {
        
    }
    .upSide{
        width: 100%;
        display: flex;
        justify-content: space-between;
        color:${({theme})=>theme.palette.colors.white} ;
        h4{
            padding:3px 10px;
            background-color:${({theme})=>theme.palette.colors.black};
            font-size:0.7rem;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        h5{
            font-weight:300;
            padding:0px 10px;
            background-color:${({theme})=>theme.palette.colors.red};
            font-size:0.7rem;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        
      
    }
    .downSide{
        font-size:0.8rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        color:${({theme})=>theme.palette.colors.white} ;
    }
}

`

const Card = ({category, reduction, title, openStatus, adress}) =>{
    return(
            <Contenair>
                <div className="mainCard">
                    <div className="upSide">
                        <h4>{category}</h4>
                        <h5>{reduction}</h5> 
                    </div>
                    <div className="downSide">
                        <h3>{title}</h3>
                        <span>{adress}</span>
                    </div>
                </div>
                <div className="status">
                    {openStatus}
                </div>
            </Contenair>
    )
}

export default Card