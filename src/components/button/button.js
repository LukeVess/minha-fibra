import styled from '@emotion/styled';

export const Button = styled.button(props=> ({
    padding: '0 24px',
    color: '#fff',
    borderRadius: '30px', 
    backgroundColor: '#2880AD',
    border: 'none',
    width: '124px',
    height: '56px',
    ':hover': {
        opacity: '80%'
    },
    ':active': {
        backgroundColor: '#042C41',
        opacity: '100%'
    },
    ':focus': {
        outline: '#10A2ED',
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineOffset: '4px',
    },
}))