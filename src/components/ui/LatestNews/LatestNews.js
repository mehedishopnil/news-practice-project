import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import topNews from "@/assets/topNews.jpg"
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNes = async() => {
  const {data:news} = await getAllNews();
  const topNews = news[0];
  console.log(news)
  return (
    <Box className= "my-5">
      <Card className="">
        <CardMedia/>
        <Image src={topNews.thumbnail_url} width={800} height={500} alt="top news" />
        
        <CardContent>
        <p className="w-[100px] h-[25px] px-2 mb-5 rounded bg-red-500 text-white">{topNews.category}</p>

          <Typography gutterBottom variant="h5" component="div">
            {topNews.title}
          </Typography>
          <Typography>
          By {topNews.author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {topNews.details.length>300? topNews.details.slice(0, 300)+ "...": topNews.details}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{
  news.map(item =>(
    <Grid key={item._id} item xs={6}>
    <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
    <Card className="">
        <CardMedia/>
        <Image src={item.thumbnail_url} width={800} height={500} alt="top news" />
        
        <CardContent>
        <p className="w-[100px] h-[25px] px-2 mb-5 rounded bg-red-500 text-white">{item.category}</p>

          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography>
          By {item.author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.details.length>100? item.details.slice(0, 100)+ "...": item.details}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Link>
    </Grid>
  ))
}
  
 
</Grid>
    </Box>
  );
};

export default LatestNes;
