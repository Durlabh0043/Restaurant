import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Ordercollect from "./Ordercollect";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card
            className="hov"
            sx={{ maxWidth: "390px", display: "flex", m: 2 }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>


              

                <Link to="/Ordercollect">
                <button className="btn" onClick="">ORDER NOW</button> 
                 </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
    
  );
};
<Ordercollect/>

export default Menu;
