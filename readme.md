# Supermind Linting Standards

Configurable ESLint wrapper around [`eslint-config-supermind`](https://github.com/supermind/eslint-config-supermind).

Install `superlint` as a `devDependency`:

```sh
yarn add superlint --dev
```

Add `superlint` to your package `scripts`:

```json
{
  "scripts": {
    "lint": "superlint"
  }
}
```

Optionally pass a glob to `superlint` to only lint those files:

```json
{
  "scripts": {
    "lint": "superlint source/**/*.js"
  }
}
```

For extra points run `superlint` before your tests:

```json
{
  "scripts": {
    "test": "superlint && node tests.js"
  }
}
```

## Configuration

Add a `superlint` field to `package.json`:

```json
{
  "superlint": {
    "ignore": "build",
    "use": [
      "flowtype",
      "inferno"
    ],
    "plugins": [
      "mocha"
    ],
    "rules": {
      "semi": [ "error", "always" ]
    }
  }
}
```

You can `ignore` files and folders using a glob or an array of globs.

To add more linting goodness for Inferno, React or Flowtype, pass an array of strings to the `use` field. Options are:

* `flowtype`
* `jsx-a11y`
* `inferno`
* `react`

These options map to the rulesets from `eslint-config-supermind`.

Fields that can be set on the `superlint` object are as follows:

* `use` — Array of rulesets from `eslint-config-supermind`
* `ignore` — Glob or array of globs eg. `"build"`
* `globals` — Array of globals eg. `[ "$", "_" ]`
* `plugins` — Array of ESLint plugins eg. `[ "mocha" ]`
* `parser` — Custom parser eg. `babel-eslint`
* `rules` — Rules object eg. `{ "semi": [ "error", "always" ] }`
* `envs` — Array of environments eg. `[ "browser", "mocha" ]`
* `fix` — Boolean to automatically fix errors
