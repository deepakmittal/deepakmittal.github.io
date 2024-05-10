
ZONES = {
  "americas": {
        "label": "Americas"
  },
  "europe": {
        "label": "Europe"
  },
  "africa": {
        "label": "Africa"
  },
  "asia-pacific": {
        "label": "Asia ++"
  },

}

LEVELS = [
  {
        'key' : "world_easy",
        'options': [2,4,8,12,13,18,22,26,33,40,41,39,45,11,24,34,20,36],
        'label' : "Level 1 - Intro",
        'question': "Can you guess this city?",
        'preselect': 2,
        'max_attempt': 5,
        'games' : 4,
        'intro': "<h3>The Lost Traveller!</h3>Help the traveller finding the city."
  },
  {
        'key': "asia_easy",
        'options': [8,17,18,22,25,33,39,45,47],
        'label' : "Level 2 - Asia",
        'question': "Which asian city is this?",
        'preselect': 2,
        'max_attempt': 5,
        'games' : 4,
        'intro': "<h3>Lost in Asia!</h3>From the nomadic steppes of Kazakhstan to the frenetic streets of Hanoi, Asia is a continent so full of intrigue, adventure, solace and spirituality that it has fixated and confounded travellers for centuries."
  },
  {
        'key':"europe_easy",
        'options': [10,12,13,14,16,20,28,30,31,36,37,38,43,44],
        'label' : "Level 3 - Europe",
        'question': "Find this europian city.",
        'preselect': 2,
        'max_attempt': 5,
        'games' : 5,
        "intro" : "<h3>Moving to Europe!</h3>Europe is home to the most diverse and culturally unique countries. Each country has something different to offer, speaks distinct languages and has unique cuisines to offer. Another reason why tourists love Europe is because of its varied and scenic landscapes, pleasant weather and beautiful environment. You can visit the awesome glaciers in Greenland, explore the national parks in Germany, sip wine in the vineyards of France, climb the Alps in Switzerland, and get lost in the cities of UK!"
  },
  {
        'key':'americas_easy',
        'options': [4,5,6,7,9,26,27,40,41,42,48,49],
        'label' : "Level 4 - Americas",
        'question': "Which is this city in Americas?",
        'preselect': 2,
        'max_attempt': 5,
        'games' : 5,
        "intro" : "<h3>North and South America!</h3>It might span two continents, 23 countries and almost a billion people, but there's a common thread that binds the Americas together: romance. It's undeniable. There's so much that's romantic about this amazing part of the world: the natural beauty, the cultural heritage, the passions, the beliefs and the desires. There's romance in the tango danced in a Buenos Aires club. There's romance in the snowy mountain peaks of an Alaskan range. There's romance in a beachside bungalow in Belize, and on the city walls in Cartagena, Colombia."
  },
  {     'key': "world_all",
        'options': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
        'label' : "Level 5",
        'question': "The lost world! Traveller could be anywhere.",
        'preselect': 2,
        'max_attempt': 5,
        'games' : 10,
        "intro" : "<h3>The Lost World!</h3>You need not even listen, just wait…the world will offer itself freely to you, unmasking itself. – Franz Kafka"
  }

]




