var vel = 78
var dif = vel - 60
console.log(`- A velocidade do seu carro é ${vel} Km/h.`)
if (vel > 60) { // Condição SIMPLES!
    console.log(`- Você ultrapassou a velocidade permitida. MULTADO!\n- O limite de velocidade é 60.0 Km/h e você ultrapassou em ${dif} Km/h.`)
}
console.log('- Dirija sempre usando cinto de segurança!')