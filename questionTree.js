const questionTree = {
  question: "What do you prefer?",
  options: [
    {
      text: "Movement",
      nextQuestion: {
        question: "Do you have kids?",
        options: [
          {
            text: "Yes",
            nextQuestion: {
              question: "Do you like adrenalin?",
              options: [
                {
                  text: "Yes",
                  nextQuestion: {
                    question: "Are you more solo, or team player?",
                    options: [
                      {
                        text: "Solo",
                        nextQuestion: "img/playground.jpg",
                      },
                      {
                        text: "Team",
                        nextQuestion: "img/sports.jpg",
                      },
                    ],
                  },
                },
                {
                  text: "No",
                  nextQuestion: "img/sports.jpg",
                },
              ],
            },
          },
          {
            //do you have kids
            text: "No",
            nextQuestion: {
              question: "Wim Hof?",
              options: [
                { text: "Yes", nextQuestion: "img/sauna.jpg" },
                {
                  text: "No",
                  nextQuestion: {
                    question: "Boulder or Ball?",
                    options: [
                      { text: "Boulder", nextQuestion: "img/playground.jpg" },
                      { text: "Ball", nextQuestion: "img/sports.jpg" },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: "Relax",
      nextQuestion: {
        question: "What atmosphere do you prefer?",
        options: [
          {
            text: "Calm",
            nextQuestion: {
              question: "Indoors or Outdoors?",
              options: [
                {
                  text: "Indoors",
                  nextQuestion: {
                    question: "Book or Cook?",
                    options: [
                      {
                        text: "Book",
                        nextQuestion: {
                          question: "Body, Mind or Soul?",
                          options: [
                            { text: "Body", nextQuestion: "img/sauna.jpg" },
                            { text: "Mind", nextQuestion: "img/library.jpg" },
                            { text: "Soul", nextQuestion: "img/temple.jpg" },
                          ],
                        },
                      },
                      { text: "Cook", nextQuestion: "img/restaurant.jpg" },
                    ],
                  },
                },
                {
                  text: "Outdoors",
                  nextQuestion: {
                    question: "Agri/Aqua Culture?",
                    options: [
                      {
                        text: "Agri!",
                        nextQuestion: {
                          question: "Do you like animals?",
                          options: [
                            { text: "Yes!", nextQuestion: "img/farmstead.jpg" },
                            {
                              text: "No",
                              nextQuestion: {
                                question: "Do you prefer winter or summer?",
                                options: [
                                  { text: "Winter", nextQuestion: "img/sauna.jpg" },
                                  { text: "Summer", nextQuestion: "img/beach.jpg" },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Aqua!",
                        nextQuestion: {
                          question: "Do you prefer winter or summer?",
                          options: [
                            { text: "Winter", nextQuestion: "img/sauna.jpg" },
                            { text: "Summer", nextQuestion: "img/beach.jpg" },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            // what atmosphere
            text: "Lively",
            nextQuestion: {
              question: "Do you like more nature, or city?",
              options: [
                {
                  text: "City",
                  nextQuestion: {
                    question: "Do you have kids?",
                    options: [
                      {
                        text: "Yes",
                        nextQuestion: {
                          question: "Do you like adrenalin?",
                          options: [
                            {
                              text: "Yes",
                              nextQuestion: "img/playground.jpg",
                            },
                            {
                              text: "No",
                              nextQuestion: "img/beach.jpg",
                            },
                          ],
                        },
                      },
                      {
                        //do you have kids
                        text: "No",
                        nextQuestion: {
                          question: "Eat or Sleep?",
                          options: [
                            { text: "Eat", nextQuestion: "img/restaurant.jpg" },
                            { text: "Sleep", nextQuestion: "img/beach.jpg" },
                          ],
                        },
                      }, /// ----- END CITY
                    ],
                  },
                },
                {
                  text: "Nature",
                  nextQuestion: {
                    question: "Agri/Aqua Culture?",
                    options: [
                      {
                        text: "Agri!",
                        nextQuestion: {
                          question: "Do you like animals?",
                          options: [
                            { text: "Yes!", nextQuestion: "img/farmstead.jpg" },
                            {
                              text: "No",
                              nextQuestion: {
                                question: "Do you prefer winter or summer?",
                                options: [
                                  { text: "Winter", nextQuestion: "img/beach.jpg" },
                                  { text: "Summer", nextQuestion: "img/sauna.jpg" },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Aqua!",
                        nextQuestion: {
                          question: "Do you prefer winter or summer?",
                          options: [
                            { text: "Winter", nextQuestion: "img/beach.jpg" },
                            { text: "Summer", nextQuestion: "img/sauna.jpg" },
                          ],
                        },
                      },
                    ],
                  },
                }, // --end nest
              ],
            },
          },
        ],
      },
    },
  ],
};

