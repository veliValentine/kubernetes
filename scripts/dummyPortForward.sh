DEP=$(kubectl get pod -o name | grep dummy-site-controller-dep-)
kubectl port-forward $DEP 3000:3000