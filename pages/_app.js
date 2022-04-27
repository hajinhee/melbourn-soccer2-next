import {Header, Layout, Nav} from "../components";
import { wrapper } from '../store/store'

const App = ({ Component, pageProps}) => {
  return (<>
    <Nav/>
      <Header/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
    )
  }
  
  export default wrapper.withRedux(App)
  