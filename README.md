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

#### 1.05
```
kubectl port-forward todo-app-dep-7dbd7bc6b-b85tw 3000:3000
```
Open [http://localhost:3000/health](http://localhost:3000/health)

#### 1.06
```
kubectl apply -f part1/todo-app/manifests/service.yaml
```

#### 1.07
```
kubectl apply -f part1/log-output/manifests/
```
```
kubectl get svc,ing
```

#### 1.08
```
kubectl delete ingress.networking.k8s.io/log-output-ingress
```
```
kubectl apply -f part1/todo-app/manifests/
```
```
kubectl get svc,ing
```

#### 1.09
```
kubectl delete ingress.networking.k8s.io/todo-app-ingress
```
```
kubectl apply \
-f part1/log-output/manifests/ \
-f part1/ping-pong-app/manifests/
```

#### 1.10
```
kubectl apply -f part1/log-output/manifests/
```

#### 1.11
```
kubectl apply \
-f part1/persistentStorage/manifest/ \
-f part1/log-output/manifests/ \
-f part1/ping-pong-app/manifests/
```

#### 1.12
```
kubectl delete -f part1/log-output/manifests/
```
```
kubectl apply -f part1/todo-app/manifests/
```

## Notes

### Lens config
`kubectl config view --minify --raw > config.log`