  const arr_app = [
    "Miso Soup",
    "House Green Salad",
    "Gyoze", "Edamame",
    "Harumaki",
    "Seaweed Salad",
    "Agedashi Tofu",
    "Sunomono Salad",
    "Chicken Karage",
    "Soft Shell Crab",
    "Tuna Tataki",
    "Potato Croquette",
    "Tuna Carppachio"
  ]
  const arr_tempura = [
    "Prawn Tempura",
    "Yam Tempura",
    "Vegetable Tempura",
    "Assorted Tempura",
    "Appetizer Tempura",
    "Sweet Potato Tempura"
  ]
  const arr_udon = [
    "Plain Udon",
    "Beef Udon",
    "Chicken Udon",
    "Seafood Udon",
    "Beef Yakiudon",
    "Chicken Yakiudon",
    "Seafood Yakiudon",
    "Nabeyaki Udon"
  ]
  const arr_carte = [
    "Chicken Teriyaki",
    "Beef Teriyaki",
    "Chicken Curry",
    "Beef Curry",
    "Chicken Teriyaki Donburi",
    "Beef Teriyaki Donburi",
    "Sable Fish",
    "Unagi Donburi"
  ]
  const arr_maki = [
    "Kappa Roll",
    "Oshinko Roll",
    "Salmon Roll",
    "Tuna Roll",
    "Negitoro Roll",
    "California Roll",
    "Salmon Avocado Roll",
    "Yam Tempura Roll",
    "BC Roll",
    "Dynamite Roll",
    "Mango Roll",
    "Philadelphia Roll",
    "Unagi Roll",
    "Chopped Scallop Roll",
    "Spicy Salmon Roll",
    "Spicy Tuna Roll"
  ]
  const arr_temaki = [
    "Tuna Cone",
    "Salmon Cone",
    "Chopped Scallop Cone",
    "Spicy Tuna Cone",
    "Spicy Salmon Cone",
    "Spicy Chopped Scallop Cone"
  ]
  const arr_nigiri = [
    "Inari",
    "Tamago",
    "Hokkigai",
    "Wakame",
    "Tuna",
    "Salmon",
    "Sockeye Salmon",
    "Masago",
    "Saba",
    "Ebi",
    "Chopped Scallop",
    "Tobiko",
    "Tai",
    "Ika",
    "Toro",
    "Tobiko & Quall Egg",
    "Smoke Salmon",
    "Tako",
    "Amaebi",
    "Hotategai",
    "Unagi",
    "Ikura",
    "Hamachi",
    "Red Tuna",
    "Uni"
  ]
  const arr_sashimi = [
    "Salmon Sashimi",
    "Tuna Sashimi",
    "Spicy Salmon Sashimi",
    "Spicy Tuna Sashimi",
    "Tuna & Salmon Sashimi",
    "Sockeye Salmon Sashimi",
    "Hokkigai Sashimi",
    "Toro Sashimi",
    "Tako Sashimi",
    "Amaebi Sashimi",
    "Hamachi Sashimi",
    "Assorted Sashimi",
    "Red Tuna Sashimi",
    "Uni Sashimi"
  ]
  const arr_combo = [
    "Party Tray A",
    "Party Tray B",
    "Party Tray C",
    "Spicy Combo"
  ]
  const menu = [{
      name: "Appetizer",
      items: arr_app
    },
    {
      name: "Tempura",
      items: arr_tempura
    },
    {
      name: "Udon",
      items: arr_udon
    },
    {
      name: "A La Carte",
      items: arr_carte
    },
    {
      name: "Maki",
      items: arr_maki
    },
    {
      name: "Temaki",
      items: arr_temaki
    },
    {
      name: "Nigiri",
      items: arr_nigiri
    },
    {
      name: "Sashimi",
      items: arr_sashimi
    },
    {
      name: "Combination",
      items: arr_combo
    }
  ]

  module.exports = { menu };