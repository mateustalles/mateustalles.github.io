const fatorialN = ( n, variable = n - 1 ) => { for (; variable > 0 ; variable--) { n *= variable } return n }
    

console.log(fatorialN(10));