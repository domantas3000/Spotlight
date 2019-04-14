

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log(window.location.href);
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {urlContains: ':'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'loading' && tab.active) {
            
            chrome.tabs.query({'active': true}, function (tabs) {
                var url = tabs[0].url;
                

                var req = {};

                req.url = tabs[0].url;
                console.log(req);

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://spotlight.desevix.lt/public/api/reports", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                console.log(xhr);
                xhr.send(JSON.stringify({"url": url}));
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        console.log(json.blacklisted);
                        if(json.blacklisted){
                            showWarning();
                        }
                    }
                };


                /*
                fetch('http://spotlight.desevix.lt/')
                .then(function(response){
                    return response.json();
                })
                .then(function(json){
                    //console.log(json);
                    json = {'blacklisted': true};
                    var isBlacklisted = json.blacklisted;
                    console.log(json);

                    
                })
                */
            });
            
        }
    });

    function sendRequest(link){
        alert(link);
    }

    function showWarning(){
        
        chrome.tabs.query({'active': true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {file: 'warning.js'});
        });

    }

});