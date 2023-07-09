import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dogfood from "@/images/dogfood.png";
import dogfood1 from "@/images/dogfood1.jpg";
import dogfood2 from "@/images/dogfood2.jpg";
import dogfood3 from "@/images/dogfood3.jpg";
import Image from "next/image";
import { Box, Button } from "@mui/material";

export default function Store() {
  const cards = Array.from(Array(8).keys()); // creates an array of length 5

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
          <Card
           sx={{ maxWidth: 300, margin: "25px", border: "1px solid #eee", "border-radius": "12px",  
              "box-shadow": "rgba(55, 84, 170, 0.50) 0 5px 20px",}}
           >
            <CardHeader
              sx={{ "borderBottom":"1px solid blue" , "margin-bottom":"5px"}}
              avatar={
                <Avatar sx={{ bgcolor: red[500],}} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="FROMM Gold"
              
            />
            <div style={{display:"flex", justifyContent:"center", marginTop:"10px", }}>
              <Image src={dogfood} alt="dogfood" width={200} height={200}/>
            </div>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                FROMM Gold Adult Dog Food is made using a range of tasty proteins including chicken, duck and lamb. Added probiotics and fish oil will also help your dog digest their meal while gaining a glossy coat. This kibble is formulated for dogs.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
              
              <div style={{display:"flex", justifyContent:"flex-end"}}>
              <Button  variant="outlined">Order</Button>
            </div>
            </CardActions>
          </Card>
        
          <Card
           sx={{ maxWidth: 300, margin: "25px", border: "1px solid #eee", "border-radius": "12px",  
              "box-shadow": "rgba(55, 84, 170, 0.50) 0 5px 20px",}}
           >
            <CardHeader
              sx={{ "borderBottom":"1px solid blue" , "margin-bottom":"5px"}}
              avatar={
                <Avatar sx={{ bgcolor: red[500],}} aria-label="recipe">
                  A
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Cesar"
            />
            <div style={{display:"flex", justifyContent:"center", marginTop:"10px", }}>
              <Image src={dogfood1} alt="dogfood" width={200} height={200}/>
            </div>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Give your dog a seat at the dinner table with CESAR Filet Mignon Flavor and Spring Vegetables Garnish Dry Dog Food. Dog food features tender pieces that will make your dog dance around their bowl come dinnertime.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          
              <div style={{display:"flex", justifyContent:"flex-end"}}>
              <Button  variant="outlined">Order</Button>
            </div>
            </CardActions>
          </Card>

          <Card
           sx={{ maxWidth: 300, margin: "25px", border: "1px solid #eee", "border-radius": "12px",  
              "box-shadow": "rgba(55, 84, 170, 0.50) 0 5px 20px",}}
           >
            <CardHeader
              sx={{ "borderBottom":"1px solid blue" , "margin-bottom":"5px"}}
              avatar={
                <Avatar sx={{ bgcolor: red[500],}} aria-label="recipe">
                  D
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="BRACCOID "
            />
            <div style={{display:"flex", justifyContent:"center", marginTop:"10px", }}>
              <Image src={dogfood2} alt="dogfood" width={200} height={200}/>
            </div>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Commercial dog foods shaped like pork chops, burgers, or other meaty foods are called semi-moist foods. These kinds of foods are the least nutritional of all dog foods and contain many artificial flavors and colorings.
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          
              <div style={{display:"flex", justifyContent:"flex-end"}}>
              <Button  variant="outlined">Order</Button>
            </div>
            </CardActions>
          </Card>

          <Card
           sx={{ maxWidth: 300, margin: "25px", border: "1px solid #eee", "border-radius": "12px",  
              "box-shadow": "rgba(55, 84, 170, 0.50) 0 5px 20px",}}
           >
            <CardHeader
              sx={{ "borderBottom":"1px solid blue" , "margin-bottom":"5px"}}
              avatar={
                <Avatar sx={{ bgcolor: red[500],}} aria-label="recipe">
                  S
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="RAW Diet"
            />
            <div style={{display:"flex", justifyContent:"center", marginTop:"10px", }}>
              <Image src={dogfood3} alt="dogfood" width={200} height={200}/>
            </div>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A raw diet consists of raw meat, preferably with some bones (never cooked bones, only raw) and organs mixed in, as bones are a natural source of phosphorus and calcium. This type of diet works well for many dogs, since dogs have short intestinal tracts and strong stomach acids
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
          
              <div style={{display:"flex", justifyContent:"flex-end"}}>
              <Button  variant="outlined">Order</Button>
            </div>
            </CardActions>
          </Card>
      </Box>
    </>
  );
}
