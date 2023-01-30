import axios from "axios";

const searchImages = async (term) => {
const response =  await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cvY9BNa95SJlg8JgUbs5T6z2B4vTXZO3m5yd-Q5P7mw"
    },
    params: {
      query: term,
    },
  });
   
  return response.data.results; // This is looking into the response object returned from the http request 
                                // to unsplash.com
};                              // Since we want the response to just be the array of images we ar going into the response object
                                // into .data then into .results  which contains our array of images

export default searchImages;


// The SearchBar component and the ImageList Component are children of the App comoponent
// the ImageShow component is a child of the ImageList component
// Since the SearchBar and imageList components are sibling components the must use the parent component App to exchange data
// Sibling components can not communicate directly with one another!