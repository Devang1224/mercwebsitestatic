import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
