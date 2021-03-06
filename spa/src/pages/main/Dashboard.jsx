import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Box, Button, Card } from "@mui/material";
import { Edit } from "@mui/icons-material";
import Spacer from "../../components/shared/commons/Spacer";
import * as Colors from "../../constants/colors";

const Dashboard = () => {
  const history = useHistory();
  const categories = ["Cat 1", "Cat 2"];

  const addCategory = () => {
    history.push("/form-category");
  };

  const editCategory = (id) => {
    history.push("/form-category", { id: id });
  };

  const toTitle = () => {
    history.push("/titles");
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 5 }}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.textPrimary,
          }}
        >
          Categories
        </Typography>
        <Box sx={{ heigh: 40 }}>
          <Button variant="contained" size="small" onClick={addCategory}>
            Add New
          </Button>
        </Box>
      </Box>
      {categories.map((category, index) => (
        <Box
          key={`category-${index}`}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Card
            sx={{ padding: 2, marginBottom: 3, width: "100%" }}
            onClick={toTitle}
          >
            {category}
          </Card>
          <Spacer width={10} />
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => editCategory(1)}
            sx={{ width: 5 }}
          >
            <Edit />
          </Button>
        </Box>
      ))}
    </>
  );
};

export default Dashboard;
