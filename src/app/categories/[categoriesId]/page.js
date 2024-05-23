import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div>
      <h1 className="text-xl text-center mt-5">
        Total <span className="font-bold">{searchParams.category}</span> News :{" "}
        {data.length}
      </h1>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
            <Card className="">
              <CardMedia
                sx={{
                  "& img": {
                    width: "100%",
                    height: "250px",
                  },
                }}
              >
                <Image
                  src={news.thumbnail_url}
                  width={800}
                  height={100}
                  alt="top news"
                />
              </CardMedia>

              <CardContent>
                <span className="w-1/2 h-[25spanx] px-2 my-3 rounded bg-red-500 text-white">
                  {news.category}
                </span>

                <Typography gutterBottom variant="h6" component="div">
                  {news.title.length>30? news.title.slice(0,30)+ "...": news.title}
                </Typography>
                <Typography >
                  by {news.author.name}, {news.author.published_date}
                </Typography>
                <Typography className="mt-2" variant="body2" color="text.secondary">
                  {news.details.length>200? news.details.slice(0, 200)+ "..." : news.details}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
