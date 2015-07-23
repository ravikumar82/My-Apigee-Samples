var request = context.getVariable("request");
var json = JSON.parse(request.content);

for(i in json) {
  request.setQueryParam(i, json[i]);
}