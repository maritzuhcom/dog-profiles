import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import map from 'lodash/map';

const BreedImages = ({ dogImageList }) => (
  <ScrollView>
    <View style={Styles.container}>
      {
        map(dogImageList, (imageUrl, i) => (
          <Avatar
            key={i}
            large
            rounded
            source={{ uri: imageUrl }}
          />
        ))
      }
    </View>
  </ScrollView>
);

BreedImages.propTypes = {
  dogImageList: PropTypes.array,
};

BreedImages.defaultProps = {
  dogImageList: [],
};

const mapStateToProp = state => ({
  dogImageList: [...state.dogs.dogImageList],
});

export default connect(mapStateToProp)(BreedImages);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
