import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Head from 'next/head'


const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <Head>
            <title>this is index page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Learn Next.js is awesome"/>
            <PostLink title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
)