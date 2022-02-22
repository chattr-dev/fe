import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timer from "../components/timer";
import { UserContext } from "../providers/user";

export default function Member() {
  const user = useContext(UserContext);

  return (
    <div>
      <Typography variant="h4">Projects:</Typography>
      <div style={{ marginTop: "20px" }}>
        {user.projects.map((project, i) => {
          return (
            <Accordion
              key={i}
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
                <Timer />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
