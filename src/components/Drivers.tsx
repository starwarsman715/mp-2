// Drivers.tsx
import styled from "styled-components";
import { Info } from "../interfaces/Info";

const AllDriversDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DriverDiv = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  border-left: 4px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DriverName = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.6em;
  font-weight: 600;
  color: var(--heading-color);
`;

const DriverInfo = styled.p`
  margin: 5px 0;
  color: var(--paragraph-color);
  font-size: 1em;
`;

export default function Drivers(props: { data: Info[] }) {
  return (
    <AllDriversDiv>
      {props.data.map((char: Info) => (
        <DriverDiv key={char.driverId}>
          <DriverName>
            {char.givenName} {char.familyName}
          </DriverName>
          <DriverInfo>Date of Birth: {char.dateOfBirth}</DriverInfo>
          <DriverInfo>Nationality: {char.nationality}</DriverInfo>
        </DriverDiv>
      ))}
    </AllDriversDiv>
  );
}
