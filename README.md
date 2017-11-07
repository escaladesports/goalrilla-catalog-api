# Serverless Boilerplate

Boilerplate for Serverless applications using Spotinst and Node.js

## Contents
1. [Installation (development)](#installation-development)
    - [Using environment variables](#using-environment-variables)
2. [Deployment](#deployment)
    - [Test deployment](#test-deployment)
    - [Production deployment](#production-deployment)

------

## Installation (development)

1. Ensure Node.js 8.3+, Yarn, and Git are installed
2. `git clone https://github.com/escaladesports/serverless-boilerplate.git`
3. `yarn` (installs all dependencies)

### Using environment variables

If your project will be using environment variables (recommended for any sensitive information), create an `env.yml` file containing the required data as key-value pairs. Multi-line strings should be prefixed by `|` followed by a line break. Example `env.yml` file:

```
SPARKPOST_API_KEY: 'etaoinshrdlu'
GOOGLE_SHEETS_CLIENT_EMAIL: 'example@example-project.iam.gserviceaccount.com'
GOOGLE_SHEETS_API_KEY: |
                        -----BEGIN PRIVATE KEY-----
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        -----END PRIVATE KEY-----
```

After creating `env.yml`, in `serverless.yml` uncomment the following line:

```
secrets: ${file(env.yml):prod}
```

Add the environment variables you want to expose to the `environment` section of `serverless.yml`. An example `serverless.yml` file using environment variables:

```
service: serverless-boilerplate

custom:
  # enable for environment variables
  secrets: ${file(env.yml):prod} # un-commented
  webpackIncludeModules: true

provider:
  name: spotinst
  spotinst:
    environment: env-xxxxxxxx
  stage: dev
  # dev, test, or prod
  region: us-east-2
  environment:
    STAGE: ${opt:stage, self:provider.stage}
    GOOGLE_SHEETS_CLIENT_EMAIL: "${self:custom.secrets.GOOGLE_SHEETS_CLIENT_EMAIL}" # un-commented
```

------

## Deployment

### Test deployment

To deploy to testing, run `yarn deploy`

### Production deployment

To deploy to production, run `yarn deploy-prod` and enter `Y` when prompted to continue.