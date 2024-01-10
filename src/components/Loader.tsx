import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import styled from 'styled-components/native';

const LoaderBlack = require('../../assets/loader/BounceLoad-Black.json');
const LoaderGreen = require('../../assets/loader/BounceLoad-Green.json');

const LoaderContainer = styled.View`
  flex: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

type LoaderProps = {
  isVisible: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  const lottieViewRef = useRef(null);
  if (!isVisible) {
    return null;
  }

  return (
    <LoaderContainer
      style={{
        zIndex: 9999,
      }}
    >
      <LottieView
        source={LoaderBlack} // Replace with your Lottie file path
        autoPlay
        ref={lottieViewRef}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        loop
      />
    </LoaderContainer>
  );
};

export default Loader;
