git init 
git add .
git commit -m "message"
git config --global user.name "username"
git config --global user.email "usermail"
git remote add origin "url"
git branch -M main
git push -u origin main

docker ps -a
docker build -t devops_lab .
docker run -p 5000:5000 --name devops_lab devops_lab

kubectl apply -f deployment.yaml
kubectl get-deployment
kubectl apply -f services.yaml
kubectl get-services
kubectl port-forward service/servicename 5000:5000 

