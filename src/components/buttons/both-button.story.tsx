import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { View } from 'react-native';
import { StorybookContainer } from '../../templates/StoryContainer';
import FlipButton from './flip-button.component';
import ReleaseButton from './release-button.component';
import { boolean } from '@storybook/addon-knobs';

storiesOf('app', module)
    .addDecorator(StorybookContainer)
    .add('Both Buttons', () => {
        let animationRunning = boolean('animation running', false);
        return (
            <View style={{ flex: 1 }}>
                <FlipButton flipMode={action('flip mode')} animationRunning={animationRunning} />
                <ReleaseButton startAnimation={action('start animation')} animationRunning={animationRunning} />
            </View>
        );
    });
