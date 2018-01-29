import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Card, Divider, SocialIcon } from 'react-native-elements';

class About extends Component {
  openGithub = () => {
    Linking.openURL('https://github.com/maritzuhcom/dog-profiles');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Card
          containerStyle={Styles.topContainer}
        >
          <Text style={Styles.header}>About this App</Text>
          <Divider />
          <View>
            <Text style={Styles.about}>
              Hello, this is a app demo I made using React Native, Redux, Redux-Thunk, eslint, Axios,
              Lodash, and Babel. Made it as a quick example over the weekend.
              It was a little challenging when styling in React native since there is not a lot of documentation with some things.
              Overall it was fun and it is always a learning experience.
            </Text>
          </View>
        </Card>

        <SocialIcon
          style={Styles.github}
          type="github"
          onPress={this.openGithub}
        />
      </View>
    );
  }
}

export default About;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    justifyContent: 'center',
  },
  about: {
    marginTop: 5,
  },
  topContainer: {
    marginBottom: 15,
  },
  github: {
    alignSelf: 'center',
  },
});
