# t-cup_boilerplate

A node module boilerplate that is based on pnpm, changesets, and unbuild.

## Test
```bash
✗ pnpm test

> t-cup_boilerplate@1.0.0 test ~/t-cup_boilerplate
> jest --passWithNoTests

 PASS  tests/index.spec.ts
  test
    ✓ fn (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.878 s
Ran all test suites.
```

## dev
```bash
pnpm dev

pnpm i /<dir>/t-cup_boilerplate --install-links
```


## build
```bash
pnpm build
```

## publish
```bash
pnpm publish -r
```

## version
### add version
```bash
pnpm changeset add
pnpm changeset version
```
### prerelease
```bash
pnpm changeset pre enter alpha

pnpm changeset add
pnpm changeset version

# Only when you want to release normal version
pnpm changeset pre exit
```

## Development
+ Clone this repository
+ Enable [Corepack](https://github.com/nodejs/corepack) using corepack enable (use `npm i -g corepack` for Node.js < 16.10)
+ Install dependencies using `pnpm install`
+ Run interactive tests using `pnpm dev`
