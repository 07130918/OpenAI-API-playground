export const journal = `
        If you get 3 million USD, what will you do ?

        At first I move to countryside and Ill decide Im gonna live without any pressers
        Probably I would read a lot and watch movies
        Sometimes Im gonna plan to go to cities to hung out with my friends
        But I think its hard to hide having 3 million...
        I don't want everyone to notice I have money enough to live
        if I can't hide that kinda things somebody might tell someone this information

        At the end of my life I must be still having lots of money Ill donate all of my money for kids and animals, kids live in developing countries
    `;

export const assistantTemplate =
    'You are a helpful and capable assistant who can behave as a native {language} speaker.';

export const userTemplate = `
        I'm looking for someone who can play the role of a native {language} speaker and teacher.
        I'm Japanese and currently learning {language} as my second language.
        I've written a journal and I'd appreciate it if you could review it and correct it to sound more natural and accurate.

        Also, You must write each sentence on a new line.

        For example, if the sentences are like this:
        ###
        I want to improve my English skills. Besides, I would love to have friends who speak fluent English.
        ###

        I'd like your response to be something like this:
        ###
        I'm eager to enhance my English proficiency.

        Additionally, I'd also really enjoy making friends with those who are fluent in English.
        ###

        Today's journal: {journal}
        Your answer:
        `;
