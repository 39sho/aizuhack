import getMenu from "./getMenu";

type State = 'echo' | 'goodStory' | 'reverse' | 'gakushoku';

const states: { [key in string]: State | undefined } = {};

export default async (userId: string | undefined, text: string): Promise<string> => {
    if (userId == null) {
        return 'userIdとれない';
    }

    switch (states[userId] ?? 'echo') {
        case 'gakushoku':
            switch (text) {
                case '月':
                    return (await getMenu())[0];
                case '火':
                    return (await getMenu())[1];
                case '水':
                    return (await getMenu())[2];
                case '木':
                    return (await getMenu())[3];
                case '金':
                    return (await getMenu())[4];
            }
            return '何曜日？';
        case 'echo':
            switch (text) {
                case 'いい話':
                    states[userId] = 'goodStory';
                    return 'state = goodStory';
                case '学食':
                    states[userId] = 'gakushoku';
                    return 'state = gakushoku';
            }
            return text;
        case 'goodStory':
            switch (text) {
                case 'echo':
                    states[userId] = 'echo';
                    return 'state = echo';
                case 'reverse':
                    states[userId] = 'reverse';
                    return 'state = reverse';
            }
            return 'いい話';
        case 'reverse':
            switch (text) {
                case 'echo':
                    states[userId] = 'echo';
                    return 'state = echo';
            }
            return [...text].reverse().join('');
    }
};