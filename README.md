### WebWowZer Project Guide.

```bash
npm install
```

- after installing all the dependencies, setup the `.env` file in the root directory of the project.

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

MONGODB_URI=

BASE_API_URL=http://localhost:3000
```

## Table of Contents

### Editor Setup (Optional)

You can use any editor but as I personally prefer `VS Code`. I will give some instructions about how I prefer VS code to be setup For This Project.

### Plugins

You need to install Below Plagins

-   ESLint by Dirk Baeumer
-   Prettier - Code formatter by Prettier

`.vscode/settings.json`

```json
{
    "typescript.tsdk": "node_modules\\typescript\\lib",
    "typescript.enablePromptUseWorkspaceTsdk": true,
    // Theme
    "workbench.colorTheme": "Dracula Soft",

    // config related to code formatting
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.validate.enable": false, //disable all built-in syntax checking
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.tslint": true,
        "source.organizeImports": true
    },
    "eslint.alwaysShowStatus": true,
    // emmet
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "prettier.tabWidth": 4,
    // space indentation
    "editor.tabSize": 4,

    // editor setup
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.cursorBlinking": "expand",
    "editor.fontFamily": "Fira Code, Operator Mono",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "comment",
                "settings": {
                    "fontStyle": "italic"
                }
            }
        ]
    },

    "editor.detectIndentation": true,
    "editor.cursorStyle": "line",
    "editor.cursorWidth": 2,
    "editor.fontSize": 15,
    "editor.lineHeight": 20
}
```

-   If You Prefer liniting (We Are Using AirBnb Linting Rules)
-   Create a `.eslintrc` file in the project root and enter the below contents:

```json
{
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "prettier",
        "plugin:jsx-a11y/recommended"
    ],
    // "parser": "babel-eslint",
    // We don't need to use babel-eslint anymore since we are using the latest version of eslint

    "parserOptions": {
        "ecmaVersion": 2020
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "rules": {
        "jsx-a11y/anchor-is-valid": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "react/react-in-jsx-scope": 0,
        "react-hooks/rules-of-hooks": "error",
        "no-console": 0,
        "react/state-in-constructor": 0,
        "indent": 0,
        "linebreak-style": 0,
        "react/prop-types": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],

        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100,
                "tabWidth": 4,
                "semi": true,
                "endOfLine": "auto"
            }
        ]
    },
    "plugins": ["prettier", "react", "react-hooks"]
}
```
