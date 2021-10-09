// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    var genders= ['f','m'];
    var random = Math.floor(Math.random()*genders.length)+1;
    let api_endpoint_url = "http://krazywoman.com/krazystars/api/star/search.php?g="+ genders[random];
    axios.get(api_endpoint_url)
    .then(response => {
        // a) Inspect the response.data
        console.log(response.image);
        //document.getElementById("image1").src = response.image;
    })
    .catch(error => {
        console.log(error.message)
    })


}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    


}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE

}