
import { StyledContainer } from './styled';

export const Filter = ({onFilter}) => {
   const searchHandler = event => {
    onFilter(event.currentTarget.value);
  };
    return (
      <StyledContainer className='filter-wrap'>
        <span className='label-name'>Find contacts by name:</span>
        <input
          className='form-input'
          type='text'
          name='filter'
          title='Enter the name of your contact'
          onChange={e => searchHandler(e)}
        />
      </StyledContainer>
    );
}
