import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import NumberPicker from './../../src/components/shared/NumberPicker';
import ResponsiveTimePickers from './../../src/components/shared/TimePick';
import MultipleSelect from './../../src/components/shared/MultiSelect';
import LoadingButton from './../../src/components/shared/LoadingButton';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-weight: 300;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    form {
      width: 45rem;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      .buttonContainer {
        .MuiLoadingButton-root {
          background-color: #f7941d;
        }
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .input-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0.5rem;
        justify-content: space-between;

        .textfield {
          width: 48%;
          .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: #f7941d;
          }
          .MuiFormLabel-root.Mui-focused {
            color: #212121 !important;
          }
        }
      }
    }
  }
`;
const CreationRestaurant = () => {
  return (
    <Container>
      <div className="container">
        <h2>Créer votre restaurant sur la plateforme Yuding</h2>
        <form>
          <div className="input-group">
            <TextField
              id="outlined-basic"
              label="Nom du restaurant"
              variant="outlined"
              className="textfield"
            />
            <div className="textfield">
              <NumberPicker label="Nombre de place" className="textfield" />
            </div>
          </div>
          <div className="input-group">
            <div className="textfield">
              <ResponsiveTimePickers className="textfield" />
            </div>
            <div className="textfield">
              <ResponsiveTimePickers className="textfield" />
            </div>
          </div>
          <div className="input-group">
            <TextField
              id="outlined-basic"
              label="Commune"
              variant="outlined"
              className="textfield"
            />
            <TextField
              id="outlined-basic"
              label="Quartier"
              variant="outlined"
              className="textfield"
            />
          </div>
          <div className="input-group">
            <TextField
              id="outlined-basic"
              label="Avenue"
              variant="outlined"
              className="textfield"
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Numéro"
              variant="outlined"
              className="textfield"
            />
          </div>
          <div className="input-group">
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              className="textfield"
              multiline
              maxRows={4}
            />
            <div className="textfield">
              <MultipleSelect />
            </div>
          </div>
          <div className="buttonContainer">
            <LoadingButton className="buttonConnexion" action="Créer" type="submit" />
          </div>
        </form>
      </div>
    </Container>
  );
};
export default CreationRestaurant;
