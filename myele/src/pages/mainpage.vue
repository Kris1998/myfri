<template>
    <div>
        <div class="header"></div>
        <div class="body">
            带着这几个问题去学习
js有哪些基本类型，每种基本类型是干啥的
对象是什么，函数是什么，数组是什么
数组，函数，对象的常用方法有哪些
DOM是什么，我能用它做什么
jquery是什么？
实现前端生涯中第一个有趣的项目，做一个2048小游戏
说到这你就有那么一定概率蒙逼了，我感觉啥都不会，就做游戏了？？扯淡呢吧？其实并不是呀23333，当然不是让你直接写，这个是有非常详细的视频教程的
写完你就会发现，好像也挺简单的呀，原来我学的这么点东西可以做小游戏了呢，到时候就很很有成就感~~（问我为啥？emmmm，我当时也是这样学前端的呀
游戏视频教程：2048教程地址（慕课上非常有年代感的一个教程了，但是我觉得对入门来说还蛮好，而且这个课程免费又详细！！如果当时不是这个教程我就被劝退了）
你可能会遇到一些问题
现在jquery用这么少，为什么我要搞这出，学了也用不上啊？ 这个教程是为了让熟悉js的，jquery只是顺带，而且让到这个阶段的你用框架实现 你也没辙对吧，所以还是jquery实现靠谱点
代码课程里都有了，我看懂课程复制粘贴不就得了 ？千万不要这样做！！！千万不要！！你要知道自己写和看代码是完全不同的两件事，你可以看完每节课程，然后把课程关掉，按照自己的理解写出这节课相关的代码，但是一个字母都不要复制粘贴！！
好多语法不懂怎么办？？ 不懂就查，查了就记，这才叫项目驱动，学以致用嘛
现在你做完2048了，开瓶香槟庆祝一下吧，然后……做个复盘吧2333333
画出2048的游戏流程图
想想自己重新写的话，每一步逻辑是不是还很清晰，脑子里模拟下重写~~
学到这里，你可能觉得自己老厉害了，已经可以写小游戏了，那么我就告诉你一个好消息和一个坏消息吧
好消息：你已经开始入门前端了，已经可以看懂前端的初级知识了，已经可以通过代码解决问题了
坏消息：同时还有一个坏消息，你现在大概是6年前的小白前端的水准（打个比方，别深究~~
好的，现在你可能有下述三个状态其中之一
妈的好难啊！！脑细胞都快死完了，再写一遍不知道写不写的出来，好多语法不懂balabala…… 
还好啊，就是有些语法不太懂，想巩固一下
兴奋ing，继续干吧
状态1的话：整理笔记，好好消化。然后再开始学习。状态2的话：买一般高级程序设计翻一翻看一看吧，觉得无聊了开始下一步。状态3的话：go on
        <router-link to='order'>ha</router-link>
        <button @click="jump">jump</button>
        </div>
        <nav-footer fatherComponent="mainpage"></nav-footer>
    </div>
</template>

<script>
import navFooter from '../components/navfooter'
export default {
    name: 'mainpage',
    components: {
        navFooter
    },
    methods: {
        jump(){
            this.$router.push('order');
        }
    }
}
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
}
.header {
    width: 420px;
    height: 50px;
    background-color: deepskyblue;
    position: fixed;
    left: 8px;
    top: 0;
}
.body {
    width: 420px;
    margin-top: 50px;
    margin-bottom: 60px;
}
</style>