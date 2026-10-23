let x=0;
let y=0;
let z=0;
let prixp=0;
let prixg=0;
let prixs=0;
let prix=1500;
let prixr=2500;
let b=prixr-500;
let age =11;
do{
    if(age<16){
        prixp=prixp+prix;
        console.log(`La personne a ${age}ans et le prix du billet est ${prix}FCFA`);
        x++;
    }
    else if(age<18){
        prixg=prixg+prixr;
        console.log(`La personne a ${age}ans et le prix du billet est ${prixr}FCFA`);
        y++;
        
    }
    else{
        prixs=prixs+b;
        console.log(`La personne a ${age}ans et le prix du billet est ${b}`);
        z++;

    }
    age++;
}
while(age<=20);
let recetteTotal=0;
recetteTotal=prixp+prixg+prixs;
console.log(`La recette total est ${recetteTotal}`)
console.log(`On a pour les moins de 16ans (11-15ans) les tikets vendus sont au nombre de ${x}, pour ceux de 16 à 17ans sont au nombre de ${y} et pour ceux de 18 à 20 sont ${z}`);
