let div1=document.createElement('div');
div1.setAttribute('class','container');
div1.setAttribute('id','mainCointainer');

let para=document.createElement('p');
para.textContent='Click the below button to see the details of Pokemon';
para.setAttribute('class','para');
document.body.append(para);

let button=document.createElement('button');
button.setAttribute('id','btn');
button.textContent='pokemon Go';
div1.appendChild(button);
document.body.appendChild(div1);

let btn=document.querySelector('#btn');

btn.addEventListener('click',getname);

async function getname(){
        try {
                let getpokestatus=await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
                .then(response=>response.json())
                .then(data=>{
                        data.results.map(pokestatus=>{
                        getstatus(pokestatus)
                        })
                return data
                })
                
        } catch (error) {
              console.error(error)  
        }
       
};
let getmaincontainer=document.querySelector('#mainCointainer');  
let getstatus=async(charstatus)=>{
        try {
                let instatus=await fetch(charstatus.url)
                .then(response=>response.json())
                .then(data=>{

                        let card=document.createElement('div');
                        card.setAttribute('class','card');
                    //   let frontdefault=data.sprites.front_default
                    //   let img=document.createElement('img');
                    //   img.src=frontdefault
                    //   img.setAttribute('class','card-image-top');
                    //   card.append(img);

                       let cardbody=document.createElement('div');
                       cardbody.setAttribute('class','card-body');

                       let h2=document.createElement('h2');
                       h2.setAttribute('class','card-title');
                       h2.textContent=charstatus.name;
                       cardbody.append(h2);
                       let br=document.createElement('br');
                       cardbody.append(br);

                       let h5=document.createElement('h5');
                       h5.setAttribute('class','p');
                       h5.textContent='Ability:';
                       cardbody.append(h5);
                       let p=document.createElement('p');
                       p.setAttribute('class','card-text');
                       p.textContent=data.abilities.map(abilities=>{
                        return abilities.ability.name
                       });
                       cardbody.append(p);

                       let h61=document.createElement('h5');
                       h61.setAttribute('class','p1');
                       h61.textContent='Moves:';
                       cardbody.append(h61);
                       let p1=document.createElement('p');
                       p1.setAttribute('class','card-text1');
                       p1.textContent=data.moves.map(moves=>{
                        return moves.move.name
                      });
                       cardbody.append(p1);

                       let h62=document.createElement('h5');
                       h62.setAttribute('class','p2');
                       h62.textContent='Weight:';
                       cardbody.append(h62);
                       let p2=document.createElement('p');
                       p2.setAttribute('class','card-text2');
                       p2.textContent=data.weight;
                       cardbody.append(p2);


                       card.append(cardbody);
                       getmaincontainer.append(card);

                })
        } catch (error) {
                console.error(error)
        }
};



