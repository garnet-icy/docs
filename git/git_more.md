## git高级命令
1. git log 美化

```bash
  git log # 打印log
  git log --oneline # 单行输出
  git log --graph # 可查看提交历史的分支结构
  git shortlog  # 单行仅显示commit内容
  --stat # 显示文件变更
  git log --oneline --graph --decorate --all # 友好展示分支切换与合并
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
3. 提交commit但是并未push时的恢复
```bash
  git reset --soft HEAD^  #将commit后恢复为add后的状态
```
4. 查看当前分支从哪个分支拉下来的
```bash
  git reflog show <developer>  #查看父级分支
```