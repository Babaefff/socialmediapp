import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  console.log(image);
  const baseUrl = process.env.BASE_URL;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://socialiaze.herokuapp.com/assets/${image}`}
      ></img>
    </Box>
  );
};

export default UserImage;
