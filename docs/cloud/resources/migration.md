---
sidebar_class_name: hidden
---

# Migrate from `@subsquid/cli@0.x`

Since `@subsquid/cli@2.x` the CLI commands `squid:deploy` and `squid:update` are deprecated in favor of the [manifest](/cloud/reference/manifest)-based deployments and `sqd deploy`.

To migrate:

## 0. Update Squid SDK 

```bash
npm run update
#or
npx npm-check-updates --filter /subsquid/ --upgrade && npm i -f
```

Make sure `@subsquid/cli` is `^2.x`:
```bash
sqd --version
```

## 1. Create a deployment manifest

Create `squid.yaml` in the squid root folder, and set the squid name, version and the description (optional). Note that the squid version must be an integer, so start with `1`.

```yml file="squid.yaml
manifest_version: subsquid.io/v0.1
name: my-squid # set name
version: 1 # version, must be an integer
description: |-  # set description
  My squid  

build: 

deploy:
  addons:
    postgres: 
  processor:
    cmd: [ "sqd", "process:prod" ]
  api:
    cmd: [ "sqd", "process:serve" ]

```

## 2. (Optional) Add secrets and env variables

If the squid expects additional environment variables to be set by the Cloud via [secrets](/cloud/resources/env-variables/#secrets) or at the [deployment time](/cloud/resources/env-variables), add them in the `deploy` section:

```yml
#...
deploy:
  env:
    ETHEREUM_RPC_ENDPOINT: ${{ secrets.ETHEREUM_RPC_ENDPOINT }}
```

## 3. (Optional) Revise `cmd`

You may want to add additional flags to `api.cmd`, e.g. to enable [caching](/sdk/resources/graphql-server/caching) or [enforce query limits](/sdk/resources/graphql-server/dos-protection).

## 4. (Optional) Add `scale:` options

Subsquid Cloud Premium users may request additional storage for the Postgres database and multiple gateway replicas for the `api` by adding the `scale` section to the manifest:

```yml
scale:
  addons:
    postgres:
      storage: 100G
  api:
    replicas: 3
```

Apply for a Premium account by filling this [form](https://t.ly/Uh_S).

## 5. Create or update the deployment

If there is no version `v1` deployed to Cloud, simply deploy with
```bash
sqd deploy .
```

If there is already a deployed version `v1`, bump the version number to `2`.

**Important!** When the squid syncs:

- Assign the production URL to the new deployment using [`sqd prod`](/squid-cli/prod)
- Kill the old unused versions with
```
sqd rm <name>@<version>
```


