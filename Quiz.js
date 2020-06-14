(function(){
    function affiche_Quiz(){
      
      const output = [];  // variable qui stocke les données HTML 
  
      // boucle pour chaque question
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          
          const answers = []; // variable qui stocke la liste des réponses possibles
  
          // boucle pour chaque réponses possibles
          for(letter in currentQuestion.answers){
  
            // on ajoute un bouton radio en HTML pour cocher une case
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // on ajoute les questions avec leurs réponses respectives
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="reponses"> ${answers.join('')} </div>`
          );
        }
      );
  
      // On retourne le HTML sur la page en combinant les outputs ensemble
      quizContainer.innerHTML = output.join('');
    }
  
    function show_resultats(){
  
      // On récupère toutes les réponses du quizContainer ensemble
      const answerContainers = quizContainer.querySelectorAll('.reponses');
  
      let numCorrect = 0; // on stocke le nb de bonne réponse du joueur
  
      // boucle pour chaque questions
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // on récupère les réponses séectionnées
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const reponse_user = (answerContainer.querySelector(selector) || {}).value;
  
        // si la réponse est bonne
        if(reponse_user === currentQuestion.correctAnswer){

          numCorrect++; // alors on augmente de 1 le compteur de bonne réponse
  
          // on met du style sur les bonnes réponses, en vertes
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // sinon si la réponse est fausse ou vide
        else{
          // on met du style sur les mauvaises réponses, en rouges
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // on affiche le score final avec une note sur 30
      resultsContainer.innerHTML = `<font size="6.5">Votre score : ${numCorrect} / ${myQuestions.length}</font>`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
          question: "Que fait le bakedoro aux voyageurs ?",
          answers: {
            a: "Il les guide",
            b: "Il les perd",
            c: "Il les déshabille",
            d: "La réponse D"
          },
          correctAnswer: "b"
        },
        {
            question: "Dans Monogatari comment le bakeneko considère Hanekawa Tsubasa ?",
            answers: {
              a: "Comme son esclave",
              b: "Comme sa femme",
              c: "Comme sa maîtresse",
              d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "De quoi se nourrit le Baku ?",
            answers: {
                a: "Des rêves et des cauchemars",
                b: "Des âmes",
                c: "De concombre",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Quelle est la particularité du feu du Basan ?",
            answers: {
                a: "Il brûle tout ",
                b: "Il ne brûle pas",
                c: "Il permet de toujours avoir la cuisson parfaite",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "La Futakuchi Onna est une femme possédante :",
            answers: {
                a: "1 pénis",
                b: "2 Bouches",
                c: "3 dents",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Comment peut on battre un Gashadokuro ?",
            answers: {
                a: "On ne peut pas",
                b: "En disant trois fois 'Chipeur arrête de chiper'",
                c: "En lui plantant un Katana dans le crâne",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Dans Monogatari, Sengoku Nadeko est devenu :",
            answers: {
                a: "Une déesse",
                b: "Une démone",
                c: "Une stripteaseuse",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Dans Monogatari, Araragi Tsukuhi ne change pas dans le monde… :",
            answers: {
                a: "De l'épée",
                b: "De Dora",
                c: "Du miroir",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Les Kama Itachi attaquent par groupe de :",
            answers: {
                a: "3",
                b: "42",
                c: "5",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "De quoi sont constituer les offrandes faites aux Kappa ?",
            answers: {
                a: "De concombre",
                b: "De chair humaine",
                c: "De gaufres",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Dans Fate quelles ont les deux formes de Kijyo Koyo ?",
            answers: {
                a: "Dragon et humain",
                b: "Dinosaure et humaine",
                c: "ROM et RAM",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Le Kirin est un symbole de … :",
            answers: {
                a: "Brutalité et de vilénie",
                b: "Pureté et de Bonté",
                c: "Ouais, c'est pas faux",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Dans Fate Kiyohime est une … :",
            answers: {
                a: "Tsundere",
                b: "Yandere",
                c: "Kuudere",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Quel est le nombre maximum de queues que peut avoir un Kitsune ?",
            answers: {
                a: "9",
                b: "12",
                c: "Infini + 1",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Le Neko-Mata est un être … :",
            answers: {
                a: "Maléfique",
                b: "Bon",
                c: "Circonflexe seulement le mardi",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Dans Fate Shuten Douji est une femme … :",
            answers: {
                a: "Toxique",
                b: "Mature",
                c: "Puérile",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Dans Fate Osakabehime est une … :",
            answers: {
                a: "Hipster",
                b: "Hikimori",
                c: "LGBT+",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Quelle la véritable nature de Tamamo-no-Mae ?",
            answers: {
                a: "Neko-Mata",
                b: "À moitié libanais",
                c: "Kyubi no kitsune",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Quelle est le pouvoir des Tanukis ?",
            answers: {
                a: "Ils sont invisibles",
                b: "Ils peuvent se transformer en ce qu'ils veulent",
                c: "Ils peuvent se brosser les temps matin/midi et soir",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "Qu'est ce qu'un Tatsu ?",
            answers: {
                a: "Un crocodile",
                b: "Une moule",
                c: "Un dragon",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Quelle est la particularité physique des Tengu ?",
            answers: {
                a: "Des oreilles de lapins",
                b: "Une petite bouche",
                c: "Un long nez",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Dans monogatari, Ononoki est un personnage qui n'a pas … :",
            answers: {
                a: "De personnalité",
                b: "D'âme",
                c: "D'habits",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Où vit le Wani ?",
            answers: {
                a: "Dans le ciel",
                b: "Dans la zone 51",
                c: "Dans l'eau",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Qui a tué le Yamata-no-Orochi ?",
            answers: {
                a: "Amaterasu",
                b: "Susanoo",
                c: "Chuck Norris",
                d: "La réponse D"
            },
            correctAnswer: "b"
        },
        {
            question: "À quoi ressemble la Yama-Uba ?",
            answers: {
                a: "À une jeune femme au regard charnelle",
                b: "À un mammouth",
                c: "À une vielle femme",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "La yuki-onna est … :",
            answers: {
                a: "Une vielle femme qui mange les gens",
                b: "Un ours pédophile",
                c: "Une belle jeune femme qui gèle les gens",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Dans Fate, qui est la mère de Tamamo-no-Mae ?",
            answers: {
                a: "Personne",
                b: "Kiyohime",
                c: "Amaterasu",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Dans Monogatari, de quel yokai le personnage de Mayoi est inspiré ?",
            answers: {
                a: "Du Bakedoro",
                b: "C'est une loli",
                c: "Du Ho-Oh",
                d: "La réponse D"
            },
            correctAnswer: "a"
        },
        {
            question: "Quelle est le rôle du kitsune ?",
            answers: {
                a: "Chef cuisinier",
                b: "Guider les âmes des défunts vers l'enfer",
                c: "Messager des Dieux",
                d: "La réponse D"
            },
            correctAnswer: "c"
        },
        {
            question: "Dans Fate comment se comporte Minamoto-no-Raikou avec le personnage principal ?",
            answers: {
                a: "Comme une mère",
                b: "Comme une grande sœur",
                c: "Comme sa petite amie",
                d: "La réponse D"
            },
            correctAnswer: "a"
        }
    ];
  
    // on affiche le quiz en entier
    affiche_Quiz();
  
    // Event listeners
    submitButton.addEventListener('click', show_resultats);
  })();