const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("\nNombre de cada explorer:");
explorers.forEach((explorer) => console.log(explorer.name));

// Imprime el stack de cada explorer, usa FOR EACH
console.log("\nStack de cada explorer");
explorers.forEach((explorer) => console.log(explorer.stack));

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nLista de los stacks de los explorer:");
explorersStack = [];
explorers.forEach((explorer) => {
  let exp = explorer.stack;
  exp.map(function (el) {
    explorersStack.push(el);
  });
});
console.log(explorersStack);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\nExplorers que tienen en su stack 'js':");
function explorersWithJS(array) {
  let a = [];
  array.forEach((el) => {
    if (el.stack.filter((stck) => stck.includes("js")) == "js") {
      a.push(el.name);
    }
  });
  return a;
}
console.log(explorersWithJS(explorers));

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\nPrimer explorer que es de CDMX:");
const capitalino = explorers.find((explorer) => explorer.city == "CDMX");
console.log(capitalino.name);

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("\nSuma de todos los ejercicios completados:")
const completed = explorers.reduce(
  (acc, element) => acc + element.exercises_completed,
  0
);
console.log(completed);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("\n¿Al menos uno de los explorers terminó los ejercicios del FrontEnd?")
const areSomeTrue = explorers.some(
  (explorer) => explorer.missions.frontend.exercisesFinished === true
);
console.log(areSomeTrue);

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("\n¿Todos los explorers terminaron el Onboarding?")
const areAllTrue = explorers.every(
  (explorer) => explorer.missions.onboarding.isFinished === true
);
console.log(areAllTrue);
