//79 chars. don't try this in production.
play=function(s){return eval('x={'+s.replace(/(\w*)=(\w*)&?/g,"$1:'$2',")+'}')}
