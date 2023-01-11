import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Àmàlà and ewédú"
          subheader="January 11, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://i0.wp.com/insidebusiness.ng/wp-content/uploads/2019/11/republic-of-amala-and-ewedu-with-stew-and-orisirisi-by-@@spiceplatter-.-.-.-.-.-africanfood-food-nai.jpg?fit=640%2C640&ssl=1"
          alt="Amala dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Àmàlà is a staple food native to the Yoruba ethnic group of
            Southwestern Nigeria. It is made of yam, cassava flour, or unripe
            plantain flour.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
