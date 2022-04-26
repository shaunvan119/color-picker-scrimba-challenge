const seedColor = document.getElementById("input-selector")
const colorMode = document.getElementById("select-box")
const button = document.querySelector("color-button")


//
const state = {
  seedColor: '#0000FF',
  colorMode: 'monochrome',
  colors: []
}

//fetch("https://www.thecolorapi.com/scheme?hex=0047AB")
  // .then(res => res.json())
    //.then(data => {
      //  console.log(data)
        //document.getElementById("container").innerHTML = `
        //<img src="${data.image}" />
        //`
        //})

    //fetch("https://www.thecolorapi.com/scheme?hex=0047AB")
    //.then(response => response.json())
    //.then(data => {
      //  console.log(data)
       // document.getElementById("container").innerHTML = `
         //   <img src="${data.mode}" />
        //`
    //})

