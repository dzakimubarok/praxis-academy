const Aritmatika = (panjang, lebar, callback) => {
  return callback(panjang, lebar)
  }
  
  const luasPersegipanjang =(p,l) => {
    return `luas persegi panjang = ${p*l}`
  }
  
  const luasPersegi=(s) => {
    return `luas persegi = ${s*s}`
  
  }
  
  s1 = Aritmatika(3, 4, luasPersegipanjang)
  s2 = luasPersegi(3, 3, luasPersegi)
  // s2 = saldo(30000, 20000, add)
  
  console.log(s1, s2)