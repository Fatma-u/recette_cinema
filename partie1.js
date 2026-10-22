let x=0;
let y=0;
let prixp=0;
let prixg=0;
let b=0;
for(let age=11;age<=20;age++){
    if(age<16){
        const prix=1500;
        prixp=prixp+prix;
        console.log(`La personne a ${age}ans et le prix du billet est ${prix}FCFA`);
        x++;
    }
    else {
        const prixr=2500;
        prixg=prixg+prixr;
        console.log(`La personne a ${age}ans et le prix du billet est ${prixr}FCFA`);
        y++;
        
    }
}
let recetteTotal=0;
recetteTotal=prixp+prixg;
console.log(`La recette total est ${recetteTotal}`)
console.log(`On a pour les moins de 16ans(11-15ans) les tikets vendus sont au nombre de ${x} et pour les plus de 16ans(16-20ans) sont au nombre de ${y}`);
