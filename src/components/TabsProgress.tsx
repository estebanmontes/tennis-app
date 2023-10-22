import React, { useState } from 'react';
import styled from 'styled-components/native';
const TabsContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 16px;
  width: 100%;
  justify-content: space-around;
`;

const Tab = styled.View`
  height: 4px;
  margin-right: 2px;
  background-color: ${(props) =>
    props.fill ? props.theme.colors.primary : props.theme.colors.gray};
  width: 42px;
`;

const TabProgress = ({ count, step }) => {
  const [tabs, setTabs] = useState(new Array(count).fill(false));
  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <Tab fill={step >= index + 1} key={index} />
      ))}
    </TabsContainer>
  );
};

export default TabProgress;
