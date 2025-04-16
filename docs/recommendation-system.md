# Recommendation System - Content-based Recommender

## Content-based Recommendation Overview

Content based filtering is a method of recommendation based on the preferences of a user.
It looks into features/atrtibutes of a certain item and finds items that are determined as
"similar" based on the features/attributes.

[IBM Definition](https://www.ibm.com/think/topics/content-based-filtering#:~:text=Content%2Dbased%20filtering%20is%20an,user%20expresses%20interest%20into%20account.)

Let’s say you like:
```
Skyrim → [RPG, Fantasy]

The Witcher 3 → [RPG, Open-World, Fantasy]
```

A sample content based recommendation system will see that you like playing RPG and Fantasy games.
So in return, it can recommend the following
```
Dragon Age → [RPG, Fantasy]

Divinity: Original Sin 2 → [RPG, Turn-Based, Fantasy]
```

## How will this strategy be implemented in JaneBot?

First, we'll need a dataset.

Let's use this [Kaggle Dataset](https://www.kaggle.com/datasets/matheusfonsecachaves/popular-video-games)

It has most things that we need.
- Has columns with useful information (genre, title, developers)
- From this we can use [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)

#### Now, what exactly is TF-IDF?
In simple terms, TF-IDF means:
Take the text about each game, figure out which words matter the most (maybe the genre, the developer, or even the rating),
and turn that info numbers so the computer can compare them and see which ones are important.

#### With this information, we can now start thinking about how we can start recommending for users

JaneBot registering will begin by sending a quick questionnaire to the users to determine what kind of 
games  they like playing.

We can ask questions like **"Do you like sandbox games"?**
- If the user answers "yes", then we get a glimpse of the kinds of games and input that into the system.
The system can then start finding other games that could have "Sandbox" in the genre
- If the user answers "no", then we simply ask another question for a game of a different genre,
maybe try shooter games next?

What is important to note is that the dataset **also** has a column that includes ratings of each game.
This means, if we have an idea  of what kinds of genres the user may like, we can recommend other popular titles
that other users may also like. 

This kind of algorithm follows something that Netflix has - it recommends popular titles of certain genres
to users that enjoy that same genre. 