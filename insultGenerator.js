let bodyParts = ["nose", "butt", "mouth", "hair"];
let adjectives = ["smelly", "filthy", "crooked"];
let animals = ["baboon", "rat", "swine"];
let animalsBodyPart = ["ass", "paw", "tail"];

let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
let randomAnimalBodyPart = animalsBodyPart[Math.floor(Math.random() * animalsBodyPart.length)];

let randomInsult = ["Your",randomBodyPart,"is more",randomAdjective,"than a",randomAnimal + "'s",randomAnimalBodyPart + "."].join(" ");
randomInsult;