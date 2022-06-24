#!/bin/bash
podName=$(kubectl -n prometheus get pods -o=name | grep prometheus-kube-prometheus)
PORT=9090
echo 'Opening pod ' ${podName} ' connection to port '${PORT}
kubectl -n prometheus port-forward ${podName} ${PORT}:${PORT}