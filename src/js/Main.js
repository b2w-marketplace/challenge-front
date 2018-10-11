import '../sass/style.scss'

const getReact = () => import('react')
const getReactDom = () => import('react-dom')
const getLoadable = () => import('react-loadable')
const getGridStyled = () => import('grid-styled')
const getAxios = () => import('axios')
const getCircularProgress = () => import('@material-ui/core/CircularProgress')

window.onload = () => {
    let root = document.createElement('div')
    document.body.appendChild(root)

    let imports = new Map([
        ['react', getReact()],
        ['react-dom', getReactDom()],
        ['react-loadable', getLoadable()],
        ['grid-styled', getGridStyled()],
        ['axios', getAxios()],
        ['CircularProgress', getCircularProgress()]
    ])

    Promise.all(imports)
        .then(async result => {
            let res = new Map(await Promise.all(result.map(async el => [el[0], await el[1]])))

            let React = res.get('react')
            let { render } = res.get('react-dom')
            let Loadable = res.get('react-loadable').default
            let { Flex } = res.get('grid-styled')
            let CircularProgress = res.get('CircularProgress').default
            let axios = res.get('axios').default

            const loading = () => (
                <Flex
                    width={1}
                    style={{ height: '100vh' }}
                    justifyContent='center'
                    alignItems='center'
                >
                    <CircularProgress style={{ color: 'white' }} size={50} />
                </Flex>
            )

            const Home = Loadable.Map({
                loading,
                loader: {
                    Home: () => import('./screens/Home'),
                    data: () => axios.get('http://www.mocky.io/v2/5a5e38f3330000b0261923a5')
                        .then(res => res.data)
                        .catch(err => console.log(err))
                },
                render (loaded, props) {
                    let Home = loaded.Home.default
                    let data = loaded.data

                    return <Home data={data} />
                }
            })

            render(
                <Home />
                , root
            )
        })
        .catch(err => console.log(err))
}
