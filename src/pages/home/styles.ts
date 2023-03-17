import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;


h1 {
    font-size: 1.5rem;
}
`;

const Content = styled.div`

    display: flex;
    background: var(--white);
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
    color: var(--black);
    width: 90%;


span{
    font-size: 3rem;
}

input {
    padding: 0.5rem;
    border-color: #0005;
    border-radius: 0.25rem;
    width: 100%;
    height: 40px;
    border-width: 1px;
}

button {
    cursor: pointer;
    height: 40px;
    margin-left: 1rem;
    padding: 0 10px;
    border: none;
    border-radius: 0.25rem;
    background: var(--brackground);
    color: var(--white);
    font-weight: bold;
}
`;
export { Container,Content };