PLACES = [
  {
    "code": 1,
    "city": "Perth",
    "country": "Australia",
    "latitude": -31.95,
    "lognitude": -115.52,
    "continent":"asia-pacific",
    "do-you-know": "One of the many perks of living in Perth is enjoying the strategic location, set between South East Asia and Eastern Australia. It actually only takes three hours to reach Bali (another popular holiday destination) in Indonesia, compared to the four-hour journey it takes to reach Canberra city, making the island such a paradisiac getaway for Perthians seeking a break from the city."
  },
  {
    "code": 2,
    "city": "Sydney",
    "country": "Australia",
    "latitude": -34,
    "lognitude": -151,
    "continent":"asia-pacific",
    "do-you-know" : "The Sydney Harbour Bridge is the widest long-span bridge and tallest steel arch bridge in the world, and the 5th longest spanning-arch bridge according to Guinness World Records."
  },
  {
    "code": 3,
    "city": "Brussels",
    "country": "Belgium",
    "latitude": 50.86666667,
    "lognitude": -4.22,
    "continent":"europe",
    "do-you-know": "Brussels has 138 restaurants per square mile. try the Moules Frites (mussels and fries), dish originating from Belgium! Here our top 3 restaurants where you can give it a try: Le Pré Salé, Le Zinneke & In’t Spinnekopke."
  },
  {
    "code": 4,
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "latitude": -22.95,
    "lognitude": 43.12,
    "continent":"americas",
    "do-you-know": "Rio de Janeiro translates to ‘River of January’. Street art is legal in Rio de Janeiro."
  },
  {
    "code": 5,
    "city": "Toronto",
    "country": "Canada",
    "latitude": 43.7,
    "lognitude": 79.4,
    "continent":"americas",
    "do-you-know" : "The 49th parallel marks the border between Canada and the United States. At 5,525 miles, it’s the world’s longest unprotected border."
  },
  {
    "code": 6,
    "city": "Vancouver",
    "country": "Canada",
    "latitude": 49.3,
    "lognitude": 123.1,
    "continent":"americas",
    "do-you-know" : "Vancouver was recently ranked as the third most “livable place in the world” for its high standard of living and quality of life. While it is ranked as the 10th cleanest city in the world."
  },
  {
    "code": 7,
    "city": "honolulu(Hawaii)",
    "country": "USA",
    "latitude": 21.3,
    "lognitude": 157.8,
    "continent":"americas",
    "do-you-know": "Hawaii is the Only State in USA that Grows Coffee Commercially. When you’re traveling to Hawaii, be sure to grab a cup of locally grown coffee. The Big Island (in Kona), Maui, and Oahu all have coffee farms which tourists are welcomed to tour and visit."
  },
  {
    "code": 8,
    "city": "Hong Kong",
    "country": "China",
    "latitude": 22.33333333,
    "lognitude": -114.11,
    "continent":"asia-pacific",
    "do-you-know": "Hong Kong has the most skyscrapers (classified as building with more than 14 floors) in the world; double that of its nearest rival: New York City."
  },
  {
    "code": 9,
    "city": "San Francisco",
    "country": "USA",
    "latitude": 37.8,
    "lognitude": 122.4,
    "continent":"americas",
    "do-you-know" : "Denim jeans were invented in San Francisco by Levi Strauss for the Gold Rush miners who needed tough, comfortable clothing. For once San Francisco and not New York took the lead in fashion!"
  },
  {
    "code": 10,
    "city": "Prague",
    "country": "Czech Republic",
    "latitude": 50.08333333,
    "lognitude": -14.26,
    "continent":"europe",
    "do-you-know": "Prague locals consume the most beer per capita in the world. You’re in for a party with the locals, because this fact has been true for years. You thought you loved beer, but Czech people apparently love it more than anyone else in the world!"
  },
  {
    "code": 11,
    "city": "Cairo(Egypt)",
    "country": "Egypt",
    "latitude": 30.03333333,
    "lognitude": -31.21,
    "continent":"africa",
    "do-you-know": "Bread was invented in Egypt around 8,000 BC. (Thanks, Egypt!) The first examples of it were flat and unleavened, most closely resembling what we know today as chapatis in India or tortillas in Latin America."
  },
  {
    "code": 12,
    "city": "London",
    "country": "England",
    "latitude": 51.53333333,
    "lognitude": 0.05,
    "continent":"europe",
    "do-you-know": "‘Big Ben’ isn’t actually called Big Ben. This world-famous landmark is actually named the Elizabeth Tower – Big Ben is the name of the bell that lives inside. So you won’t snap a photo of Big Ben but if you’re lucky you might get to hear it."
  },
  {
    "code": 13,
    "city": "Paris",
    "country": "France",
    "latitude": 48.8,
    "lognitude": -2.2,
    "continent":"europe",
    "do-you-know" : "Despite its overwhelming traffic conditions, Paris has zero STOP signs for cars. The last one was removed in 2013 and the city has been “non-stop” ever since."
  },
  {
    "code": 14,
    "city": "Berlin",
    "country": "Germany",
    "latitude": 52.5,
    "lognitude": -13.25,
    "continent":"europe",
    "do-you-know": "Everyone who lives in this European country, even foreigners, can attend college tuition-free."
  },
  {
    "code": 15,
    "city": "Athens",
    "country": "Greece",
    "latitude": 37.96666667,
    "lognitude": -23.43,
    "continent":"europe",
    "do-you-know" : "Athens has experienced almost every form of government. Having been inhabited for over 4,000 years, Athens has been submitted to nearly every form of government known to this day: monarchy, democracy, socialism, capitalism, even communism."
  },
  {
    "code": 16,
    "city": "Reykjavík(Iceland)",
    "country": "Iceland",
    "latitude": 64.06666667,
    "lognitude": 21.58,
    "continent":"europe",
    "do-you-know" : "Iceland, divided by the North American and European tectonic plates, is growing by nearly 5 centimeters per year as the plates grow wider apart."
  },
  {
    "code": 17,
    "city": "Mumbai",
    "country": "India",
    "latitude": 19,
    "lognitude": -72.48,
    "continent":"asia-pacific",
    "do-you-know" : "World’s most expensive house is in Mumbai. Antilia, Mukesh Ambani’s 27-story skyscraper is cited as the world’s most expensive house, valued at almost $1 billion. The business tycoon moved into the 400,000 square feet mansion in 2012 with his wife and three children."
  },
  {
    "code": 18,
    "city": "New Delhi",
    "country": "India",
    "latitude": 28.58333333,
    "lognitude": -77.12,
    "continent":"asia-pacific",
    "do-you-know": "Delhi is the second most bird-rich capital in the world. After Nairobi, Kenya, Delhi stands the second most bird-rich capital in the world. The Delhi ridge inhabits a large number of bird species."
  },
  {
    "code": 19,
    "city": "Jakarta",
    "country": "Indonesia",
    "latitude": -6.266666667,
    "lognitude": -106.48,
    "continent":"asia-pacific",
    "do-you-know": "This Southeast Asian country is the world’s largest island nation, but no one knows exactly how many islands it contains (thousands and thousands, to be imprecise). Indonesia attempted to count them all in 2017, but several differing figures still exist."
  },
  {
    "code": 20,
    "city": "Rome",
    "country": "Italy",
    "latitude": 41.9,
    "lognitude": -12.27,
    "continent":"europe",
    "do-you-know" : "One of the most iconic foods in this European nation is the tomato. But Italians have only been eating this fruit since the 1500s, when Spanish conquistadors brought it from Peru to Naples, which at the time was under Spanish rule."
  },
  {
    "code": 21,
    "city": "Venice",
    "country": "Italy",
    "latitude": 45.43333333,
    "lognitude": -12.2,
    "continent":"europe",
    "do-you-know" : "The city rests on 118 islands separated by 150 canals. Many of the islands are knitted together with a series of 400 footbridges, but some, like famous Burano, Murano, and Torcello, are set further out in the lagoon and are only accessible by boat or water taxi."
  },
  {
    "code": 22,
    "city": "Tokyo",
    "country": "Japan",
    "latitude": 35.66666667,
    "lognitude": -139.45,
    "continent":"asia-pacific",
    "do-you-know": "Located along the earthquake-prone Ring of Fire, this Asian island nation experiences 20 percent of the world’s 6.0-magnitude or higher temblors annually. Earthquakes that size can (and do) cause major destruction."
  },
  {
    "code": 23,
    "city": "Nairobi(Kenya)",
    "country": "Kenya",
    "latitude": -1.416666667,
    "lognitude": -36.55,
    "continent":"africa",
    "do-you-know" : "The Kalenjin tribe in this East African nation produces the world’s best long-distance runners. In one Berlin marathon a few years ago, male runners from this single tribe placed first, second, third, fourth and fifth; women runners from the tribe nabbed first, second and fourth place."
  },
  {
    "code": 24,
    "city": "Tananarive (Madagascar)",
    "country": "Madagascar",
    "latitude": -18.83333333,
    "lognitude": -47.33,
    "continent":"africa",
    "do-you-know" : "more than 50% of world’s chameleon population is found in Madagascar."
  },
  {
    "code": 25,
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "latitude": 3.133333333,
    "lognitude": -101.42,
    "continent":"asia-pacific",
    "do-you-know" : "Malaysia has a unique rotating monarchy system, in which nine ethnic Malay state rulers take turns as king for five-year terms."
  },
  {
    "code": 26,
    "city": "Mexico City",
    "country": "Mexico",
    "latitude": 19.43333333,
    "lognitude": 99.07,
    "continent":"americas",
    "do-you-know":"is actually built on a lake called Texcoco which continuously makes the city sink. Sometimes, it can go down even by nine metres per year"
  },
  {
    "code": 27,
    "city": "Miami",
    "country": "USA",
    "latitude": 25.8,
    "lognitude": 80.2,
    "continent":"americas",
    "do-you-know": "Miami is home to the largest concentration of street art in the USA. All located in Wynwood district."
  },
  {
    "code": 28,
    "city": "Amsterdam",
    "country": "Netherlands",
    "latitude": 52.36666667,
    "lognitude": -4.53,
    "continent":"europe",
    "do-you-know": "Amsterdam is a city built on eleven million wooden poles. They are 15–20 metres long and placed in a sandy layer which is around 11 metres deep. While the main train station — Amsterdam Centraal — alone needs 9,000 poles to be supported, an average house usually needs only around ten of them."
  },
  {
    "code": 29,
    "city": "Auckland",
    "country": "New Zealand",
    "latitude": -36.86666667,
    "lognitude": -174.45,
    "continent":"asia-pacific",
    "do-you-know" : "New Zealand was the first country in which the vote for women was approved, in 1893. Long before in most of the countries in the world."
  },
  {
    "code": 30,
    "city": "Lisbon",
    "country": "Portugal",
    "latitude": 38.73333333,
    "lognitude": 9.09,
    "continent":"europe",
    "do-you-know" : "Portugal is one of the world's top surf spots. Portugal has a coastline that spans 497 miles (800 kilometers) and it's known to have 364 days of surf!"
  },
  {
    "code": 31,
    "city": "Moscow",
    "country": "Russia",
    "latitude": 55.75,
    "lognitude": -37.36,
    "continent":"europe",
    "do-you-know": "When McDonald’s opened its very first restaurant in Moscow in 1990, people generated a queue stretching for several miles. The restaurant reportedly served more than 30,000 customers on that day, a record that has not been broken yet."
  },
  {
    "code": 32,
    "city": "Mecca",
    "country": "Saudi Arabia",
    "latitude": 21.48333333,
    "lognitude": -39.45,
    "continent":"asia-pacific",
    "do-you-know": "While Madinah is known as the city of the Prophet (PBUH), it is Makkah where he spent much of his life."
  },
  {
    "code": 33,
    "city": "Singapore",
    "country": "Singapore",
    "latitude": 1.233333333,
    "lognitude": -103.55,
    "continent":"asia-pacific",
    "do-you-know":"Singapore is often described as a city with the most strict — and sometimes pretty bizarre — rules. For instance, singing, reciting or uttering any ballad or obscene song in public is illegal and could get you jailed for three months. The same punishment is linked to another mischief — connecting to another person’s Wi-Fi. And no matter what you do in your house in Singapore, don’t you dare walk around naked. Nudity in your own house is related to pornography charges of up to $1,000. "
  },
  {
    "code": 34,
    "city": "Cape Town",
    "country": "South Africa",
    "latitude": -33.91666667,
    "lognitude": -18.22,
    "continent":"africa",
    "do-you-know": "Soutn Africa is home to an abundance of animals, birds and marine life! South Africa boasts 10% of the world’s bird, fish and plant species as well as 6% of its mammal and reptile species. "
  },
  {
    "code": 35,
    "city": "Lagos(Nigeria)",
    "country": "Nigeria",
    "latitude": 6.5,
    "lognitude": 3.4,
    "continent":"africa",
    "do-you-know": "The Yoruba people in the southwest part of this African nation are known for giving birth to more twins than anywhere else in the world, at a rate of 50 per 1,000 births. The best explanation so far is that Yoruba people eat a type of yam that contains an ovarian stimulate that might release more eggs."
  },
  {
    "code": 36,
    "city": "Barcelona",
    "country": "Spain",
    "latitude": 41.38333333,
    "lognitude": -2.09,
    "continent":"europe",
    "do-you-know": "This European country is the birthplace of Miguel de Cervantes, whose iconic “Don Quixote” is considered the first modern novel. The first part was published in 1605 and the second 10 years later."
  },
  {
    "code": 37,
    "city": "Stockholm",
    "country": "Sweden",
    "latitude": 59.28333333,
    "lognitude": -18.03,
    "continent":"europe",
    "do-you-know": "Fika is a concept, a state of mind, an attitude and an important part of Swedish culture. Many Swedes consider that it is almost essential to make time for fika every day. It means making time for friends and colleagues to share a cup of coffee (or tea) and a little something to eat."
  },
  {
    "code": 38,
    "city": "Zurich",
    "country": "Switzerland",
    "latitude": 47.35,
    "lognitude": -8.31,
    "continent":"europe",
    "do-you-know": "The Swiss Marry Late. The average marriage age for Swiss men is 31.8 and 29.5 for women."
  },
  {
    "code": 39,
    "city": "Bangkok",
    "country": "Thailand",
    "latitude": 13.75,
    "lognitude": -100.3,
    "continent":"asia-pacific",
    "do-you-know": "There’s an annual festival in this Southeast Asian nation that pays homage to its many monkeys. During the Monkey Buffet Festival, residents of Lopburi provide 4.5 tons of fruits, veggies and candies to the 3,000 monkeys that live around the ancient temple of Phra Prang Sam Yot."
  },
  {
    "code": 40,
    "city": "Los Angeles",
    "country": "USA",
    "latitude": 34.1, 
    "lognitude": 118.2,
    "continent":"americas",
    "do-you-know": "The world-famous Hollywood sign in Los Angeles attracts millions of visitors every year. But it is a little-known fact that when the sign was initially erected in 1923, it didn’t say only Hollywood, but HOLLYWOODLAND. Its main purpose was to advertise a new segregated housing development in the hills above the Hollywood district."
  },
  {
    "code": 41,
    "city": "New York",
    "country": "USA",
    "latitude": 40.7,
    "lognitude": 74,
    "continent":"americas",
    "do-you-know" : "New York is home to the first-ever United States pizzeria? Lombardi’s opened in 1895 and still serves some of the best pizza in New York City."
  },
  {
    "code": 42,
    "city": "Chicago",
    "country": "USA",
    "latitude": 41.9,
    "lognitude": 87.6,
    "continent":"americas",
    "do-you-know" : "Chicago loves to provide a taste of its excellent food and summer atmosphere. Visitors gather from all around the world to indulge in local fare at the city’s largest outdoor food festival: The Taste of Chicago. For five days in July, visitors can partake in not just food, but music performances by local artists and celebrities, including Carlos Santana and Kenny Rogers."
  },
  {
    "code": 43,
    "city": "Istanbul",
    "country": "Turkey",
    "latitude": 41.0,
    "lognitude": -29.0,
    "continent":"europe",
    "do-you-know": "Turkey is known for its delicious desserts like baklava, but it also has a pudding called tavuk gogsu that’s made from, among other things, milk, sugar, cinnamon and shredded chicken breasts."
  },
  {
    "code": 44,
    "city": "Jerusalem",
    "country": "Israel",
    "latitude": 31.8,
    "lognitude": -35.2,
    "continent":"europe",
    "do-you-know": "Some of the olive trees in Jerusalem are more than 800 years old."
  },
  {
    "code": 45,
    "city": "Dubai",
    "country": "UAE",
    "latitude": 25.2,
    "lognitude": -55.3,
    "continent":"asia-pacific",
    "do-you-know": "There are 2.3 males to every female in Dubai."
  },
  {
    "code": 46,
    "city": "Baghdad(Iraq)",
    "country": "Iraq",
    "latitude": 33.2,
    "lognitude": -43.7,
    "continent":"asia-pacific",
    "do-you-know" : "The ancient Sumerians of Mesopotamia — what is now modern-day Iraq — invented the world’s first writing system, called cuneiform, from 3500-3000 BC"
  },
  {
    "code": 47,
    "city": "Beijing",
    "country": "China",
    "latitude": 39.9,
    "lognitude": -116.4,
    "continent":"asia-pacific",
    "do-you-know":"There are 63 million pairs of chopsticks — or 126 million single sticks — manufactured in China every year. These range from mass-produced disposable chopsticks to high-quality sticks that can take up to (yes) a month to painstakingly make."
  },
  {
    "code": 48,
    "city": "Seattle",
    "country": "USA",
    "latitude": 47.6,
    "lognitude": 122.3,
    "continent":"americas",
    "do-you-know":"Seattle is simply an outstanding place compared to other US cities. The birthplace of Starbucks and Boeing, and home to the world’s first petrol station, prides itself with the title of the most literate city in the whole country. Not only does it have the highest rate of people having at least a college degree, but the demographics also suggest Seattle has more households with pets than with children. "
  },
  {
    "code": 49,
    "city": "Machu Picchu",
    "country": "Peru",
    "latitude": -13.16,
    "lognitude": 72.5,
    "continent":"americas",
    "do-you-know":"Unfortunately, most cities built by the Inca civilization were destroyed by the Spanish conquest. Machu Picchu was in a hidden location—invisible from below—and not found, making it one of the most well-preserved Inca cities and an archeological gem."
  }
];


