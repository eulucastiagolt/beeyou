module.exports = {
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    stories: ['../stories/**/*.stories.@(js|jsx|md|mdx|ts|tsx)'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-essentials',
    ],
};