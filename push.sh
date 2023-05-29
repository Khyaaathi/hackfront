#!/bin/bash
set -eo pipefail
# Function for error messages
errorecho() { cat <<< "$@" 1>&2; }

# Check for parameters
#
if [ $# != "1" ]
then
    errorecho "ERROR: Wrong number of parameters!"
	errorecho "Usage: push.sh commitreason"
    exit 1
fi
echo "adding git credentials"
git config --global user.name "Rathyatra Developer"
git config --global user.email "rathdeveloper@osdc.gov.in"
git config credential.helper store
#git switch -c main
echo "adding git"
git add .
echo "added curent direcory to git"

echo "commiting............."
git commit -m "$1"
echo "commited succesfully ........"

echo "pushing to git........."
git push -u origin main
echo "git pushed succesfully and pipeline will be triggered"
