import styled from "styled-components";

const ContainerInfo = styled.div`
 display: flex;
 flex: 1;
 flex-direction: column;
 background: var(--white);
 margin: 2rem;
 padding: 1rem;
 border-radius: 1rem;
`;

const UserInfoArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    img{
        height: 100%;
        width: 150px;
        border-radius: 0.5rem;
        margin-right: 0.5rem;
    }
    span{
        font-size: 1rem;
    }
`;

const UserInfoContent = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
`;

export { ContainerInfo, UserInfoArea, UserInfoContent };