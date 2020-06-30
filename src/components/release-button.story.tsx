import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { StorybookContainer } from '../templates/StoryContainer';
import ReleaseButton from './release-button.component';
import { boolean } from '@storybook/addon-knobs';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('ReleaseButton', () => (
        <View style={{ flex: 1 }}>
            <ReleaseButton startAnimation={action('start animation')} animationRunning={boolean('animation running', false)} />
        </View>
    ));
