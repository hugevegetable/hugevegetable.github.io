# Hexo

#### Todo

> 切换导航栏的js

> Menhera-chan emoji

> 加载条 

> 壁纸 原神、进击的巨人、

> 壁纸api

#### Trouble

> 搜索好像有问题

![屏幕截图 2023-11-04 122053](https://raw.githubusercontent.com/hugevegetable/first-img/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-11-04%20122053.png)

#### Log

##### 2023

###### 10.31

> ​	发生了一件很悲剧的事，大概是三天前，用git切换branch时，切换太心急，直接-f，强制切换，然后就没管，今天发现hexo文件夹少了很多东西，直接变成四天前的东西，非常绝望。
>
> ​	按着攻略，回退到大概是三天前的版本，东西都还在，但配置文件都变了。改了一点东西，提交，一直失败，明明文件夹变了，但
>
> `git add . ` `git commit ` `git push` 一直显示`already up to date` 搞了好久。 发现切换branch， 文件里的东西都变了。
>
> ​	最后，`git checkout -b newBranch` … `git push` 后切换回来`git merge newBranch` 在`delete`。

###### 11.1

> ​	今天上传正常

###### 11.5

> ​	今天倒大霉，浪费了时间，不知道怎么调试。照着店长一步步做友链，每一步都仔仔细细，最后还是错了。来回看，看不出问题，一模一样，好久。心想，还有一种可能，因为我总感觉`link.yml`可以被`{%flink%}`代替，就把这种可能否定了。
>
> ​	最后实在没办法，把flink标签注释了，在link.yml写上友链，然后就成功了，无语。
>
> ​	==萌傀儡==的博客是正好看，他那夜晚效果，加上天空，梦幻的感觉，漂亮。第一次的壁纸是真的惊艳，他的api一定要弄。还有，代码框夜晚是透明的，像星空一样。



###### 11.6

>​	晚上时，想给书签增加样式，直接在butterfly模板里改，文件太多，实在不方便，然后，预览时，一直报` Error: template names must be a string: NaN`错。就弄了2个小时，因为不知道哪里出问题。于是把所有都弄成原样，还是报错。最后才发现是最不可能的md文件多了一行`<!-- {% include css/custom.css %} -->`.大改时应该备份的。



###### 11.7

> ​	时隔两天终于成功了，看似这么长时间，其实把`site.data.saved-links`改成 `site.data['saved-links']`就成功了，成功原因还是知道一点pug调试方法，之前的调试方法一直是错的，所以一直原地打转，哎。
>
> 现在看看也简单，log一下文件，`NAN`,在log 下site.data，就会发现异常，多了2个`‘’` ，改一下就行，之前的思路就错的。



###### 11.8

> ​	发现我的butterfly版本低了只有4.1，最新4.9了





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





### npm

##### 插件更新流程（可能，没试过）

> 1、修改`package.json`,将版本号更改
>
> 2、开始更新
>
> `npm install –save`





### vscode

`Ctrl + ~  ` 	open the termianl





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







###### `branch`

- ` git branch` 当前分支    

  ` -a` 所有分支

​		`-vv` 跟踪关系

​		`-- delete <name>` 删除本地分支

​			

- `git remote -v`   查看当前是否配置有远程仓库

- `git chmod `
- `git switch main`     swich the branch

​		[-c]  	create a branch

- `git reset --hard HEAD^ #回退到上一个版本`

###### 合并







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

