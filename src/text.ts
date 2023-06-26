type State = 'echo' | 'goodStory' | 'reverse';
let state: State = 'echo';

export default (text: string): string => {
    switch (state) {
        case 'echo':
            switch (text) {
                case 'いい話':
                    state = 'goodStory';
                    return 'state = goodStory';
            }
            return text;
        case 'goodStory':
            switch (text) {
                case 'echo':
                    state = 'echo';
                    return 'state = echo';
                case 'reverse':
                    state = 'reverse';
                    return 'state = reverse';
            }
            return 'いい話';
        case 'reverse':
            switch (text) {
                case 'echo':
                    state = 'echo';
                    return 'state = echo';
            }
            return [...text].reverse().join('');
    }
};