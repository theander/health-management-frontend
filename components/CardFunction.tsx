export default function CardFunction({
  title,
  description,
  redirectTo,
  redirectDescription,
}) {
  return (
    <div className='container'>
      <h1>CardFunction</h1>
    </div>
    // <Grid xs={2} padding={2} marginTop={10}>
    //   <Card sx={{ maxWidth: 345 }}>
    //     <CardContent>
    //       <Typography gutterBottom variant='h5' component='div'>
    //         {title}
    //       </Typography>
    //       <Typography variant='body2' color='text.secondary'>
    //         {description}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button
    //         size={'medium'}
    //         onClick={() => {
    //           navigate(redirectTo);
    //         }}
    //       >
    //         {redirectDescription}
    //       </Button>
    //     </CardActions>
    //   </Card>
    // </Grid>
  );
}
