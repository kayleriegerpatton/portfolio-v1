import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "300px",
  bgcolor: "var(--periwinkle-crayola)",
  border: "2px inset var(--lavender-blue)",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

export const ContactModal = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar
          src="/assets/images/biz-in-front.png"
          alt="Mullet graphic with text: Business in the front, party in the back"
          variant="square"
          sx={{
            margin: "auto",
            my: "10px",
            height: "220px",
            width: "220px",
            bgcolor: "var(--dark-lavender)",
          }}
        />

        <Typography variant="h5" component="h2" id="modal-modal-title">
          Business in the Front, Party in the...Oops!
        </Typography>

        <Typography
          id="modal-modal-description"
          component="p"
          variant="h6"
          sx={{ mt: 2, fontWeight: "300" }}
        >
          Looks like this site has no back-end! Why not{" "}
          <a href="mailto:kayle.patton22@gmail.com" style={{ color: "#000" }}>
            email me
          </a>{" "}
          instead?
        </Typography>
      </Box>
    </Modal>
  );
};
