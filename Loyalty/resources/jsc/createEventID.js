var stringdate = new Date().toLocaleDateString("en-US", {"year": "numeric", "month": "numeric","day": "numeric"});
var string = context.getVariable('request.queryparam.external_customer_id') + "_" + stringdate;
context.setVariable("request.queryparam.event_id", string); 
