```bash
  git rebase master #将当前HEAD所在分支合并到master分支后面
  git rebase <master> <nothing>   #将nothing合并到master后

  cat.git/HEAD #查看当前HEAD指向

  git symbolic-ref HEAD #HEAD指向是一个引用时，使用此命令查看



  git checkout -b <分支> #新建分支并切换到分支上

  git checkout <hash> #将HEAD切换到某一次提交

  git checkout HEAD^ #将HEAD切换到前一次提交

  git checkout master^ #将HEAD切换到master分支倒数第二个提交

  git checkout -b foo o/main #让某一分支跟踪git仓库




  git branch -u o/main foo  #让某一分支跟踪git仓库

  git branch -f <某分支> HEAD~<num> #将某分支移动到HEAD当前所在提交的前num个提交

  git branch -f <某分支> <commit> #将某分支移动到commit的提交



  git cherry-pick <commit1> <commit2> #在当前分支上合并几个commit


  git rebase -i HEAD~<num> #在当前分支上将后num个提交掉换顺序



  git commit --amend #修改上一次commit的内容





  git reset HEAD^ #撤销一次提交

  git reset HEAD #恢复一次撤回




  git tag "tag info" <commit> #在tag打在某一commit中，无commit时，默认为HEAD所在的提交

  git describe <branch>  #显示某一分支上离当前HEAD最近的tag所在的提交与Hash



  git fetch  #从远程仓库拉取但并不改变本地文件

  git fetch origin main:bar #将远程main分支拉取到本地bar分支下，如果bar分支不存在则会新建一个

  git fetch origin main~n:bar #将远程main分支的第n个钱提交拉取到本地bar分支下，如果bar分支不存在则会新建一个

  git fetch origin :main  #fetch为空时指新建本地的main分支



  git pull --rebase #顺序清晰的提交，无合并记录

  git push origin main #推送指定分支到远程仓库

  git push origin foo:main #将foo分支推送到远程的main分支，此时远程o/mian与远程foo分支位置相同

  git push origin foo^main #将foo分支上的第一个提交推送到远程的main分支

  git push origin main:<newName> #在远程新建newName分支并将main分支上的提交推送到远程newName分支

  git push origin :main  #push为空时指删除远程的main分支
```

[git学习链接](https://learngitbranching.js.org)