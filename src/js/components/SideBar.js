import React, { Component } from 'react'
import { Flex } from 'grid-styled'
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'

class SideBar extends Component {
    state = {
        open: false,
        isMobile: false
    }

    componentDidMount () {
        window.onresize = this.resize
        this.resize()
    }

    resize = () => {
        if (window.innerWidth <= 600 && !this.state.isMobile) {
            this.setState({ isMobile: true })
        }
    }

    toggleBar = () => {
        this.setState({ open: !this.state.open })
    }

    render () {
        let { profile } = this.props
        let { isMobile, open } = this.state
        profile.image = 'https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png'
        return (
            <Flex
                width={[open ? 1 : '50px', 1 / 3, 4 / 10]}
                flexDirection='column'
                className='sidebar'
                style={ open ? { position: 'absolute', height: document.body.clientHeight } : {}}
                onClick={isMobile ? this.toggleBar : () => {}}
            >
                <Flex
                    width={1}
                    justifyContent='center'
                    mt={['20px', '40px', '60px']}
                    mb={[0, '20px', '40px']}
                >
                    <Flex
                        className='avatar'
                        justifyContent='center'
                        alignItems='center'
                        width={[open ? 7 / 10 : 9 / 10, 7 / 10]}
                        py={'2%'}
                    >
                        <Flex
                            className='space'
                            justifyContent='center'
                            alignItems='center'
                            py={'5%'}
                        >
                            <Flex
                                className='content'
                                justifyContent='center'
                                alignItems='center'
                                py={'10%'}
                            >
                                <img src={profile.image} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Hidden xsDown={!open}>
                    <Flex
                        width={[open ? 1 : 0, 1]}
                        style={{ overflowX: 'hidden' }}
                        flexDirection='column'
                        pb='60px'
                    >
                        <Flex
                            className='sidebar-name'
                        >
                            <h1>{profile.name}</h1>
                        </Flex>
                        <Flex
                            className='profession'
                            mb='60px'
                        >
                            <p>{profile.profession}</p>
                        </Flex>
                        <Divider style={{ backgroundColor: '#dbdbdb' }}/>
                        <Flex
                            className='sidebar-fragment'
                            mt='60px'
                        >
                            <h1>profile</h1>
                            <p>{profile.description}</p>
                        </Flex>
                        <Flex
                            className='sidebar-fragment'
                        >
                            <h1>contact</h1>
                            <p>
                                {profile.contact.tel}<br/>
                                {profile.contact.cel}<br/><br/>
                                {profile.contact.address}<br/><br/>
                                {profile.contact.website}<br/>
                                {profile.contact.mail}
                            </p>
                        </Flex>
                        <Flex
                            className='sidebar-fragment'
                        >
                            <h1>skills</h1>
                            {
                                profile.skills.map(el => (
                                    <React.Fragment key={el.name}>
                                        <p>{el.name.toUpperCase()}</p>
                                        <div className='skillbar'>
                                            <div className='skillbar-fill' style={{ width: el.value }}></div>
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                        </Flex>
                    </Flex>
                </Hidden>
            </Flex>
        )
    }
}

SideBar.propTypes = {
    profile: PropTypes.object.isRequired
}

export default SideBar
