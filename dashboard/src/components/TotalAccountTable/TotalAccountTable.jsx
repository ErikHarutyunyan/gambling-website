import React from "react";
// Styles
import { Container, List, Lists, Wrapper } from "./TotalAccountTable.styles";
import { BlockIcon, UserIcon } from "../Icons/Icons";
const TotalAccountTable = () => {
  return (
    <Wrapper>
      <h2>Total account</h2>
      <Container>
        <Lists>
          <List>
            <p className="su">
              <span>AG</span>
              <span>1</span>
            </p>
            <p>
              <span>
                <UserIcon /> {0}
              </span>
              <span>
                <BlockIcon /> {0}
              </span>
              <span># {0}</span>
            </p>
          </List>
          <List>
            <p>
              <span>AG 1</span>
              <span>1</span>
            </p>
            <p>
              <span>
                <UserIcon /> {0}
              </span>
              <span>
                <BlockIcon /> {0}
              </span>
              <span># {0}</span>
            </p>
          </List>
          <List>
            <p>
              <span>AG 2</span>
              <span>1</span>
            </p>
            <p>
              <span>
                <UserIcon /> {0}
              </span>
              <span>
                <BlockIcon /> {0}
              </span>
              <span># {0}</span>
            </p>
          </List>
          <List>
            <p>
              <span>AG 4</span>
              <span>1</span>
            </p>
            <p>
              <span>
                <UserIcon /> {0}
              </span>
              <span>
                <BlockIcon /> {0}
              </span>
              <span># {0}</span>
            </p>
          </List>
        </Lists>
      </Container>
    </Wrapper>
  );
};

export default TotalAccountTable;
