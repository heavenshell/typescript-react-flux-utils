import { configure, addDecorator } from '@kadira/storybook'

function loadStories() {
  require('../build/stories/App')
}

configure(loadStories, module)
