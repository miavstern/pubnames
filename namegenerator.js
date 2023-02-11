const adjectives = ["Pickled", "Olde", "Greene","Red", "Golden","Royal","White", "Sloppy", "Young", "Silver"];
const nouns = ["Elephant", "Lord", "Onion", "Cock", "Coach", "Armour", "Rose", "Shovel", "Grapes", "Barron", "Inn", "Tavern", "Earl", "Duchess", "Castle", "Donkey","Lion", "Poplar", "Slug", "Swamp", "Hare","Eagle", "Turtle", "Swan","Oak","Barrel","Rat","Crown","King","Queen","Prince","Regent", "Anchor", "Pickle", "Shrub", "Stag", "Frog", "Bull"];
const getRandomAdjectiveNoun = () => `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
const getRandomNounNoun = () => `${nouns[Math.floor(Math.random()*nouns.length)]} and ${nouns[Math.floor(Math.random()*nouns.length)]}`;
const getRandomArms = () => `${nouns[Math.floor(Math.random()*nouns.length)]}'s Arms`;

const getRandomPubName =() => {
	const TitleTypes = [getRandomAdjectiveNoun, getRandomNounNoun, getRandomArms];
	const RandomTitleType = TitleTypes[Math.floor(Math.random() * TitleTypes.length)];
	return RandomTitleType();
}

const setPubName = () => {
	document.getElementById('pub-name').innerText = getRandomPubName();
}
document.getElementById('Another-one')
.addEventListener('click', setPubName);

setPubName();