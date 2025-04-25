// FETCH

// FETCH WITH .THEN
fetch('https://randomuser.me/api/')
  .then(response => {
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return response.json(); // parses the JSON body
  })
  .then(data => console.log(data))
  .catch(err => console.log("Fetch error:", err));
console.log("While fetch is working, this code will be executed")


// FETCH WITH ASYNC AWAIT
async function fetchData()
{
  try{
    let response=await fetch('https://randomuser.me/api/')
    if (!response.ok) throw new Error("HTTP error " + response.status);
    // const data= response.json(); // response.json() returns a promise which gets resolved to the JSON object
    const data= await response.json();
    console.log(data)
  } catch(err)
  {
    console.log("erro is: ", err)
  }
}
fetchData()

