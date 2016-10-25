export interface SecurityQuestionDescription {
    en: string;
    de: string;
}

export interface SecurityQuestion {
    id: number;
    description: SecurityQuestionDescription;
}

export class SecurityQuestions {
    static LIST: SecurityQuestion[] = [
        {
            id: 1,
            description: {
                en: "Question 1",
                de: "Frage 1"
            }
        },
        {
            id: 2,
            description: {
                en: "Question 2",
                de: "Frage 2"
            }
        },
        {
            id: 3,
            description: {
                en: "Question 3",
                de: "Frage 3"
            }
        },
        {
            id: 4,
            description: {
                en: "Question 4",
                de: "Frage 4"
            }
        },
        {
            id: 5,
            description: {
                en: "Question 5",
                de: "Frage 5"
            }
        }
    ];

    static findById(id: number): SecurityQuestion {
        var list = SecurityQuestions.LIST;
        var response: SecurityQuestion = null;
        list.forEach(function (item: SecurityQuestion) {
            if (item.id == id) {
                response = item;
            }
        });
        return response;
    }
}