# Working flow with git

git clone ... <master>

git checkout -b createPost
git add .
git commit -m "done create post" <createPost>

git checkout master
git pull origin master

git checkout createPost
git rebase master
< If conflict >> fix conflict >> git add . >> git rebase --continue, if can not fix conflict >> git rebase --abort >

git push origin createPost

Go to github web >> Create pull request >> Merge pull request