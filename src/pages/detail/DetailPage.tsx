import UserInfo from "../../components/detail/UserInfo"
import Layout from "../../components/detail/Layout"
import BackButton from "../../components/ui/BackButton"

function DetailPage() {
  return (
    <>
    <BackButton/>
    <Layout>
        <UserInfo/>
    </Layout>
    </>
  )
}

export default DetailPage