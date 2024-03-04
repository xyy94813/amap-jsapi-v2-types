# Contributing Guild

👏👏 Welcome to contribute this repo. 👏👏

## Quick Start

1. Make sure you asr using node > 20.10.0.
   We defined node version by `.nvmrc`, you can use `mvn use` to change node version
2. Install dependencies by `yarn install`
3. Install sdk and set setting conf for IDE.
   `yarn dlx @yarnpkg/sdks vscode`
4. Change code for new feature
5. Add unit test for new code.
6. Commit msg follow [Conventional Commits 1.0.0 spec](https://www.conventionalcommits.org/en/v1.0.0/).
7. PR and waiting Maintainer merge it

## Commit Msg Spec

Follow [Conventional Commits 1.0.0 spec](https://www.conventionalcommits.org/en/v1.0.0/)

## Others

### JavaScript With Syntax For Types.

We use TypeScript to write origin code.

### Package Manager

We use `yarn v4` and `yarn Plug'n'Play` in this project

You can see the document [about yarn Plug'n'Play](https://yarnpkg.com/features/pnp)

### Linter And Formatter

- ESLint + Typescript to check and format JS/TS file (include conf file)
- Prettier to format `.md`、`.yaml` etc
- Commitlint for validate commit msg


