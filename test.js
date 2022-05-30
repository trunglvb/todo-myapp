const xinSdt = () => {
    console.log('give me phone number of nam')
    console.log("finding")
  
    const thaotactimkiem = new Promise ((resolve, reject) => {
      let datimthay = true;
      
      setTimeout(() => {
        if(datimthay) {
          sdt = 1234;
          console.log(`so dien thoai la ${sdt}`)
          resolve(sdt)
        } else {
          reject('errrr')
        }
      },1000)
    })
  
    return thaotactimkiem;
  }
  
  const sacpin = () => {
    console.log('Doi ti dang sac pin');
  
    const thaotacsac = new Promise((resolve, reject) => {
      let chay = false;
      setTimeout(() => {
        if(!chay) {
          console.log("sac pin day, goi cho nam")
          resolve(sdt)
        } else {
          reject("errr")
        }
      },2000)
    })  
    return thaotacsac;
  }
  const goiCHoNam = (sdt) => console.log(sdt)
  xinSdt()
  .then(sdt => {
    sacpin()
    .then(sdt => goiCHoNam(sdt))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))