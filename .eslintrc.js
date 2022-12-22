module.exports = {
    // ... rest
    extends: ['react-app', 'react-app/jest'],
    rules: {
        'no-console': 'off',

        // meh...
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/sort-type-union-intersection-members': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/alt-text': 'off', // it's not smart enough...
        '@babel/new-cap': 'off',
        'react/jsx-filename-extension': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        // I can't figure these out:
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',

        // enable these again someday:
        '@typescript-eslint/no-unsafe-argument': 'off',

        // this one isn't smart enough for our "~/" imports
        'import/order': 'off',

        // for CatchBoundaries
        '@typescript-eslint/no-throw-literal': 'off',
        'testing-library/no-await-sync-events': 'off',

        // this auto-fixes and it's nice to have types and actual stuff separate
        '@typescript-eslint/consistent-type-imports': 'warn',
    },
}
