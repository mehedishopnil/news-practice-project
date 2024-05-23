import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Grid, Container, Avatar, Typography } from "@mui/material"; // Import Container from Material-UI
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);

  return (
    <Box className="mt-10">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="thumbnail image"
            />

            <Grid className="mt-2" container spacing={2}>
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="thumbnail image"
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="thumbnail image"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Details Section */}
          <Grid className="space-y-5" item xs={6}>
            <h1 className="text-xl font-bold mb-3">{news.title}</h1>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="Author" src={news.author.img} />
              <Typography>By {news.author.name},</Typography>
              <Typography>{news.author.published_date}</Typography>
            </Box>
            <Typography style={{
               textAlign: 'justify',
               whiteSpace: 'pre-line',
               color: 'gray'
            }}>{news.details}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailsPage;
