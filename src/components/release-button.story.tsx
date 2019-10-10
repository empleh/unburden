import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { StorybookContainer } from '../templates/StoryContainer';
import ReleaseButton from './release-button.component';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('ReleaseButton', () => (
        <View style={{ flex: 1 }}>
            <ReleaseButton unburdenMessage={action('unburdenMessage')} />
        </View>
    ));
