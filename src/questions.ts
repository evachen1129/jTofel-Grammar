export interface Option {
  id: string;
  text: string;
  explanation: string;
  rewrite: string; // How to rewrite the sentence to make this option correct
}

export interface Question {
  id: number;
  scenario: 'Library' | 'Sports' | 'Meeting' | 'Homework';
  textBefore: string;
  textAfter: string;
  correctOptionId: string;
  options: Option[];
  grammarPoint: string;
  generalExplanation: string;
}

export const questions: Question[] = [
  // --- Scenario: Library (1-10) ---
  {
    id: 1,
    scenario: 'Library',
    textBefore: "Students are required to keep quiet in the reading area. ________",
    textAfter: "they might disturb others who are focusing on their studies.",
    correctOptionId: 'A',
    grammarPoint: 'Conjunctions (Causal)',
    generalExplanation: 'The second sentence explains the reason for the first requirement.',
    options: [
      { id: 'A', text: 'Otherwise', explanation: 'Otherwise is used to show what will happen if the previous condition is not met.', rewrite: 'Keep quiet, otherwise you will disturb others.' },
      { id: 'B', text: 'Therefore', explanation: 'Therefore shows a result, but here we need a warning of consequence.', rewrite: 'Students are noisy; therefore, they disturb others.' },
      { id: 'C', text: 'However', explanation: 'However shows contrast, which does not fit the logic here.', rewrite: 'It is a quiet zone; however, some students are talking.' },
      { id: 'D', text: 'Because', explanation: 'Because introduces a reason, but it usually connects two clauses in one sentence.', rewrite: 'They keep quiet because they don\'t want to disturb others.' }
    ]
  },
  {
    id: 2,
    scenario: 'Library',
    textBefore: "The librarian reminded me ________",
    textAfter: "the books on time to avoid a fine.",
    correctOptionId: 'B',
    grammarPoint: 'Infinitive (Verb + to do)',
    generalExplanation: 'The structure "remind someone to do something" is used to tell someone to remember to do something.',
    options: [
      { id: 'A', text: 'returning', explanation: 'Remind is followed by "to do", not "doing".', rewrite: 'I finished returning the books on time.' },
      { id: 'B', text: 'to return', explanation: 'Correct. Remind sb. to do sth.', rewrite: 'The librarian reminded me to return the books.' },
      { id: 'C', text: 'returned', explanation: 'Past participle does not fit the object complement here.', rewrite: 'The books returned by me were overdue.' },
      { id: 'D', text: 'return', explanation: 'Base form cannot be used directly after the object.', rewrite: 'I must return the books on time.' }
    ]
  },
  {
    id: 3,
    scenario: 'Library',
    textBefore: "The new digital system ________",
    textAfter: "was installed last month has made borrowing much faster.",
    correctOptionId: 'C',
    grammarPoint: 'Relative Clauses (Subject)',
    generalExplanation: 'We need a relative pronoun to refer to "The new digital system" (a thing).',
    options: [
      { id: 'A', text: 'who', explanation: 'Who refers to people.', rewrite: 'The librarian who helped me was very kind.' },
      { id: 'B', text: 'where', explanation: 'Where refers to places.', rewrite: 'The library where I study is very large.' },
      { id: 'C', text: 'that', explanation: 'Correct. That/Which can refer to things.', rewrite: 'The system that was installed works well.' },
      { id: 'D', text: 'what', explanation: 'What cannot be used as a relative pronoun with an antecedent.', rewrite: 'I don\'t know what was installed last month.' }
    ]
  },
  {
    id: 4,
    scenario: 'Library',
    textBefore: "You can borrow up to five books at a time, ________",
    textAfter: "you have a valid student ID card.",
    correctOptionId: 'D',
    grammarPoint: 'Conditionals',
    generalExplanation: 'The second part provides the condition for borrowing books.',
    options: [
      { id: 'A', text: 'unless', explanation: 'Unless means "if not", which reverses the meaning.', rewrite: 'You cannot borrow books unless you have an ID.' },
      { id: 'B', text: 'although', explanation: 'Although shows concession, not condition.', rewrite: 'Although I have an ID, I forgot to bring it.' },
      { id: 'C', text: 'until', explanation: 'Until refers to time.', rewrite: 'Wait here until you have your ID ready.' },
      { id: 'D', text: 'provided that', explanation: 'Correct. Provided that means "on the condition that".', rewrite: 'You can borrow books provided that you have an ID.' }
    ]
  },
  {
    id: 5,
    scenario: 'Library',
    textBefore: "The rare manuscripts are kept in a special room ________",
    textAfter: "temperature is strictly controlled.",
    correctOptionId: 'B',
    grammarPoint: 'Relative Clauses (Possessive)',
    generalExplanation: 'We need to show that the temperature belongs to the room.',
    options: [
      { id: 'A', text: 'which', explanation: 'Which would be the subject or object, not possessive.', rewrite: 'The room which is small is for manuscripts.' },
      { id: 'B', text: 'whose', explanation: 'Correct. Whose shows possession for both people and things.', rewrite: 'The room whose temperature is controlled is special.' },
      { id: 'C', text: 'that', explanation: 'That cannot show possession.', rewrite: 'The room that has a controlled temperature is special.' },
      { id: 'D', text: 'where', explanation: 'Where refers to the place, but "temperature" is the subject of the next clause.', rewrite: 'The room where the temperature is controlled is special.' }
    ]
  },
  {
    id: 6,
    scenario: 'Library',
    textBefore: "________ the library was closing in ten minutes,",
    textAfter: "Tom hurried to finish his research paper.",
    correctOptionId: 'A',
    grammarPoint: 'Conjunctions (Reason)',
    generalExplanation: 'The first clause provides the reason for Tom\'s hurry.',
    options: [
      { id: 'A', text: 'Since', explanation: 'Correct. Since/As/Because can introduce a reason.', rewrite: 'Since the library was closing, he hurried.' },
      { id: 'B', text: 'While', explanation: 'While usually shows simultaneous actions or contrast.', rewrite: 'While he was reading, the library closed.' },
      { id: 'C', text: 'If', explanation: 'If introduces a condition.', rewrite: 'If the library closes, he will leave.' },
      { id: 'D', text: 'Though', explanation: 'Though shows concession.', rewrite: 'Though it was late, he stayed in the library.' }
    ]
  },
  {
    id: 7,
    scenario: 'Library',
    textBefore: "The books ________",
    textAfter: "on the top shelf are for reference only and cannot be taken home.",
    correctOptionId: 'C',
    grammarPoint: 'Participles (Passive)',
    generalExplanation: 'The books "are placed" (passive) on the shelf.',
    options: [
      { id: 'A', text: 'placing', explanation: 'Placing is active, but books don\'t place themselves.', rewrite: 'The student placing books on the shelf is a volunteer.' },
      { id: 'B', text: 'to place', explanation: 'To place indicates a future purpose.', rewrite: 'I have many books to place on the shelf.' },
      { id: 'C', text: 'placed', explanation: 'Correct. Past participle used as an adjective (passive).', rewrite: 'The books placed on the shelf are old.' },
      { id: 'D', text: 'place', explanation: 'Base form cannot modify a noun directly.', rewrite: 'Please place the books on the shelf.' }
    ]
  },
  {
    id: 8,
    scenario: 'Library',
    textBefore: "The library offers various resources, ________",
    textAfter: "online databases and e-books.",
    correctOptionId: 'B',
    grammarPoint: 'Prepositions (Including)',
    generalExplanation: 'We are listing examples of the resources.',
    options: [
      { id: 'A', text: 'besides', explanation: 'Besides means "in addition to", but "including" is more specific for examples.', rewrite: 'Besides books, the library has computers.' },
      { id: 'B', text: 'including', explanation: 'Correct. Used to introduce parts of a whole.', rewrite: 'The library has many resources, including e-books.' },
      { id: 'C', text: 'except', explanation: 'Except excludes something.', rewrite: 'The library is open every day except Sunday.' },
      { id: 'D', text: 'instead of', explanation: 'Instead of shows substitution.', rewrite: 'Use e-books instead of paper books.' }
    ]
  },
  {
    id: 9,
    scenario: 'Library',
    textBefore: "The student found it difficult to find the book ________",
    textAfter: "the computer system was down.",
    correctOptionId: 'D',
    grammarPoint: 'Conjunctions (Causal)',
    generalExplanation: 'The system being down is the reason for the difficulty.',
    options: [
      { id: 'A', text: 'so', explanation: 'So introduces a result.', rewrite: 'The system was down, so he couldn\'t find the book.' },
      { id: 'B', text: 'but', explanation: 'But shows contrast.', rewrite: 'He looked for the book, but the system was down.' },
      { id: 'C', text: 'or', explanation: 'Or shows choice.', rewrite: 'He can use the computer or ask the librarian.' },
      { id: 'D', text: 'for', explanation: 'Correct. For can be used as a coordinating conjunction meaning "because".', rewrite: 'He was lost, for he had no map.' }
    ]
  },
  {
    id: 10,
    scenario: 'Library',
    textBefore: "Before ________",
    textAfter: "the library, please make sure you have all your belongings.",
    correctOptionId: 'A',
    grammarPoint: 'Gerunds after Prepositions',
    generalExplanation: 'After the preposition "before", we use the -ing form of the verb.',
    options: [
      { id: 'A', text: 'leaving', explanation: 'Correct. Preposition + V-ing.', rewrite: 'Before leaving, check your bags.' },
      { id: 'B', text: 'leave', explanation: 'Base form cannot follow a preposition.', rewrite: 'You should leave the library now.' },
      { id: 'C', text: 'to leave', explanation: 'Infinitives usually don\'t follow "before" in this way.', rewrite: 'It is time to leave the library.' },
      { id: 'D', text: 'left', explanation: 'Past tense doesn\'t follow "before" as a preposition.', rewrite: 'He left the library before I arrived.' }
    ]
  },

  // --- Scenario: Sports Meet (11-20) ---
  {
    id: 11,
    scenario: 'Sports',
    textBefore: "The annual sports meet will be held next Friday, ________",
    textAfter: "it rains heavily.",
    correctOptionId: 'B',
    grammarPoint: 'Conditionals (Negative)',
    generalExplanation: 'The event will happen if it DOES NOT rain.',
    options: [
      { id: 'A', text: 'if', explanation: 'If it rains, the meet would likely be cancelled, not held.', rewrite: 'If it rains, we will stay inside.' },
      { id: 'B', text: 'unless', explanation: 'Correct. Unless means "if... not".', rewrite: 'The meet is on unless it rains.' },
      { id: 'C', text: 'when', explanation: 'When refers to a definite time.', rewrite: 'When it rains, the ground gets wet.' },
      { id: 'D', text: 'since', explanation: 'Since indicates a reason.', rewrite: 'Since it is raining, the meet is cancelled.' }
    ]
  },
  {
    id: 12,
    scenario: 'Sports',
    textBefore: "The relay race was very exciting, with the blue team ________",
    textAfter: "the lead in the final lap.",
    correctOptionId: 'C',
    grammarPoint: 'With-structure (Participle)',
    generalExplanation: 'The blue team is performing the action of taking the lead.',
    options: [
      { id: 'A', text: 'take', explanation: 'Base form doesn\'t fit the "with + object + doing" structure.', rewrite: 'The blue team will take the lead.' },
      { id: 'B', text: 'taken', explanation: 'Taken is passive, but the team is active.', rewrite: 'The lead was taken by the blue team.' },
      { id: 'C', text: 'taking', explanation: 'Correct. "With + n. + v-ing" for active ongoing action.', rewrite: 'With the team taking the lead, the crowd cheered.' },
      { id: 'D', text: 'to take', explanation: 'To take indicates future intent.', rewrite: 'The team is ready to take the lead.' }
    ]
  },
  {
    id: 13,
    scenario: 'Sports',
    textBefore: "________ exhausted after the long jump,",
    textAfter: "Sarah still managed to smile for the camera.",
    correctOptionId: 'D',
    grammarPoint: 'Conjunctions (Concession)',
    generalExplanation: 'There is a contrast between being exhausted and smiling.',
    options: [
      { id: 'A', text: 'Because', explanation: 'Exhaustion isn\'t the reason for smiling.', rewrite: 'Because she was happy, she smiled.' },
      { id: 'B', text: 'Since', explanation: 'Since indicates reason.', rewrite: 'Since she won, she was happy.' },
      { id: 'C', text: 'If', explanation: 'If indicates condition.', rewrite: 'If she is tired, she should rest.' },
      { id: 'D', text: 'Although', explanation: 'Correct. Although introduces a concession.', rewrite: 'Although she was tired, she smiled.' }
    ]
  },
  {
    id: 14,
    scenario: 'Sports',
    textBefore: "The coach insisted that every athlete ________",
    textAfter: "warm-up exercises before the competition.",
    correctOptionId: 'A',
    grammarPoint: 'Subjunctive Mood',
    generalExplanation: 'After verbs like "insist", "suggest", "recommend", we use (should) + base form.',
    options: [
      { id: 'A', text: 'do', explanation: 'Correct. Subjunctive base form.', rewrite: 'The coach said, "Do your warm-ups."' },
      { id: 'B', text: 'does', explanation: 'Third-person singular is not used in the subjunctive.', rewrite: 'He does warm-ups every day.' },
      { id: 'C', text: 'doing', explanation: 'Doing is a participle or gerund.', rewrite: 'He enjoys doing warm-ups.' },
      { id: 'D', text: 'did', explanation: 'Past tense is not used for this type of insistence.', rewrite: 'He did his warm-ups yesterday.' }
    ]
  },
  {
    id: 15,
    scenario: 'Sports',
    textBefore: "The high jump competition was ________",
    textAfter: "intense that the crowd held their breath.",
    correctOptionId: 'B',
    grammarPoint: 'So...that structure',
    generalExplanation: 'Use "so + adjective + that" to show degree and result.',
    options: [
      { id: 'A', text: 'such', explanation: 'Such is used with nouns (e.g., such an intense game).', rewrite: 'It was such an intense game that we were nervous.' },
      { id: 'B', text: 'so', explanation: 'Correct. So + adj. + that.', rewrite: 'The game was so intense that we cheered.' },
      { id: 'C', text: 'too', explanation: 'Too...that is not a standard structure; too...to is.', rewrite: 'It was too intense to watch.' },
      { id: 'D', text: 'very', explanation: 'Very doesn\'t connect to a "that" result clause.', rewrite: 'The game was very intense.' }
    ]
  },
  {
    id: 16,
    scenario: 'Sports',
    textBefore: "The student ________",
    textAfter: "won the gold medal in the 100-meter dash broke the school record.",
    correctOptionId: 'C',
    grammarPoint: 'Relative Clauses (Subject - People)',
    generalExplanation: 'We need a relative pronoun for "The student".',
    options: [
      { id: 'A', text: 'which', explanation: 'Which refers to things.', rewrite: 'The medal which he won is gold.' },
      { id: 'B', text: 'whose', explanation: 'Whose shows possession.', rewrite: 'The student whose shoes are red is fast.' },
      { id: 'C', text: 'who', explanation: 'Correct. Who refers to people.', rewrite: 'The student who won is my friend.' },
      { id: 'D', text: 'whom', explanation: 'Whom is used as an object, not a subject.', rewrite: 'The student whom I saw is fast.' }
    ]
  },
  {
    id: 17,
    scenario: 'Sports',
    textBefore: "The principal praised the students for ________",
    textAfter: "great sportsmanship during the meet.",
    correctOptionId: 'A',
    grammarPoint: 'Gerunds (Verb + showing)',
    generalExplanation: 'Praise sb. for (doing) sth.',
    options: [
      { id: 'A', text: 'showing', explanation: 'Correct. Preposition + V-ing.', rewrite: 'Thank you for showing us the way.' },
      { id: 'B', text: 'show', explanation: 'Base form cannot follow a preposition.', rewrite: 'Please show your ID.' },
      { id: 'C', text: 'to show', explanation: 'Infinitives don\'t usually follow "for" in this context.', rewrite: 'He came to show his support.' },
      { id: 'D', text: 'showed', explanation: 'Past tense doesn\'t follow a preposition.', rewrite: 'He showed great skill.' }
    ]
  },
  {
    id: 18,
    scenario: 'Sports',
    textBefore: "Not only ________",
    textAfter: "the race, but he also set a new record.",
    correctOptionId: 'B',
    grammarPoint: 'Inversion (Not only)',
    generalExplanation: 'When a sentence starts with "Not only", the first clause is inverted.',
    options: [
      { id: 'A', text: 'he won', explanation: 'Requires inversion.', rewrite: 'He not only won the race but also set a record.' },
      { id: 'B', text: 'did he win', explanation: 'Correct. Inverted auxiliary + subject + verb.', rewrite: 'Not only did he win, but he also broke the record.' },
      { id: 'C', text: 'he did win', explanation: 'Incorrect word order for inversion.', rewrite: 'He did win the race eventually.' },
      { id: 'D', text: 'won he', explanation: 'Incorrect inversion style.', rewrite: 'He won the race easily.' }
    ]
  },
  {
    id: 19,
    scenario: 'Sports',
    textBefore: "The volunteers were busy ________",
    textAfter: "water to the thirsty runners.",
    correctOptionId: 'C',
    grammarPoint: 'Be busy doing sth.',
    generalExplanation: 'The expression "be busy" is followed by the -ing form.',
    options: [
      { id: 'A', text: 'hand', explanation: 'Base form doesn\'t follow "busy".', rewrite: 'Please hand me the water.' },
      { id: 'B', text: 'to hand', explanation: 'Infinitive doesn\'t follow "busy".', rewrite: 'He is here to hand out water.' },
      { id: 'C', text: 'handing', explanation: 'Correct. Be busy doing sth.', rewrite: 'They were busy handing out water.' },
      { id: 'D', text: 'handed', explanation: 'Past participle doesn\'t fit here.', rewrite: 'He handed the water to me.' }
    ]
  },
  {
    id: 20,
    scenario: 'Sports',
    textBefore: "The sports meet was a great success ________",
    textAfter: "the hard work of all the teachers and students.",
    correctOptionId: 'D',
    grammarPoint: 'Prepositional Phrases (Reason)',
    generalExplanation: 'We need a phrase that means "because of".',
    options: [
      { id: 'A', text: 'because', explanation: 'Because is a conjunction and must be followed by a clause.', rewrite: 'It was a success because everyone worked hard.' },
      { id: 'B', text: 'as', explanation: 'As is a conjunction.', rewrite: 'As everyone worked hard, it was a success.' },
      { id: 'C', text: 'since', explanation: 'Since is a conjunction.', rewrite: 'Since they worked hard, they succeeded.' },
      { id: 'D', text: 'due to', explanation: 'Correct. Due to + noun phrase.', rewrite: 'The success was due to hard work.' }
    ]
  },

  // --- Scenario: Class Meeting (21-30) ---
  {
    id: 21,
    scenario: 'Meeting',
    textBefore: "The class monitor suggested ________",
    textAfter: "a field trip to the science museum next month.",
    correctOptionId: 'A',
    grammarPoint: 'Verb + Gerund',
    generalExplanation: 'The verb "suggest" is followed by the -ing form when no "that" clause is used.',
    options: [
      { id: 'A', text: 'organizing', explanation: 'Correct. Suggest doing sth.', rewrite: 'I suggest organizing a party.' },
      { id: 'B', text: 'to organize', explanation: 'Suggest is not followed by an infinitive.', rewrite: 'We plan to organize a trip.' },
      { id: 'C', text: 'organize', explanation: 'Base form cannot follow "suggest" directly.', rewrite: 'Let\'s organize a trip.' },
      { id: 'D', text: 'organized', explanation: 'Past participle doesn\'t fit.', rewrite: 'The trip was organized by him.' }
    ]
  },
  {
    id: 22,
    scenario: 'Meeting',
    textBefore: "Everyone had a different opinion, ________",
    textAfter: "it took a long time to reach a final decision.",
    correctOptionId: 'B',
    grammarPoint: 'Conjunctions (Result)',
    generalExplanation: 'The second part is the result of the first part.',
    options: [
      { id: 'A', text: 'but', explanation: 'But shows contrast.', rewrite: 'They disagreed, but they reached a decision.' },
      { id: 'B', text: 'so', explanation: 'Correct. So introduces a result.', rewrite: 'It was late, so we left.' },
      { id: 'C', text: 'or', explanation: 'Or shows choice.', rewrite: 'We can go now or wait.' },
      { id: 'D', text: 'for', explanation: 'For introduces a reason.', rewrite: 'We stayed, for it was raining.' }
    ]
  },
  {
    id: 23,
    scenario: 'Meeting',
    textBefore: "The teacher asked us ________",
    textAfter: "our hands before speaking in the meeting.",
    correctOptionId: 'C',
    grammarPoint: 'Verb + Object + to do',
    generalExplanation: 'Ask someone to do something.',
    options: [
      { id: 'A', text: 'raising', explanation: 'Ask is not followed by "doing".', rewrite: 'He practiced raising his hand.' },
      { id: 'B', text: 'raise', explanation: 'Base form doesn\'t follow the object.', rewrite: 'Please raise your hand.' },
      { id: 'C', text: 'to raise', explanation: 'Correct. Ask sb. to do sth.', rewrite: 'I asked him to raise his voice.' },
      { id: 'D', text: 'raised', explanation: 'Past participle doesn\'t fit.', rewrite: 'He spoke with his hand raised.' }
    ]
  },
  {
    id: 24,
    scenario: 'Meeting',
    textBefore: "The topic ________",
    textAfter: "we discussed yesterday was about environmental protection.",
    correctOptionId: 'D',
    grammarPoint: 'Relative Clauses (Object)',
    generalExplanation: 'We need a relative pronoun for "The topic" (a thing).',
    options: [
      { id: 'A', text: 'who', explanation: 'Who refers to people.', rewrite: 'The person who spoke was the teacher.' },
      { id: 'B', text: 'where', explanation: 'Where refers to places.', rewrite: 'The room where we met was small.' },
      { id: 'C', text: 'what', explanation: 'What cannot have an antecedent.', rewrite: 'I heard what you discussed.' },
      { id: 'D', text: 'that', explanation: 'Correct. That/Which refers to things.', rewrite: 'The book that I read was good.' }
    ]
  },
  {
    id: 25,
    scenario: 'Meeting',
    textBefore: "We won't be able to start the meeting ________",
    textAfter: "all the committee members arrive.",
    correctOptionId: 'A',
    grammarPoint: 'Time Conjunctions',
    generalExplanation: 'The meeting starts at the moment they arrive.',
    options: [
      { id: 'A', text: 'until', explanation: 'Correct. Not...until means something happens when the condition is met.', rewrite: 'Wait until they arrive.' },
      { id: 'B', text: 'while', explanation: 'While shows simultaneous action.', rewrite: 'While we wait, let\'s read.' },
      { id: 'C', text: 'since', explanation: 'Since indicates a starting point in time or a reason.', rewrite: 'Since they arrived, we have been talking.' },
      { id: 'D', text: 'unless', explanation: 'Unless means "if not", but "until" is more common for time.', rewrite: 'We won\'t start unless they are here.' }
    ]
  },
  {
    id: 26,
    scenario: 'Meeting',
    textBefore: "The student ________",
    textAfter: "proposal was chosen will lead the project.",
    correctOptionId: 'B',
    grammarPoint: 'Relative Clauses (Possessive)',
    generalExplanation: 'The proposal belongs to the student.',
    options: [
      { id: 'A', text: 'who', explanation: 'Who is the subject.', rewrite: 'The student who wrote the proposal is smart.' },
      { id: 'B', text: 'whose', explanation: 'Correct. Whose shows possession.', rewrite: 'The student whose idea it was is happy.' },
      { id: 'C', text: 'whom', explanation: 'Whom is the object.', rewrite: 'The student whom we chose is ready.' },
      { id: 'D', text: 'that', explanation: 'That cannot show possession.', rewrite: 'The student that we like is him.' }
    ]
  },
  {
    id: 27,
    scenario: 'Meeting',
    textBefore: "It is important ________",
    textAfter: "everyone's ideas during the discussion.",
    correctOptionId: 'C',
    grammarPoint: 'It is + adj + to do',
    generalExplanation: 'Standard structure for impersonal expressions.',
    options: [
      { id: 'A', text: 'respecting', explanation: 'Gerund is less common in this structure.', rewrite: 'Respecting others is important.' },
      { id: 'B', text: 'respect', explanation: 'Base form cannot follow the adjective.', rewrite: 'You must respect others.' },
      { id: 'C', text: 'to respect', explanation: 'Correct. It is + adj. + to do.', rewrite: 'It is good to respect others.' },
      { id: 'D', text: 'respected', explanation: 'Past participle doesn\'t fit.', rewrite: 'He is a respected leader.' }
    ]
  },
  {
    id: 28,
    scenario: 'Meeting',
    textBefore: "The meeting was ________",
    textAfter: "informative that we all learned a lot.",
    correctOptionId: 'A',
    grammarPoint: 'So...that structure',
    generalExplanation: 'So + adjective + that.',
    options: [
      { id: 'A', text: 'so', explanation: 'Correct. So + adj. + that.', rewrite: 'He was so tired that he slept.' },
      { id: 'B', text: 'such', explanation: 'Such requires a noun.', rewrite: 'It was such an informative meeting.' },
      { id: 'C', text: 'too', explanation: 'Too...that is not standard.', rewrite: 'It was too long to stay.' },
      { id: 'D', text: 'very', explanation: 'Very doesn\'t connect to "that".', rewrite: 'It was very informative.' }
    ]
  },
  {
    id: 29,
    scenario: 'Meeting',
    textBefore: "By ________",
    textAfter: "together, we can solve the problems more efficiently.",
    correctOptionId: 'D',
    grammarPoint: 'Gerunds after Prepositions',
    generalExplanation: 'By + doing sth. shows the method.',
    options: [
      { id: 'A', text: 'work', explanation: 'Base form doesn\'t follow "by".', rewrite: 'We must work together.' },
      { id: 'B', text: 'to work', explanation: 'Infinitive doesn\'t follow "by".', rewrite: 'We want to work together.' },
      { id: 'C', text: 'worked', explanation: 'Past tense doesn\'t follow "by".', rewrite: 'They worked together yesterday.' },
      { id: 'D', text: 'working', explanation: 'Correct. By + V-ing.', rewrite: 'By working hard, you succeed.' }
    ]
  },
  {
    id: 30,
    scenario: 'Meeting',
    textBefore: "The class monitor, ________",
    textAfter: "is very responsible, organized the meeting well.",
    correctOptionId: 'C',
    grammarPoint: 'Non-restrictive Relative Clauses',
    generalExplanation: 'We need a relative pronoun for a person in a non-restrictive clause.',
    options: [
      { id: 'A', text: 'which', explanation: 'Which refers to things.', rewrite: 'The meeting, which was long, ended at 5.' },
      { id: 'B', text: 'that', explanation: 'That cannot be used in non-restrictive (comma) clauses.', rewrite: 'The monitor that I know is him.' },
      { id: 'C', text: 'who', explanation: 'Correct. Who refers to people.', rewrite: 'My brother, who is tall, plays basketball.' },
      { id: 'D', text: 'whom', explanation: 'Whom is for objects.', rewrite: 'The monitor, whom we all like, is kind.' }
    ]
  },

  // --- Scenario: Homework & Study (31-40) ---
  {
    id: 31,
    scenario: 'Homework',
    textBefore: "I forgot ________",
    textAfter: "my math homework at home this morning.",
    correctOptionId: 'B',
    grammarPoint: 'Verb + to do vs doing',
    generalExplanation: 'Forget to do (forget a task) vs forget doing (forget a past memory).',
    options: [
      { id: 'A', text: 'leaving', explanation: 'Forget doing means forgetting a past action.', rewrite: 'I will never forget leaving my home for the first time.' },
      { id: 'B', text: 'to leave', explanation: 'Correct. Forget to do means you didn\'t do the task.', rewrite: 'Don\'t forget to leave the key.' },
      { id: 'C', text: 'leave', explanation: 'Base form doesn\'t follow "forget".', rewrite: 'I must leave now.' },
      { id: 'D', text: 'left', explanation: 'Past tense doesn\'t follow "forget".', rewrite: 'I left my homework at home.' }
    ]
  },
  {
    id: 32,
    scenario: 'Homework',
    textBefore: "The teacher told us ________",
    textAfter: "the essay by the end of the week.",
    correctOptionId: 'C',
    grammarPoint: 'Verb + Object + to do',
    generalExplanation: 'Tell someone to do something.',
    options: [
      { id: 'A', text: 'finishing', explanation: 'Tell is not followed by "doing".', rewrite: 'He suggested finishing the essay.' },
      { id: 'B', text: 'finish', explanation: 'Base form doesn\'t follow the object.', rewrite: 'Please finish the essay.' },
      { id: 'C', text: 'to finish', explanation: 'Correct. Tell sb. to do sth.', rewrite: 'I told him to finish his work.' },
      { id: 'D', text: 'finished', explanation: 'Past participle doesn\'t fit.', rewrite: 'The essay was finished on time.' }
    ]
  },
  {
    id: 33,
    scenario: 'Homework',
    textBefore: "________ I was tired,",
    textAfter: "I stayed up late to finish my science project.",
    correctOptionId: 'D',
    grammarPoint: 'Conjunctions (Concession)',
    generalExplanation: 'Contrast between being tired and staying up.',
    options: [
      { id: 'A', text: 'Because', explanation: 'Tiredness isn\'t the reason for staying up.', rewrite: 'Because I was tired, I went to bed.' },
      { id: 'B', text: 'Since', explanation: 'Since indicates reason.', rewrite: 'Since I finished, I can sleep.' },
      { id: 'C', text: 'If', explanation: 'If indicates condition.', rewrite: 'If I am tired, I will sleep.' },
      { id: 'D', text: 'Although', explanation: 'Correct. Although shows concession.', rewrite: 'Although it was late, I worked.' }
    ]
  },
  {
    id: 34,
    scenario: 'Homework',
    textBefore: "The book ________",
    textAfter: "I borrowed from the library is very helpful for my research.",
    correctOptionId: 'A',
    grammarPoint: 'Relative Clauses (Object)',
    generalExplanation: 'Relative pronoun for "The book".',
    options: [
      { id: 'A', text: 'that', explanation: 'Correct. That/Which refers to things.', rewrite: 'The car that he drives is fast.' },
      { id: 'B', text: 'who', explanation: 'Who refers to people.', rewrite: 'The man who helped me is kind.' },
      { id: 'C', text: 'whose', explanation: 'Whose shows possession.', rewrite: 'The book whose cover is blue is mine.' },
      { id: 'D', text: 'where', explanation: 'Where refers to places.', rewrite: 'The library where I got the book is far.' }
    ]
  },
  {
    id: 35,
    scenario: 'Homework',
    textBefore: "You should check your work carefully ________",
    textAfter: "you hand it in.",
    correctOptionId: 'B',
    grammarPoint: 'Time Conjunctions',
    generalExplanation: 'Check before the action of handing in.',
    options: [
      { id: 'A', text: 'after', explanation: 'Checking after handing in is too late.', rewrite: 'After you hand it in, you can relax.' },
      { id: 'B', text: 'before', explanation: 'Correct. Before indicates a prior action.', rewrite: 'Wash your hands before you eat.' },
      { id: 'C', text: 'until', explanation: 'Until refers to a duration up to a point.', rewrite: 'Check it until you are sure.' },
      { id: 'D', text: 'while', explanation: 'While shows simultaneous action.', rewrite: 'While you check, be quiet.' }
    ]
  },
  {
    id: 36,
    scenario: 'Homework',
    textBefore: "The student ________",
    textAfter: "is sitting next to me is very good at math.",
    correctOptionId: 'C',
    grammarPoint: 'Relative Clauses (Subject - People)',
    generalExplanation: 'Relative pronoun for "The student".',
    options: [
      { id: 'A', text: 'which', explanation: 'Which refers to things.', rewrite: 'The desk which is next to me is empty.' },
      { id: 'B', text: 'what', explanation: 'What cannot have an antecedent.', rewrite: 'I know what he said.' },
      { id: 'C', text: 'who', explanation: 'Correct. Who refers to people.', rewrite: 'The girl who is singing is my sister.' },
      { id: 'D', text: 'whom', explanation: 'Whom is for objects.', rewrite: 'The student whom I like is him.' }
    ]
  },
  {
    id: 37,
    scenario: 'Homework',
    textBefore: "It is necessary ________",
    textAfter: "a study plan to manage your time effectively.",
    correctOptionId: 'A',
    grammarPoint: 'It is + adj + to do',
    generalExplanation: 'Standard structure for necessity.',
    options: [
      { id: 'A', text: 'to make', explanation: 'Correct. It is + adj. + to do.', rewrite: 'It is easy to make a plan.' },
      { id: 'B', text: 'making', explanation: 'Gerund is less common here.', rewrite: 'Making a plan is necessary.' },
      { id: 'C', text: 'make', explanation: 'Base form cannot follow the adjective.', rewrite: 'You must make a plan.' },
      { id: 'D', text: 'made', explanation: 'Past participle doesn\'t fit.', rewrite: 'The plan was made by me.' }
    ]
  },
  {
    id: 38,
    scenario: 'Homework',
    textBefore: "The homework was ________",
    textAfter: "difficult that I had to ask for help.",
    correctOptionId: 'B',
    grammarPoint: 'So...that structure',
    generalExplanation: 'So + adjective + that.',
    options: [
      { id: 'A', text: 'such', explanation: 'Such requires a noun.', rewrite: 'It was such difficult homework.' },
      { id: 'B', text: 'so', explanation: 'Correct. So + adj. + that.', rewrite: 'He was so happy that he danced.' },
      { id: 'C', text: 'too', explanation: 'Too...that is not standard.', rewrite: 'It was too difficult to finish.' },
      { id: 'D', text: 'very', explanation: 'Very doesn\'t connect to "that".', rewrite: 'It was very difficult.' }
    ]
  },
  {
    id: 39,
    scenario: 'Homework',
    textBefore: "Instead of ________",
    textAfter: "TV, you should focus on your studies.",
    correctOptionId: 'D',
    grammarPoint: 'Gerunds after Prepositions',
    generalExplanation: 'Instead of + V-ing.',
    options: [
      { id: 'A', text: 'watch', explanation: 'Base form doesn\'t follow a preposition.', rewrite: 'Please watch the news.' },
      { id: 'B', text: 'to watch', explanation: 'Infinitive doesn\'t follow "instead of".', rewrite: 'I want to watch a movie.' },
      { id: 'C', text: 'watched', explanation: 'Past tense doesn\'t follow a preposition.', rewrite: 'I watched TV yesterday.' },
      { id: 'D', text: 'watching', explanation: 'Correct. Preposition + V-ing.', rewrite: 'Instead of playing, he studied.' }
    ]
  },
  {
    id: 40,
    scenario: 'Homework',
    textBefore: "The teacher, ________",
    textAfter: "is very patient, explained the concept again.",
    correctOptionId: 'C',
    grammarPoint: 'Non-restrictive Relative Clauses',
    generalExplanation: 'Relative pronoun for a person in a non-restrictive clause.',
    options: [
      { id: 'A', text: 'which', explanation: 'Which refers to things.', rewrite: 'The lesson, which was hard, was explained.' },
      { id: 'B', text: 'that', explanation: 'That cannot be used in non-restrictive clauses.', rewrite: 'The teacher that I like is her.' },
      { id: 'C', text: 'who', explanation: 'Correct. Who refers to people.', rewrite: 'My mom, who is kind, helped me.' },
      { id: 'D', text: 'whom', explanation: 'Whom is for objects.', rewrite: 'The teacher, whom we respect, is here.' }
    ]
  }
];
