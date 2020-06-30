import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addons } from '@storybook/addons';

function loadStories() {
    const req = require.context('../src', true, /\.story\.tsx?$/);
    req.keys().forEach((story) => req(story));
}

addDecorator(withKnobs({ escapeHTML: false }));

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: undefined,
});

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphonex',
    },
});

configure(loadStories, module);
