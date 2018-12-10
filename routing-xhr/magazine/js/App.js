class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Homepage}
                    />
                    <Route
                        exact
                        path="/index.html"
                        component={Homepage}
                    />
                    <Route
                        exact
                        path="/subscribtion"
                        component={SubscribtionPage}
                    />
                    <Route
                        path="/article"
                        component={ArticlePage}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}