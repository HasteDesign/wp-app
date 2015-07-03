document.addEventListener('deviceready', function () {
    console.log("Ready!")
    // Schedule notification for tomorrow to remember about the meeting
    cordova.plugins.notification.local.schedule({
        id: 10,
        title: "Meeting in 15 minutes!",
        text: "Jour fixe Produktionsbesprechung",
        data: { meetingId:"#123FG8" }
    }, function () {
        console.log("Scheduled!")
    });
});
