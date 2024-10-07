import Drivers from "./components/Drivers.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Info } from "./interfaces/Info.ts";

const ParentDiv = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

export default function App() {
  // useState Hook to store Data.
  const [data, setData] = useState<Info[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const rawData = await fetch(
          "https://ergast.com/api/f1/drivers.json?limit=1000"
        );
        const dataJson = await rawData.json();
        const driversData: Info[] = dataJson.MRData.DriverTable.Drivers;
        setData(driversData);
      } catch (e) {
        console.log("There was the error: " + e);
      }
    }
    fetchData();
  }, []);

  return (
    <ParentDiv>
      <Drivers data={data} />
    </ParentDiv>
  );
}
