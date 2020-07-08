import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { StorybookContainer } from '../../templates/StoryContainer';
import FlipButton from './flip-button.component';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('FlipButton', () => (
        <View style={{ flex: 1 }}>
            <FlipButton />
        </View>
    ));
