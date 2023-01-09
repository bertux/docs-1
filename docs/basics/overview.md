---
sidebar_position: 10
description: Overview of the Archives, Squid SDK, and the Aquarium hosted service
---

# Subsquid Overview

The Subsquid indexing stack separates on-chain data ingestion (Archives) from data transformation and presentation (squids). 
**Archives** can be thought of as specialized data lakes optimized for storing and filtering large volumes of raw on-chain-data. Until fully decentralized, Subsquid Labs maintains public Archive endpoints and offers free of charge batch access to the historical on-chain data via the Squid SDK. A full list of Archive endpoints for the supported EVM and Substrate network is available in this [repo](https://github.com/subsquid/archive-registry) and is published as a package [`@subsquid/archive-registry`](https://www.npmjs.com/package/@subsquid/archive-registry) for easy access.

Squid SDK indexing projects (or simply **squids**) are [Extract-Tranfsorm-Load-Query (ETLQ)](https://en.wikipedia.org/wiki/Extract,_transform,_load) projects built using the open-source [Squid SDK](https://github.com/subsquid/squid-sdk). Squids ingest historical on-chain data from Archives, transforming it according to user-defined data mappers. Squid SDK offers a built-in server to present the transformed data with GraphQL API as well as customizable adapters to store the data in different databases (e.g. Postgres) and data lakes (e.g. s3). 

Squids can be run locally, on-premises or deployed to the [Aquarium hosted service](/deploy-squid). 

![Subsquid ecosystem](</img/subsquid-ecosystem.png>)

## Squid SDK

Squids have a certain structure and are supposed to be developed as regular node.js packages. Use [`sqd init`](/squid-cli/init) command to scaffold a new squid project from a suitable template.

Normally a squid project consists of a long-running `processor` service fetching and transforming the data from an archive and a `api` service exposing the transformed data with an GraphQL API generated from `schema.graphql`. 

The `processor` service is defined in `src/processor.ts` by default. The target data sink for the `processor` may include a Postgres compatible database, S3 buckets, BigQuery or a custom store. The `api` service is an independent node.js process and is optional. 

![Squid](</img/squid-diagram.png>)

The [Squid SDK](https://github.com/subsquid/squid-sdk) offers an extensive set of tools for developing squids:

- Core classes for the `processor` service: [`EvmBatchProcessor`](/develop-a-squid/evm-processor) for EVM chains and [`SubstrateBatchProcessor`](/develop-a-squid/substrate-processor) for Substrate-based chains.
- [`graphql-server`](https://github.com/subsquid/squid/tree/master/graphql-server) is the backend for the GraphQL API served by the `api` service. The GraphQL schema is auto-generated from `schema.graphql`. The resulting API loosely follows the [OpenCRUD](https://www.opencrud.org/) standard and supports the most common query filters and selectors out-of-the box. See [the GraphQL API section](/develop-a-squid/graphql-api) for more details and the configuration options.


![Subsquid ecosystem](</img/network-choice.png>)

## Aquarium Hosted Service

Squids can be deployed to the Subsquid cloud service, called the [Aquarium](https://app.subsquid.io), free of charge. The deployment of the squid services to the Aquarium (see below) is managed by the [`squid.yaml` manifest](/deploy-squid/deploy-manifest). Go to the [Deploy Squid](/deploy-squid) section for more information.

## What's next?

- Follow the [Quickstart](/quickstart) to build the first squid
- Explore [Examples](/develop-a-squid/examples)
- Deep dive into [EVM Batch Processor](/develop-a-squid/evm-processor) and [Substrate Batch Processor](/develop-a-squid/substrate-processor)
- Explore [GraphQL API Server options](/develop-a-squid/graphql-api) including custom extensions, caching and DoS protection in production