import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/topNews.jpg";


const SideBar = () => {
     return (
          <Box>
               <Card className="">
        <CardMedia/>
        <Image src={topNews} alt="top news" />
        
        <CardContent>
        <p className="w-[100px] h-[25px] px-2 mb-5 rounded bg-red-500 text-white">Technology</p>

          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Mask
          </Typography>
          <Typography>
            By Mehedi hasan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic corporis, id accusantium ex aut eos, optio voluptas voluptates iste impedit laudantium magni eius quam similique ut ab laboriosam dolorem! Voluptate placeat aut quaerat ducimus, quas obcaecati sunt hic maiores commodi reprehenderit sapiente sit alias corporis nostrum harum recusandae praesentium!
          </Typography>
          
        </CardContent>
      </Card>
          </Box>
     );
};

export default SideBar;