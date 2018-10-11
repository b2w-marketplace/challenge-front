import React, { Component } from 'react'
import { Flex } from 'grid-styled'
import PropTypes from 'prop-types'

class Content extends Component {
    render () {
        let { profile } = this.props

        return (
            <Flex
                pt={['20px', '40px', '60px']}
                pl='40px'
                pr={['40px', '100px']}
                width={1}
                flexDirection='column'
                bg={'white'}
            >
                <Flex
                    width={1}
                    className='content-fragment'
                    flexDirection='column'
                >
                    <h1>work experience</h1>
                    {
                        profile.experience.map(el => (
                            <React.Fragment key={el.name}>
                                <h2>{el.name}</h2>
                                <h3>{el.date}</h3>
                                <p>{el.description}</p>
                            </React.Fragment>
                        ))
                    }
                </Flex>
                <Flex
                    width={1}
                    className='content-fragment'
                    flexDirection='column'
                >
                    <h1>education</h1>
                    {
                        profile.education.map(el => (
                            <React.Fragment key={el.name}>
                                <h2>{el.name}</h2>
                                <h3>{el.date}</h3>
                                <p>{el.description}</p>
                            </React.Fragment>
                        ))
                    }
                </Flex>
            </Flex>
        )
    }
}

Content.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Content
