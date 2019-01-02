## personal-starter

> Note: This boilerplate is highly opinionated and designed for personal use only. It will not be maintained for community driven projects however feel free to fork for own use. Tooling includes xo, prettier, parcel, react 16.7-alpha, flow, jest, cypruss, now@1.x, circleCI, codecov

[![CircleCI](https://circleci.com/gh/artivilla/personal-starter.svg?style=svg)](https://circleci.com/gh/artivilla/personal-starter)
[![codecov](https://codecov.io/gh/artivilla/personal-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/artivilla/personal-starter)
![Greenkeeper Enabledflat](https://img.shields.io/badge/Greenkeeper-enabled-4c1.svg?colorA=555&style=flat)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

### CI/CD

CircleCI handles the base defaults in addition to the following rulesets for deployments:

- Deploy tags formatted x.x.x to production on master only
- Deploy tags formatted \*-canary to staging on master only
