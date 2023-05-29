@echo off
echo "adding git credentials"

git config --global user.name "Rathyatra Developer"
git config --global user.email "rathdeveloper@osdc.gov.in

git config credential.helper store

echo adding code to  git
echo added curent direcory to git
git add .

echo commiting.............
git commit -m %1%
echo commited succesfully ........

echo pushing to git.........
git push -u origin main
echo git pushed succesfully and pipeline will be triggered
