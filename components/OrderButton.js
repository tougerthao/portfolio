import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import * as Scroll from "react-scroll";

export default function OrderButton() {
  const StyledButton = styled(Button)({
    backgroundColor: "white",
    color: "black",
    padding: ".75rem 3rem",
    minWidth: "10rem",
    fontWeight: "bold",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  });

  return (
    <>
      <Scroll.Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <StyledButton variant="contained" sx={{ boxShadow: 5 }}>
          View Projects
        </StyledButton>
      </Scroll.Link>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Sorry...
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            textAlign="center"
          >
            We sold out!
          </Typography>
        </Box>
      </Modal> */}
    </>
  );
}
