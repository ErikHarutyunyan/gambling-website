import React from 'react'
// Styles
import {BtnWrap, Wrapper} from "./Notifications.styles"
import Title from '../../components/Title/Title';
import Subheading from '../../components/Subheading';
import NotificationsTable from '../../components/NotificationsTable/NotificationsTable';
const Notifications = () => {
  return (
    <>
      <Subheading />
      <Wrapper>
        <Title title={"NOTIFICATIONS"} textAlign={"center"} />
        <BtnWrap>
          <button className="active">Announcement</button>
          <button>Maintenance</button>
          <button>Profile</button>
        </BtnWrap>
        <div style={{overflowX:"auto"}}>
            <NotificationsTable />
        </div>
      </Wrapper>
    </>
  );
}

export default Notifications