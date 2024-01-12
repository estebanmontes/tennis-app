import React from 'react';
import * as Icons from '../../assets/icons';

interface IconProps {
  name: keyof typeof Icons;
  width?: number;
  height?: number;
  size?: number;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size,
  width = 24,
  height = 24,
  fill = 'black',
  ...props
}) => {
  const IconSvg = Icons[name];
  console.log('IconSvg', name);
  if (!IconSvg) {
    console.warn(`Icon ${name} does not exist`);
    return null;
  }
  return <IconSvg width={width || size} height={height || size} fill={fill} {...props} />;
};

export default Icon;
