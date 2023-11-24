import { Modal, Box, Typography } from "@mui/material";
import React from "react";

const modalStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "40%",
    margin: "auto",
    backgroundColor: "white",
};

function WeatherInputModal() {
    return (
        <>
            <Modal
                open={true}
                onClose={() => {}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={modalStyle}
            >
                <Box>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default WeatherInputModal;
