# Database as a servise (DBaaS) vs Do it yourself (DIY)
A quick and shallow comparison of pros and cons of of using database as a service versus setting up own database in kubernetes cluester.

Google cloud platform was the choice for the DBaaS service as this Kubernetes cource uses Google cloud platform. Note that there is many providers for DB as a service such as Aws, azure, mongoDb, MariaDb etc...

All price comparison uses higest price available. Some feastures comes with discount for committed users.

## Database as a servise (DBaaS)
Using Google cloud solution such as [Cloud SQL for postgres](https://cloud.google.com/sql/postgresql)

The amount of work when using DBaaS is mostly limited to initial setup. Service updates are controlled and documented by Google cloud.

| Pros                                        | Cons                                        |
| ------------------------------------------- | ------------------------------------------- |
| little maintaining                          |                                             |
| Security side is taken care by the provider |                                             |
| Build in Automated backups                  |                                             |
|                                             | Less control over implementation            |
|                                             | Pay for CPU, memory, storage and networking |

### Price
|           | Price (USD)      |
| --------- | ---------------- |
| vCPUs     | $0.0413 per vCPU |
| Memory    | $0.007 per GB    |
| HA vCPUs  | $0.0826 per vCPU |
| HA Memory | $0.014 per GB    |

## Do it yourself (DIY)
Do it your self solution with kubernetes on Google cloud platform.

The amount of work using do it yourself database solution with Google kubernetes engine is hard to estimate. It can be divided into two groups. First one being the initial developing and setup. After that it has to be maintained and updated accoringly. This adds extra work. 

| Pros                                                      | Cons                          |
| --------------------------------------------------------- | ----------------------------- |
| Total control over implementation                         |                               |
| Pay for storage, kubernetes cluester (cheaper that DBaaS) |                               |
|                                                           | No automated backups          |
|                                                           | Hours used in develpoment     |
|                                                           | Increased cost in maintaining |

### Price
|                                               | Price (USD) |
| --------------------------------------------- | ----------- |
| GKE Autopilot vCPU Price (vCPU-hr)            | $0.0445     |
| GKE Autopilot Pod Memory Price (GB-hr)        | $0.0049225  |
| GKE Autopilot Ephemeral Storage Price (GB-hr) | $0.0000548  |
| Backup storage (GB-month)                     | $0.028      |
