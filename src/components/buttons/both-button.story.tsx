import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { StorybookContainer } from '../../templates/StoryContainer';
import FlipButton from './flip-button.component';
import ReleaseButton from './release-button.component';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('Both Buttons', () => {
        return (
            <View style={{ flex: 1 }}>
                <FlipButton />
                <ReleaseButton />
            </View>
        );
    });
