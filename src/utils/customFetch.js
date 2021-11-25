import dataProducts from "./dataProducts";


const customFetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataProducts)
        reject("Error...")
      },3000)
    })
  }
    
  
  export default customFetch