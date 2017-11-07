# Serverless Boilerplate

Boilerplate for Serverless applications using Spotinst and Node.js

## Contents
1. [Installation (development)](#installation-development)
2. [Deployment](#deployment)
    - [Test deployment](#test-deployment)
    - [Production deployment](#production-deployment)
3. [Environment variables](#environment-variables)
4. [Style rules](#style-rules)

------

## Installation (development)

1. Ensure Node.js 8.3+, Yarn, and Git are installed
2. `git clone https://github.com/escaladesports/serverless-boilerplate.git`
3. `yarn` (installs all dependencies)
4. [Follow these instructions](https://help.spotinst.com/hc/en-us/articles/115005396809-Set-Up-Local-Machine-for-Spotinst-Serverless) for setting up Spotinst credentials using the Serverless CLI

------

## Deployment

All deployment scripts will automatically run tests before deploying - deployment will cancel if any tests fail.

### Test deployment

To deploy to testing, run `yarn deploy`

### Production deployment

To deploy to production, run `yarn deploy-prod` and enter `Y` when prompted to continue.

------

## Environment variables

Environment variables should be added in the Spotinst console.

------

## Style rules

1. Use semantic versioning for all main functions/handlers - append function names with their major version number `myHandlerV1`, `myHandlerV2`, etc. whenever compatibility-breaking changes are made (keep old functions intact so they can still be used)