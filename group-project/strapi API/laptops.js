
 
async function renderObjects(){

    let objekt = [

        {
            id:1,
            Product: `
                <div class="grid-item">
                    <div class="item-info">
                        <div class="item-title">${attr.Title}</div>
                        <div>Price: ${attr.Price}</div>
                        <div>Qty: ${attr.Qty}</div>
                    </div>
                    
                </div>
            `,
        },
       
    ]

    localStorage.setItem('objekt', JSON.stringify(objekt));
    let apiUrl = "http://localhost:1337";
    // let stringImage = await fetch(apiUrl);
    // let imageObj = await stringImage.json();
    // console.log(apiUrl);
    let urlLocalhost = "http://localhost:1337/api/Laptops?populate=";
    
    // let laptopImgUrl = "/uploads/medium_lenovo_thinkpad_e14_gen2_14_barbar_dator_i58256_gb_svart_pdp_zoom_3000_pdp_main_960_cd1cf28765.webp";
    let stringResponse = await fetch (urlLocalhost);
    let myobject = await stringResponse.json();
    let output = '';
    
    //Kolla om data är en array
    if(Array.isArray(myobject.data)){
        myobject.data.forEach(element => {
            let attr = element.attributes;
            console.log(element);
            // let imageUrl = attr.Image.data.id;
            // console.log(imageUrl);

            output += `
                <div class="grid-item">
                    <div class="item-info">
                        <div class="item-title">${attr.Title}</div>
                        <div>Price: ${attr.Price}</div>
                        <div>Qty: ${attr.Qty}</div>
                    </div>
                    
                </div>
            `;
            
        });
    }else{
        let object = myobject.data.attributes;
       
         output += `<div class="title"> Title: ${object.Title}</div>`;
         output += `<div> Description: ${object.Description}</div>`;
         output += `<div> Price: ${object.Price}</div>`;
         output += `<div> In stock: ${object.Qty}</div>`;
    }
     document.getElementById("output").innerHTML = output;
     
}

renderObjects();