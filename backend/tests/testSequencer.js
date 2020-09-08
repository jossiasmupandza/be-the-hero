const TestSequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends TestSequencer {
    sort(tests) {
        const orderPath = [
            'generateUniqueId.spec.js', 
            'ong.spec.js', 
            'incidents.spec.js',
            'profile.spec.js' 
        ];
        return tests.sort((testA, testB) => {
            const indexA = orderPath.indexOf(testA.path);
            const indexB = orderPath.indexOf(testB.path);

            if (indexA === indexB) return 0; // do not swap when tests both not specify in order.

            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA < indexB ? -1 : 1;
        });
    } 
}

module.exports = CustomSequencer;