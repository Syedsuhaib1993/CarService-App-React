import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="input-group">
        <input required type="text" name="text" autoComplete="off" className="input" />
        <label className="user-label">First Name</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-group {
   position: relative;
  }

  .input {
  width:100%
   border: solid 1.5px orange;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #f5f5f5;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #e8e8e8;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid orange;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: white;
   padding: 0 .2em;
   color: orange;
  }`;

export default Input;
