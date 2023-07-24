module.exports = {
    '*.+(ts|js|json)': ['eslint --ext .ts,.js --fix', 'prettier --write'],
    '*.+(ts)': [() => 'tsc -p tsconfig.json --noEmit', () => 'tsc -p tsconfig.spec.json --noEmit'],
};
