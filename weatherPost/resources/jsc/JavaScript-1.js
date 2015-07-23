var c = context.getVariable('request.content');
    
obj = JSON.parse(c);

var response = obj.id;

context.setVariable("rule", response); 
   