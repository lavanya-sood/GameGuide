const traits = [
  {
    traits_id: "T01",
    category: "Personality Traits",
    traits: [
      {
        id: "T01_01",
        icon: "../../assets/traits/T01_01.webp",
        name: "Ambitious",
        description:
          "These Sims gain powerful Moodlets from career success, gain negative Moodlets from career failure, and may become Tense if not promoted.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_02",
        icon: "../../assets/traits/T01_02.webp",
        name: "Cheerful",
        description: "These Sims tend to be Happier than other Sims.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_03",
        icon: "../../assets/traits/T01_03.webp",
        name: "Childish",
        description:
          "These Sims gain powerful Moodlets from watching the Kids Network, become Playful when playing with Children, and become Happy when playing with Children's toys.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_04",
        icon: "../../assets/traits/T01_04.webp",
        name: "Clumsy",
        description:
          "These Sims tend to fail more often at physical activities and tend to laugh at failure instead of becoming upset.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_05",
        icon: "../../assets/traits/T01_05.webp",
        name: "Creative",
        description:
          "These Sims tend to be Inspired, can Share Creative Ideas with other Sims, and may become upset if they're not creative for a period of time.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_06",
        icon: "../../assets/traits/T01_06.webp",
        name: "Erratic",
        description:
          "These Sims can Talk to themselves and have unpredictable Emotions.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_07",
        icon: "../../assets/traits/T01_07.webp",
        name: "Genius",
        description:
          "These Sims tend to be Focused, can Share Ideas with other Sims, and may become upset if they haven't improved their Mental Skills for some time.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_08",
        icon: "../../assets/traits/T01_08.webp",
        name: "Gloomy",
        description:
          "These Sims tend to be Sad, can Share Melancholy Thoughts to other Sims, and while sad, gain a boost to their Creative Skill.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_09",
        icon: "../../assets/traits/T01_09.webp",
        name: "Goofball",
        description: "These Sims tend to be Playful.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_10",
        icon: "../../assets/traits/T01_10.webp",
        name: "High Maintenance",
        description:
          "These Sims require extra work to keep in good condition. Their problems sometimes appear trivial, and may even appear out of the blue. These struggles can be remedied through mindful habits, which puts them in a state of catharsis.",
        pack: "spaDay",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_11",
        icon: "../../assets/traits/T01_11.webp",
        name: "Hot-Headed",
        description:
          "These Sims tend to be Angry, can Rile up other Sims, and become Angry when targeted with Mischief.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_12",
        icon: "../../assets/traits/T01_12.webp",
        name: "Paranoid",
        description:
          "Paranoid Sims feel that danger is around every corner, and that people are always talking about them. Paranoid Sims feel a sense of security while hanging out in basements.",
        pack: "strangerville",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_13",
        icon: "../../assets/traits/T01_13.webp",
        name: "Romantic",
        description:
          "These Sims tend to be Flirty and may become Sad if they don't have any Romantic social interactions for a period of time.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_14",
        icon: "../../assets/traits/T01_14.webp",
        name: "Self-Assured",
        description: "These Sims tend to be Confident.",
        pack: "baseGame",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_15",
        icon: "../../assets/traits/T01_15.webp",
        name: "Squeamish",
        description:
          "Squeamish Sims are nauseated by the sight of creepy crawlies, vomiting, violence and death. These Sims become Uncomfortable near anything dirty.",
        pack: "outdoorRetreat",
        exclusions: [],
        type: "emotional",
      },
      {
        id: "T01_16",
        icon: "../../assets/traits/T01_16.webp",
        name: "Unflirty",
        description:
          "These Sims get Tense around Flirty Sims and seldom get Flirty themselves. It's difficult for them to be Romantic in public.",
        pack: "cityLiving",
        exclusions: [],
        type: "emotional",
      },

      {
        id: "T01_17",
        icon: "../../assets/traits/T01_17.webp",
        name: "Art Lover",
        description:
          "These Sims gain powerful Moodlets from Viewing works of art and can Admire Art and Discuss Art in unique ways.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_18",
        icon: "../../assets/traits/T01_18.webp",
        name: "Bookworm",
        description:
          "These Sims gain powerful Moodlets from reading Books and can Analyze Books and Discuss Books in unique ways.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_19",
        icon: "../../assets/traits/T01_19.webp",
        name: "Dance Machine",
        description:
          "These Sims can't wait to get down, boogie, and party all night! When at venues like Bars, Nightclubs, and Lounges, these Sims can get a burst of energy with the Party Time interaction.",
        pack: "getTogether",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_20",
        icon: "../../assets/traits/T01_20.webp",
        name: "Foodie",
        description:
          "These Sims become Happy and have Fun when eating good food, become Uncomfortable when eating bad food, and can Watch Cooking Shows for ideas.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_21",
        icon: "../../assets/traits/T01_21.webp",
        name: "Geek",
        description:
          "These Sims become Happy when Reading Sci-Fi or Playing Video Games, may become Tense if they haven't played much, are better at finding Collectibles, and can Discuss Geek Things with other Geek Sims.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_22",
        icon: "../../assets/traits/T01_22.webp",
        name: "Loves Outdoors",
        description:
          "These Sims can Enthuse about Nature to other Sims and become Happy when Outdoors.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_23",
        icon: "../../assets/traits/T01_23.webp",
        name: "Maker",
        description:
          "These Sims become happy when making things. They become sad when it's been too long since completing a project on a Fabricator, Candlemaking Station, Juice Fizzer, or Woodworking Table. They do not receive negative effects from crafting or repair failures.",
        pack: "ecoLiving",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_24",
        icon: "../../assets/traits/T01_24.webp",
        name: "Music Lover",
        description:
          "These Sims gain powerful Moodlets and boost their Fun Need when Listening to Music and become Happy when playing instruments.",
        pack: "baseGame",
        exclusions: [],
        type: "hobby",
      },
      {
        id: "T01_25",
        icon: "../../assets/traits/T01_25.webp",
        name: "Recycle Disciple",
        description:
          "These Sims are rabid recyclers that benefit from recycling and rummaging for bits and pieces, but should they go too long without indulging in their hobby...",
        pack: "ecoLiving",
        exclusions: [],
        type: "hobby",
      },

      {
        id: "T01_26",
        icon: "../../assets/traits/T01_26.webp",
        name: "Active",
        description:
          "These Sims tend to be Energized, can Pump Up other Sims, and may become upset if they don't exercise for a period of time.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_27",
        icon: "../../assets/traits/T01_27.webp",
        name: "Adventurous",
        description: "These Sims seek out new and unique experiences.",
        pack: "snowyEscape",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_28",
        icon: "../../assets/traits/T01_28.webp",
        name: "Child of the Islands",
        description:
          "These Sims experience a spiritual connection to islands of Sulani. Honor the islands by partaking in their culture, summon powerful elementals and reap the rewards of their blessings—or the consequences of their disfavor.",
        pack: "islandLiving",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_29",
        icon: "../../assets/traits/T01_29.webp",
        name: "Child of the Ocean",
        description:
          "Answer the call of the ocean! Sims with this trait will prefer water related activities and feel closer to denizens of the sea.",
        pack: "islandLiving",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_30",
        icon: "../../assets/traits/T01_30.webp",
        name: "Freegan",
        description:
          "These Sims reject consumerism and prefer to reduce wasteful spending by any means. They enjoy finding re-used or thrown away goods and foods. In fact, they have the best luck at finding the highest-quality treasures in Dumpsters! They may become tense or uncomfortable if they spend too much time earning or spending Simoleons.",
        pack: "ecoLiving",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_31",
        icon: "../../assets/traits/T01_31.webp",
        name: "Glutton",
        description:
          "These Sims have a greater negative reaction to Hunger, always enjoy eating, no matter the quality of the food, and will eat Spoiled Food.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_32",
        icon: "../../assets/traits/T01_32.webp",
        name: "Green Fiend",
        description:
          "These Sims are happiest when living on a green street and will continuously work towards making their environment more eco-friendly.",
        pack: "ecoLiving",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_33",
        icon: "../../assets/traits/T01_33.webp",
        name: "Kleptomaniac",
        description:
          "These Sims don't mind 'borrowing' things from others with a simple swipe, but will get Tense when they have not swiped anything in a while.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_34",
        icon: "../../assets/traits/T01_34.webp",
        name: "Lactose Intolerant",
        description:
          "These Sims will become sick if they eat dairy, but will feel great if they have avoided it for a while.",
        pack: "cottageLiving",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_35",
        icon: "../../assets/traits/T01_35.webp",
        name: "Lazy",
        description:
          "These Sims gain powerful Moodlets from Watching TV or Napping as well as from Comfortable furniture, become Fatigued more quickly from exercise, and grow Tense when performing household chores.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_36",
        icon: "../../assets/traits/T01_36.webp",
        name: "Materialistic",
        description:
          "These Sims can Admire and Brag about Possessions and become Sad when they haven't purchased a new item for a period of time.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_37",
        icon: "../../assets/traits/T01_37.webp",
        name: "Neat",
        description:
          "These Sims become Happy and have Fun when performing household chores, can have a Cleaning Frenzy, and become really Uncomfortable in dirty surroundings.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_38",
        icon: "../../assets/traits/T01_38.webp",
        name: "Overachiever",
        description:
          "These Sims tend to raise their skills faster and are happy when they finish work tasks, but are a little harder to get along with as friends.",
        pack: "highschool",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_39",
        icon: "../../assets/traits/T01_39.webp",
        name: "Perfectionist",
        description:
          "These Sims take longer to craft items but tend to make them higher quality, gain powerful Moodlets after crafting a high quality item, and gain negative Moodlets after crafting a low quality item.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_40",
        icon: "../../assets/traits/T01_40.webp",
        name: "Rancher",
        description:
          "These Sims excel at ranch life and take pride in their work. They enjoy ranch chores and caring for their Livestock.",
        pack: "ranch",
        exclusions: [],
        type: "lifestyle",
      },

      {
        id: "T01_41",
        icon: "../../assets/traits/T01_41.webp",
        name: "Slob",
        description:
          "These Sims are not affected by dirty surroundings, make household items dirtier faster, and can Rummage for Food in garbage.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
      {
        id: "T01_42",
        icon: "../../assets/traits/T01_42.webp",
        name: "Vegetarian",
        description:
          "These Sims will actively avoid eating foods that contain meat products and can become sick if they eat such foods.",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },

      {
        id: "T01_43",
        icon: "../../assets/traits/T01_43.webp",
        name: "Animal Enthusiast",
        description:
          "These Sims are obsessed with animals, and will seek their company often. They will have an easier time caring for animals and getting closer to them.",
        pack: "cottageLiving",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_44",
        icon: "../../assets/traits/T01_44.webp",
        name: "Bro",
        description:
          "These Sims can Bro Hug other Bros, gain Confidence around other Bros, and become Energized from Watching Sports.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_45",
        icon: "../../assets/traits/T01_45.webp",
        name: "Cat Lover",
        description:
          "These Sims tend to make cats their companions, preferring the company of cats to other Sims",
        pack: "catDog",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_46",
        icon: "../../assets/traits/T01_46.webp",
        name: "Dog Lover",
        description:
          "These Sims love to be near dogs. They will gain relationships faster with dogs and socialize with dogs more than the average Sim.",
        pack: "catDog",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_47",
        icon: "../../assets/traits/T01_47.webp",
        name: "Evil",
        description:
          "These Sims become Happy around Sims with negative Moodlets, can Laugh Maniacally and Discuss Evil Plans, and become Angry when interacting with Good Sims.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_48",
        icon: "../../assets/traits/T01_48.webp",
        name: "Family-oriented",
        description:
          "These Sims become Happy around family members, become Sad if they don't interact with family for a period of time, and can Boast about Family.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_49",
        icon: "../../assets/traits/T01_49.webp",
        name: "Good",
        description:
          "These Sims become Happy around Sims with positive Moodlets, can Donate to Charity, become Sad with interacting with Evil Sims, and can Discuss World Peace.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_50",
        icon: "../../assets/traits/T01_50.webp",
        name: "Hates Children",
        description:
          "These Sims become Angry around Children, become Tense after Try for a Baby, and can be Mean to Children.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_51",
        icon: "../../assets/traits/T01_51.webp",
        name: "Horse Lover",
        description:
          "These Sims share a strong bond with Horses. They have an easier time socializing with and caring for Horses than other Sims.",
        pack: "ranch",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_52",
        icon: "../../assets/traits/T01_52.webp",
        name: "Insider",
        description:
          "These Sims love being in Clubs, and tend to be happiest when surrounded by their friends.",
        pack: "getTogether",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_53",
        icon: "../../assets/traits/T01_53.webp",
        name: "Jealous",
        description:
          "These Sims get Jealous more easily than other Sims. They gain a boost of Confidence from being around their significant other, but get Tense if they haven't seen them recently.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_54",
        icon: "../../assets/traits/T01_54.webp",
        name: "Loner",
        description:
          "These Sims become Happy when alone, do not receive negative Moodlets when their Social Need is low, become Tense around strangers, and become Embarrassed more often by social rejection.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_55",
        icon: "../../assets/traits/T01_55.webp",
        name: "Loyal",
        description:
          "Loyal sims value their relationships and fully commit to them. whether they are friendship, romance or even work! They avoid lying and cheating because their loved ones' trust is very important to them.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_56",
        icon: "../../assets/traits/T01_56.webp",
        name: "Mean",
        description:
          "These Sims become Happy when being Mean or Mischievous to other Sims and become Confident after winning a fight.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_57",
        icon: "../../assets/traits/T01_57.webp",
        name: "Noncomittal",
        description:
          "These Sims become Tense after a while in the same job or relationship, become Happy when they Quit a Job or Break Off a relationship, take longer to Propose, and can Discuss their Fear of Commitment.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_58",
        icon: "../../assets/traits/T01_58.webp",
        name: "Outgoing",
        description:
          "These Sims gain powerful Moodlets from Friendly socialization, have their Social need decay quickly, and gain more negative Moodlets when their Social need is low",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_59",
        icon: "../../assets/traits/T01_59.webp",
        name: "Party Animal",
        description:
          "These Sims tend to enjoy parties and letting every other Sim know by hyping up a crowd and performing party tricks.",
        pack: "highSchool",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_60",
        icon: "../../assets/traits/T01_60.webp",
        name: "Proper",
        description:
          "These Sims tend to disapprove of other Sims' improper behavior such as Mean or Mischievous socials, but find themselves happier in Formal Outfits and have a much easier time with Friendly and Romantic socials.",
        pack: "snowyEscape",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_61",
        icon: "../../assets/traits/T01_61.webp",
        name: "Self-Absorbed",
        description:
          "These Sims are all about themselves! They can Fish for Compliments, are more excited when receiving a present, and may become tense when they haven’t gotten enough attention. The celebrity spotlight is something they generally relish. After all, everyone else should love them as much as they do themselves, right?",
        pack: "getFamous",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_62",
        icon: "../../assets/traits/T01_62.webp",
        name: "Snob",
        description:
          "These Sims can Critique Work on low quality items, are bored by 'low brow' television, and gain Confidence around other Snob Sims.",
        pack: "baseGame",
        exclusions: [],
        type: "social",
      },
      {
        id: "T01_63",
        icon: "../../assets/traits/T01_63.webp",
        name: "Socially Awkward",
        description:
          "These Sims tend to struggle in social situations and build charisma more slowly, but gain powerful Moodlets and Sentiments when they are able to overcome their awkwardness and accompanying nervousness to form close relationships.",
        pack: "highSchool",
        exclusions: [],
        type: "social",
      },

      {
        id: "T01_40",
        icon: "../../assets/traits/T01_40.webp",
        name: "",
        description: "",
        pack: "baseGame",
        exclusions: [],
        type: "lifestyle",
      },
    ],
  },
];
