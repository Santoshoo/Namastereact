import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";


//Used Shimmer UI for loading state while fetching data from API
const Shimmer = () => (
  <>
    <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
    <ShimmerSimpleGallery card imageHeight={300} />
    <ShimmerSimpleGallery card imageHeight={300} caption />
  </>
);




export default Shimmer;
