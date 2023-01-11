import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box bgColor="red" flex={4} p={2}>
      <Post />
    </Box>
  );
};

export default Feed;
