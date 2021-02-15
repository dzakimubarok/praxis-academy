const saldo = (saldo1, saldo2, callback) => {
return callback(saldo1, saldo2)
}

const add =(a,b) => {
  return a+b
}

const minus=(a,b) => {
  return a-b

}

s1 = saldo(30000, 20000, minus)
s2 = saldo(30000, 20000, add)

console.log(s1, s2)