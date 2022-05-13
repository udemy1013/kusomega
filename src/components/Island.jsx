import { motion } from "framer-motion";
import { Grid } from "@mui/material";

function Island({ island }) {
  return (
    <Grid
      item
      xs={3}
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={island} className="float" />
    </Grid>
  );
}

export default Island;
