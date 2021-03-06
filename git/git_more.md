## git高级命令
1. git log 美化

```bash
  git log # 打印log
  git log --oneline # 单行输出
  git log --graph # 可查看提交历史的分支结构
  git shortlog  # 单行仅显示commit内容
  --stat # 显示文件变更
```
2. git stash 暂存代码

```bash
  git stash #将所有未提交代码临时存储在堆栈中
  git stash pop #将stash存储的代码拉到当前分支，删掉储藏区的代码
  git stash apply stash@{x} #取出第X次存储的代码，不会删除储藏区，适用于多次拉取
  git stash drop stash@{x} #删除掉某一次的储藏代码
  git stash clear #删除掉所有储藏的代码
  git stash list #显示做了哪些存储
  git stash show stash@{x} -p #展示某一次stash存储修改的细节，不加stash@{x}默认展示第一次，-p展示代码修改，不写-p展示文件修改
```