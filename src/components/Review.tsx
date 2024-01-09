import React from 'react';
import { StyleSheet, View } from 'react-native';

type ReviewProps = {
  rating: number;
};

const Review: React.FC<ReviewProps> = ({ rating = 1 }) => {
  return <View>{Array.from(Array(10).keys())}</View>;
};

const styles = StyleSheet.create({
  image: {},
});
