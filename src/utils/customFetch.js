
let is_ok = true;
const customFetch = (dataProducts) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(is_ok){
          resolve(dataProducts)
        }else{
          reject("Error...")
        } 
      },1000)
    })
  }
    
  
export default customFetch