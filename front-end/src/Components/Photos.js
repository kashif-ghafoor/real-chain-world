import { Carousel } from "react-carousel-minimal";

const Photos = () => {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/25/20/01/gallery-2681238_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/01/10/37/lichtraum-1560788_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/06/10/12/49/gallery-1448047_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/07/26/18/30/kitchen-1543493_640.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/06/10/12/49/gallery-1448047_640.jpg",
    },
  ];

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0",
          }}
        >
          <Carousel
            data={data}
            time={5000}
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="lightseagreen-100"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "400px",
              margin: "40px 110px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
