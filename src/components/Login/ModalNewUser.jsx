import React from "react";
import styled from "styled-components";

const ModalNewUser = () => {
  return (
    <>
      <Overlay>
        <ContainerModal>
          <ContainerIcon>
          <i className="fa-solid fa-user-plus"></i>
          </ContainerIcon>
          <ContainerText>
            <h3>El usuario se creo exitosamente</h3>
          </ContainerText>
        </ContainerModal>
      </Overlay>
    </>
  );
};

export default ModalNewUser;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerModal = styled.article`
  width: min(90%, 400px);
  padding: 3em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  background-color: #EAEBED;
  border-radius: 2em;
`;

const ContainerIcon = styled.div`
    width: 100%
    display: flex;
    align-items: center;
    justify-content: center;

    i{
        font-size: 4em;
        color:#82EF;
    }
`;

const ContainerText = styled.div`
    width: 100%
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3{
        color: #17181C;
        font-size: 1.7em;
    }
`;
