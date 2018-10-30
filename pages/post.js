import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import Head from 'next/head'


const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
))

const Page = (props) => (
    <Layout>
        <Head>
            <title>this is post page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Content />
    </Layout>
)

export default Page
