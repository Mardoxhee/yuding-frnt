import styled from 'styled-components'



const Contenair = styled.div`
  display:flex;
  align-items:center;
  width: 1029px;
  height: 71px;
  border-radius:10px;
  background:${({theme})=>theme.palette.colors.white};
  input {
    border:none;
    width:33%;
    border-right:2px solid  #C4C4C4;
    padding:10px;
    text-align:center;
    font-size:1.3rem;
    font-weight:100;
    &::placeholder {
      color:#C4C4C4;
    }
    &:focus {
      outline:none;
    }
    
  }
  select{
    border:none;
    width:33%;
    text-align:center;
    font-size:1.3rem;
    border-right:2px solid  #C4C4C4;
    padding:10px;
    padding-left:0;
   color:#C4C4C4;
    text-align:center;
    &:focus {
      outline:none;
    }
  }
  div{
    width:33%;
    padding:10px;
    display:flex;
    justify-content:center;
    button{
      background-color:${({theme})=>theme.palette.colors.main};
      border:none;
      font-size:1.3rem;
      padding:12px 100px;
      border-radius:10px;
      color:${({theme})=>theme.palette.colors.white};
      &:hover{
        cursor:pointer;
      }
    }
  }
`

const SearchBar = ()=>{
  return(
    <Contenair>
      <input placeholder="Entrez le nom du restaurant"></input>
      
      <select label="Sélectionnez une catégorie ">
        <option value="" >Sélectionnez une catégorie</option>
        <option value="classic" >Classic</option>
        <option value="" >pizza</option>
      </select>
      <div>
        <button>Rechercher</button>
      </div>
    </Contenair>
  )
}


export default SearchBar 