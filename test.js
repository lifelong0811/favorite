Agent.check = function() {
    if (this.options('make_event')) {
        this.createEvent({ 'message': 'I made an event!' });
        var callCount = this.memory('callCount') || 0;
        this.memory('callCount', callCount + 1);
    }
};
Agent.receive = function() {
    var events = this.incomingEvents();
    for (var i = 0; i < events.length; i++) {
        this.createEvent({ 'message': 'I got an event!', 'event_was': events[i].payload });
        var event = events[i].payload;
        var newEvent;
        newEvent.conent = "### " + event.title + "\n\n";
        newEvent.conent += "> " + "当前点数: " + event.current + "\n\n";
        newEvent.conent += "> " + "当前波动: " + event.percent + "\n\n";
        newEvent.conent += "> " + "当前状态: " + event.status + "\n\n";
        newEvent.url = "https://xueqiu.com/S/" + event.id;
        this.createEvent({ 'message': 'I got an event!', 'event_was': newEvent });
    }
}


sankuai 242808 11.9 47.1 10170076 3954956 ? Sl Apr09 692 : 23 / usr / local / java / bin / java - Djava.util.logging.config.file = /usr/local / tomcat / conf / logging.properties - Djava.util.logging.manager = org.apache.juli.ClassLoaderLogManager - Djdk.tls.ephemeralDHKeySize = 2048 - Djava.protocol.handler.pkgs = org.apache.catalina.webresources - server - Djava.awt.headless = true - Xms5324m - Xmx5324m - Xss512k - XX: PermSize = 350 m - XX: MaxPermSize = 350 m - XX: MetaspaceSize = 256 m - XX: MaxMetaspaceSize = 256 m - XX: NewSize = 2048 m - XX: MaxNewSize = 2048 m - XX: SurvivorRatio = 8 - XX: MaxTenuringThreshold = 9 - XX: +UseConcMarkSweepGC - XX: +UseCMSInitiatingOccupancyOnly - XX: +CMSScavengeBeforeRemark - XX: +ScavengeBeforeFullGC - XX: +UseCMSCompactAtFullCollection - XX: +CMSParallelRemarkEnabled - XX: CMSFullGCsBeforeCompaction = 9 - XX: CMSInitiatingOccupancyFraction = 80 - XX: +CMSClassUnloadingEnabled - XX: SoftRefLRUPolicyMSPerMB = 0 - XX: -ReduceInitialCardMarks - XX: +CMSPermGenSweepingEnabled - XX: CMSInitiatingPermOccupancyFraction = 80 - XX: +ExplicitGCInvokesConcurrent - Djava.nio.channels.spi.SelectorProvider = sun.nio.ch.EPollSelectorProvider - Djava.util.logging.manager = org.apache.juli.ClassLoaderLogManager - XX: +PrintGCDetails - XX: +PrintGCDateStamps - XX: +PrintGCApplicationConcurrentTime - XX: +PrintGCApplicationStoppedTime - XX: +PrintHeapAtGC - Xloggc: /data/applogs / heap_trace.txt - XX: +IgnoreUnrecognizedVMOptions - XX: -HeapDumpOnOutOfMemoryError - XX: HeapDumpPath = /data/applogs / HeapDumpOnOutOfMemoryError - Duser.timezone = Asia / Shanghai - Dclient.encoding.override = UTF - 8 - Dfile.encoding = UTF - 8 - Duser.region = CN - Djava.endorsed.dirs = /usr/local / tomcat / endorsed - classpath / usr / local / tomcat / bin / bootstrap.jar: /usr/local / tomcat / bin / tomcat - juli.jar - Dcatalina.base = /usr/local / tomcat - Dcatalina.home = /usr/local / tomcat - Djava.io.tmpdir = /usr/local / tomcat / temp org.apache.catalina.startup.Bootstrap start



{
    "post_url": "https://sc.ftqq.com/SCU92682Ta981f9ddf3ea3c46b9aa5f9e4a8e72dc5e89e2b568764.send",
    "expected_receive_period_in_days": "1",
    "content_type": "form",
    "method": "post",
    "payload": {
        "text": "雪球财经大盘",
        "desp": "{{content}}"
    },
    "headers": {},
    "emit_events": "false",
    "no_merge": "false",
    "output_mode": "clean"
}

{
    "post_url": "https://sc.ftqq.com/SCU92682Ta981f9ddf3ea3c46b9aa5f9e4a8e72dc5e89e2b568764.send",
    "expected_receive_period_in_days": "1",
    "content_type": "application/x-www-form-urlencoded",
    "method": "post",
    "headers": {},
    "emit_events": "false",
    "no_merge": "false",
    "output_mode": "clean"
}




{
    "post_url": "https://sc.ftqq.com/SCU92682Ta981f9ddf3ea3c46b9aa5f9e4a8e72dc5e89e2b568764.send?text=雪球财经大盘&desp={{content}}",
    "expected_receive_period_in_days": "1",
    "content_type": "application/x-www-form-urlencoded",
    "method": "post",
    "headers": {},
    "emit_events": "false",
    "no_merge": "false",
    "output_mode": "clean"
}