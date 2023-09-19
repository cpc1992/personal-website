const myprojects = [
  {
    "id": 0,
    "title": "Graph Traversal Visualizer",
    "description": "A fun app that visualizes different graph traversal algorithms. It can produce up to 1000 nodes and animate the traversal between two nodes or the entire graph. I've always been intrigued by graph algorithms and I wanted to visualize them in action. I hope you have as much fun playing with this as I did building it! <br /> Tip: You can drag around the nodes :D",
    "tooling": "The UI is built with React, and data visualization is done by D3js.",
    "links": [
      ["Live Site", "https://graph-traversal-kappa.vercel.app/"],
      ["Github", "https://github.com/cpc1992/graph-traversal"],
    ],
    "state": 0
  },
  {
    "id": 1,
    "title": "Airbnb Tableizer",
    "description": "This is a tool which scrapes Airbnb links provided by the user and generates a temporary Google Sheet. In preparation for travel, I used to manually comb through hundreds of listings on Airbnb in order to compare rentals. One day I though 'I can automate this' and this tool was born!",
    "tooling": "The UI is built with React, and the backend is handled by a Python Flask server.",
    "links": [
      ["Live Site", "https://airbnb-tableizer.vercel.app/"],
      ["Github", "https://github.com/cpc1992/airbnb-tableizer"],
    ],
    "state": 0
  },
  {
    "id": 2,
    "title": "Unusual Options Flow",
    "description": "This app uses the Discord API to query unusual stock option purchases and also scrapes Yahoo finance earnings data. The data is then compared to show if the option purchases coincide with upcoming company earnings. The purchase data is listed in table format and is searchable by ticker. <br />Note: All API requests and scraping were turned off in June 2022.",
    "tooling": "The UI is written in HTML/CSS with help from Bootstrap, the backend is handled by an Express server, and the data is stored in MongoDB.",
    "links": [
      ["Live Site", "https://unusual-option-flow.vercel.app/auth"],
      ["Github", "https://github.com/cpc1992/UnusualOptionFlow"],
    ],
    "state": 0
  }
]

export default myprojects;