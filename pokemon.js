var data = {
    "abilities": [
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      },
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 64,
    "forms": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
      }
    ],
    "height": 7,
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
      {
        "move": {
          "name": "razor-wind",
          "url": "https://pokeapi.co/api/v2/move/13/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "egg",
              "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          }
        ]
      }
      ],
  
    "name": "bulbasaur",
    "order": 1,
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null
    },
    "stats": [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    "types": [
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      }
    ],
    "weight": 69
  }

// шаг 1
  const height = data.height;
const weight = data.weight;
console.log('pост:' + height.toString() + ', вес: ' + weight.toString()); //Рост:7, Вес: 69
//шаг 2 
console.log('pост:' + height.toFixed() + ', вес: ' + weight.toFixed()); //Рост:7, Вес: 69
console.log('индекс тела :' +weight / height*2) //расчет по формуле имт:имт=кг/м*2
//шаг 3
const namePokemon = data.name;
console.log('имя: '+namePokemon) //имя: bulbasaur
console.log('количество слов в имени: '+ namePokemon.split(" ").length) //количество слов в имени: 1
console.log('количество букв в имени: '+ namePokemon.split("").length) //количество букв в имени: 9
 console.log('ИМЯ: '+namePokemon.toUpperCase()) //ИМЯ: BULBASAUR
 //шаг 4 
if (namePokemon.indexOf("bbulba")) { 
  console.log("иимя содержит 'бульба'"); 
}else {
  console.log("имя не содержит ''бульба'")
}  //иимя содержит 'бульба'
//шаг 5
 let nnamePokemon = data.name;
 console.log("имя без двух первых букв:  "+nnamePokemon.slice(0, 2))//имя без двух первых букв:  lbasaur
 let namePokemon2 = data.name;
 console.log('последние две буквы ; ' + namePokemon2.slice(-2)); // последние две буквы ; ur
 console.log(nnamePokemon.slice(0, 2) + namePokemon2.slice(-2)) ; //buur
 // шаг 6
 let nameArray = [namePokemon];
 console.log(nameArray); // ["bulbasaur"]
 //шаг 7
 console.log( data.types.forEach( types   => console.log(types.type.name))) //poison  grass
 //убедилась
//  шаг 8
if (Array.isArray(data.abilities)) {
  console.log("урааа массив!");
} else {
  console.log(" не массив");
} //ураа массив!
// шаг 9
let lastAbility = data.abilities[data.abilities.length - 1]; 
console.log("имя способности " + lastAbility.ability.name); //  имя способности overgrow
// шаг 10
data.abilities.push(lastAbility); 
console.log("в массиве")
  console.log( data.abilities); //в массиве ,kf,fkff,kf
  // шаг 11
  data.stats.forEach(stat => {
    console.log(stat.base_stat);  // 45 65 49 45
  });
// ifu 12
let filterStat = data.stats.filter(stat   => stat.base_stat > 47)
console.log(filterStat);
// шаг 13
let filterStats = data.stats.reverse()
console.log(filterStat);
// шаг 14
let baseStatsArray = data.stats.map(stat => stat.base_stat);
let stats2 = baseStatsArray.slice(0, 2); 
console.log(stats2); // [45, 49]
//шаг 15
let baseStatsArray2 = data.stats.map(stat => stat.base_stat);
baseStatsArray[0] = "Анастейша ";
console.log(baseStatsArray); //['Анастейша ', 49, 49, 65, 65, 45]

