import styled from 'styled-components';
const Button = styled.button`
    background-color: #7158e2;
    border: 1px solid: #7d5fff;
    border-radius: 4px;
    width: 100%;
    font-size: 20px;
    font-family: 'Press Start 2P', cursive;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;

    &:active{
        outline: none;
        border-style: none;
    }
`;

export default Button;