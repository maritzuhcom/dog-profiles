import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

import { getDogList, getBreenImages } from '../actions/dog';

class DogList extends Component {
  static defaultProps = {
    dogList: [],
    dispatchGetDogs: () => {},
    dispatchGetBreedImages: () => {},
    navigation: { navigate: () => {} },
  }

  static propTypes = {
    dogList: PropTypes.array,
    dispatchGetDogs: PropTypes.func,
    dispatchGetBreedImages: PropTypes.func,
    navigation: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatchGetDogs();
  }

  getBreed = async (breed) => {
    try {
      await this.props.dispatchGetBreedImages(breed);
    } catch (e) {
      throw (e);
    }

    this.props.navigation.navigate('BreedImages');
  }

  renderDogs = () => {
    if (isEmpty(this.props.dogList)) {
      return (
        <Text>
          No Dogs Fetched
        </Text>
      );
    }

    return map(this.props.dogList, (dogName, i) => (
      <ListItem
        key={i}
        title={dogName}
        onPress={() => { this.getBreed(dogName); }}
      />
    ));
  }

  render() {
    return (
      <ScrollView>
        <List containerStyle={Styles.container}>
          {this.renderDogs()}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProp = state => ({
  dogList: [...state.dogs.dogList],
});

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatchGetDogs: getDogList,
  dispatchGetBreedImages: getBreenImages,
}, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(DogList);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
