import * as React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, number, text } from '@kadira/storybook-addon-knobs'
import App from '../src/containers/App'

declare const module: any

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

stories.add('Show App', () => {
  return (
    <App />
  )
})

stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala')
  const age = number('Age', 89)

  const content = `I am ${name} and I'm ${age} years old.`
  return (<div>{content}</div>)
})
