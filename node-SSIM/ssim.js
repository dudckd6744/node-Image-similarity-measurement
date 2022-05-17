import  {ssim}  from "ssim.js";
import { test } from "./loadImage";
import fs from 'fs'


// const img1 = await test("./image-similarity_test/100642654_0055828-1.jpg");
// const img2 = await test("./image-similarity_test/100642654_0055828-12.jpg");

async function testing(){


    const comparisonImages =  fs.readdirSync('./image', (err, data) => {
        console.log(data,"ddd")
        return data
    })

comparisonImages.forEach(async element => {
    const img1 = await test("./image/test1.jpeg");
    const img2 = await test(`./image/${element}`); 
const { mssim, performance } = ssim(img1, img2,{ ssim:'weber'});
console.log(`SSIM: ${mssim} (${performance}ms), ${element}`);

});

}
console.log(testing())

// const { mssim, performance } = ssim(img1, img2);


// console.log(`SSIM: ${mssim} (${performance}ms)`);