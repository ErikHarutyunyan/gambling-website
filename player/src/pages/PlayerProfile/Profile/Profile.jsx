import React from 'react'
// Styles
import {Container, Wrapper} from "./Profile.styles"
import Title from '../../../components/Title/Title'
import AccountDetails from '../../../components/AccountDetails/AccountDetails'
// import PersonalDetails from '../../../components/PersonalDetails/PersonalDetails'
// import PasswordDetails from '../../../components/PasswordDetails/PasswordDetails'
// import WalletDetails from '../../../components/WalletDetails'
const Profile = () => {
  return (
<Wrapper>
    <Container>
      <Title title={'PROFILE'}/>
      <AccountDetails />
      {/* <PersonalDetails /> */}
      {/* <WalletDetails /> */}
      {/* <PasswordDetails /> */}
    </Container>

</Wrapper>
  )
}

export default Profile