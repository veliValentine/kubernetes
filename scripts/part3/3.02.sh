gcloud container clusters create dwk-cluster --zone=europe-north1-b --cluster-version=1.22

kubectl create namespace space-1

export SOPS_AGE_KEY_FILE=$(pwd)/../key.txt
sops --decrypt secrets/manifest/secret.enc.yaml | kubectl apply -f -

kubectl apply \
-f postgres/manifest/ \
-f log-output/manifests/ \
-f ping-pong-app/manifests/

kubectl config view --minify --raw > config.gcloud.log

kubectl get ing -n space-1 --watch