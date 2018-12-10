const withFetcher = ({ url, collName }) => Component =>
    class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                [collName]: [],
            }
        }

        componentDidMount() {
            if (typeof url === 'function') {
                url = url(this.props)
            }

            const params = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }

            fetch(url, params)
                .then(response => response.json())
                .then(data => {
                    this.setState({ [collName]: data })
                })
        }

        render() {
            return <Component {...this.props} {...this.state} />
        }
    }