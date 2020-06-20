import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import MyRequestCard from "./MyRequestCard";
import { getMyRequests } from "../modules/getRequests";

const MyListComponent = ({ selectedStatus }) => {
  const [myRequests, setMyRequests] = useState([]);
  
  useEffect(() => {
    getList({ selectedStatus });
  }, []);

  const getList = async () => {
    const requests = await getMyRequests();
    setMyRequests(requests);
    debugger
  };


  const cards = myRequests.map((request) => (
    <MyRequestCard key={request.id} request={request} />
  ));

  return (
    <Card.Group id="my-list" itemsPerRow={1}>
      {cards}
    </Card.Group>
  );
};

export default MyListComponent;
