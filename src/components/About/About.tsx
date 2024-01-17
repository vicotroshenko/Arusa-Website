import { Button, Typography } from "@mui/material";
import Container from "../Container/Container";
import "./About.css";
import React, { useEffect, useRef, useState } from "react";


const About = () => {
  
  return (
    <Container bgColor="secondary">
      <ul className="aboutContainer">
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-1.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-2.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-3.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
        <li className="aboutItem aboutTitle">
          <Typography variant="h2" sx={{ 
            fontSize:{
              xs:"2.4rem",
              lg: "4.8rem"
            },
            marginBottom: "36px",
          }}>
            Creating perfect lines and imposing presence
          </Typography>
          <Typography variant="subtitle1">
            Developed the concept of exclusivity, a Arusa features timeless
            furniture, with natural fabrics, curved lines, plenty of mirrors and
            classic design, which can be incorporated into any decor project.
            The pieces enchant for their sobriety, to last for generations,
            faithful to the shapes of each period, with a touch of the present.
          </Typography>
					<Button variant="contained" >show all</Button>
        </li>
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-4.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-5.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
        <li className="aboutItem">
          <img src="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgA-6.jpg?raw=true" alt="" className="aboutImage" loading="lazy"/>
        </li>
      </ul>
    </Container>
  );
};

export default About;
