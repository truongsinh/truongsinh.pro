function myFunction() {
  processInbox()
}
function processInbox() {
  var labelBulk = getLabel("Bulk")
  var threads = getAllThreadsInTheLastHours();
  for (var i = 0; i < threads.length; i++) {
    markThreadWithLabelIfItsRawContentHasAllText(threads[i], labelBulk, ["Precedence: bulk", " X-Gm-Original-To: support"])
  }
}
function getAllThreadsInTheLastHours() {
  return GmailApp.search("newer_than:1h");
}
function getLabel(name) {
  var labelObject = GmailApp.getUserLabelByName(name);
  if (labelObject == null) {
    labelObject = GmailApp.createLabel(name)
  }
  return labelObject
}
function markThreadWithLabelIfItsRawContentHasAllText(thread, labelBulk, allTextToSearch) {
  var firstMessage = thread.getMessages()[0];
  var body = firstMessage.getRawContent();
  for (var i = 0; i < allTextToSearch.length; i++) {
    if (messageNotContainsAnotherMessageCaseIntensive(body, allTextToSearch[i])) {
      return;
    }
  }
  thread.addLabel(thread);
}

function  messageNotContainsAnotherMessageCaseIntensive(message, anotherMessage) {
  return message.toLowerCase().indexOf(anotherMessage.toLowerCase()) < 0
}