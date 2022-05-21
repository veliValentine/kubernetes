# kubernetes
[Submission application](https://studies.cs.helsinki.fi/stats/courses/kubernetes2022)

## About
University of helsinki kubernetes course - [course page](https://devopswithkubernetes.com/)

All applications not imported are build using nodejs version `v16.15.0`. 

## Excerises

### part1

#### 1.01
```
kubectl create deployment log-output --image=velivalentine/log-output:1.01-prod
```

#### 1.02
```
kubectl create deployment todo-app --image=velivalentine/todo-app:v0.1
```

#### 1.03
```
kubectl apply -f part1/log-output/manifests/deployment.yaml
```

#### 1.04
```
kubectl apply -f part1/todo-app/manifests/deployment.yaml
```