$(document).ready(function () {

    //aside的tab切换
    function tabs(tabMenu, on, tabContent) {
        $(tabContent).each(function () { //第一个tabContent让她们显示
            $(this).children().eq(0).show();
        });
        $(tabMenu).each(function () { //找到第一个子元素a增加一个类on
            $(this).children().eq(0).addClass(on);
        });
        $(tabMenu).children().hover(function () {
            $(this).addClass(on).siblings().removeClass(on); //当鼠标移到任何一个a时候 让当前的a增加一个类on 同辈元素删除类on
            var index = $(tabMenu).children().index(this); //  然后找出当前的a的索引值
            $(tabContent).children().eq(index).show().siblings().hide(); //找出索引值和li的索引值相同的tabcontent 显示内容 同辈元素隐藏掉
        });
    }

    tabs(".menu", "on", ".userList");

    //获取所有chatlist的人员名单、时间和最近消息
    $.getJSON("json/conversation.json", getData)

    function getData(data) {
        $.each(data.conversations, function (i, item) {
            $("#chatList").append('<div id=' + item.userId + '><span class="currentName">' + item.userName +
                '</span><span class="updateTime">' + moment(item.updateTime).fromNow()
                + '</span></br><span class="lastMsg">' + item.lastMsg + '</span></div>'
            )
            /*$(".lastMsg").each(filter)*/
        })
    }

    //限制最新消息的字数
    /*function filter() {
    var maxwidth = 25;
    if($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + '…');
    }
};*/
    //获取当前聊天者的id
    /*var id
    var CurrentId={
        getId:function() {
            $("#chatList").children().bind('click',function () {
                id = $(this).attr("id");
                console.log(id);
                return (id);
            })
        }
    }
    CurrentId.getId();*/



    //显示当前聊天者的名字 并且设置当前的点击样式
    function currentName() {
        $("#chatList div").bind('click', function () {
            var name = $(this).children().eq(0).text();
            $(".currentPerson").empty();
            $(".currentPerson").append('<span class="currentName">' + name + '</span>')
            //设置当前的点击样式
            $("#chatList div").css("background-color", "#4E4C4C")
            $(this).css("background-color", "grey")
        })

    }

    //调取当前聊天者的聊天历史记录
    $.getJSON("json/conversation.json", function (data) {
        var currentId
        //显示当前聊天者的名字 并且设置当前的点击样式
        currentName();
        //调取当前聊天者的聊天历史记录
        $("#chatList div").bind('click', getDialogue)

        function getDialogue() {
            currentId = $(this).attr("id");
            for (var j = 0; j < data.conversations.length; j++) {
                if (data.conversations[j].userId == currentId) { //和当前聊天者的id匹配
                    $(".dialogue").empty();
                    $.each(data.conversations[j].messages, function (i, item) {
                        if (data.conversations[j].messages[i].fromUserId == '1') { //为发送者和接收者的消息添加样式
                            $(".dialogue").append('<span class="rightBubble">' + item.messageContent + '<span class="rightTriangle"></span></span></br>')
                        } else {
                            $(".dialogue").append('<span class="leftBubble">' + item.messageContent + '<span class="leftTriangle"></span></span></br>')
                        }
                    })
                }
            }
        }

        //一旦发送，更新json与对话框
        $("#send").bind('click', refreshJson)

        function refreshJson() {
            var newContent = $(".typeArea2").text();
            var newTime = new Date();
            var Y = newTime.getFullYear() + '-';
            var M = (newTime.getMonth() + 1 < 10 ? '0' + (newTime.getMonth() + 1) : newTime.getMonth() + 1) + '-';
            var D = newTime.getDate() + ' '
            var h = newTime.getHours() + ':';
            var m = newTime.getMinutes();
            for (var j = 0; j < data.conversations.length; j++) {
                if (data.conversations[j].userId == currentId) {
                    $(".dialogue").append('<span class="rightBubble">' + newContent + '<span class="rightTriangle"></span></span></br>')
                    //跟新最新消息与时间
                    data.conversations[j].lastMsg = newContent;
                    var reg = /..:../
                    data.conversations[j].updateTime = Y + M + D + h + m;
                    $('#' + currentId).children().last().text(newContent)
                    /*$('#' + currentId).children().last().each(filter)*/
                    console.log(data.conversations[j].updateTime)
                    $('#' + currentId).find(".updateTime").text(data.conversations[j].updateTime.match(reg))

                    //向json插入message
                    var newMessage = {
                        "fromUserId": "1",
                        "fromUserName": "Alice",
                        "toUserId": data.conversations[j].userId,
                        "toUserName": data.conversations[j].userName,
                        "messageContent": newContent,
                        "updateTime": (Y + M + D + h + m)
                    }
                    data.conversations[j].messages.push(JSON.parse(JSON.stringify(newMessage)))
                    console.log(data.conversations[j])
                    $(".typeArea2").empty();

                }
                ;
            }
        }
        //按住ctrl+enter也能发送消息
        $(".typeArea2").keydown(function (event) {
                if (event.ctrlKey && event.keyCode == 13) {
                    refreshJson();
                }
            }
        )
    })


})