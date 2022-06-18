gcloud container clusters create dwk-cluster-2 --zone=europe-north1-b --cluster-version=1.22

kubectl create namespace project-1

export SOPS_AGE_KEY_FILE=$(pwd)/../key.txt
sops --decrypt secrets/manifest/secret.enc.yaml | kubectl apply -f -

kubectl apply -k .

kubectl config view --minify --raw > config.gcloud.log

kubectl get ing -n space-1 --watch