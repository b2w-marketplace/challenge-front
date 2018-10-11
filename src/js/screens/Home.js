import React, { Component } from 'react'
import { Flex } from 'grid-styled'
import PropTypes from 'prop-types'

import Sidebar from '../components/SideBar'
import Content from '../components/Content'

class Home extends Component {
    render () {
        console.log(this.props)
        let { data } = this.props
        return (
            <Flex
                width={1}
                justifyContent='center'
            >
                <Flex
                    width={[1, 9 / 10, 7 / 10]}
                    alignItems='stretch'
                >
                    <Sidebar profile={data.profile} />
                    <Content profile={data.profile} />
                </Flex>
            </Flex>
        )
    }
}

Home.propTypes = {
    data: PropTypes.object.isRequired
}

export default Home
