/**
 * How to post data in server??
 * 1. create a post API in server side.
 * 2. client side send data via post.
 * Follow >> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
 * 3. set fetch method inside the fetch options(second parameter).
 * 4. options will have 3 things::
 * >> method
 * >> headers: 'content-type':'application/json'
 * >> body: don't forget to send data by JSON.stringify in the body
 * 5. on the server side:  don't for get to use express.json(); middleware
 * 
 * 
 **/