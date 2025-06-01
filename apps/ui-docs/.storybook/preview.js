import _ from '../node_modules/@bami-design-ui/ui/dist/styles/design-system.scss'

//eslint-disable-next-line no-console
console.log('_', _) // stoy book은 tree shaking에서 걸러짐, tree shaking에 걸리지 않도록 log 추가

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
