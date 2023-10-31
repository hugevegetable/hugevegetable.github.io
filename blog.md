# Hexo



#### Trouble

> cousor  css、js have copy，==head inject== no use

> 2023.10.31
>
> ​	发生了一件很悲剧的事，大概是三天前，用git切换branch时，切换太心急，直接-f，强制切换，然后就没管，今天发现hexo文件夹少了很多东西，直接变成四天前的东西，非常绝望。
>
> ​	按着攻略，回退到大概是三天前的版本，东西都还在，但配置文件都变了。改了一点东西，提交，一直失败，明明文件夹变了，但
>
> `git add . ` `git commit ` `git push` 一直显示`already up to date` 搞了好久。 发现切换branch， 文件里的东西都变了。
>
> ​	最后，`git checkout -b newBranch` … `git push` 后切换回来`git merge newBranch`。

 











#### log

- 用vscode打开，本地测试 `hexo s`, 实时预览。

#### folder-function

- _config.yml

Site configuration file. configure most settings.

- source

Source folder where you put the content. Igonores folders whose names are prefixed with `_` except `_post`





#### commend

- `hexo n `    

Description：create a new post

Usage: `hexo new [layout] <title>`

Arguments:

​	layout:	post, page, draft, other

- `hexo p`

Description:  Moves a draft post from _drafts to _posts folder.

Usage: `hexo publish [layout] <filename>`



- `hexo d `

Description: Deploy your website.

Option: -g 			Generate before deployment







# git



- `ctrl`+`u`   清除到开始
- `ctrl`+`w`   取消

- `pwd` 查看当前路径

 

- `git remote add origin git@hugevegetable.github.com:hugevegetable/hugevegetable.github.io.git `
- `git init` 	生成`git`仓库		
- `git clone -b master http://gitslab.yiqing.com/declare/about.git`     clone指定分支



- `git add` 	将该文件的修改添加到暂存区。

​	可以告诉`git`哪些文件的修改包含在下一次`commit`



​	`git add .`  

 	添加当前目录下的所有文件到暂存区。

- `git status`



- `git commit -m "annotation"` 	提交



- `git push origin [branch_name]`	上传	

- ` git branch` 当前分支    

  `git branch -a` 所有分支





- `git chmod `
- `git switch main`     swich the branch

​		[-c]  	create a branch

- `git reset --hard HEAD^ #回退到上一个版本`



#### 将hexo与github关联

- 先生成密匙ssh

```
ssh-keygen -t rsa -C ["E-mail"]
```

- 查看ssh

 ```
  cat ~/.ssh/id_rsa.pub
 ```

- github新建ssh，填入ssh密匙
- 在git bash检查

```
$ ssh -T git@github.com
```

- 在hexo的`_config.yml`改最后一行

```
deploy:
	type: git
```



  







# cmd

- 删除

`rmdir`

- 查看

`dir`

- 

`cd` 查看当前路径