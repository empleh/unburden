import { boolean } from "@storybook/addon-knobs";
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, Text, View } from "react-native";
import { StyleVariables } from "../style_variables";
import { StorybookContainer } from '../templates/StoryContainer';
import Separator from './separator.component';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('App', () => (
        <View style={{ flex: 1 }}>
          <View style={styles.top} />
          <View style={styles.separator}>
            <Separator animating={boolean('animating', false)} />
          </View>
          <View style={styles.bottom} />
        </View>
    ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'center',
    paddingTop: StyleVariables.space.small,
    fontSize: 16,
  },
  top: {
    flex: 4,
  },
  separator: {
    flex: 1,
    marginTop: StyleVariables.space.large,
  },
  actions: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 10,
  },
  bottom: {
    flex: 4,
    backgroundColor: 'white',
  },
});