const questionTree = {
    question: "What do you prefer?",
    options: [
      {
        text: "MOVEMENT",
        nextQuestion: {
          question: "Do you have kids?",
          options: [
            {
              text: "YES",
              nextQuestion: {
                question: "Do you like adrenalin?",
                options: [
                  {text: "YES",
                    nextQuestion: {
                      question: "Are you more solo, or team player?",
                      options: [
                        {
                          text: "SOLO",
                          nextQuestion: null
                        },
                        {
                          text: "TEAM",
                          nextQuestion: null
                        }
                      ]
                    },
                },
                  { 
                    text: "NO",
                    nextQuestion: null
                  }
                ]
              }
            },
            {
              text: "NO",
              nextQuestion: {
                question: "Do you enjoy solving puzzles?",
                options: [
                  { text: "Yes", nextQuestion: null },
                  { text: "No", nextQuestion: null }
                ]
              }
            }
          ]
        }
      },
      {
        text: "RELAX",
        nextQuestion: {
          question: "What's your favorite painting style?",
          options: [
            {
              text: "Impressionism",
              nextQuestion: {
                question: "Which color palette do you prefer?",
                options: [
                  { text: "Vibrant colors", nextQuestion: null },
                  { text: "Soft pastels", nextQuestion: null }
                ]
              }
            },
            {
              text: "Abstract",
              nextQuestion: {
                question: "Do you prefer structured or chaotic compositions?",
                options: [
                  { text: "Structured", nextQuestion: null },
                  { text: "Chaotic", nextQuestion: null }
                ]
              }
            }
          ]
        }
      }
    ]
  };
