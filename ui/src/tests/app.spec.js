import React from 'react'
import { shallow } from 'enzyme'
import App from '../app'
import { MainScreen } from '../components'

describe('App', () => {
  it('app must render A div', () => {
    let wrapper = shallow(<App/>)
    expect(wrapper.find(MainScreen)).not.toBeNull()
  })
})
