import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component, apollo } = this.props; 
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp);