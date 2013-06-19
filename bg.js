chrome.webRequest.onHeadersReceived.addListener(function (details) {
    if (details.url.indexOf("downloadfiles") != -1) {
      for (var x in details.responseHeaders) {
        if (details.responseHeaders[x].name == "Content-Disposition") {
          details.responseHeaders[x].value = details.responseHeaders[x].value.replace("attachment; ", "inline; ");
        }
      }
    }

    return {responseHeaders: details.responseHeaders};
}, {
  urls: ["https://learn.uwaterloo.ca/d2l/le/content/*"],
  types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
}, ["blocking", "responseHeaders"]);