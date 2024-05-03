import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Record = (props) => (
  <div>
    <Card sx={{ minWidth: "80vw" }} key={props._id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.user}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
    <br/>
  </div>
  
);

export default function RecordList() {
 const [records, setRecords] = useState([]);

 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://dapp-home-server-2f2035829a1e.herokuapp.com/record`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const records = await response.json();
     setRecords(records.reverse());
   }

   getRecords();

   return;
 }, [records.length]);

 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
      <Record
      key={record._id}  
      title={record.title}
      content={record.content}
      user={record.user}
    />
     );
   });
 }

 // This following section will display the table with the records of individuals.
 return (
   <div>
    {recordList()}
   </div>
 );
}