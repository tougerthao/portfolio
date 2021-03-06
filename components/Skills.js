/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import profilePic from "../images/touger-profile-pic-white-bg.png";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Chart.js",
  "MUI",
  "Firebase",
  "Git",
  "JSON",
  "Rust",
  "CosmWasm",
  "Bootstrap",
  "Java",
  "SQL",
];

export default function Problemsection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const skillsButtons = skills.map((skill) => (
    <Paper
      key={skill}
      square={true}
      sx={{
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        margin: ".3rem .15rem .3rem .15rem",
        padding: ".5rem",
        boxShadow: "4",
      }}
    >
      {skill}
    </Paper>
  ));

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(82,159,252,1) 0%, rgba(136,189,255,1) 50%, rgba(255,250,234,1) 100%)",
          roundedCorners: false,
        }}
      >
        <Container maxWidth="lg">
          <Box padding="8rem 0 4rem 0" sx={{ boxShadow: 0 }}>
            <Typography
              variant="h3"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="bold"
              id="skills"
            >
              Skills
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <Box
                  display="flex"
                  justifyContent="left"
                  margin="3rem 2rem 2rem 0"
                >
                  <Image src={profilePic} alt="Touger Thao" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box
                  display="flex"
                  justifyContent="left"
                  margin="3rem 0 0 0"
                  sx={{ flexWrap: "wrap", maxWidth: "100%" }}
                >
                  {skillsButtons}
                </Box>
                <Box margin="3rem 0 3rem 0">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontFamily="'Montserrat', sans-serif"
                  >
                    I love building things
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="1.2rem"
                    fontWeight="300"
                    sx={{ margin: "1rem 0 1rem 0" }}
                  >
                    I built a non-profit organization from the ground up that
                    continues today. My wife and I built an e-commerce business
                    that helps to preserve a dying language. I helped build a
                    podcast to over 1 million downloads.
                    <br />
                    <br />
                    Now, my passion is coding. I want to create a more equitable
                    world by building software on democratized data and a
                    decentralized web.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
