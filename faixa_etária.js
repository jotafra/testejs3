const x = 15;

age = typeof x;

if (typeof x === "number"){

    if (x < 0){
        console.log("Esse número não é uma idade!!")  

    }else{

    if (x <= 12){
        console.log("Você é uma criança!!")

    }else if (x > 12 && x <= 17){
        console.log("Você é um adolescente!!")

    }else if (x >= 18 && x <= 64){
        console.log("Você é um adulto!!")

    }else if (x >= 65){
        console.log("Você é um idoso!!")
    }}

}else if (typeof x === "string"){
    console.log("Erro esse dado não é um número!!")
}