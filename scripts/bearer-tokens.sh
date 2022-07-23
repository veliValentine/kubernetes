SECRET=$(kubectl get secrets -o name | grep dummy-site-controller-account-token)
echo $SECRET
echo
TOKEN=$(kubectl get $SECRET -o jsonpath='{.data.token}' | base64 --decode)
echo 'Bearer' $TOKEN