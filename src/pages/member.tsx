import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

export default function Member() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/user/120`).then((res) => {
      setUser(res.data);
      setLoading(false);
    });
  }, [loading]);

  if (loading) return <Typography variant="h4">Loading..</Typography>;

  return (
    <div>
      <Typography variant="h4">Projects:</Typography>
      <div style={{ marginTop: "20px" }}>
        {user.projects.map((project) => {
          return (
            <Accordion
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
              expanded={true}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  backgroundColor: "#ededed",
                }}
              >
                <Typography>{project.type}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Client: {project.client.name}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
