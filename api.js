/* Creating a variable called result and assigning it to the element with the id of result. */
let result = document.getElementById("result")

callComputers();

function callComputers() {
    var category = 'computers'
    callApi(category)
}

function callInspirational() {
    var category = 'inspirational'
    callApi(category)
}

function callMovies() {
    var category = 'movies'
    callApi(category)
}

function callKnowledge() {
    var category = 'knowledge'
    callApi(category)
}

function callHumor() {
    var category = 'humor'
    callApi(category)
}

function callFuture() {
    var category = 'future'
    callApi(category)
}


/**
 * It takes a category as a parameter, and then uses that category to make an API call to the
 * API-Ninjas API. 
 * 
 * The API returns a JSON object, which is then parsed and displayed on the page.
 * @param category - The category of the quote you want to get.
 */
function callApi(category = 'computers') {
    $.ajax({
/* Making a request to the API. */
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: {
            'X-Api-Key': 'VaMP9W8b4Fc2O0V+Yv5OiQ==WaWgD0MPEwIAhofi'
        },
        contentType: 'application/json',
/* Getting the data from the API and displaying it on the page. */
        success: function (result) {
            document.getElementById("author").innerHTML = result[0].author;
            document.getElementById("quote").innerHTML = result[0].quote;
            document.getElementById("category").innerHTML = result[0].category;
        },
/* The above code is a function that is called when an error occurs. */
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

}





//author
//category
//quote